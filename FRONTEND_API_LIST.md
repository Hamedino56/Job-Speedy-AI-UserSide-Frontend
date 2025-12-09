# Frontend API Requirements - Complete List

**Base URL:** `https://backend-job-speedy-ai-user-and-admi.vercel.app`  
**Local Dev:** `http://localhost:5000`

---

## BACKEND ENVIRONMENT VARIABLES

The backend uses the following environment variables (configure in Vercel):

- **`DATABASE_URL`** (required) - PostgreSQL connection string
- **`JWT_SECRET`** (required) - Secret key for JWT token signing
- **`AI_SERVICE_API_KEY`** or **`JOBS_AI_API_KEY`** (optional) - OpenAI API key for AI features
  - Note: Backend checks both variable names, uses whichever is available
  - If not provided, AI features return placeholder responses
- **`PORT`** (optional) - Server port (default: 5000)
- **`NODE_ENV`** (optional) - Environment mode (production/development)

**Important:** The backend does NOT use `OPENAI_API_KEY` - it uses `AI_SERVICE_API_KEY` or `JOBS_AI_API_KEY` instead.

---

## 1. AUTHENTICATION APIs

### 1.1 User Registration
- **Endpoint:** `POST /api/users/register`
- **Auth Required:** No
- **Request Body:**
  ```json
  {
    "full_name": "string (required)",
    "email": "string (required, unique)",
    "password": "string (required)",
    "phone": "string (optional)"
  }
  ```
- **Response:**
  ```json
  {
    "token": "string (JWT)",
    "user": {
      "id": "number",
      "full_name": "string",
      "email": "string",
      "phone": "string | null",
      "created_at": "string (ISO timestamp)"
    }
  }
  ```
- **Error Response:** `{ "error": "string" }`
- **Status Codes:** 201 (Created), 400 (Bad Request), 409 (Conflict - email exists)

---

### 1.2 User Login
- **Endpoint:** `POST /api/users/login`
- **Auth Required:** No
- **Request Body:**
  ```json
  {
    "email": "string (required)",
    "password": "string (required)"
  }
  ```
- **Response:**
  ```json
  {
    "token": "string (JWT)",
    "user": {
      "id": "number",
      "full_name": "string",
      "email": "string",
      "phone": "string | null",
      "created_at": "string (ISO timestamp)"
    }
  }
  ```
- **Error Response:** `{ "error": "string" }`
- **Status Codes:** 200 (OK), 401 (Unauthorized)

---

### 1.3 Get Current User Profile
- **Endpoint:** `GET /api/users/me`
- **Auth Required:** Yes (Bearer Token)
- **Headers:** `Authorization: Bearer <USER_TOKEN>`
- **Response:**
  ```json
  {
    "user": {
      "id": "number",
      "full_name": "string",
      "email": "string",
      "phone": "string | null",
      "created_at": "string (ISO timestamp)"
    }
  }
  ```
- **Error Response:** `{ "error": "string" }`
- **Status Codes:** 200 (OK), 401 (Unauthorized)

---

### 1.4 Admin Registration (if admin panel exists)
- **Endpoint:** `POST /api/admin/register`
- **Auth Required:** No
- **Request Body:**
  ```json
  {
    "email": "string (required, unique)",
    "password": "string (required)"
  }
  ```
- **Response:**
  ```json
  {
    "token": "string (JWT)",
    "admin": {
      "id": "number",
      "email": "string",
      "created_at": "string (ISO timestamp)"
    }
  }
  ```

---

### 1.5 Admin Login (if admin panel exists)
- **Endpoint:** `POST /api/admin/login`
- **Auth Required:** No
- **Request Body:**
  ```json
  {
    "email": "string (required)",
    "password": "string (required)"
  }
  ```
- **Response:**
  ```json
  {
    "token": "string (JWT)",
    "admin": {
      "id": "number",
      "email": "string",
      "created_at": "string (ISO timestamp)"
    }
  }
  ```

---

## 2. JOBS APIs

### 2.1 Get All Jobs (Public)
- **Endpoint:** `GET /api/jobs`
- **Auth Required:** No
- **Query Parameters (all optional):**
  - `search`: string - Search in title/description
  - `location`: string - Filter by location
  - `job_type`: string - Filter by job type (e.g., "Full-time", "Part-time")
  - `category`: string - Filter by category (e.g., "IT", "Healthcare")
  - `status`: string - Filter by status (e.g., "Open", "Closed")
  - `department`: string - Filter by department
  - `limit`: number - Limit results (default: all)
  - `offset`: number - Pagination offset
