// Test script to check if OpenAI is working on deployed server
// Run with: node test-openai.js

const API_BASE_URL = "https://ai-jobs-posting-w5yb.vercel.app";
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

async function testOpenAI() {
  console.log('🧪 Testing OpenAI on deployed server...\n');
  
  // Test 1: Check if parse-resume endpoint exists
  console.log('1. Testing /api/parse-resume endpoint...');
  try {
    // Create a dummy PDF or use a test file
    const form = new FormData();
    form.append('resume', fs.createReadStream(path.join(__dirname, 'test-resume.pdf')), {
      filename: 'test-resume.pdf',
      contentType: 'application/pdf'
    });
    form.append('name', 'Test User');
    form.append('email', 'test@example.com');
    form.append('phone', '+1234567890');
    
    const res = await fetch(`${API_BASE_URL}/api/parse-resume`, {
      method: 'POST',
      body: form,
    });
    
    const data = await res.json();
    console.log('Response status:', res.status);
    console.log('Response data:', JSON.stringify(data, null, 2));
    
    if (data.skills && data.skills.length > 0) {
      console.log('✅ OpenAI is WORKING! Got parsed skills:', data.skills);
    } else {
      console.log('⚠️  OpenAI might not be configured. No skills returned.');
    }
  } catch (error) {
    console.log('❌ Error:', error.message);
    if (error.message.includes('ENOENT')) {
      console.log('   (No test PDF file found - create a test-resume.pdf file to test)');
    }
  }
  
  // Test 2: Check if applicants endpoint works
  console.log('\n2. Testing /api/applicants endpoint...');
  try {
    const form2 = new FormData();
    // Try without file first to see error message
    form2.append('name', 'Test User');
    form2.append('email', 'test@example.com');
    
    const res2 = await fetch(`${API_BASE_URL}/api/applicants`, {
      method: 'POST',
      body: form2,
    });
    
    const data2 = await res2.json();
    console.log('Response status:', res2.status);
    console.log('Response:', JSON.stringify(data2, null, 2));
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
  
  // Test 3: Check health endpoint
  console.log('\n3. Testing /api/health endpoint...');
  try {
    const res3 = await fetch(`${API_BASE_URL}/api/health`);
    const data3 = await res3.json();
    console.log('Health check:', JSON.stringify(data3, null, 2));
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}

testOpenAI().catch(console.error);

