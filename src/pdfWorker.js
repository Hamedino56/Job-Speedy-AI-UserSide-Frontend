// PDF.js Worker Configuration
// This file configures the PDF.js worker to use jsdelivr CDN
// jsdelivr has better CORS support than unpkg and works reliably

import { GlobalWorkerOptions } from "pdfjs-dist/build/pdf";
import * as pdfjsLib from "pdfjs-dist";

// Get the version from the installed package
const version = pdfjsLib.version || "5.4.449";

// Use jsdelivr CDN - it has proper CORS headers and is more reliable than unpkg
// This CDN is specifically designed for npm packages and handles CORS correctly
GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${version}/build/pdf.worker.min.mjs`;

// Alternative: If jsdelivr doesn't work, try cdnjs (uncomment below):
// GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.mjs`;

console.log("PDF.js worker configured:", GlobalWorkerOptions.workerSrc);
console.log("PDF.js version:", version);
console.log("Using jsdelivr CDN (better CORS support than unpkg)");

