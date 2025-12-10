import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 bg-gradient-to-r from-indigo-100 via-white to-purple-100 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-2">JobSpeedy AI</h3>
            <p className="text-gray-600 text-sm">
              Empowering your recruitment journey with AI-powered job matching and career insights.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-3">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-[#0477BF] transition-colors">
                  {t("Datenschutz")}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-[#0477BF] transition-colors">
                  {t("Nutzungsbedingungen")}
                </a>
              </li>
              <li>
                <a href="/impressum" className="text-gray-600 hover:text-[#0477BF] transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/ai-compliance" className="text-gray-600 hover:text-[#0477BF] transition-colors">
                  KI Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>support@jobspeedy.ai</li>
              <li>+49 821 / 486 99 516</li>
              <li>Alfred-Nobel-Str. 9</li>
              <li>86156 Augsburg</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2025 JobSpeedy AI | {t("All Rights Reserved")}</p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <span>Language: 🇬🇧 🇩🇪</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

