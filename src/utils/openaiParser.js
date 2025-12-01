// Import Tesseract.js for OCR fallback
import { createWorker } from 'tesseract.js';

// Import mammoth for DOCX parsing
import mammoth from 'mammoth';

// Import pdfjs-dist for PDF parsing
import * as pdfjsLib from 'pdfjs-dist';

// OpenAI API Key from environment
const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

// Initialize PDF.js worker - use reliable CDN
if (typeof window !== 'undefined') {
  // For pdfjs-dist 5.4.449, use .js extension (not .mjs)
  // Try unpkg CDN first
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;
  
  // Alternative CDN options (uncomment if unpkg doesn't work):
  // pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;
  // pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
  
  console.log(`PDF.js worker initialized: ${pdfjsLib.GlobalWorkerOptions.workerSrc}`);
  console.log(`PDF.js version: ${pdfjsLib.version}`);
}

// Extract text from PDF file (browser-compatible)
async function extractTextFromPDF(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const arrayBuffer = e.target.result;
        // Use simple text extraction - OpenAI can handle PDFs directly
        const text = await extractTextFromArrayBuffer(arrayBuffer);
        resolve(text);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

// Simple text extraction from PDF (basic implementation)
async function extractTextFromArrayBuffer(arrayBuffer) {
  // OpenAI can handle PDF files directly via their API
  return "";
}

// Parse resume using OpenAI API directly - supports multiple file types
export async function parseResumeWithOpenAI(file, name, email, phone) {
  try {
    const fileName = file.name.toLowerCase();
    const fileExtension = fileName.split('.').pop();
    const fileType = file.type || '';

    console.log(`Parsing file: ${file.name}, type: ${fileType}, extension: ${fileExtension}`);

    // Extract text based on file type
    let text = "";

    try {
      if (fileExtension === 'txt' || fileType === 'text/plain' || fileType.includes('text/plain')) {
        // Plain text file - read directly
        console.log("Processing as TXT file...");
        text = await readTextFile(file);
      } else if (fileExtension === 'pdf' || fileType === 'application/pdf' || fileType.includes('pdf')) {
        // PDF file - extract text
        console.log("Processing as PDF file...");
        const arrayBuffer = await readFileAsArrayBuffer(file);
        text = await extractTextFromPDFBuffer(arrayBuffer);
      } else if (fileExtension === 'docx' || fileType.includes('wordprocessingml') || fileType.includes('docx')) {
        // DOCX file - extract text using mammoth
        console.log("Processing as DOCX file...");
        const arrayBuffer = await readFileAsArrayBuffer(file);
        text = await extractTextFromDOCX(arrayBuffer);
      } else if (fileExtension === 'doc' || fileType === 'application/msword' || fileType.includes('msword')) {
        // DOC file - extract text
        console.log("Processing as DOC file...");
        const arrayBuffer = await readFileAsArrayBuffer(file);
        text = await extractTextFromDOC(arrayBuffer);
      } else if (fileExtension === 'rtf' || fileType.includes('rtf')) {
        // RTF file - extract text
        console.log("Processing as RTF file...");
        text = await readTextFile(file);
        text = extractTextFromRTF(text);
      } else if (fileExtension === 'odt' || fileType.includes('opendocument.text')) {
        // ODT file - try to extract as DOCX-like format
        console.log("Processing as ODT file...");
        const arrayBuffer = await readFileAsArrayBuffer(file);
        // ODT is also a ZIP file with XML, try similar approach to DOCX
        text = await extractTextFromDOCX(arrayBuffer);
      } else {
        // Try to read as text for unknown types
        console.log(`Unknown file type (${fileExtension}), trying as text...`);
        try {
          text = await readTextFile(file);
          if (text.length < 50) {
            throw new Error("Text too short");
          }
        } catch (textError) {
          // Try as PDF if text reading fails
          console.log("Text reading failed, trying as PDF...");
          const arrayBuffer = await readFileAsArrayBuffer(file);
          text = await extractTextFromPDFBuffer(arrayBuffer);
        }
      }
    } catch (extractionError) {
      console.error("File extraction error:", extractionError);
      // Don't wrap the error if it's already a helpful message
      const errorMsg = extractionError.message || 'Unknown error';
      if (errorMsg.includes('Could not extract') || errorMsg.includes('password') || errorMsg.includes('corrupted')) {
        throw extractionError; // Re-throw the original helpful error
      }
      throw new Error(`Failed to extract text from ${fileExtension.toUpperCase()} file: ${errorMsg}`);
    }

    if (!text || text.trim().length === 0) {
      throw new Error("Could not extract text from file. Please ensure the file contains readable text and is not corrupted.");
    }

    if (text.trim().length < 50) {
      throw new Error("Extracted text is too short. Please ensure the file contains sufficient readable content.");
    }

    console.log(`Successfully extracted ${text.length} characters from ${fileExtension.toUpperCase()} file`);

    // Parse with OpenAI
    const parsed = await callOpenAIForParsing(text, file.name);
    return parsed;
  } catch (error) {
    console.error("Error parsing resume:", error);
    // Don't wrap errors that are already helpful
    const errorMsg = error.message || 'Unknown error';
    if (errorMsg.includes('File parsing failed') || errorMsg.includes('Please try') || errorMsg.includes('Please ensure')) {
      throw error; // Already has helpful message
    }
    // Provide more helpful error messages for unknown errors
    if (errorMsg.includes("extract text") || errorMsg.includes("extraction")) {
      throw new Error(`File parsing failed: ${errorMsg}. Please ensure your file contains readable text and is not corrupted. For DOC files, please convert to DOCX or PDF format.`);
    }
    throw error;
  }
}

// Helper: Read file as text
function readTextFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

// Helper: Read file as ArrayBuffer
function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

// Extract text from DOCX file using mammoth
async function extractTextFromDOCX(arrayBuffer) {
  try {
    console.log("Extracting text from DOCX using mammoth...");
    
    // Use mammoth to extract text from DOCX
    const result = await mammoth.extractRawText({ arrayBuffer });
    let text = result.value;
    
    // Also get formatted text if available
    if (result.messages && result.messages.length > 0) {
      console.log("DOCX conversion messages:", result.messages);
    }
    
    // Clean up the text
    text = text
      .replace(/\s+/g, ' ') // Normalize whitespace
      .replace(/\n\s*\n/g, '\n') // Remove multiple newlines
      .trim();
    
    if (text.length > 50) {
      console.log(`DOCX extraction successful: ${text.length} characters`);
      return text.substring(0, 8000); // Return up to 8000 characters
    }
    
    throw new Error("Extracted text is too short or empty");
  } catch (error) {
    console.error("DOCX extraction error with mammoth:", error);
    
    // Fallback: try basic XML parsing
    try {
      const uint8Array = new Uint8Array(arrayBuffer);
      const text = new TextDecoder('utf-8', { fatal: false }).decode(uint8Array);
      
      // Look for text in DOCX XML structure
      const textMatches = text.match(/<w:t[^>]*>([^<]*)<\/w:t>/gi);
      if (textMatches) {
        const extracted = textMatches
          .map(match => match.replace(/<[^>]*>/g, ''))
          .join(' ')
          .replace(/\s+/g, ' ')
          .trim();
        if (extracted.length > 50) {
          console.log("DOCX fallback extraction successful");
          return extracted.substring(0, 8000);
        }
      }
    } catch (fallbackError) {
      console.error("DOCX fallback extraction also failed:", fallbackError);
    }
    
    throw new Error("Could not extract text from DOCX file. Please ensure the file is not corrupted.");
  }
}

// Extract text from DOC file (older format)
async function extractTextFromDOC(arrayBuffer) {
  try {
    console.log("Extracting text from DOC file...");
    
    // DOC files are binary OLE format - very hard to parse in browser
    // Try multiple extraction methods
    
    // Method 1: Try to find readable text sequences
    const uint8Array = new Uint8Array(arrayBuffer);
    const text = new TextDecoder('utf-8', { fatal: false }).decode(uint8Array);
    
    // Look for common patterns in DOC files
    // DOC files often have text in specific regions
    const patterns = [
      // Look for readable text sequences (at least 4 consecutive letters)
      /[A-Za-z]{4,}/g,
      // Look for text between common DOC markers
      /(?:Summary|Experience|Education|Skills|Objective|Profile)[\s\S]{0,2000}/gi
    ];
    
    let extracted = '';
    patterns.forEach(pattern => {
      const matches = text.match(pattern);
      if (matches) {
        extracted += matches.join(' ') + ' ';
      }
    });
    
    // Method 2: Extract readable ASCII text
    const readable = text
      .replace(/[^\x20-\x7E\n\r]/g, ' ') // Remove non-printable
      .replace(/\s+/g, ' ')
      .trim();
    
    // Filter out binary data - keep only meaningful text
    const words = readable.split(' ').filter(word => 
      word.length > 2 && /^[a-zA-Z0-9\s\-.,;:!?()]+$/.test(word)
    );
    
    const wordText = words.join(' ');
    
    // Combine both methods
    const combined = (extracted + ' ' + wordText)
      .replace(/\s+/g, ' ')
      .trim()
      .substring(0, 8000);
    
    if (combined.length > 100) {
      console.log(`DOC extraction successful: ${combined.length} characters`);
      return combined;
    }
    
    // Method 3: Try to send directly to OpenAI with base64
    console.log("DOC text extraction insufficient, trying direct OpenAI processing...");
    try {
      const base64DOC = arrayBufferToBase64(arrayBuffer);
      // Note: OpenAI doesn't directly support DOC files, but we can try
      // For now, throw an error asking user to convert
      throw new Error("DOC file format is not well supported. Please convert to DOCX or PDF.");
    } catch (directError) {
      throw new Error("Could not extract readable text from DOC file. Please convert to DOCX or PDF format.");
    }
  } catch (error) {
    console.error("DOC extraction error:", error);
    if (error.message.includes("convert")) {
      throw error;
    }
    throw new Error("Could not extract text from DOC file. Please convert to DOCX or PDF.");
  }
}

// Extract text from RTF file
function extractTextFromRTF(rtfText) {
  try {
    // RTF files contain text with formatting codes
    // Remove RTF control words and keep text
    let text = rtfText
      .replace(/\\[a-z]+\d*\s?/gi, ' ') // Remove RTF commands
      .replace(/\{[^}]*\}/g, ' ') // Remove RTF groups
      .replace(/\\[{}]/g, ' ') // Remove escaped braces
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
    
    return text.substring(0, 4000);
  } catch (error) {
    console.error("RTF extraction error:", error);
    return rtfText.substring(0, 4000); // Return raw text as fallback
  }
}

