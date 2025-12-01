import React from 'react';
import Navbar from './Navbar';

const AICompliance = () => {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f8f8ff", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ height: 70 }} />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-8">
        <article itemScope itemType="https://schema.org/PrivacyPolicy">
          <div dangerouslySetInnerHTML={{
            __html: `
<h1>ChatGPT- & KI-Compliance</h1>
<p><strong>Stand:</strong> November 2025</p>

<h3 itemprop="about">1. Einsatz von KI-Technologien</h3>
<p>
  JOBspeedy.ai ist eine KI-gestützte Recruiting-Plattform, die Künstliche Intelligenz, maschinelles Lernen 
  und ChatGPT von OpenAI nutzt, um Bewerbungsprozesse effizienter und intelligenter zu gestalten. 
  Das System unterstützt Bewerber:innen und Unternehmen durch automatisierte Matching-, Bewertungs- 
  und Kommunikationstools.
</p>
<ul>
  <li>KI-gestütztes <strong>Matching zwischen Bewerbern und Arbeitgebern</strong></li>
  <li>Automatische Texterstellung für Stellenanzeigen und Bewerbungsunterlagen</li>
  <li><strong>Internationale Bewerbungen:</strong> Prüfung der Anerkennungsfähigkeit ausländischer Berufsabschlüsse</li>
  <li>Intelligente Chat-Assistenz zur Begleitung im Bewerbungsprozess</li>
  <li>Kontinuierliche Optimierung der Ergebnisse durch maschinelles Lernen</li>
</ul>

<h3>2. Datenschutz & Datensicherheit</h3>
<p>
  JOBspeedy.ai verarbeitet personenbezogene Daten ausschließlich im Rahmen der DSGVO und des TTDSG. 
  Alle Informationen werden nur zum Zweck der Jobvermittlung und Verbesserung des Matchings verwendet.
  Eine Weitergabe an Dritte erfolgt nur bei technischer Notwendigkeit oder mit ausdrücklicher Einwilligung.
</p>
<p>
  Die Datenverarbeitung erfolgt auf sicheren Servern, ggf. außerhalb der EU, 
  unter Anwendung der <strong>EU-Standardvertragsklauseln (SCCs)</strong>.
</p>

<h3>3. Transparenz der KI</h3>
<p>
  KI-generierte Inhalte wie Textvorschläge, Matching-Ergebnisse oder Anerkennungsanalysen 
  sind als <strong>"Powered by JOBspeedy AI"</strong> gekennzeichnet. 
  Nutzer:innen können jederzeit eine manuelle Überprüfung beantragen.
</p>

<h3>4. Grenzen und Haftung</h3>
<p>
  KI-Systeme liefern Wahrscheinlichkeiten, keine Garantien. 
  JOBspeedy.ai übernimmt keine Haftung für unvollständige oder fehlerhafte KI-Ergebnisse. 
  Alle Entscheidungen über Bewerbungen oder Einstellungen werden durch Menschen getroffen.
</p>

<h3>5. Rechte der Nutzer:innen</h3>
<ul>
  <li>Auskunft (Art. 15 DSGVO)</li>
  <li>Berichtigung oder Löschung (Art. 16 / 17 DSGVO)</li>
  <li>Einschränkung oder Widerspruch (Art. 18 / 21 DSGVO)</li>
  <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
</ul>
<p>📧 Kontakt: <a href="mailto:datenschutz@jobspeedy.ai">datenschutz@jobspeedy.ai</a></p>

<h3>6. Änderungen dieser Erklärung</h3>
<p>
  Diese Erklärung wird regelmäßig überprüft und bei rechtlichen oder technologischen Änderungen angepasst.
</p>

<hr>
<p><strong>Hinweis zum KI-Einsatz:</strong><br>
  JOBspeedy.ai nutzt KI-Technologien (u. a. ChatGPT von OpenAI) zur intelligenten Analyse, 
  zum Matching und zur internationalen Anerkennungsprüfung. 
  Alle Daten werden DSGVO- und SCC-konform verarbeitet. 
  Mehr Informationen finden Sie in unserer vollständigen <a href="#top">ChatGPT-Compliance</a>.
</p>
            `
          }} />
        </article>
      </div>
    </div>
  );
};

export default AICompliance;