- **Response:**
  ```json
  {
    "jobs": [
      {
        "id": "number",
        "title": "string",
        "department": "string",
        "description": "string | null",
        "requirements": "string[] (array of strings)",
        "status": "string (default: 'Open')",
        "created_by": "string",
        "created_at": "string (ISO timestamp)",
        "updated_at": "string (ISO timestamp)",
        "client_id": "number | null",
        "company": "string (if populated from clients table)",
        "location": "string (if exists)",
        "job_type": "string (if exists)",
        "category": "string (if exists)",
        "language": "string (if exists)"
      }
    ],
    "count": "number"
  }
  ```
- **Status Codes:** 200 (OK)

---

### 2.2 Get Single Job by ID (Public)
- **Endpoint:** `GET /api/jobs/:id`
- **Auth Required:** No
- **URL Parameter:** `id` (number) - Job ID
- **Response:**
  ```json
  {
    "job": {
      "id": "number",
      "title": "string",
      "department": "string",
      "description": "string | null",
      "requirements": "string[]",
      "status": "string",
      "created_by": "string",
      "created_at": "string (ISO timestamp)",
      "updated_at": "string (ISO timestamp)",
      "client_id": "number | null",
      "company": "string",
      "location": "string",
      "job_type": "string",
      "category": "string",
      "language": "string"
    }
  }
  ```
- **Error Response:** `{ "error": "string" }`
- **Status Codes:** 200 (OK), 404 (Not Found)

---

### 2.3 Create Job (Admin Only)
- **Endpoint:** `POST /api/jobs`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **Request Body:**
  ```json
  {
    "title": "string (required)",
    "department": "string (required)",
    "description": "string (optional)",
    "requirements": "string[] (optional, array of strings)",
    "status": "string (optional, default: 'Open')",
    "created_by": "string (required)",
    "client_id": "number (optional)",
    "location": "string (optional)",
    "job_type": "string (optional)",
    "category": "string (optional)",
    "language": "string (optional)"
  }
  ```
- **Response:**
  ```json
  {
    "job": {
      "id": "number",
      "title": "string",
      "department": "string",
      "description": "string | null",
      "requirements": "string[]",
      "status": "string",
      "created_by": "string",
      "created_at": "string (ISO timestamp)",
      "updated_at": "string (ISO timestamp)",
      "client_id": "number | null"
    }
  }
  ```
- **Status Codes:** 201 (Created), 400 (Bad Request), 401 (Unauthorized)

---

### 2.4 Update Job (Admin Only)
- **Endpoint:** `PUT /api/jobs/:id`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **URL Parameter:** `id` (number) - Job ID
- **Request Body:** (any fields to update)
  ```json
  {
    "title": "string (optional)",
    "department": "string (optional)",
    "description": "string (optional)",
    "requirements": "string[] (optional)",
    "status": "string (optional)",
    "location": "string (optional)",
    "job_type": "string (optional)",
    "category": "string (optional)",
    "language": "string (optional)"
  }
  ```
- **Response:**
  ```json
  {
    "job": {
      "id": "number",
      "title": "string",
      "department": "string",
      "description": "string | null",
      "requirements": "string[]",
      "status": "string",
      "created_by": "string",
      "created_at": "string (ISO timestamp)",
      "updated_at": "string (ISO timestamp)",
      "client_id": "number | null"
    }
  }
  ```
- **Status Codes:** 200 (OK), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found)

---

### 2.5 Delete Job (Admin Only)
- **Endpoint:** `DELETE /api/jobs/:id`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **URL Parameter:** `id` (number) - Job ID
- **Response:**
  ```json
  {
    "success": "boolean",
    "message": "string"
  }
  ```
- **Status Codes:** 200 (OK), 401 (Unauthorized), 404 (Not Found)

---

## 3. APPLICATIONS APIs