// Call OpenAI API for parsing (now receives extracted text directly)
async function callOpenAIForParsing(text, filename) {
  try {
    if (!text || text.trim().length === 0) {
      throw new Error("No text extracted from file");
    }
  
    // Log extracted text length for debugging
    console.log(`Sending ${text.length} characters to OpenAI for parsing`);
    console.log(`Text preview (first 500 chars):`, text.substring(0, 500));
    
    // Call OpenAI to parse the extracted text with improved prompt
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are a precise resume parser. Extract ONLY information that appears EXACTLY in the provided resume text.

STRICT RULES - VIOLATION RESULTS IN INVALID RESPONSE:
- ONLY extract skills that appear VERBATIM in the resume text
- DO NOT add, assume, or infer any skills not explicitly written in the text
- DO NOT use common programming skills lists or assumptions
- If no skills are explicitly mentioned in the text, return an empty skills array []
- Extract work experience ONLY if job titles, companies, and descriptions are clearly stated
- Extract education ONLY if degrees/institutions are explicitly mentioned
- DO NOT hallucinate, assume, or add any information not present in the text

Return ONLY valid JSON with this exact structure:
{
  "skills": ["skill1", "skill2", "skill3"],
  "experience": [
    {
      "role": "Job Title",
      "company": "Company Name",
      "years": 5,
      "description": "Key responsibilities or achievements"
    }
  ],
  "education": "Degree and Institution details"
}

Extract word-for-word from the resume text only. No additions or assumptions.`
          },
          {
            role: "user",
            content: `Parse this resume text and extract ONLY information that is explicitly mentioned:

${text.substring(0, 8000)}

Extract:
1. Skills EXPLICITLY mentioned in the text (programming languages, frameworks, tools, technologies)
2. Work experience entries that are clearly described
3. Education details if mentioned

Return JSON with only the information found in the text above. Do not add anything that isn't in the resume.`
          }
        ],
        temperature: 0.1,
        response_format: { type: "json_object" }
      })
    });
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: { message: "Unknown error" } }));
      throw new Error(error.error?.message || `OpenAI API error: ${response.status}`);
    }
    
    const data = await response.json();
    const content = data.choices[0].message.content;
    
    // Parse the JSON response
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch (e) {
      // Try to extract JSON from the response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Could not parse OpenAI response: " + content.substring(0, 100));
      }
    }
    
    // Validate and log parsed data
    console.log("OpenAI response:", content);
    console.log("Parsed data:", parsed);
    
    // Validate parsed data
    if (!parsed.skills) parsed.skills = [];
    if (!parsed.experience) parsed.experience = [];
    if (!parsed.education) parsed.education = "";

    // Additional validation: Filter out skills that don't actually appear in the resume text
    if (Array.isArray(parsed.skills) && parsed.skills.length > 0) {
      const lowerText = text.toLowerCase();
      parsed.skills = parsed.skills.filter(skill => {
        const skillLower = skill.toLowerCase().trim();
        // Check if the skill appears as a whole word or phrase in the text
        return lowerText.includes(skillLower) ||
               lowerText.includes(skillLower.replace(/\s+/g, '')) ||
               lowerText.includes(skillLower.replace(/\s+/g, '-'));
      });
    }
    
    // Check if we got meaningful data
    const hasSkills = Array.isArray(parsed.skills) && parsed.skills.length > 0;
    const hasExperience = Array.isArray(parsed.experience) && parsed.experience.length > 0;
    const hasEducation = parsed.education && parsed.education.trim().length > 0;
    
    if (!hasSkills && !hasExperience && !hasEducation) {
      console.warn("OpenAI returned empty data. This might mean:");
      console.warn("1. The extracted text was too short or unreadable");
      console.warn("2. The PDF contains only images (no text)");
      console.warn("3. The resume format is unusual");
      console.warn(`Extracted text length: ${text.length} characters`);
      console.warn(`Text preview: ${text.substring(0, 200)}`);

      // Only use fallback if we can extract meaningful data from the actual text
      // Don't use dummy/predefined skill lists
      const fallbackExp = extractExperienceFromText(text);
      const fallbackEdu = extractEducationFromText(text);

      if (fallbackExp.length > 0 || fallbackEdu) {
        console.log("Using fallback extraction for experience/education only");
        parsed.experience = fallbackExp.length > 0 ? fallbackExp : parsed.experience;
        parsed.education = fallbackEdu || parsed.education;
      }
      // Don't add dummy skills - if OpenAI couldn't find skills, leave empty
    }
    
    // Classify the role using both skills and resume content
    // Only classify if we have actual skills from the resume
    const classification = (parsed.skills && parsed.skills.length > 0)
      ? await classifyRole(parsed.skills, text)
      : { stack: "Unknown", percentage: 0, role: "Unknown Role", reasoning: "No skills found in resume" };

    return {
      skills: Array.isArray(parsed.skills) ? parsed.skills : [],
      experience: Array.isArray(parsed.experience) ? parsed.experience : [],
      education: parsed.education || "",
      classification: classification
    };
  } catch (error) {
    console.error("OpenAI parsing error:", error);
    throw new Error("Failed to parse resume with AI: " + error.message);
  }
}

