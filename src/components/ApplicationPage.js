import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaArrowLeft } from "react-icons/fa";
import API_BASE_URL from "../config";
import { parseResumeWithOpenAI, getAIJobRecommendations } from "../utils/openaiParser";

const ApplicationPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id: jobId } = useParams();
  const [name, setName] = useState(() => {
    try { return localStorage.getItem('userFullName') || ""; } catch (_) { return ""; }
  });
  const [email, setEmail] = useState(() => {
    try { return localStorage.getItem('userEmail') || ""; } catch (_) { return ""; }
  });
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const [parsing, setParsing] = useState(false);
  const [parsed, setParsed] = useState(null);
  const [applicantId, setApplicantId] = useState(() => {
    try {
      return typeof window !== 'undefined' ? (localStorage.getItem('applicantId') || null) : null;
    } catch (_) {
      return null;
    }
  });
  const [suggesting, setSuggesting] = useState(false);
  const [suggestedJobs, setSuggestedJobs] = useState([]);
  const [scoreText, setScoreText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [job, setJob] = useState(null);
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    if (!jobId) return;
    (async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/jobs/${jobId}`);
        if (res.ok) {
          const data = await res.json();
          setJob(data.job || data);
        }
      } catch (e) {
        console.error("Error fetching job:", e);
      }
    })();
  }, [jobId]);

  // If no jobId provided (landing), fetch jobs for a dropdown
  useEffect(() => {
    if (jobId) return;
    (async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/jobs`);
        const data = await res.json();
        setAllJobs(data.jobs || data || []);
      } catch (e) {
        console.error("Error fetching jobs:", e);
        setAllJobs([]);
      }
    })();
  }, [jobId]);

  const handleUpload = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    
    // Accept multiple file types: PDF, DOC, DOCX, TXT, RTF, ODT, and other text/document formats
    const allowedTypes = [
      "application/pdf",
      "application/msword", // .doc
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
      "text/plain", // .txt
      "application/rtf", // .rtf
      "text/rtf", // .rtf
      "application/vnd.oasis.opendocument.text", // .odt
    ];
    
    const allowedExtensions = ['.pdf', '.doc', '.docx', '.txt', '.rtf', '.odt'];
    const fileName = f.name.toLowerCase();
    const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));
    const hasValidType = allowedTypes.includes(f.type) || f.type === '' || !f.type;
    
    if (!hasValidType && !hasValidExtension) {
      setError(t("Please upload a supported file: PDF, DOC, DOCX, TXT, RTF, or ODT."));
      return;
    }
    setError("");
    setFile(f);
  };

  const handleParse = async () => {
    if (!file) {
      setError(t("Please select a resume file first."));
      return;
    }
    setError("");
    setParsing(true);
    try {
      console.log("Starting client-side resume parsing with OpenAI...");
      
      // Parse resume using OpenAI directly (client-side)
      const parsed = await parseResumeWithOpenAI(file, name, email, phone);
      
      console.log("Parsed resume data:", parsed);
      console.log("Skills:", parsed.skills?.length || 0, "items");
      console.log("Experience:", parsed.experience?.length || 0, "items");
      console.log("Education:", parsed.education ? "Yes" : "No");
      console.log("Classification:", parsed.classification);
      
      // Set parsed data
      const parsedData = {
        skills: Array.isArray(parsed.skills) ? parsed.skills : [],
        experience: Array.isArray(parsed.experience) ? parsed.experience : [],
        education: parsed.education || "",
        classification: parsed.classification || { stack: "Unknown", percentage: 0, role: "Unknown Role", reasoning: "" },
      };
      
      console.log("Setting parsed state with:", parsedData);
      setParsed(parsedData);

      setScoreText(parsed.classification || { stack: "Unknown", percentage: 0, role: "Unknown Role", reasoning: "" });
      
      // Also save to server (optional - for tracking)
      try {
        const form = new FormData();
        form.append("resume", file);
        form.append("name", name);
        form.append("email", email);
        form.append("phone", phone);
        form.append("skills", JSON.stringify(parsed.skills));
        form.append("experience", JSON.stringify(parsed.experience));
        form.append("education", parsed.education);
        
        const res = await fetch(`${API_BASE_URL}/api/applicants`, {
          method: "POST",
          body: form,
        });
        
        if (res.ok) {
          const data = await res.json();
          const applicantId = data.applicant?.id || data.id || data.applicantId;
          if (applicantId) {
            setApplicantId(String(applicantId));
            localStorage.setItem("applicantId", String(applicantId));
          }
          
          // Update classification if backend returns one
          if (data.applicant?.classification) {
            console.log("Updating classification from backend:", data.applicant.classification);
            setParsed(prev => ({
              ...prev,
              classification: data.applicant.classification
            }));
            setScoreText(data.applicant.classification);
          }
        }
      } catch (serverError) {
        console.warn("Could not save to server, but parsing succeeded:", serverError);
        // Don't fail the whole operation if server save fails
      }
      
      setError(""); // Clear any errors
      console.log("✅ Resume parsed successfully!");
      toast.success("Resume parsed successfully!");
    } catch (e) {
      console.error("Parse error:", e);
      let errorMessage = e.message || "Failed to parse resume.";
      
      // Provide more helpful error messages based on error type
      if (errorMessage.includes("extract text") || errorMessage.includes("Could not extract")) {
        errorMessage = `File parsing failed: ${errorMessage}. Please ensure your file contains readable text and is not corrupted. For DOC files, please convert to DOCX or PDF format.`;
      } else if (errorMessage.includes("too short") || errorMessage.includes("insufficient")) {
        errorMessage = "The file appears to be empty or contains very little text. Please ensure your resume has readable content.";
      } else if (errorMessage.includes("OpenAI") || errorMessage.includes("API")) {
        errorMessage = "AI parsing service error. Please try again or check your internet connection.";
      }
      
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setParsing(false);
    }
  };

  const fetchSuggestions = async () => {
    // Use AI-powered job recommendations
    if (!parsed) {
      setError(t("Please parse your resume first to get suggestions."));
      return;
    }
    setSuggesting(true);
    setError("");
    try {
      // Ensure we have jobs to compare against
      let jobs = allJobs;
      if (!jobs || !jobs.length) {
        const res = await fetch(`${API_BASE_URL}/api/jobs`);
        const data = await res.json();
        jobs = data.jobs || data || [];
        setAllJobs(jobs);
      }

      if (!jobs || jobs.length === 0) {
        setError("No jobs available for recommendations.");
        return;
      }

      console.log("Getting AI-powered job recommendations...");
      
      // Use AI to get smart recommendations
      const recommendations = await getAIJobRecommendations(parsed, jobs);
      
      console.log("AI recommendations:", recommendations);
      
      setSuggestedJobs(recommendations.slice(0, 5));
    } catch (e) {
      console.error("Recommendation error:", e);
      // Fallback to simple matching
      try {
        const skills = (parsed.skills || []).map((s) => String(s).toLowerCase());
        const jobs = allJobs || [];
        const scored = jobs.map((j) => {
          const jobSkills = (j.required_skills || []).map((s) => String(s).toLowerCase());
          const overlap = jobSkills.filter((js) => skills.some((s) => s.includes(js) || js.includes(s))).length;
          const score = overlap / Math.max(1, jobSkills.length);
          return { ...j, score, matchPercent: Math.round(score * 100) };
        });
        const top = scored.filter((j) => j.score > 0).sort((a, b) => b.score - a.score).slice(0, 5);
        setSuggestedJobs(top);
      } catch (fallbackError) {
        setError(e.message || "Failed to get recommendations.");
      }
    } finally {
      setSuggesting(false);
    }
  };

  const handleSubmit = async () => {
    if (!name || !email || !file) {
      setError(t("Please complete required fields."));
      return;
    }
    setError("");
    try {
      const form = new FormData();
      const selectedJobId = jobId || (document.getElementById('jobSelect')?.value || '');
      form.append('job_id', selectedJobId);
      form.append('name', name);
      form.append('email', email);
      form.append('phone', phone);
      try {
        const uid = localStorage.getItem('userId');
        const uemail = localStorage.getItem('userEmail');
        if (uid) form.append('user_id', uid);
        if (uemail) form.append('user_email', uemail);
      } catch (_) {}
      if (parsed) form.append('ai_parsed_data', JSON.stringify(parsed));
      form.append('resume', file);

      // Applications API on deployed backend requires user JWT
      const token = localStorage.getItem("authToken");
      const res = await fetch(`${API_BASE_URL}/api/applications`, {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: form,
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        const errorMessage = errorData.message || errorData.error || 'Failed to submit application';
        throw new Error(errorMessage);
      }
      setSubmitted(true);
      toast.success("Application submitted successfully!");
    } catch (e) {
      const errorMessage = e.message;
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div style={styles.page}>
      {/* Top Navbar */}
      <Navbar />
      <div style={{ height: 70 }} />

      {/* Main Card */}
      <div style={styles.container}>
        <div style={styles.headerRow}>
          <FaArrowLeft onClick={() => navigate('/jobs')} style={styles.backIcon} />
          <h1 style={styles.title}>{job ? `${t("Apply for")} ${job.title} ${t("at")} ${job.company}` : t("Application")}</h1>
        </div>
        <p style={styles.subtitle}>{t("Upload your resume and preview parsed details.")}</p>

        <div style={styles.grid}>
          {/* Left: Form */}
          <div style={styles.leftCard}>
            {!jobId && (
              <div style={styles.formGroup}>
                <label style={styles.label}>{t("Select Job (required)")}</label>
                <select id="jobSelect" style={styles.input} defaultValue="">
                  <option value="" disabled>{t("Choose a job")}</option>
                  {allJobs.map(j => (
                    <option key={j.id} value={j.id}>{j.title} — {j.company}</option>
                  ))}
                </select>
              </div>
            )}

            <div style={styles.formGroup}>
              <label style={styles.label}>{t("Full Name")}</label>
              <input style={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder={t("Your name")} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t("Email")}</label>
              <input style={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t("Phone (optional)")}</label>
              <input style={styles.input} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+49 123 456 789" />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>{t("Upload Resume (PDF, DOC, DOCX, TXT)")}</label>
              <input
                style={styles.file}
                type="file"
                accept=".pdf,.doc,.docx,.txt,.rtf,.odt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,application/rtf,application/vnd.oasis.opendocument.text"
                onChange={handleUpload}
              />
            </div>

            <div style={styles.actionsRow}>
              <button style={styles.primaryBtn} onClick={handleParse} disabled={parsing}>
                {parsing ? t("Parsing...") : t("Parse Resume")}
              </button>
              <button style={styles.secondaryBtn} onClick={handleSubmit} disabled={parsing || submitted}>
                {submitted ? t("Submitted") : t("Confirm & Submit")}
              </button>
            </div>

            {error && <div style={styles.error}>{error}</div>}
            {submitted && (
              <div style={styles.success}>{t("Your profile has been submitted successfully!")}</div>
            )}

            {/* AI Evaluation Recommendations */}
            {parsed && parsed.classification && parsed.classification.stack && (
              <div style={{ marginTop: 24 }}>
                <h3 style={styles.sectionHeader}>{t("AI Evaluation Recommendations")}</h3>
                <div style={styles.previewSection}>
                  <div style={styles.previewHeading}>{t("Recommended Tech Stack:")}</div>
                  <div style={styles.stackEvaluation}>
                    <div style={styles.stackBadge}>
                      {parsed.classification.percentage}% {parsed.classification.stack}
                    </div>
                    <div style={styles.roleText}>
                      <strong>{parsed.classification.role}</strong>
                    </div>
                    {parsed.classification.reasoning && (
                      <div style={styles.reasoningText}>
                        {parsed.classification.reasoning}
                      </div>
                    )}
                  </div>
                </div>

                {/* Skills Summary */}
                {parsed.skills && parsed.skills.length > 0 && (
                  <div style={styles.previewSection}>
                    <div style={styles.previewHeading}>{t("Key Skills Identified:")}</div>
                    <div style={styles.chipsWrap}>
                      {parsed.skills.slice(0, 8).map((s, i) => (
                        <span key={i} style={styles.chip}>{s}</span>
                      ))}
                      {parsed.skills.length > 8 && (
                        <span style={styles.chip}>+{parsed.skills.length - 8} more</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Career Insights */}
                {parsed.experience && parsed.experience.length > 0 && (
                  <div style={styles.previewSection}>
                    <div style={styles.previewHeading}>{t("Career Insights:")}</div>
                    <div style={{ fontSize: 14, color: '#4a5568' }}>
                      {parsed.experience.length} position{parsed.experience.length !== 1 ? 's' : ''} identified
                      {parsed.education && (
                        <div style={{ marginTop: 8 }}>
                          <strong>Education:</strong> {parsed.education.substring(0, 100)}{parsed.education.length > 100 ? '...' : ''}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: Preview */}
          <div style={styles.card}>
            <h3 style={styles.sectionHeader}>{t("Parsed Preview")}</h3>
            {!parsed && !parsing && (
              <div style={styles.placeholder}>{t("No parsed data yet. Upload and click Parse.")}</div>
            )}
            {parsing && (
              <div style={styles.progressBox}>
                <div style={styles.spinner} />
                <div>{t("Analyzing your resume...")}</div>
              </div>
            )}
            {parsed && !parsing && (
              <div style={{ display: 'grid', gap: 14 }}>
                {/* Success message if CV uploaded but no parsed data */}
                {applicantId && parsed.skills.length === 0 && parsed.experience.length === 0 && !parsed.education && (
                  <div style={{ ...styles.previewSection, background: '#e8f5e9', borderColor: '#4caf50' }}>
                    <div style={{ ...styles.previewHeading, color: '#2e7d32' }}>
                      {t("CV Uploaded Successfully")}
                    </div>
                    <div style={{ color: '#388e3c', fontSize: '13px' }}>
                      {t("Your resume has been uploaded. Parsing data is not available, but you can still submit your application.")}
                    </div>
                  </div>
                )}
                
                {/* AI Evaluation */}
                {parsed.classification && parsed.classification.stack && (
                  <div style={styles.previewSection}>
                    <div style={styles.previewHeading}>{t("AI Evaluation:")}</div>
                    <div style={styles.stackEvaluation}>
                      <div style={styles.stackBadge}>
                        {parsed.classification.percentage}% {parsed.classification.stack}
                      </div>
                      <div style={styles.roleText}>
                        <strong>{parsed.classification.role}</strong>
                      </div>
                      {parsed.classification.reasoning && (
                        <div style={styles.reasoningText}>
                          {parsed.classification.reasoning}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Skills */}
                <div style={styles.previewSection}>
                  <div style={styles.previewHeading}>{t("Skills:")}</div>
                  <div style={styles.chipsWrap}>
                    {parsed.skills && parsed.skills.length > 0 ? (
                      parsed.skills.map((s, i) => (
                        <span key={i} style={styles.chip}>{s}</span>
                      ))
                    ) : (
                      <span style={styles.muted}>—</span>
                    )}
                  </div>
                </div>

                {/* Experience */}
                <div style={styles.previewSection}>
                  <div style={styles.previewHeading}>{t("Experience:")}</div>
                  <div style={{ display: 'grid', gap: 8 }}>
                    {parsed.experience && parsed.experience.length > 0 ? (
                      parsed.experience.map((e, i) => (
                        <div key={i} style={styles.expItem}>
                          <div style={styles.expTitle}>{e.role || t('Experience')}</div>
                          <div style={styles.expMeta}>
                            {(e.company || '—')} • {(e.years || e.duration || '—')}
                          </div>
                          {e.summary && <div style={styles.expDesc}>{e.summary}</div>}
                        </div>
                      ))
                    ) : (
                      <span style={styles.muted}>—</span>
                    )}
                  </div>
                </div>

                {/* Education */}
                <div style={styles.previewSection}>
                  <div style={styles.previewHeading}>{t("Education:")}</div>
                  <div>{parsed.education || <span style={styles.muted}>—</span>}</div>
                </div>

                {parsed && (parsed.skills?.length > 0 || parsed.experience?.length > 0) && (
                  <div style={{ marginTop: 6 }}>
                    <button
                      style={styles.primaryBtn}
                      onClick={fetchSuggestions}
                      disabled={suggesting}
                    >
                      {suggesting
                        ? t("Getting AI Recommendations...")
                        : t("Get AI-Powered Job Recommendations")}
                    </button>
                  </div>
                )}

                {suggestedJobs.length > 0 && (
                  <div style={{ marginTop: 16 }}>
                    <h3 style={styles.sectionHeader}>{t("AI-Powered Job Recommendations")}</h3>
                    <div style={{ display: 'grid', gap: 12 }}>
                      {suggestedJobs.map((j) => (
                        <div key={j.id} style={styles.jobRecommendation}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 6 }}>
                            <div>
                              <strong style={{ fontSize: 15, color: '#1f2b40' }}>{j.title}</strong>
                              <div style={{ fontSize: 13, color: '#6b7a90', marginTop: 2 }}>
                                {j.company} • {j.location}
                              </div>
                            </div>
                            <div style={styles.matchBadge}>
                              {j.matchPercent || Math.round((j.score || 0) * 100)}% {t("Match")}
                            </div>
                          </div>
                          {j.required_skills && j.required_skills.length > 0 && (
                            <div style={{ fontSize: 12, color: '#555', marginTop: 4 }}>
                              <strong>Skills:</strong> {j.required_skills.slice(0, 5).join(', ')}
                            </div>
                          )}
                          <button
                            style={{ ...styles.primaryBtn, marginTop: 8, fontSize: 12, padding: '6px 12px' }}
                            onClick={() => navigate(`/jobs/${j.id}`)}
                          >
                            {t("View Details")}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    color: "#1a202c",
    minHeight: "100vh",
    position: "relative",
    lineHeight: 1.6
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 10,
    borderBottom: "1px solid rgba(0,0,0,0.05)"
  },
  logo: { fontSize: "26px", fontWeight: "800", color: "#2d3748", cursor: "pointer", letterSpacing: "-0.5px" },
  logoSpan: { color: "#3182ce" },
  navLinks: { display: "flex", gap: "30px", listStyle: "none", alignItems: "center", margin: 0 },
  navItem: {
    cursor: "pointer",
    fontWeight: 500,
    color: "#4a5568",
    transition: "all 0.3s ease",
    fontSize: "16px",
    padding: "8px 12px",
    borderRadius: "6px"
  },
  registerBtn: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    borderRadius: "25px",
    padding: "12px 28px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    transition: "all 0.3s ease"
  },
  container: {
    maxWidth: 1200,
    margin: "40px auto",
    padding: "0 24px"
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
    marginBottom: 10
  },
  backIcon: {
    cursor: 'pointer',
    color: '#3182ce',
    fontSize: 22,
    transition: "color 0.3s ease"
  },
  title: {
    fontSize: 42,
    margin: 0,
    fontWeight: 700,
    color: "#1a202c",
    letterSpacing: "-1px"
  },
  subtitle: {
    color: "#718096",
    marginTop: 12,
    fontSize: 18,
    fontWeight: 400
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "400px 1fr",
    gap: 32,
    marginTop: 32
  },
  card: {
    background: "white",
    borderRadius: 16,
    padding: 32,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    border: "1px solid rgba(0,0,0,0.05)",
    transition: "all 0.3s ease"
  },
  leftCard: {
    background: "white",
    borderRadius: 16,
    padding: 32,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    border: "1px solid rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    height: "fit-content",
    maxHeight: "80vh",
    overflowY: "auto"
  },
  formGroup: { marginBottom: 16 },
  label: { display: "block", fontSize: 12, letterSpacing: "1px", fontWeight: 600, color: "#1b1b3a", marginBottom: 8 },
  input: { width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #ccc", outline: "none", background: "#fff", boxSizing: "border-box" },
  file: { width: "100%" },
  actionsRow: { display: "flex", gap: 12, marginTop: 8 },
  primaryBtn: {
    backgroundColor: "#0477BF",
    color: "#fff",
    border: "2px solid #0477BF",
    borderRadius: 8,
    padding: "10px 18px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px"
  },
  primaryBtnHover: {
    backgroundColor: "#035a9e",
    borderColor: "#035a9e",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(4, 119, 191, 0.3)"
  },
  secondaryBtn: {
    backgroundColor: "#4cafef",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "10px 18px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px"
  },
  secondaryBtnHover: {
    backgroundColor: "#3b9bd6",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(76, 175, 239, 0.3)"
  },
  sectionHeader: {
    marginTop: 0,
    fontSize: 24,
    fontWeight: 700,
    color: "#1a202c",
    marginBottom: 20
  },
  placeholder: {
    color: "#a0aec0",
    fontSize: 16,
    textAlign: "center",
    padding: "40px 20px"
  },
  progressBox: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "20px",
    background: "linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%)",
    borderRadius: 12,
    border: "1px solid #90cdf4"
  },
  spinner: {
    width: 20,
    height: 20,
    border: "3px solid #e2e8f0",
    borderTopColor: "#3182ce",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  },
  error: {
    color: "#e53e3e",
    marginTop: 12,
    fontSize: 14,
    padding: "12px 16px",
    background: "#fed7d7",
    borderRadius: 8,
    border: "1px solid #feb2b2"
  },
  success: {
    color: "#38a169",
    marginTop: 12,
    fontSize: 15,
    fontWeight: 600,
    padding: "12px 16px",
    background: "#c6f6d5",
    borderRadius: 8,
    border: "1px solid #9ae6b4"
  },
  // Enhanced preview styles for professional display
  previewSection: {
    background: "linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)",
    border: "1px solid #e2e8f0",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  },
  previewHeading: {
    fontWeight: 700,
    marginBottom: 12,
    color: "#2d3748",
    letterSpacing: 0.5,
    fontSize: 16,
    textTransform: "uppercase"
  },
  chipsWrap: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  chip: {
    background: 'linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%)',
    color: '#2b6cb0',
    border: '1px solid #90cdf4',
    borderRadius: 20,
    padding: '8px 14px',
    fontSize: 13,
    fontWeight: 600,
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
  },
  muted: { color: '#a0aec0', fontStyle: 'italic' },
  expItem: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
  },
  expTitle: { fontWeight: 700, color: '#1a202c', fontSize: 16 },
  expMeta: { color: '#718096', fontSize: 14, marginTop: 4 },
  expDesc: { color: '#4a5568', fontSize: 14, marginTop: 8, lineHeight: 1.5 },
  jobRecommendation: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    padding: 16,
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    transition: "all 0.3s ease"
  },
  matchBadge: {
    background: 'linear-gradient(135deg, #c6f6d5 0%, #9ae6b4 100%)',
    color: '#22543d',
    padding: '6px 12px',
    borderRadius: 16,
    fontSize: 13,
    fontWeight: 700,
    border: '1px solid #68d391',
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
  },
  // New stack evaluation styles
  stackEvaluation: { display: 'flex', flexDirection: 'column', gap: 8 },
  stackBadge: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: 20,
    fontSize: 14,
    fontWeight: 700,
    display: 'inline-block',
    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)"
  },
  roleText: {
    fontSize: 16,
    color: '#2d3748',
    fontWeight: 600
  },
  reasoningText: {
    fontSize: 14,
    color: '#718096',
    fontStyle: 'italic',
    lineHeight: 1.4
  },
  // Animation keyframes
  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  },
};

export default ApplicationPage;


