import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import i18n from "./i18n"; // i18n config

import LandingPage from "./components/LandingPage";
import JobListings from "./components/JobListings";
import JobDetailsPage from "./components/JobDetailsPage";
import LoginPage from "./components/LoginPage"; // <-- added
import RegisterPage from "./components/RegisterPage"; // <-- added
import ApplicationPage from "./components/ApplicationPage";
import AboutPage from "./components/AboutPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AICompliance from "./components/AICompliance";
import Impressum from "./components/Impressum";
import TermsOfUse from "./components/TermsOfUse";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/jobs/:id" element={<JobDetailsPage />} />
          <Route path="/apply" element={<ApplicationPage />} />
          <Route path="/apply/:id" element={<ApplicationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/ai-compliance" element={<AICompliance />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/terms" element={<TermsOfUse />} />

          {/* Admin routes removed for public-only build */}
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Router>
    </I18nextProvider>
  );
};

export default App;