// Fallback: Extract skills from text using pattern matching
function extractSkillsFromText(text) {
  const commonSkills = [
    'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'SQL', 'HTML', 'CSS',
    'TypeScript', 'Angular', 'Vue', 'PHP', 'C++', 'C#', 'Ruby', 'Go', 'Swift',
    'Kotlin', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Git', 'MongoDB', 'PostgreSQL',
    'MySQL', 'Redis', 'Express', 'Django', 'Flask', 'Spring', 'Laravel', 'REST API',
    'GraphQL', 'Microservices', 'CI/CD', 'Jenkins', 'Agile', 'Scrum'
  ];
  
  const found = [];
  const lowerText = text.toLowerCase();
  
  commonSkills.forEach(skill => {
    if (lowerText.includes(skill.toLowerCase())) {
      found.push(skill);
    }
  });
  
  return found;
}

// Fallback: Extract experience from text
function extractExperienceFromText(text) {
  const exp = [];
  // Look for common patterns like "Software Engineer at Company Name"
  const patterns = [
    /(?:worked|experience|role|position).*?(?:as|at)\s+([A-Z][a-zA-Z\s]+?)(?:\s+at\s+|\s+@\s+)([A-Z][a-zA-Z\s&]+)/gi,
    /([A-Z][a-zA-Z\s]+?)\s+(?:at|@)\s+([A-Z][a-zA-Z\s&]+)/g
  ];
  
  patterns.forEach(pattern => {
    const matches = text.matchAll(pattern);
    for (const match of matches) {
      if (match[1] && match[2] && match[1].length < 50 && match[2].length < 50) {
        exp.push({
          role: match[1].trim(),
          company: match[2].trim(),
          years: null
        });
      }
    }
  });
  
  return exp.slice(0, 5); // Limit to 5 entries
}

