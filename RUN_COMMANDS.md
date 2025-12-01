# Commands to Run Your Code

## 🚀 Frontend (React App)

### 1. Install Dependencies (First Time Only)
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```
This will start the React app on `http://localhost:3000`

---

## 🧪 Test OpenAI on Deployed Server

### Option 1: Test via Browser Console
1. Open your app in browser
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Upload a CV and click "Parse Resume"
5. Check the console logs for:
   - "Trying /api/parse-resume endpoint..."
   - "Parse-resume raw response: ..."
   - Look for `skills`, `experience`, `education` in the response

### Option 2: Test via API Directly (Using curl or Postman)

#### Test Parse Resume Endpoint:
```bash
curl -X POST https://ai-jobs-posting-w5yb.vercel.app/api/parse-resume \
  -F "resume=@your-resume.pdf" \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "phone=+1234567890"
```

#### Test Applicants Endpoint:
```bash
curl -X POST https://ai-jobs-posting-w5yb.vercel.app/api/applicants \
  -F "resume=@your-resume.pdf" \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "phone=+1234567890"
```

---

## ⚙️ Verify OpenAI is Configured on Deployed Server

### The Issue:
Your deployed server at `https://ai-jobs-posting-w5yb.vercel.app` needs to have the OpenAI API key configured in its environment variables.

### How to Fix (Vercel):

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project: `ai-jobs-posting-w5yb`

2. **Add Environment Variable**
   - Go to: Settings → Environment Variables
   - Add new variable:
     - **Name**: `OPENAI_API_KEY`
     - **Value**: Your OpenAI API key (starts with `sk-...`)
     - **Environment**: Production, Preview, Development (select all)

3. **Redeploy**
   - After adding the variable, go to Deployments
   - Click "..." on the latest deployment
   - Click "Redeploy"

### Verify It's Working:

After redeploying, test the endpoint:
```bash
# Replace with your actual PDF file path
curl -X POST https://ai-jobs-posting-w5yb.vercel.app/api/parse-resume \
  -F "resume=@test.pdf" \
  -F "name=Test" \
  -F "email=test@test.com"
```

**Expected Response (if OpenAI is working):**
```json
{
  "id": 123,
  "applicantId": 123,
  "skills": ["JavaScript", "React", "Node.js"],
  "experience": [{"role": "Developer", "company": "Tech Corp", "years": 5}],
  "education": "BS in Computer Science",
  "classification": "85% Full Stack Developer"
}
```

**If OpenAI is NOT configured, you'll get:**
```json
{
  "id": 123,
  "applicantId": 123,
  "skills": [],
  "experience": [],
  "education": "",
  "classification": "0% Unknown Role"
}
```

---

## 🔍 Debug Steps

### 1. Check Server Logs (Vercel)
- Go to Vercel Dashboard → Your Project → Deployments
- Click on latest deployment → Functions tab
- Check for errors related to OpenAI

### 2. Check Browser Console
- Open browser DevTools (F12)
- Go to Network tab
- Click "Parse Resume"
- Check the request/response for `/api/parse-resume` or `/api/applicants`
- Look at the response body

### 3. Test with a Simple PDF
- Make sure your PDF has readable text (not just images)
- Try with a simple text-based PDF first

---

## 📝 Quick Commands Summary

```bash
# Install frontend dependencies
npm install

# Start frontend (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Test API endpoint (replace with your PDF path)
curl -X POST https://ai-jobs-posting-w5yb.vercel.app/api/parse-resume \
  -F "resume=@resume.pdf" \
  -F "name=Your Name" \
  -F "email=your@email.com"
```

---

## ✅ Success Indicators

When OpenAI is working correctly, you should see:
- ✅ Skills array with values like `["JavaScript", "React", "Node.js"]`
- ✅ Experience array with job history
- ✅ Education string with degree information
- ✅ Classification like `"85% Full Stack Developer"`

If you see empty arrays `[]` and empty strings `""`, OpenAI is not configured on the server.

