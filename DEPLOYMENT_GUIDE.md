# JobSpeedy AI - Deployment Guide

## Quick Setup for Neon Postgres + Vercel Deployment

### Step 1: Create Neon Postgres Database

1. Go to [Neon Console](https://console.neon.tech)
2. Create a new project
3. Copy your connection string (looks like: `postgresql://user:password@host/database?sslmode=require`)

### Step 2: Create Database Tables

1. Open the SQL Editor in Neon Console
2. Copy the entire contents of `neon-schema.sql`
3. Paste and execute it in the SQL Editor
4. This will create all required tables:
   - `admin_users` - Admin authentication
   - `users` - Regular user accounts
   - `jobs` - Job listings
   - `applicants` - Resume parsing data
   - `applications` - Job applications

### Step 3: Deploy Backend to Vercel

**Important:** Vercel doesn't natively support Node.js backend servers well. You have two options:

#### Option A: Deploy Backend Separately (Recommended)
- Deploy backend to **Railway**, **Render**, or **Heroku**
- These platforms are better for Node.js/Express servers

#### Option B: Use Vercel Serverless Functions
- You'll need to refactor routes into serverless functions

### Step 4: Deploy Frontend to Vercel

1. Go to [Vercel Dashboard](https://vercel.com)
2. Import your Git repository
3. Set the following environment variable:
   ```
   REACT_APP_API_URL=https://your-backend-url.com
   ```
   Replace `https://your-backend-url.com` with your deployed backend URL
4. Deploy

### Step 5: Backend Environment Variables

Set these environment variables in your backend deployment platform:

```
PGHOST=your-neon-host
PGPORT=5432
PGDATABASE=your-database-name
PGUSER=your-username
PGPASSWORD=your-password
PGSSLMODE=require
PORT=4000
OPENAI_API_KEY=your-openai-key (optional, for AI features)
```

### Step 6: Update Frontend API URL

Once your backend is deployed, update the frontend environment variable in Vercel:
- Go to Vercel Project Settings → Environment Variables
- Add/Update: `REACT_APP_API_URL` = your backend URL
- Redeploy

## Database Schema Overview

The `neon-schema.sql` file contains 5 simple tables:

1. **admin_users** - Admin login credentials
2. **users** - Regular user accounts (registration/login)
3. **jobs** - Job postings with filters
4. **applicants** - Resume parsing results
5. **applications** - Job applications linking users to jobs

All tables are simple and optimized for Neon Postgres.

## Testing Locally

1. Set up Neon Postgres and run the schema
2. Create `.env` file in `server/` directory:
   ```
   PGHOST=your-neon-host
   PGPORT=5432
   PGDATABASE=your-db-name
   PGUSER=your-username
   PGPASSWORD=your-password
   PGSSLMODE=require
   PORT=4000
   ```
3. Run backend: `cd server && npm install && npm start`
4. Run frontend: `npm install && npm start`
5. Frontend will use `http://localhost:4000` by default

## Notes

- The frontend automatically uses `REACT_APP_API_URL` environment variable if set
- If not set, it defaults to `http://localhost:4000` for local development
- All API calls in the frontend now use the centralized config file (`src/config.js`)

