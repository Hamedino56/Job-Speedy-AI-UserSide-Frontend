# JobSpeedy AI - Frontend Deployment Guide

## 🚀 Frontend-Only Deployment on Vercel

This is a **frontend-only** React application that uses an external backend API.

### Prerequisites
- Node.js 18+ installed
- GitHub account
- Vercel account (free tier works)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure API Endpoint
The frontend is configured to use an external backend API. Update `src/config.js` if needed:
```javascript
const API_BASE_URL = "https://your-backend-api-url.com";
```

### Step 3: Build Locally (Test)
```bash
npm run build
```

### Step 4: Deploy to Vercel

#### Option A: Via Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Framework: **Create React App**
5. Build Command: `npm run build`
6. Output Directory: `build`
7. Click "Deploy"

#### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Step 5: Environment Variables (if needed)
If your frontend needs any environment variables:
- Go to Vercel Dashboard → Project Settings → Environment Variables
- Add variables with prefix `REACT_APP_` (e.g., `REACT_APP_API_URL`)

### Build Configuration
The project uses:
- **Framework:** Create React App
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Node Version:** 18 (specified in `.nvmrc`)

### Notes
- ✅ This is a **frontend-only** application
- ✅ Uses external backend API (configured in `src/config.js`)
- ✅ No server-side code included
- ✅ Database schema file (`neon-schema.sql`) is kept for reference only

### Troubleshooting
- If build fails, check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify API endpoint is accessible from browser

---

**Last Updated:** After frontend-only cleanup