### 3.1 Create Application (User)
- **Endpoint:** `POST /api/applications`
- **Auth Required:** Yes (User Bearer Token)
- **Headers:** `Authorization: Bearer <USER_TOKEN>`
- **Content-Type:** `multipart/form-data`
- **Form Data Fields:**
  - `job_id`: number (required) - Job ID to apply for
  - `resume`: File (required) - Resume file (PDF, DOC, DOCX, TXT, RTF, ODT)
  - `cover_letter`: string (optional) - Cover letter text
  - `name`: string (optional) - Applicant name
  - `email`: string (optional) - Applicant email
  - `phone`: string (optional) - Applicant phone
  - `user_id`: number (optional) - User ID (from token)
  - `user_email`: string (optional) - User email (from token)
  - `ai_parsed_data`: string (optional) - JSON stringified parsed resume data
- **Response:**
  ```json
  {
    "application": {
      "id": "number",
      "user_id": "number",
      "job_id": "number",
      "resume_url": "string | null",
      "resume_filename": "string | null",
      "resume_mime": "string | null",
      "cover_letter": "string | null",
      "status": "string (default: 'Pending')",
      "ai_parsed_data": "object | null (JSONB)",
      "admin_notes": "string | null",
      "created_at": "string (ISO timestamp)",
      "updated_at": "string (ISO timestamp)"
    }
  }
  ```
- **Error Response:** `{ "error": "string", "message": "string" }`
- **Status Codes:** 201 (Created), 400 (Bad Request), 401 (Unauthorized), 409 (Conflict - already applied)

---

### 3.2 Get All Applications (Admin Only)
- **Endpoint:** `GET /api/applications`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **Query Parameters (all optional):**
  - `status`: string - Filter by status (e.g., "Pending", "Shortlisted", "Rejected")
  - `user_id`: number - Filter by user ID
  - `job_id`: number - Filter by job ID
  - `limit`: number - Limit results
  - `offset`: number - Pagination offset
- **Response:**
  ```json
  {
    "applications": [
      {
        "id": "number",
        "user_id": "number",
        "job_id": "number",
        "resume_url": "string | null",
        "resume_filename": "string | null",
        "resume_mime": "string | null",
        "cover_letter": "string | null",
        "status": "string",
        "ai_parsed_data": "object | null",
        "admin_notes": "string | null",
        "created_at": "string (ISO timestamp)",
        "updated_at": "string (ISO timestamp)",
        "user": {
          "id": "number",
          "full_name": "string",
          "email": "string"
        },
        "job": {
          "id": "number",
          "title": "string",
          "department": "string"
        }
      }
    ],
    "count": "number"
  }
  ```
- **Status Codes:** 200 (OK), 401 (Unauthorized)

---

### 3.3 Get Single Application
- **Endpoint:** `GET /api/applications/:id`
- **Auth Required:** Yes (Admin Bearer Token or User Token for own application)
- **Headers:** `Authorization: Bearer <TOKEN>`
- **URL Parameter:** `id` (number) - Application ID
- **Response:**
  ```json
  {
    "application": {
      "id": "number",
      "user_id": "number",
      "job_id": "number",
      "resume_url": "string | null",
      "resume_filename": "string | null",
      "resume_mime": "string | null",
      "cover_letter": "string | null",
      "status": "string",
      "ai_parsed_data": "object | null",
      "admin_notes": "string | null",
      "created_at": "string (ISO timestamp)",
      "updated_at": "string (ISO timestamp)"
    }
  }
  ```
- **Status Codes:** 200 (OK), 401 (Unauthorized), 404 (Not Found)

---

### 3.4 Get Applications for a Job (Admin Only)
- **Endpoint:** `GET /api/jobs/:jobId/applications`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **URL Parameter:** `jobId` (number) - Job ID
- **Response:**
  ```json
  {
    "applications": [
      {
        "id": "number",
        "user_id": "number",
        "job_id": "number",
        "resume_url": "string | null",
        "resume_filename": "string | null",
        "resume_mime": "string | null",
        "cover_letter": "string | null",
        "status": "string",
        "ai_parsed_data": "object | null",
        "admin_notes": "string | null",
        "created_at": "string (ISO timestamp)",
        "updated_at": "string (ISO timestamp)",
        "user": {
          "id": "number",
          "full_name": "string",
          "email": "string"
        }
      }
    ],
    "count": "number"
  }
  ```
- **Status Codes:** 200 (OK), 401 (Unauthorized), 404 (Not Found)

