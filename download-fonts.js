// Script to download Google Fonts locally for GDPR compliance
const https = require('https');
const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, 'public', 'fonts');

// Create fonts directory if it doesn't exist
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Fonts to download
const fonts = [
  {
    name: 'Poppins',
    weights: [300, 400, 500, 600, 700, 800],
    style: 'normal'
  },
  {
    name: 'Gagalin',
    weights: [400],
    style: 'normal'
  }
];

// Download font file
function downloadFont(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        file.close();
        fs.unlinkSync(filepath);
        downloadFont(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download: ${url} (Status: ${response.statusCode})`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

// Get font URL from Google Fonts API
async function getFontUrls(fontName, weights) {
  const weightsParam = weights.join(';');
  const url = `https://fonts.googleapis.com/css2?family=${fontName.replace(' ', '+')}:wght@${weightsParam}&display=swap`;
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const urls = [];
        const urlRegex = /url\((https?:\/\/[^)]+)\)/g;
        let match;
        while ((match = urlRegex.exec(data)) !== null) {
          urls.push(match[1]);
        }
        resolve(urls);
      });
    }).on('error', reject);
  });
}

// Main download function
async function downloadAllFonts() {
  console.log('🚀 Starting font download for GDPR compliance...\n');
  
  for (const font of fonts) {
    console.log(`\n📦 Downloading ${font.name}...`);
    try {
      const urls = await getFontUrls(font.name, font.weights);
      
      for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const filename = `${font.name.toLowerCase()}-${font.weights[Math.floor(i / 2)] || 400}${i % 2 === 1 ? '-italic' : ''}.woff2`;
        const filepath = path.join(fontsDir, filename);
        
        await downloadFont(url, filepath);
      }
    } catch (error) {
      console.error(`❌ Error downloading ${font.name}:`, error.message);
    }
  }
  
  console.log('\n✅ Font download complete!');
  console.log('📝 Next steps:');
  console.log('   1. Check public/fonts/ directory for downloaded fonts');
  console.log('   2. Update fonts.css with correct font paths');
  console.log('   3. Remove Google Fonts CDN links from index.html');
}

downloadAllFonts().catch(console.error);
