# PostgreSQL Database Tables for JobSpeedy AI

## Simple Table Structure for Neon Postgres

Run the SQL commands from `neon-schema.sql` in your Neon Postgres database.

### Tables Overview

#### 1. **admin_users**
Stores admin login credentials.
- `id` - Primary key (auto-increment)
- `email` - Unique email address
- `password_hash` - Hashed password
- `created_at` - Timestamp

#### 2. **users**
Stores regular user accounts (for registration/login).
- `id` - Primary key (auto-increment)
- `full_name` - User's full name
- `email` - Unique email address
- `password_hash` - Hashed password
- `created_at` - Timestamp

#### 3. **jobs**
Stores job postings.
- `id` - Primary key (auto-increment)
- `title` - Job title
- `company` - Company name
- `description` - Job description
- `required_skills` - Array of skills (TEXT[])
- `location` - Job location
- `job_type` - Type (e.g., "Full Time", "Remote")
- `category` - Category (e.g., "Engineering", "AI")
- `language` - Language (e.g., "English")
- `created_at` - Timestamp

#### 4. **applicants**
Stores parsed resume data.
- `id` - Primary key (auto-increment)
- `name` - Applicant name
- `email` - Applicant email
- `phone` - Phone number
- `skills` - Array of skills (TEXT[])
- `experience` - JSONB field for work experience
- `education` - Education information
- `resume_filename` - Original filename
- `resume_mime` - MIME type
- `resume_data` - Binary resume file (BYTEA)
- `created_at` - Timestamp

#### 5. **applications**
Stores job applications (links users/jobs with resumes).
- `id` - Primary key (auto-increment)
- `job_id` - Foreign key to jobs table
- `user_id` - Foreign key to users table (nullable)
- `name` - Applicant name
- `email` - Applicant email
- `phone` - Phone number
- `resume_filename` - Resume filename
- `resume_mime` - Resume MIME type
- `resume_data` - Binary resume file (BYTEA)
- `ai_parsed_data` - JSONB field for AI parsing results
- `created_at` - Timestamp
- `updated_at` - Timestamp
- Unique constraint on (user_id, job_id) to prevent duplicate applications

### Indexes

The schema includes indexes on:
- `applications.job_id`
- `applications.user_id`
- `jobs.location`
- `jobs.job_type`
- `jobs.category`

These improve query performance for filtering and searching.

### Relationships

- `applications.job_id` → `jobs.id` (CASCADE delete)
- `applications.user_id` → `users.id` (SET NULL on delete)

## Quick Setup

1. Copy entire `neon-schema.sql` file
2. Paste into Neon Postgres SQL Editor
3. Execute
4. Done! Your database is ready.