---

### 3.5 Update Application (Admin Only)
- **Endpoint:** `PUT /api/applications/:id`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **URL Parameter:** `id` (number) - Application ID
- **Request Body:**
  ```json
  {
    "status": "string (optional, e.g., 'Pending', 'Shortlisted', 'Rejected', 'Accepted')",
    "admin_notes": "string (optional)"
  }
  ```
- **Response:**
  ```json
  {
    "application": {
      "id": "number",
      "user_id": "number",
      "job_id": "number",
      "resume_url": "string | null",
      "resume_filename": "string | null",
      "resume_mime": "string | null",
      "cover_letter": "string | null",
      "status": "string",
      "ai_parsed_data": "object | null",
      "admin_notes": "string | null",
      "created_at": "string (ISO timestamp)",
      "updated_at": "string (ISO timestamp)"
    }
  }
  ```
- **Status Codes:** 200 (OK), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found)

---

### 3.6 Delete Application (Admin Only)
- **Endpoint:** `DELETE /api/applications/:id`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **URL Parameter:** `id` (number) - Application ID
- **Response:**
  ```json
  {
    "success": "boolean",
    "message": "string"
  }
  ```
- **Status Codes:** 200 (OK), 401 (Unauthorized), 404 (Not Found)

---

## 4. APPLICANTS APIs (Resume Parsing)

### 4.1 Create/Parse Applicant Resume
- **Endpoint:** `POST /api/applicants`
- **Auth Required:** No
- **Content-Type:** `multipart/form-data`
- **Form Data Fields:**
  - `resume`: File (required) - Resume file (PDF, DOC, DOCX, TXT, RTF, ODT)
  - `name`: string (required) - Applicant name
  - `email`: string (required) - Applicant email
  - `phone`: string (optional) - Applicant phone
  - `skills`: string (optional) - JSON stringified array of skills (if already parsed)
  - `experience`: string (optional) - JSON stringified array of experience objects (if already parsed)
  - `education`: string (optional) - Education string (if already parsed)
- **Response:**
  ```json
  {
    "applicant": {
      "id": "number",
      "name": "string",
      "email": "string",
      "phone": "string | null",
      "skills": "string[]",
      "experience": "string (JSON stringified array)",
      "education": "string | null",
      "classification": {
        "stack": "string",
        "percentage": "number (0-100)",
        "role": "string",
        "reasoning": "string"
      },
      "created_at": "string (ISO timestamp)"
    }
  }
  ```
- **Note:** 
  - Stores resume data in `applicants` table with binary storage (`resume_data`, `resume_filename`, `resume_mime`)
  - Classification is generated using OpenAI if `AI_SERVICE_API_KEY` is configured
  - If OpenAI is not available, returns default classification
- **Status Codes:** 201 (Created), 400 (Bad Request)

---

### 4.2 Get Applicant by ID
- **Endpoint:** `GET /api/applicants/:id`
- **Auth Required:** No (or Admin if you want to restrict)
- **URL Parameter:** `id` (number) - Applicant ID
- **Response:**
  ```json
  {
    "applicant": {
      "id": "number",
      "name": "string",
      "email": "string",
      "phone": "string | null",
      "skills": "string[]",
      "experience": "array of objects",
      "education": "string",
      "classification": "object",
      "created_at": "string (ISO timestamp)"
    }
  }
  ```
- **Status Codes:** 200 (OK), 404 (Not Found)

---

## 5. ADDITIONAL ADMIN AUTH ENDPOINTS (Alternative Routes)

### 5.1 Alternative Admin Registration
- **Endpoint:** `POST /api/auth/register-admin`
- **Auth Required:** No
- **Request Body:**
  ```json
  {
    "email": "string (required)",
    "password": "string (required)"
  }
  ```
- **Response:**
  ```json
  {
    "user": {
      "id": "number",
      "email": "string"
    },
    "token": "string (JWT)"
  }
  ```
- **Note:** Alternative route to `/api/admin/register` with different response format

---

### 5.2 Alternative Admin Login
- **Endpoint:** `POST /api/auth/login-admin`
- **Auth Required:** No
- **Request Body:**
  ```json
  {
    "email": "string (required)",
    "password": "string (required)"
  }
  ```
