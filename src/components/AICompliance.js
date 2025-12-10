import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const pageMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 }
};

const AICompliance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f3ff] via-white to-[#eef4ff] text-gray-800">
      <Navbar />
      <div style={{ height: 70 }} />

      <div className="px-4 md:px-8 lg:px-12 pt-6 pb-16">
        <motion.div
          {...pageMotion}
          className="max-w-6xl mx-auto bg-white/85 backdrop-blur rounded-3xl border border-slate-200 shadow-xl shadow-sky-100 p-6 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full">
                🤖 KI Datenschutz
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">ChatGPT- & KI-Compliance</h1>
              <p className="text-slate-600 mt-2">
                Transparenz, Datenschutz und Grenzen unseres KI-Einsatzes bei JobSpeedy AI.
              </p>
            </div>
            <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white px-4 py-3 rounded-2xl shadow-lg">
              <p className="text-sm font-semibold">Version</p>
              <p className="text-lg font-bold">November 2025</p>
              <p className="text-sm opacity-90">Letzte Prüfung: aktuell</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-6">
            <motion.div
              {...pageMotion}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8 lg:p-10"
            >
              <div className="prose prose-slate prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:text-slate-900 prose-headings:font-bold prose-h1:text-3xl prose-h1:mb-6 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-sky-700 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-slate-800 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-slate-900 prose-strong:font-semibold prose-a:text-sky-600 prose-a:no-underline hover:prose-a:text-sky-700 prose-a:font-medium prose-ul:text-slate-700 prose-li:mb-2 prose-li:leading-relaxed">
                <div
                  dangerouslySetInnerHTML={{
            __html: `
<h1 class="text-3xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-slate-200">ChatGPT- & KI-Compliance</h1>

<div class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-8">
  <p class="text-slate-800 font-semibold mb-1">Stand: <strong class="text-slate-900">November 2025</strong></p>
</div>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">1. Einsatz von KI-Technologien</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-700 leading-relaxed mb-4">JOBspeedy.ai ist eine KI-gestützte Recruiting-Plattform, die Künstliche Intelligenz, maschinelles Lernen und ChatGPT von OpenAI nutzt, um Bewerbungsprozesse effizienter und intelligenter zu gestalten. Das System unterstützt Bewerber:innen und Unternehmen durch automatisierte Matching-, Bewertungs- und Kommunikationstools.</p>
    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
      <p class="text-slate-800 font-semibold mb-3">KI-Funktionen im Überblick:</p>
      <ul class="list-disc list-inside text-slate-700 space-y-2 ml-4">
  <li>KI-gestütztes <strong>Matching zwischen Bewerbern und Arbeitgebern</strong></li>
  <li>Automatische Texterstellung für Stellenanzeigen und Bewerbungsunterlagen</li>
  <li><strong>Internationale Bewerbungen:</strong> Prüfung der Anerkennungsfähigkeit ausländischer Berufsabschlüsse</li>
  <li>Intelligente Chat-Assistenz zur Begleitung im Bewerbungsprozess</li>
  <li>Kontinuierliche Optimierung der Ergebnisse durch maschinelles Lernen</li>
</ul>
    </div>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">2. Datenschutz & Datensicherheit</h2>
  <div class="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
    <p class="text-slate-700 leading-relaxed mb-3">JOBspeedy.ai verarbeitet personenbezogene Daten ausschließlich im Rahmen der DSGVO und des TTDSG. Alle Informationen werden nur zum Zweck der Jobvermittlung und Verbesserung des Matchings verwendet. Eine Weitergabe an Dritte erfolgt nur bei technischer Notwendigkeit oder mit ausdrücklicher Einwilligung.</p>
    <div class="bg-white rounded-lg p-4 border border-emerald-200 mt-3">
      <p class="text-slate-800 font-semibold mb-2">Sichere Datenverarbeitung:</p>
      <p class="text-slate-700 leading-relaxed">Die Datenverarbeitung erfolgt auf sicheren Servern, ggf. außerhalb der EU, unter Anwendung der <strong>EU-Standardvertragsklauseln (SCCs)</strong>.</p>
    </div>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">3. Transparenz der KI</h2>
  <div class="bg-sky-50 border-l-4 border-sky-500 p-5 rounded-r-lg">
    <p class="text-slate-700 leading-relaxed mb-3">KI-generierte Inhalte wie Textvorschläge, Matching-Ergebnisse oder Anerkennungsanalysen sind als <strong>"Powered by JOBspeedy AI"</strong> gekennzeichnet.</p>
    <div class="bg-white rounded-lg p-4 border border-sky-200 mt-3">
      <p class="text-slate-800 font-semibold">Manuelle Überprüfung:</p>
      <p class="text-slate-700 leading-relaxed">Nutzer:innen können jederzeit eine manuelle Überprüfung beantragen.</p>
    </div>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">4. Grenzen und Haftung</h2>
  <div class="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
    <p class="text-slate-800 font-semibold mb-3">Wichtige Hinweise:</p>
    <p class="text-slate-700 leading-relaxed mb-3">KI-Systeme liefern Wahrscheinlichkeiten, keine Garantien. JOBspeedy.ai übernimmt keine Haftung für unvollständige oder fehlerhafte KI-Ergebnisse.</p>
    <div class="bg-white rounded-lg p-4 border border-amber-200 mt-3">
      <p class="text-slate-800 font-semibold mb-2">Menschliche Entscheidungshoheit:</p>
      <p class="text-slate-700 leading-relaxed">Alle Entscheidungen über Bewerbungen oder Einstellungen werden durch Menschen getroffen.</p>
    </div>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">5. Rechte der Nutzer:innen</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-800 font-semibold mb-3">Sie haben folgende Rechte gemäß DSGVO:</p>
    <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
      <ul class="list-disc list-inside text-slate-700 space-y-2 ml-4">
        <li><strong>Auskunft</strong> (Art. 15 DSGVO)</li>
        <li><strong>Berichtigung oder Löschung</strong> (Art. 16 / 17 DSGVO)</li>
        <li><strong>Einschränkung oder Widerspruch</strong> (Art. 18 / 21 DSGVO)</li>
        <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
</ul>
    </div>
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
      <p class="text-slate-700 mb-1"><strong>Kontakt:</strong></p>
      <p class="text-slate-700"><a href="mailto:datenschutz@jobspeedy.ai" class="text-sky-600 font-medium hover:text-sky-700 underline">datenschutz@jobspeedy.ai</a></p>
    </div>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">6. Änderungen dieser Erklärung</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-700 leading-relaxed">Diese Erklärung wird regelmäßig überprüft und bei rechtlichen oder technologischen Änderungen angepasst.</p>
  </div>
</section>

<div class="bg-slate-100 rounded-lg p-6 border-2 border-slate-300 my-8">
  <h2 class="text-xl font-bold text-slate-900 mb-3">Hinweis zum KI-Einsatz</h2>
  <p class="text-slate-700 leading-relaxed mb-2">JOBspeedy.ai nutzt KI-Technologien (u. a. ChatGPT von OpenAI) zur intelligenten Analyse, zum Matching und zur internationalen Anerkennungsprüfung.</p>
  <p class="text-slate-700 leading-relaxed">Alle Daten werden DSGVO- und SCC-konform verarbeitet. Mehr Informationen finden Sie in unserer vollständigen <a href="#top" class="text-sky-600 font-medium hover:text-sky-700 underline">ChatGPT-Compliance</a>.</p>
</div>
                    `
                  }}
                />
              </div>
            </motion.div>

            <motion.aside
              {...pageMotion}
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-2xl shadow-lg p-5">
                <p className="text-sm uppercase tracking-wide opacity-80">DSGVO Kontakt</p>
                <p className="text-lg font-semibold mt-1">datenschutz@jobspeedy.ai</p>
                <p className="text-sm opacity-90">Rechte: Auskunft, Löschung, Widerspruch</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
                <p className="text-sm font-semibold text-slate-700">Wichtig</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• KI liefert Wahrscheinlichkeiten, keine Garantien</li>
                  <li>• Menschliche Entscheidungshoheit bleibt</li>
                  <li>• SCCs & DSGVO-konforme Verarbeitung</li>
                </ul>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AICompliance;
