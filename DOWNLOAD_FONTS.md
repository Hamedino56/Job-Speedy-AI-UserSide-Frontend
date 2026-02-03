# Font Download Instructions for GDPR Compliance

## Overview
This project now uses locally hosted fonts instead of Google Fonts CDN to comply with GDPR regulations.

## Required Fonts

1. **Poppins** (weights: 300, 400, 500, 600, 700, 800)
2. **Gagalin** (weight: 400)

## Method 1: Using Google Fonts Helper (Recommended)

1. Visit: https://gwfh.mranftl.com/fonts
2. Search for "Poppins" and select weights: 300, 400, 500, 600, 700, 800
3. Click "Download @font-face kit"
4. Extract the ZIP file
5. Copy all `.woff2` files to `public/fonts/` directory
6. Repeat for "Gagalin" (weight: 400)

## Method 2: Manual Download

1. Visit: https://fonts.google.com/
2. Search for "Poppins" and "Gagalin"
3. Click on each font
4. Select the required weights
5. Click "Download family"
6. Extract the ZIP files
7. Convert TTF files to WOFF2 using an online converter (e.g., https://cloudconvert.com/ttf-to-woff2)
8. Rename files according to the pattern in `public/fonts/fonts.css`:
   - `Poppins-300.woff2`
   - `Poppins-400.woff2`
   - `Poppins-500.woff2`
   - `Poppins-600.woff2`
   - `Poppins-700.woff2`
   - `Poppins-800.woff2`
   - `Gagalin-400.woff2`

## Method 3: Using the Download Script

Run the provided script (requires Node.js):

```bash
node download-fonts.js
```

Note: This script may need adjustments based on Google Fonts API changes.

## File Structure

After downloading, your `public/fonts/` directory should contain:

```
public/fonts/
├── fonts.css
├── Poppins-300.woff2
├── Poppins-400.woff2
├── Poppins-500.woff2
├── Poppins-600.woff2
├── Poppins-700.woff2
├── Poppins-800.woff2
└── Gagalin-400.woff2
```

## Verification

1. Open `public/index.html` - should NOT contain `fonts.googleapis.com`
2. Check `public/fonts/fonts.css` - should contain `@font-face` declarations
3. Test the website - fonts should load from local server
4. Check browser DevTools Network tab - no requests to `fonts.googleapis.com` or `fonts.gstatic.com`

## GDPR Compliance

✅ All fonts are hosted locally
✅ No external connections to Google servers
✅ No IP address transmission to third parties
✅ Compliant with GDPR regulations