- **Response:**
  ```json
  {
    "user": {
      "id": "number",
      "email": "string"
    },
    "token": "string (JWT)"
  }
  ```
- **Note:** Alternative route to `/api/admin/login` with different response format

---

### 5.3 Admin Password Reset
- **Endpoint:** `POST /api/auth/reset-password`
- **Auth Required:** No
- **Request Body:**
  ```json
  {
    "email": "string (required)",
    "newPassword": "string (required)"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Password reset successfully"
  }
  ```
- **Status Codes:** 200 (OK), 400 (Bad Request), 404 (Not Found)

---

## 6. ADDITIONAL JOBS ENDPOINTS

### 6.1 Generate Job Ad with AI (Admin Only)
- **Endpoint:** `POST /api/jobs/generate-ad`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **Request Body:**
  ```json
  {
    "description": "string (required)"
  }
  ```
- **Response:**
  ```json
  {
    "jobAd": {
      "title": "string",
      "company": "string | null",
      "department": "string | null",
      "location": "string | null",
      "job_type": "string | null",
      "category": "string | null",
      "language": "string | null",
      "status": "string | null",
      "description": "string",
      "required_skills": "string[]",
      "requirements": "string[]"
    }
  }
  ```
- **Note:** Uses OpenAI if `AI_SERVICE_API_KEY` is configured, otherwise returns placeholder

---

### 6.2 Get Job XML Feed
- **Endpoint:** `GET /api/jobs/:id/xml-feed/:portal`
- **Auth Required:** No
- **URL Parameters:**
  - `id` (number) - Job ID
  - `portal` (string) - Portal name (e.g., "indeed", "linkedin")