// Fallback: Extract education from text
function extractEducationFromText(text) {
  const eduPatterns = [
    /(?:Bachelor|Master|PhD|B\.S\.|M\.S\.|B\.A\.|M\.A\.).*?(?:in|of)?\s*([A-Z][a-zA-Z\s]+?)(?:\s+from|\s+at|\s+@)?\s*([A-Z][a-zA-Z\s&]+)/gi,
    /(?:Degree|Education).*?([A-Z][a-zA-Z\s]+?)(?:\s+from|\s+at)?\s*([A-Z][a-zA-Z\s&]+)/gi
  ];
  
  for (const pattern of eduPatterns) {
    const match = text.match(pattern);
    if (match && match[0]) {
      return match[0].trim().substring(0, 200);
    }
  }
  
  return null;
}

// OCR function using Tesseract.js for image-based PDFs
async function performOCR(arrayBuffer) {
  try {
    console.log("Attempting OCR with Tesseract.js");
    const worker = await createWorker('eng');

    // Convert PDF to images first using PDF.js
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    let ocrText = '';

    for (let i = 1; i <= Math.min(pdf.numPages, 5); i++) { // Limit to first 5 pages for performance
      const page = await pdf.getPage(i);

      // Render page to canvas
      const scale = 2.0; // Higher scale for better OCR accuracy
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };

      await page.render(renderContext).promise;

      // Convert canvas to blob and perform OCR
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      const { data: { text } } = await worker.recognize(blob);
      ocrText += text + '\n';
    }

    await worker.terminate();

    if (ocrText.trim().length > 50) {
      console.log(`OCR extraction successful: ${ocrText.length} characters`);
      return ocrText.substring(0, 8000);
    }

    throw new Error("OCR did not extract sufficient text");
  } catch (error) {
    console.error("OCR failed:", error);
    throw error;
  }
}

