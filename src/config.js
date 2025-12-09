// API Configuration
// Always use deployed backend API
const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  "https://ai-jobs-posting-backend.vercel.app";

export default API_BASE_URL;