- **Response:** XML format
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <job>
    <title>Job Title</title>
    <description>Job Description</description>
    <company>Company Name</company>
    <location>Location</location>
  </job>
  ```
- **Content-Type:** `application/xml`
- **Status Codes:** 200 (OK), 404 (Not Found)

---

## 7. USERS MANAGEMENT APIs (Admin Only)

### 7.1 Get All Users
- **Endpoint:** `GET /api/users`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **Response:**
  ```json
  {
    "users": [
      {
        "id": "number",
        "full_name": "string",
        "email": "string",
        "phone": "string | null",
        "created_at": "string (ISO timestamp)"
      }
    ]
  }
  ```
- **Status Codes:** 200 (OK), 401 (Unauthorized)

---

### 7.2 Get User by ID
- **Endpoint:** `GET /api/users/:id`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **URL Parameter:** `id` (number) - User ID
- **Response:**
  ```json
  {
    "user": {
      "id": "number",
      "full_name": "string",
      "email": "string",
      "phone": "string | null",
      "created_at": "string (ISO timestamp)"
    }
  }
  ```
- **Status Codes:** 200 (OK), 401 (Unauthorized), 404 (Not Found)

---

### 7.3 Delete User
- **Endpoint:** `DELETE /api/users/:id`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **URL Parameter:** `id` (number) - User ID
- **Response:**
  ```json
  {
    "message": "User deleted successfully",
    "id": "number"
  }
  ```
- **Status Codes:** 200 (OK), 401 (Unauthorized), 404 (Not Found)

---

### 7.4 Get User Applications
- **Endpoint:** `GET /api/users/:id/applications`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **URL Parameter:** `id` (number) - User ID
- **Response:**
  ```json
  {
    "applications": [
      {
        "id": "number",
        "user_id": "number",
        "job_id": "number",
        "job_title": "string",
        "job_description": "string | null",
        "status": "string",
        "resume_url": "string | null",
        "resume_filename": "string | null",
        "ai_parsed_data": "object | null",
        "created_at": "string (ISO timestamp)"
      }
    ]
  }
  ```
- **Status Codes:** 200 (OK), 401 (Unauthorized), 404 (Not Found)

---

## 8. CLIENTS APIs (Admin Only)

### 8.1 Get All Clients
- **Endpoint:** `GET /api/clients`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **Response:**
  ```json
  {
    "clients": [
      {
        "id": "number",
        "company": "string",
        "contact_person": "string | null",
        "email": "string | null",
        "created_at": "string (ISO timestamp)",
        "jobs_count": "number"
      }
    ]
  }
  ```
- **Status Codes:** 200 (OK), 401 (Unauthorized)

---

### 8.2 Create Client
- **Endpoint:** `POST /api/clients`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **Request Body:**
  ```json
  {
    "company": "string (required)",
    "contact_person": "string (optional)",
    "email": "string (optional)"
  }
  ```
- **Response:**
  ```json
  {
    "client": {
      "id": "number",
      "company": "string",
      "contact_person": "string | null",
      "email": "string | null",
      "created_at": "string (ISO timestamp)"
    }
  }
  ```
- **Status Codes:** 201 (Created), 400 (Bad Request), 401 (Unauthorized), 409 (Conflict - company exists)

---

### 8.3 Update Client
- **Endpoint:** `PUT /api/clients/:id`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **URL Parameter:** `id` (number) - Client ID
- **Request Body:**
  ```json
  {
    "company": "string (optional)",
    "contact_person": "string (optional)",
    "email": "string (optional)"
  }
  ```
- **Response:**
  ```json
  {
    "client": {
      "id": "number",
      "company": "string",
      "contact_person": "string | null",
      "email": "string | null",
      "created_at": "string (ISO timestamp)"
    }
  }
  ```
- **Status Codes:** 200 (OK), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found)

---

### 8.4 Delete Client
- **Endpoint:** `DELETE /api/clients/:id`
- **Auth Required:** Yes (Admin Bearer Token)
- **Headers:** `Authorization: Bearer <ADMIN_TOKEN>`
- **URL Parameter:** `id` (number) - Client ID
- **Response:**
  ```json
  {
    "message": "Client deleted successfully",
    "id": "number"
  }
  ```
- **Status Codes:** 200 (OK), 401 (Unauthorized), 404 (Not Found)

---

## 9. TOOLS APIs

### 9.1 Extract Skills from Resume
- **Endpoint:** `POST /api/tools/extract-skills`
- **Auth Required:** No
- **Content-Type:** `multipart/form-data`
- **Form Data Fields:**
  - `resume`: File (required) - Resume file (PDF, DOC, DOCX, TXT, RTF, ODT)
- **Response:**
  ```json
  {
    "parsed": {
      "skills": "string[]",
      "contact": {
        "name": "string | null",
        "email": "string | null",
        "phone": "string | null",
        "location": "string | null"
      },
      "summary": "string",
      "experience": [
        {
          "title": "string",
          "company": "string",
          "start_date": "string",
          "end_date": "string",
          "responsibilities": "string[]"
        }
      ],
      "education": [
        {
          "degree": "string",
          "institution": "string",
          "year": "string"
        }
      ],
      "certifications": "string[]",
      "languages": "string[]",
      "links": "string[]"
    }
  }
  ```
- **Note:** Uses OpenAI if `AI_SERVICE_API_KEY` is configured, otherwise returns placeholder data
- **Status Codes:** 200 (OK), 400 (Bad Request), 500 (Internal Server Error)

---

## 10. HEALTH CHECK

### 10.1 Health Check
- **Endpoint:** `GET /health`
- **Auth Required:** No
- **Response:**
  ```json
  {
    "status": "ok",
    "database": "connected"
  }
  ```
- **Error Response:**
  ```json
  {
    "status": "error",
    "database": "disconnected"
  }
  ```
- **Status Codes:** 200 (OK), 500 (Internal Server Error)

---

## 11. DATA TYPES REFERENCE

### Job Object
```typescript
{
  id: number;
  title: string;
  department: string;
  description: string | null;
  requirements: string[];  // Array of strings
  status: string;  // "Open" | "Closed"
  created_by: string;
  created_at: string;  // ISO timestamp
  updated_at: string;  // ISO timestamp
  client_id: number | null;
  company?: string;  // If populated from clients table
  location?: string;
  job_type?: string;
  category?: string;
  language?: string;
}
```

### Application Object
```typescript
{
  id: number;
  user_id: number;
  job_id: number;
  resume_url: string | null;
  resume_filename: string | null;
  resume_mime: string | null;
  resume_data?: bytea;  // Binary data (server-side only)
  cover_letter: string | null;
  status: string;  // "Pending" | "Shortlisted" | "Rejected" | "Accepted"
  ai_parsed_data: object | null;  // JSONB object
  admin_notes: string | null;
  created_at: string;  // ISO timestamp
  updated_at: string;  // ISO timestamp
}
```

### User Object
```typescript
{
  id: number;
  full_name: string;
  email: string;
  phone: string | null;
  created_at: string;  // ISO timestamp
}
```

### Admin Object
```typescript
{
  id: number;
  email: string;
  created_at: string;  // ISO timestamp
}
```

### Applicant Object
```typescript
{
  id: number;
  name: string;
  email: string;
  phone: string | null;
  skills: string[];
  experience: Array<{
    role: string;
    company: string;
    years: number | null;
    duration?: string;
    summary?: string;
  }>;
  education: string;
  classification: {
    stack: string;
    percentage: number;  // 0-100
    role: string;
    reasoning: string;
  };
  created_at: string;  // ISO timestamp
}
```

### AI Parsed Data Object (stored in applications.ai_parsed_data)
```typescript
{
  skills: string[];
  experience: Array<{
    role: string;
    company: string;
    years: number | null;
    duration?: string;
    summary?: string;
  }>;
  education: string;
  classification?: {
    stack: string;
    percentage: number;
    role: string;
    reasoning: string;
  };
}
```

---

## 12. ERROR RESPONSES

All endpoints may return errors in this format:
```json
{
  "error": "string (error message)",
  "message": "string (optional, additional details)"
}
```

**Common HTTP Status Codes:**
- `200` - OK (Success)
- `201` - Created (Resource created successfully)
- `400` - Bad Request (Invalid input/data)
- `401` - Unauthorized (Missing or invalid token)
- `403` - Forbidden (Insufficient permissions)
- `404` - Not Found (Resource doesn't exist)
- `409` - Conflict (Resource already exists, e.g., duplicate email)
- `500` - Internal Server Error (Server error)

---

## 13. AUTHENTICATION

### JWT Token Format
- **Header:** `Authorization: Bearer <TOKEN>`
- Token is returned on login/register
- Store token in `localStorage` or secure storage
- Include token in `Authorization` header for protected endpoints

### Token Expiration
- Check with backend team for token expiration policy
- Handle 401 responses by redirecting to login

---

## 14. FRONTEND IMPLEMENTATION NOTES

### Currently Used APIs (from code review):
1. ✅ `GET /api/jobs` - Job listings page
2. ✅ `GET /api/jobs/:id` - Job details page
3. ✅ `POST /api/users/register` - Registration page
4. ✅ `POST /api/users/login` - Login page
5. ✅ `POST /api/applications` - Application submission
6. ✅ `POST /api/applicants` - Resume parsing

### APIs Not Yet Implemented (may be needed):
- `GET /api/users/me` - Get current user profile
- `GET /api/applications` - View user's applications (if user dashboard exists)
- `GET /api/applications/:id` - View single application
- `GET /api/jobs/:jobId/applications` - View applications for a job (admin)

### Important Backend Configuration Notes:
- **OpenAI API Key:** Backend uses `AI_SERVICE_API_KEY` or `JOBS_AI_API_KEY` (NOT `OPENAI_API_KEY`)
- **Database:** Backend uses `DATABASE_URL` environment variable
- **JWT Secret:** Backend uses `JWT_SECRET` environment variable
- **File Storage:** Applications store resume files as binary data (`resume_data` column) in the database
- **Applicants Table:** Separate `applicants` table stores parsed resume data with binary file storage

---

## 15. FILE UPLOAD SPECIFICATIONS

### Supported File Types:
- PDF (`.pdf`, `application/pdf`)
- DOC (`.doc`, `application/msword`)
- DOCX (`.docx`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`)
- TXT (`.txt`, `text/plain`)
- RTF (`.rtf`, `application/rtf`, `text/rtf`)
- ODT (`.odt`, `application/vnd.oasis.opendocument.text`)

### File Size Limits:
- Check with backend team for maximum file size (typically 5-10MB)

---

## 16. PAGINATION

For endpoints that support pagination:
- Use `limit` and `offset` query parameters
- `limit`: Number of items per page (e.g., 10, 20, 50)
- `offset`: Number of items to skip (e.g., 0, 10, 20)
- Response includes `count` field with total number of items

---

**Last Updated:** Based on database schema and frontend code review  
**Backend URL:** `https://backend-job-speedy-ai-user-and-admi.vercel.app`