// Extract text from PDF buffer using improved method
async function extractTextFromPDFBuffer(arrayBuffer) {
  let pdf = null;
  
  try {
    console.log("Extracting text from PDF using pdfjs-dist...");
    console.log(`PDF.js version: ${pdfjsLib.version}`);
    console.log(`Worker source: ${pdfjsLib.GlobalWorkerOptions.workerSrc}`);
    
    // Check if worker is configured
    if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
      console.warn("PDF.js worker not configured, attempting to configure...");
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;
    }
    
    // Use pdfjs-dist for proper text extraction
    const loadingTask = pdfjsLib.getDocument({ 
      data: arrayBuffer,
      verbosity: 0, // Suppress warnings
      useSystemFonts: true // Use system fonts for better compatibility
    });
    
    pdf = await loadingTask.promise;
    let fullText = '';

    console.log(`PDF loaded successfully. Has ${pdf.numPages} pages`);

    // Extract text from all pages (limit to first 10 pages for performance)
    const maxPages = Math.min(pdf.numPages, 10);
    for (let i = 1; i <= maxPages; i++) {
      try {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map(item => item.str || '')
          .filter(str => str.trim().length > 0)
          .join(' ')
          .trim();
        
        if (pageText.length > 0) {
          fullText += pageText + '\n\n';
          console.log(`Page ${i}: Extracted ${pageText.length} characters`);
        } else {
          console.warn(`Page ${i}: No text found (might be image-based)`);
        }
      } catch (pageError) {
        console.warn(`Error extracting text from page ${i}:`, pageError);
      }
    }

    if (fullText.trim().length > 50) {
      console.log(`PDF.js extraction successful: ${fullText.length} characters total`);
      return fullText.substring(0, 8000);
    }
    
    console.warn(`PDF.js extraction returned insufficient text (${fullText.trim().length} chars), trying OCR...`);

    // Try OCR as fallback for image-based PDFs (only if we have a valid PDF object)
    if (pdf) {
      console.log("PDF.js text extraction insufficient, trying OCR with Tesseract.js...");
      try {
        const ocrText = await performOCR(arrayBuffer);
        if (ocrText && ocrText.trim().length > 50) {
          console.log(`OCR extraction successful: ${ocrText.length} characters`);
          return ocrText;
        }
      } catch (ocrError) {
        console.error("OCR also failed:", ocrError);
      }
    } else {
      console.warn("PDF object not available, skipping OCR fallback");
    }

    // Enhanced fallback: Try multiple extraction methods
    console.log("PDF.js failed, using enhanced fallback text extraction");
    const uint8Array = new Uint8Array(arrayBuffer);
    const rawText = new TextDecoder('utf-8', { fatal: false }).decode(uint8Array);

    // Method 1: Look for text in PDF streams (TJ and Tj operators)
    const tjMatches = rawText.match(/\/F\d+\s+\d+\s+Tf[\s\S]*?TJ|\/F\d+\s+\d+\s+Tf[\s\S]*?Tj/gi);
    const textMatches = [];

    if (tjMatches) {
      tjMatches.forEach(match => {
        // Extract text from TJ/Tj operators
        const textParts = match.match(/\(([^)]+)\)/g);
        if (textParts) {
          textParts.forEach(part => {
            const content = part.replace(/[()]/g, '').trim();
            if (content.length > 3 && /^[a-zA-Z0-9\s\-.,;:!?]+$/.test(content)) {
              textMatches.push(content);
            }
          });
        }
      });
    }

    // Method 2: Look for readable text in streams
    const streamMatches = rawText.match(/stream[\s\S]{100,10000}?endstream/gi);
    if (streamMatches) {
      streamMatches.forEach(match => {
        const streamContent = match.replace(/stream|endstream/gi, '');
        // Try to find readable text sequences
        const readableParts = streamContent.match(/[A-Z][a-zA-Z\s]{10,}/g);
        if (readableParts) {
          readableParts.forEach(part => {
            if (part.length > 15 && part.split(' ').length > 2) {
              textMatches.push(part.trim());
            }
          });
        }
      });
    }

    // Method 3: Look for text between BT/ET blocks
    const btMatches = rawText.match(/BT[\s\S]*?ET/gi);
    if (btMatches) {
      btMatches.forEach(match => {
        const btContent = match.replace(/BT|ET/gi, '');
        const readable = btContent
          .replace(/[^\x20-\x7E\n\r]/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        if (readable.length > 20) {
          textMatches.push(readable);
        }
      });
    }

    // Method 4: Extract from object streams
    const objMatches = rawText.match(/\d+\s+\d+\s+obj[\s\S]*?endobj/gi);
    if (objMatches) {
      objMatches.forEach(match => {
        const objContent = match.replace(/\d+\s+\d+\s+obj|endobj/gi, '');
        const readable = objContent
          .replace(/[^\x20-\x7E\n\r]/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        if (readable.length > 30 && readable.includes(' ')) {
          textMatches.push(readable);
        }
      });
    }

    // Combine and deduplicate extracted text
    const combinedText = [...new Set(textMatches)].join(' ').substring(0, 8000);

    if (combinedText.trim().length > 100) {
      console.log(`Enhanced fallback extraction: ${combinedText.length} characters`);
      return combinedText;
    }

    // If all methods fail, try to send PDF pages as images to OpenAI Vision API
    console.log("All text extraction methods failed, attempting direct PDF processing with OpenAI Vision API");
    try {
      // Use existing PDF object if available, otherwise load it
      let pdfForVision = pdf;
      if (!pdfForVision) {
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        pdfForVision = await loadingTask.promise;
      }
      
      const maxPages = Math.min(pdfForVision.numPages, 3); // Limit to first 3 pages for API limits
      console.log(`Attempting OpenAI Vision extraction for ${maxPages} pages...`);
      
      let allPageText = '';
      
      for (let i = 1; i <= maxPages; i++) {
        try {
          const page = await pdfForVision.getPage(i);
          const scale = 2.0;
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          await page.render({
            canvasContext: context,
            viewport: viewport
          }).promise;

          // Convert canvas to base64 image
          const imageData = canvas.toDataURL('image/png');
          console.log(`Page ${i} converted to image, sending to OpenAI Vision...`);
          
          // Send to OpenAI Vision API
          const visionResponse = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              messages: [
                {
                  role: "user",
                  content: [
                    {
                      type: "text",
                      text: "Extract all text from this resume image. Return only the raw text content, no formatting or analysis. Include all skills, experience, education, and other relevant information."
                    },
                    {
                      type: "image_url",
                      image_url: {
                        url: imageData
                      }
                    }
                  ]
                }
              ],
              max_tokens: 2000
            })
          });

          if (visionResponse.ok) {
            const visionData = await visionResponse.json();
            const pageText = visionData.choices[0].message.content;
            if (pageText && pageText.trim().length > 20) {
              allPageText += pageText + '\n\n';
              console.log(`Page ${i} OCR via OpenAI Vision: ${pageText.length} characters`);
            } else {
              console.warn(`Page ${i}: OpenAI Vision returned insufficient text`);
            }
          } else {
            const errorData = await visionResponse.json().catch(() => ({}));
            console.warn(`Page ${i}: OpenAI Vision API error: ${visionResponse.status}`, errorData);
          }
        } catch (pageError) {
          console.warn(`Error processing page ${i} with OpenAI Vision:`, pageError);
        }
      }

      if (allPageText.trim().length > 50) {
        console.log(`OpenAI Vision extraction successful: ${allPageText.length} characters`);
        return allPageText.substring(0, 8000);
      } else {
        console.warn(`OpenAI Vision extraction returned insufficient text: ${allPageText.trim().length} characters`);
      }
    } catch (visionError) {
      console.error("OpenAI Vision processing failed:", visionError);
    }

    // Final fallback: throw a helpful error
    throw new Error("Could not extract readable text from PDF. The PDF may contain only images, be password-protected, or corrupted. Please try: 1) Converting to a text-based PDF, 2) Using a DOCX file instead, or 3) Ensuring the PDF is not password-protected.");
  } catch (error) {
    console.error("PDF extraction error:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    // Re-throw if it's already our final error message
    if (error.message && error.message.includes('Could not extract readable text from PDF')) {
      throw error;
    }
    
    // Provide more specific error messages
    if (error.message && (error.message.includes('worker') || error.message.includes('Failed to fetch'))) {
      throw new Error("PDF.js worker failed to load. Please refresh the page and try again. If the problem persists, try using a DOCX file instead.");
    } else if (error.message && (error.message.includes('Invalid PDF') || error.message.includes('corrupted'))) {
      throw new Error("The PDF file appears to be corrupted or invalid. Please try: 1) Opening the PDF in a PDF viewer to verify it's valid, 2) Re-saving it, or 3) Converting to DOCX format.");
    } else if (error.message && error.message.includes('password')) {
      throw new Error("The PDF is password-protected. Please remove the password and try again.");
    } else {
      // Don't wrap the error message again if it's already helpful
      const errorMsg = error.message || 'Unknown error';
      if (errorMsg.includes('Could not extract') || errorMsg.includes('insufficient')) {
        throw error;
      }
      throw new Error(`PDF extraction failed: ${errorMsg}. Please try converting the PDF to DOCX format or ensure it contains readable text (not just images).`);
    }
  }
}

// Classify role based on skills and full resume content with improved accuracy and tech stack evaluation
async function classifyRole(skills, resumeText = "") {
  if (!skills || skills.length === 0) {
    return { stack: "Unknown", percentage: 0, role: "Unknown Role", reasoning: "No skills provided" };
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are an expert technical recruiter and career counselor with deep knowledge of technology stacks. Analyze the ENTIRE resume content provided and classify the candidate into their PRIMARY tech stack and most suitable role.

Use your comprehensive knowledge of technology domains to evaluate the candidate's expertise based on:
- Technical skills mentioned (programming languages, frameworks, tools, technologies)
- Work experience and project descriptions
- Education background and specializations
- Domain-specific terminology and concepts
- Years of experience and career progression
- Industry certifications and achievements

RESPONSE FORMAT: Return ONLY valid JSON with this exact structure:
{
  "stack": "Primary Tech Stack Name",
  "percentage": 85,
  "role": "Specific Job Title",
  "reasoning": "Detailed explanation of classification based on resume analysis"
}

Rules:
- Percentage (0-100) reflects how well the candidate fits the stack based on their ENTIRE profile
- Consider skill depth, experience level, project complexity, and domain expertise
- Be specific about the stack and role - choose the most dominant specialization
- Analyze the full context of their career, not just listed skills
- For data scientists with AI/ML focus, assign higher percentages to Machine Learning stack
- For developers with strong data skills, evaluate if it's primary or secondary expertise`
          },
          {
            role: "user",
            content: `FULL RESUME CONTENT:
${resumeText.substring(0, 6000)}`
          }
        ],
        temperature: 0.1,
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: { message: "Unknown error" } }));
      throw new Error(error.error?.message || `OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    // Parse the JSON response
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch (e) {
      // Try to extract JSON from the response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Could not parse OpenAI response: " + content.substring(0, 100));
      }
    }

    return parsed;
  } catch (error) {
    console.error("OpenAI classification error:", error);
    return { stack: "Unknown", percentage: 0, role: "Unknown Role", reasoning: "Classification failed" };
  }
}

// Helper function
function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

// Get AI-powered job recommendations
export async function getAIJobRecommendations(parsedResume, jobs) {
  if (!parsedResume || !jobs || jobs.length === 0) {
    return [];
  }
  
  try {
    const skills = (parsedResume.skills || []).join(', ');
    const experience = Array.isArray(parsedResume.experience) 
      ? parsedResume.experience.map(e => `${e.role} at ${e.company} (${e.years} years)`).join(', ')
      : '';
    const education = parsedResume.education || '';
    
    const jobsSummary = jobs.slice(0, 10).map(j => 
      `${j.title} at ${j.company} (Skills: ${(j.required_skills || []).join(', ')})`
    ).join(' | ');
    
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a job matching expert. Given a candidate's resume and available jobs, return a JSON array of match percentages (0-100) for each job in the same order. Return ONLY a JSON array like [85, 70, 60]."
          },
          {
            role: "user",
            content: `Candidate Skills: ${skills}\nExperience: ${experience}\nEducation: ${education}\n\nJobs: ${jobsSummary}\n\nReturn match percentages as JSON array for each job.`
          }
        ],
        temperature: 0.1,
        response_format: { type: "json_object" }
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      const content = data.choices[0].message.content;
      // Try to extract array from response
      const arrayMatch = content.match(/\[[\d\s,.]+\]/);
      if (arrayMatch) {
        const percentages = JSON.parse(arrayMatch[0]);
        return jobs.slice(0, percentages.length).map((job, i) => ({
          ...job,
          score: percentages[i] / 100,
          matchPercent: percentages[i]
        })).sort((a, b) => b.score - a.score);
      }
    }
  } catch (error) {
    console.error("AI recommendation error:", error);
  }
  
  // Fallback to simple matching
  return getSimpleJobMatches(parsedResume, jobs);
}

// Simple job matching (fallback)
function getSimpleJobMatches(parsedResume, jobs) {
  const skills = (parsedResume.skills || []).map(s => s.toLowerCase());
  
  return jobs.map(job => {
    const jobSkills = (job.required_skills || []).map(s => s.toLowerCase());
    const overlap = jobSkills.filter(js => skills.some(s => s.includes(js) || js.includes(s))).length;
    const score = overlap / Math.max(1, jobSkills.length);
    return { ...job, score, matchPercent: Math.round(score * 100) };
  }).filter(j => j.score > 0).sort((a, b) => b.score - a.score).slice(0, 5);
}

