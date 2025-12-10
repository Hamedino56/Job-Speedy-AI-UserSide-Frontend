import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const pageMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 }
};

const PrivacyPolicy = () => {
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
                🔒 Datenschutz
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">Datenschutz</h1>
              <p className="text-slate-600 mt-2">
                Alles, was Sie über Datenerfassung, Nutzung, Rechte und Sicherheit bei JobSpeedy AI wissen müssen.
              </p>
            </div>
            <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white px-4 py-3 rounded-2xl shadow-lg">
              <p className="text-sm font-semibold">Stand</p>
              <p className="text-lg font-bold">Aktuell</p>
              <p className="text-sm opacity-90">Letzte Prüfung: automatisch</p>
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
<h1 class="text-3xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-slate-200">Datenschutz</h1>

<div class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-8">
  <p class="text-slate-800 font-medium mb-2"><strong>Kurzüberblick</strong></p>
  <p class="text-slate-700 leading-relaxed">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Webseite besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
</div>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b border-slate-200">Verantwortliche Stelle</h2>
  <div class="bg-slate-50 rounded-lg p-6 border border-slate-200 mb-4">
    <p class="font-semibold text-slate-900 mb-3">Wer ist verantwortlich für die Datenerfassung auf dieser Webseite?</p>
    <p class="text-slate-700 mb-4">Die Datenverarbeitung auf dieser Webseite erfolgt durch:</p>
    <div class="bg-white rounded-lg p-5 border border-slate-200">
      <p class="font-bold text-slate-900 text-lg mb-2">Hitradio MS One Programmanbieter GmbH</p>
      <p class="text-slate-700 mb-1">Alfred-Nobel-Str. 9</p>
      <p class="text-slate-700 mb-1">86156 Augsburg</p>
      <p class="text-slate-700 mb-3 mt-3">Tel.: +49 821 / 486 99 516</p>
      <p class="text-slate-700">E-mail: <a href="mailto:support@jobspeedy.ai" class="text-sky-600 font-medium hover:text-sky-700">support@jobspeedy.ai</a></p>
    </div>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b border-slate-200">Datenerfassung</h2>
  
  <div class="mb-6">
    <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Wie erfassen wir Ihre Daten?</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Ihre Daten werden zum einen dadurch erhoben, dass Sie sie selbst mitteilen. Hierbei kann es sich um Daten handeln, die Sie in ein Kontaktformular oder bei einer Newsletterbestellung eingeben.</p>
    <p class="text-slate-700 leading-relaxed">Andere Daten werden automatisch beim Besuch der Webseite durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Webseite betreten.</p>
  </div>

  <div class="mb-6 bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Bewerberdaten</h3>
    <p class="text-slate-700 leading-relaxed">Sie haben auf unserer Webseite die Möglichkeit, sich online bei potenziellen Arbeitgebern zu bewerben. Hierzu werden die von Ihnen hinterlegten persönlichen Daten mit Ihrer Einwilligung an den potenziellen Arbeitgeber weitergeleitet. Detail hierzu entnehmen Sie unserer Datenschutzerklärung unter der Überschrift „Datenerfassung bei Online-Bewerbungen“.</p>
  </div>

  <div class="mb-6 bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Analyse Ihrer Daten</h3>
    <p class="text-slate-700 leading-relaxed">Beim Besuch unserer Webseite kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analysewerkzeugen. Die Analyse Ihres Surf-Verhaltens erfolgt anonym, und kann nicht zu Ihnen zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Details hierzu entnehmen Sie unserer Datenschutzerklärung unter der Überschrift „Drittmodule und Analysetools“.</p>
  </div>

  <div class="mb-6">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Wofür nutzen wir Ihre Daten?</h3>
    <ul class="list-disc list-inside text-slate-700 space-y-2 ml-4">
      <li>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Webseite zu gewährleisten.</li>
      <li>Mit anderen Daten können wir Ihr Nutzerverhalten im Internet statistisch analysieren (z.B. über sogenannte Cookies). Derartige Analysen erfolgen anonym und können nicht zu Ihrer Person zurückverfolgt werden. Sie können dieser Analyse widersprechen.</li>
    </ul>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b border-slate-200">Ihre Rechte</h2>
  <div class="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg mb-4">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu bekommen. Sie haben außerdem ein Recht die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.</p>
    <p class="text-slate-700 leading-relaxed">Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
  </div>

  <div class="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Erfolgt die Übertragung Ihrer Daten verschlüsselt?</h3>
    <p class="text-slate-700 leading-relaxed font-semibold">Ja. Diese Webseite nutzt eine Verschlüsselung. Diese soll verhindern, dass Unbefugte auf Ihre Daten zugreifen können.</p>
  </div>
</section>

<div class="bg-slate-100 rounded-lg p-6 border border-slate-300 my-8">
  <h2 class="text-2xl font-bold text-slate-900 mb-4">Datenschutzerklärung</h2>
  <div class="bg-white rounded-lg p-5 border border-slate-200">
    <p class="font-bold text-slate-900 text-lg mb-2">Hitradio MS One Programmanbieter GmbH</p>
    <p class="text-slate-700 mb-1">Alfred-Nobel-Str. 9</p>
    <p class="text-slate-700 mb-1">86156 Augsburg</p>
    <p class="text-slate-700 mb-3 mt-3">Tel.: +49 821 / 486 99 516</p>
    <p class="text-slate-700">Email: <a href="mailto:support@jobspeedy.ai" class="text-sky-600 font-medium hover:text-sky-700">support@jobspeedy.ai</a></p>
  </div>
</div>

<div class="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-200 my-8">
  <h2 class="text-xl font-bold text-indigo-900 mb-4">INHALTSÜBERSICHT</h2>
  <ul class="list-disc list-inside text-indigo-800 space-y-2 font-medium">
    <li>I. Allgemeine Hinweise und Pflichtinformationen</li>
    <li>II. Datenerfassung auf unserer Webseite</li>
    <li>III. Datenerfassung bei Online-Bewerbungen</li>
    <li>IV. Drittmodule und Analysetools</li>
  </ul>
</div>

<h2 class="text-2xl font-bold text-sky-700 mt-10 mb-4 pb-2 border-b-2 border-slate-300">I. Allgemeine Hinweise und Pflichtinformationen</h2>

<p class="text-slate-700 leading-relaxed mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

<p class="text-slate-700 leading-relaxed mb-4">Wenn Sie diese Webseite benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>

<p class="text-slate-700 leading-relaxed mb-6">Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

<div class="space-y-6 mb-8">
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Verantwortliche Stelle</h3>
    <p class="text-slate-700 leading-relaxed">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Webseite ergibt sich aus dem Impressum. Verantwortliche Stelle ist die natürliche oder juristische Person die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
    <p class="text-slate-700 leading-relaxed">Viele Datenverarbeitungsvorgänge sind nur mit Ihrer Einwilligung möglich. Diese werden wir vor Beginn der Einwilligung ausdrücklich bei Ihnen einholen. Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Gesetzlich vorgeschriebener Datenschutzbeauftragter</h3>
    <p class="text-slate-700 leading-relaxed">Wir sind von Gesetzes wegen zur Bestellung eines Datenschutzbeauftragten verpflichtet und haben einen solchen bestellt. Name und Kontaktdaten unseres Datenschutzbeauftragten sind unserer Webseite zu entnehmen.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
    <p class="text-slate-700 leading-relaxed mb-2">Der Webseitenbesucher wird darauf hingewiesen, dass ihm im Falle datenschutzrechtlicher Verstöße ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zusteht. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Hauptsitz hat.</p>
    <p class="text-slate-700 leading-relaxed">Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten können folgendem Link entnommen werden: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a></p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Recht auf Datenübertragbarkeit</h3>
    <p class="text-slate-700 leading-relaxed">Sie haben das Recht Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten an sich oder an einen anderen Verantwortlichen in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
  </div>

  <div class="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
    <p class="text-slate-700 leading-relaxed">Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
    <p class="text-slate-700 leading-relaxed mt-3">Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Verschlüsselter Zahlungsverkehr auf dieser Webseite</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Nach dem Abschluss eines entgeltpflichtigen Vertrags sind Sie vertraglich verpflichtet, uns Ihre Zahlungsdaten (z.B. Kontonummer bei Einzugsermächtigung) zu übermitteln. Diese Daten werden zur Zahlungsabwicklung benötigt. Stellen Sie uns diese Daten nicht bereit, können wir ggf. von einem geschlossenen Vertrag zurücktreten und Schadensersatz von Ihnen verlangen.</p>
    <p class="text-slate-700 leading-relaxed">Der Zahlungsverkehr über die gängigen Zahlungsmittel (Visa/Mastercard, Lastschriftverfahren) erfolgt ausschließlich über eine verschlüsselte SSL- bzw. TLS-Verbindung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Bei verschlüsselter Kommunikation können Ihre Zahlungsdaten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Auskunft, Sperrung, Löschung</h3>
    <p class="text-slate-700 leading-relaxed">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Widerspruch Werbe-Mails</h3>
    <p class="text-slate-700 leading-relaxed">Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Änderung dieser Datenschutzerklärung</h3>
    <p class="text-slate-700 leading-relaxed">Wir behalten uns das Recht vor, diese Datenschutzbestimmungen unter Einhaltung der gesetzlichen Vorgaben jederzeit zu ändern.</p>
  </div>
</div>

<h2 class="text-2xl font-bold text-sky-700 mt-10 mb-4 pb-2 border-b-2 border-slate-300">II. Datenerfassung auf unserer Webseite</h2>

<div class="space-y-6 mb-8">
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Cookies</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>
    <p class="text-slate-700 leading-relaxed">Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Webseitenbetreiber hat ein berechtigtes Interesse an der Speicherung der Cookies zur technisch fehlerfreien und optimalen Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Server-Log-Files</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
    <ul class="list-disc list-inside text-slate-700 space-y-2 ml-4 mb-3">
<li>Browsertyp und Browserversion</li>
<li>verwendetes Betriebssystem</li>
<li>Referrer URL</li>
<li>Hostname des zugreifenden Rechners</li>
<li>Uhrzeit der Serveranfrage</li>
<li>IP-Adresse</li>
</ul>
    <p class="text-slate-700 leading-relaxed">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien und optimalen Darstellung seiner Webseite – hierzu müssen die Server-Log-Files erfasst werden.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Kontaktformular</h3>
    <p class="text-slate-700 leading-relaxed">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insb. Aufbewahrungsfristen – bleiben unberührt.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Newsletterdaten</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Wenn Sie den auf der Webseite angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben sie nicht an Dritte weiter.</p>
    <p class="text-slate-700 leading-relaxed">Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den "Austragen"-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter gespeichert und nach der Abbestellung des Newsletters gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden (z.B. E-Mail-Adressen für den Mitgliederbereich) bleiben hiervon unberührt.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Registrierung auf dieser Webseite</h3>
    <p class="text-slate-700 leading-relaxed">Sie können sich auf unserer Webseite registrieren, um zusätzliche Funktionen auf der Seite zu nutzen. Die dazu eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, für den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben müssen vollständig angegeben werden. Anderenfalls werden wir die Registrierung ablehnen. Für wichtige Änderungen etwa beim Angebotsumfang oder bei technisch notwendigen Änderungen nutzen wir die bei der Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu informieren. Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf unserer Webseite registriert sind und werden anschließend gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Kommentarfunktion auf dieser Webseite</h3>
    <div class="space-y-3">
      <div>
        <p class="font-semibold text-slate-800 mb-2">Ohne Angabe der E-Mail-Adresse</p>
        <p class="text-slate-700 leading-relaxed">Für die Kommentarfunktion auf dieser Seite werden neben Ihrem Kommentar auch Angaben zum Zeitpunkt der Erstellung des Kommentars und, wenn Sie nicht anonym posten, der von Ihnen gewählte Nutzername gespeichert.</p>
      </div>
      <div>
        <p class="font-semibold text-slate-800 mb-2">Mit Angabe der E-Mail-Adresse</p>
        <p class="text-slate-700 leading-relaxed">Für die Kommentarfunktion auf dieser Seite werden neben Ihrem Kommentar auch Angaben zum Zeitpunkt der Erstellung des Kommentars, Ihre E-Mail-Adresse und, wenn Sie nicht anonym posten, der von Ihnen gewählte Nutzername gespeichert.</p>
      </div>
      <div>
        <p class="font-semibold text-slate-800 mb-2">Speicherung der IP-Adresse</p>
        <p class="text-slate-700 leading-relaxed">Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, die Kommentare verfassen. Da wir Kommentare auf unserer Seite nicht vor der Freischaltung prüfen, benötigen wir diese Daten, um im Falle von Rechtsverletzungen wie Beleidigungen oder Propaganda gegen den Verfasser vorgehen zu können.</p>
      </div>
      <div>
        <p class="font-semibold text-slate-800 mb-2">Abonnieren von Kommentaren</p>
        <p class="text-slate-700 leading-relaxed">Als Nutzer der Seite können Sie nach einer Anmeldung Kommentare abonnieren. Sie erhalten eine Bestätigungsemail, um zu prüfen, ob Sie der Inhaber der angegebenen E-Mail-Adresse sind. Sie können diese Funktion jederzeit über einen Link in den Info-Mails abbestellen. Die im Rahmen des Abonnierens von Kommentaren eingegebenen Daten werden in diesem Fall gelöscht; wenn Sie diese Daten für andere Zwecke und an anderer Stelle (z.B. Newsletterbestellung) an uns übermittelt haben, verbleiben die jedoch bei uns.</p>
      </div>
      <div>
        <p class="font-semibold text-slate-800 mb-2">Speicherdauer der Kommentare</p>
        <p class="text-slate-700 leading-relaxed">Die Kommentare und die damit verbundenen Daten (z.B. IP-Adresse) werden gespeichert und verbleiben auf unserer Webseite, bis der kommentierte Inhalt vollständig gelöscht wurde.</p>
      </div>
      <div>
        <p class="font-semibold text-slate-800 mb-2">Rechtsgrundlage</p>
        <p class="text-slate-700 leading-relaxed">Die Speicherung der Kommentare erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>
      </div>
    </div>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Verarbeiten von Daten (Kunden- und Vertragsdaten)</h3>
    <p class="text-slate-700 leading-relaxed">Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen. Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht nicht jedoch vor Ablauf der gesetzlichen Aufbewahrungsfristen gelöscht. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen gestattet.</p>
  </div>
</div>

<h2 class="text-2xl font-bold text-sky-700 mt-10 mb-4 pb-2 border-b-2 border-slate-300">III. Datenerfassung bei Online-Bewerbungen</h2>

<div class="space-y-6 mb-8">
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Allgemein</h3>
    <p class="text-slate-700 leading-relaxed">Diese Webseite bietet Ihnen die Möglichkeit, sich bei verschiedenen Drittunternehmen zu bewerben. Wir legen großen Wert auf den Schutz der von Ihnen übermittelten personenbezogenen Daten. Wir versichern, dass Erhebung, Verarbeitung und Nutzung der von Ihnen erhobenen personenbezogenen Daten in Übereinstimmung mit geltendem Recht und allen weiteren gesetzlichen Bestimmungen erfolgt. Die Daten werden streng vertraulich behandelt. Dieser Abschnitt ergänzt die allgemeine Datenschutzerklärung, die im Übrigen auch für die Online-Bewerbung gilt.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Umfang und Zweck der Datenerhebung</h3>
    <p class="text-slate-700 leading-relaxed">Im Rahmen Ihrer Bewerbung werden wir insbesondere Ihren vollständigen Vor- und Nachnamen, Berufsbezeichnung, Adresse und E-Mail-Adresse abfragen. Daneben gibt es weitere Angaben (z.B. Telefonnummer und Arbeitszeugnisse), die im Bewerberformular eingegeben bzw. hochgeladen werden können. Diese personenbezogenen Daten dienen ausschließlich der Bearbeitung und Durchführung Ihres aktuellen Bewerbungsverfahrens.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Weitergabe der Daten an potenzielle Arbeitgeber</h3>
    <p class="text-slate-700 leading-relaxed">Die von Ihnen eingegebenen und übersandten Daten werden von uns an den potenziellen Auftraggeber weitergeleitet. Dieser wird sich im Anschluss selbst mit Ihnen in Verbindung setzen. Darüber hinaus werden Ihre personenbezogenen Daten nicht an Dritte weitergereicht, sofern Sie uns hierzu keine ausdrückliche Einwilligung erteilt haben (eine Einwilligung können Sie z.B. bei der Anmeldung zur Bewerberbörse geben, vgl. hierzu im Folgenden).</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Bewerberbörse</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Unsere Plattform bietet Ihnen die Möglichkeit, Ihre Daten (z.B. Daten zur Ausbildung, angebotenen Leistungen etc.) in unserer Bewerberbörse zu hinterlegen. Diese Daten werden anonymisiert in unserer Bewerberbörse veröffentlicht, in der sie von bei uns registrierten Unternehmen eingesehen werden können. Die Unternehmen können hieraus nur auf die Qualifikation und die angebotenen Leistungen, nicht dagegen auf Ihre Person schließen.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Bei Interesse können die Unternehmen Kontakt zu Ihnen aufnehmen. Wir werden in diesem Fall:</p>
    <ol class="list-decimal list-inside text-slate-700 space-y-2 ml-4 mb-3">
      <li>die Anfrage an Sie weiterleiten, damit Sie entscheiden, ob Sie zu dem Unternehmen Kontakt aufnehmen möchten; der Unternehmer erlangt in diesem Fall erst dann Kenntnis über Ihre Identität, wenn Sie es wollen;</li>
      <li>Ihre bei uns hinterlegten Daten auf Anfrage an den Unternehmer weiterleiten, damit dieser direkt zu Ihnen Kontakt aufnehmen kann; in diesem Fall erlangt der Unternehmer Kenntnis von Ihrer Identität, sobald wir die Daten an ihn weitergeleitet haben.</li>
    </ol>
    <p class="text-slate-700 leading-relaxed">Sowohl (1) als auch (2) setzt Ihre ausdrückliche Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) voraus, die wir vor Ihrer Eintragung in die Bewerberbörse bei Ihnen einholen. Sie können diese Einwilligung jederzeit für die Zukunft widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Rechtsgrundlage der Datenerhebung und -weitergabe</h3>
    <p class="text-slate-700 leading-relaxed">Die Erhebung und die Weitergabe Ihrer Bewerberdaten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit für die Zukunft widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Aufbewahrungsdauer der Daten</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Sofern Ihnen der potenzielle Auftraggeber kein Stellenangebot macht, Sie dessen Stellenangebot ablehnen oder Ihre Bewerbung zurückziehen, behalten wir uns das Recht vor, die von Ihnen übermittelten Daten bis zu 6 Monate ab der Beendigung des Bewerbungsverfahrens (Ablehnung / Zurückziehung der Bewerbung) bei uns aufzubewahren. Anschließend werden die Daten gelöscht. Ggf. verbleibende physische Bewerbungsunterlagen werden vernichtet. Die Aufbewahrung dient insbesondere Nachweiszwecken (z.B. nach dem AGG).</p>
    <p class="text-slate-700 leading-relaxed mb-3">Sofern ersichtlich ist, dass die Daten nach Ablauf der 6-Monatsfrist erforderlich sein werden (z.B. aufgrund eines drohenden oder anhängigen Rechtsstreits), findet eine Löschung erst statt, wenn die Daten gegenstandslos geworden sind. Sonstige gesetzliche Aufbewahrungspflichten bleiben unberührt.</p>
    <p class="text-slate-700 leading-relaxed">Auf die Aufbewahrungsdauer der Bewerberdaten beim potenziellen Arbeitgeber haben wir keinen Einfluss. Diesbezüglich sollten Sie sich bei Bedarf mit dem potenziellen Arbeitgeber in Verbindung setzen.</p>
  </div>
</div>

<h2 class="text-2xl font-bold text-sky-700 mt-10 mb-4 pb-2 border-b-2 border-slate-300">IV. Drittmodule und Analysetools</h2>

<div class="space-y-6 mb-8">
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Google Analytics</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043, USA. Google Analytics verwendet so genannte "Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <a href="https://support.google.com/analytics/answer/6004245?hl=de" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">https://support.google.com/analytics/answer/6004245?hl=de</a></p>
    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
      <p class="font-semibold text-slate-800 mb-2">Direkter Zugriff um Google Analytics zu deaktivieren:</p>
      <p class="text-slate-700 mb-2">Sie können natürlich jederzeit Google Analytics deaktivieren!</p>
      <p class="text-slate-700">Bitte hier klicken um <a onclick="alert('Google Analytics wurde deaktiviert');" href="javascript:gaOptout()" class="text-sky-600 font-medium hover:text-sky-700 underline"><strong>Google Analytics zu deaktivieren</strong></a></p>
    </div>
    <div class="mt-4">
      <p class="font-semibold text-slate-800 mb-2">Browser Plugin</p>
      <p class="text-slate-700 leading-relaxed mb-2">Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.</p>
      <p class="text-slate-700 leading-relaxed">Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">https://tools.google.com/dlpage/gaoptout?hl=de</a></p>
    </div>
    <div class="mt-4">
      <p class="font-semibold text-slate-800 mb-2">Widerspruch gegen Datenerfassung</p>
      <p class="text-slate-700 leading-relaxed">Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser Website verhindert: Google Analytics deaktivieren</p>
    </div>
    <div class="mt-4">
      <p class="font-semibold text-slate-800 mb-2">Demografische Merkmale bei Google Analytics</p>
      <p class="text-slate-700 leading-relaxed">Diese Website nutzt die Funktion "demografische Merkmale" von Google Analytics. Dadurch können Berichte erstellt werden, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Diese Daten können keiner bestimmten Person zugeordnet werden. Sie können diese Funktion jederzeit über die Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder die Erfassung Ihrer Daten durch Google Analytics wie im Punkt "Widerspruch gegen Datenerfassung" dargestellt generell untersagen.</p>
    </div>
    <div class="mt-4">
      <p class="font-semibold text-slate-800 mb-2">Auftragsdatenverarbeitung</p>
      <p class="text-slate-700 leading-relaxed">Wir haben mit Google einen Vertrag zur Auftragsdatenverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.</p>
    </div>
    <div class="mt-4">
      <p class="font-semibold text-slate-800 mb-2">IP-Anonymisierung</p>
      <p class="text-slate-700 leading-relaxed">Wir nutzen die Funktion "Aktivierung der IP-Anonymisierung" auf dieser Webseite. Dadurch wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</p>
    </div>
    <div class="mt-4">
      <p class="font-semibold text-slate-800 mb-2">Rechtsgrundlage</p>
      <p class="text-slate-700 leading-relaxed">Die Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.</p>
    </div>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">etracker</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Unsere Webseite nutzt den Analysedienst etracker. Anbieter ist die etracker GmbH, Erste Brunnenstraße 1, 20459 Hamburg Germany. Aus den Daten können unter einem Pseudonym Nutzungsprofile erstellt werden. Dazu können Cookies eingesetzt werden. Bei Cookies handelt es sich um kleine Textdateien, die lokal im Zwischenspeicher Ihres Internet-Browsers gespeichert werden. Die Cookies ermöglichen es, Ihren Browser wieder zu erkennen. Die mit den etracker-Technologien erhobenen Daten werden ohne die gesondert erteilte Zustimmung des Betroffenen nicht genutzt, Besucher unserer Website persönlich zu identifizieren und werden nicht mit personenbezogenen Daten über den Träger des Pseudonyms zusammengeführt.</p>
    <p class="text-slate-700 leading-relaxed mb-3">etracker-Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Die Speicherung von etracker-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Der Datenerhebung und -speicherung können Sie jederzeit mit Wirkung für die Zukunft widersprechen. Um einer Datenerhebung und -speicherung Ihrer Besucherdaten für die Zukunft zu widersprechen, können Sie unter nachfolgendem Link ein Opt-Out-Cookie von etracker beziehen, dieser bewirkt, dass zukünftig keine Besucherdaten Ihres Browsers bei etracker erhoben und gespeichert werden: <a href="http://www.etracker.de/privacy?et=V23Jbb" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">http://www.etracker.de/privacy?et=V23Jbb</a></p>
    <p class="text-slate-700 leading-relaxed mb-3">Dadurch wird ein Opt-Out-Cookie mit dem Namen "cntcookie" von etracker gesetzt. Bitte löschen Sie diesen Cookie nicht, solange Sie Ihren Widerspruch aufrecht erhalten möchten. Weitere Informationen finden Sie in den Datenschutzbestimmungen von etracker: <a href="http://www.etracker.com/de/datenschutz.html" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">http://www.etracker.com/de/datenschutz.html</a></p>
    <div class="mt-4">
      <p class="font-semibold text-slate-800 mb-2">Auftragsdatenverarbeitung</p>
      <p class="text-slate-700 leading-relaxed">Wir haben mit etracker einen Vertrag zur Auftragsdatenverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von etracker vollständig um.</p>
    </div>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Wordpress Stats</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Diese Website nutzt das WordPress Tool Stats um Besucherzugriffe statistisch auszuwerten. Anbieter ist die Automattic Inc., 60 29th Street #343, San Francisco, CA 94110-4929, USA Wordpress Stats verwendet Cookies, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website erlauben. Die durch die Cookies generierten Informationen über die Benutzung unserer Webseite werden auf Servern in den USA gespeichert. Ihre IP-Adresse wird nach der Verarbeitung und vor der Speicherung anonymisiert.</p>
    <p class="text-slate-700 leading-relaxed mb-3">„Wordpress-Stats"-Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Die Speicherung von „Wordpress Stats"-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Webseite eingeschränkt sein.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Sie können der Erhebung und Nutzung Ihrer Daten für die Zukunft widersprechen, indem Sie mit einem Klick auf diesen Link einen Opt-Out-Cookie in Ihrem Browser setzen: <a href="https://www.quantcast.com/opt-out/" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">https://www.quantcast.com/opt-out/</a></p>
    <p class="text-slate-700 leading-relaxed">Wenn Sie die Cookies auf Ihrem Rechner löschen, müssen Sie den Opt-Out-Cookie erneut setzen.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Facebook-Pixel</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Unsere Webseite nutzt zur Konversionsmessung das Besucheraktions-Pixel von Facebook, Facebook Inc. 1601 S. California Ave, Palo Alto, CA 94304, USA ("Facebook"). So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die Webseite des Anbieters weitergeleitet wurden. Dadurch können die Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet werden und zukünftige Werbemaßnahmen optimiert werden.</p>
    <p class="text-slate-700 leading-relaxed">Die erhobenen Daten sind für uns als Betreiber dieser Webseite anonym, wir können keine Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Facebook die Daten für eigene Werbezwecke, entsprechend der Facebook- Datenverwendungsrichtlinie (<a href="https://www.facebook.com/about/privacy/" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">https://www.facebook.com/about/privacy/</a>) verwenden kann. Dadurch kann Facebook das Schalten von Werbeanzeigen auf Seiten von Facebook sowie außerhalb von Facebook ermöglichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht beeinflusst werden.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Schriftarten externe Dienstleister</h3>
    <p class="text-slate-700 leading-relaxed">Unsere Webseite verwendet Schriftarten externer Dienstleister. Wir versuchen nach unserem besten Wissen und Gewissen diese lokal auf unseren eigenen Servern zu speichern, jedoch müssen wir auch auf externe Webseiten zugreigen um diese Schriften nutzen zu können. Sollten Sie nicht einverstanden sein, dass dadurch Ihre Daten eventuell auch auf Drittservern gelangen, bitten wir Sie diese Seite zu verlassen. Gerne erteilen wir Ihnen auf Anfrage Auskunft, auf welche Server wir weiterleiten! Senden Sie uns dazu eine Mail an: <a href="mailto:datenschutz@jobspeedy.ai" rel="noopener" class="text-sky-600 font-medium hover:text-sky-700 underline">datenschutz@jobspeedy.ai</a></p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Datenschutzerklärung für die Nutzung von Google Web Fonts</h3>
    <p class="text-slate-700 leading-relaxed">Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt. Weitere Informationen zu Google Web Fonts finden Sie unter <a href="http://developers.google.com/fonts/faq" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="http://www.google.com/policies/privacy" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">www.google.com/policies/privacy</a></p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Datenschutzerklärung für die Nutzung von Google Maps</h3>
    <p class="text-slate-700 leading-relaxed">Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043, USA. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Google-Remarketing im Detail</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Diese Website nutzt die Funktionen von Google Analytics Remarketing. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland. Google Remarketing analysiert Ihr Nutzerverhalten auf unserer Website (z.B. Klick auf bestimmte Produkte), um Sie in bestimmte Werbe-Zielgruppen einzuordnen und Ihnen anschließend beim Besuch von anderen Onlineangeboten passende Webebotschaften auszuspielen (Remarketing bzw. Retargeting).</p>
    <p class="text-slate-700 leading-relaxed mb-3">Des Weiteren können die mit Google Remarketing erstellten Werbe-Zielgruppen mit den geräteübergreifenden Funktionen von Google verknüpft werden. Auf diese Weise können interessenbezogene, personalisierte Werbebotschaften, die in Abhängigkeit Ihres früheren Nutzungs- und Surfverhaltens auf einem Endgerät (z. B. Handy) an Sie angepasst wurden auch auf einem anderen Ihrer Endgeräte (z. B. Tablet oder PC) angezeigt werden.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Wenn Sie über einen Google-Account verfügen, können Sie der personalisierten Werbung unter folgendem Link widersprechen: <a href="https://www.google.com/settings/ads/onweb/" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">https://www.google.com/settings/ads/onweb/</a>.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Die Nutzung von Google Remarketing erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst effektiven Vermarktung seiner Produkte. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Weitergehende Informationen und die Datenschutzbestimmungen finden Sie in der Datenschutzerklärung von Google unter: <a href="https://policies.google.com/technologies/ads?hl=de" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">https://policies.google.com/technologies/ads?hl=de</a>.</p>
    <div class="mt-4">
      <p class="font-semibold text-slate-800 mb-2">Zielgruppenbildung mit Kundenabgleich</p>
      <p class="text-slate-700 leading-relaxed">Zur Zielgruppenbildung verwenden wir unter anderem den Kundenabgleich von Google Remarketing. Hierbei übergeben wir bestimmte Kundendaten (z.B. E-Mail-Adressen) aus unseren Kundenlisten an Google. Sind die betreffenden Kunden Google-Nutzer und in ihrem Google-Konto eingeloggt, werden ihnen passende Werbebotschaften innerhalb des Google-Netzwerks (z.B. bei YouTube, Gmail oder in der Suchmaschine) angezeigt.</p>
    </div>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Google-Conversion Tracking</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Diese Website nutzt Google Conversion Tracking. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland. Mit Hilfe von Google-Conversion-Tracking können Google und wir erkennen, ob der Nutzer bestimmte Aktionen durchgeführt hat. So können wir beispielsweise auswerten, welche Buttons auf unserer Website wie häufig geklickt und welche Produkte besonders häufig angesehen oder gekauft wurden. Diese Informationen dienen dazu, Conversion-Statistiken zu erstellen.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Wir erfahren die Gesamtanzahl der Nutzer, die auf unsere Anzeigen geklickt haben und welche Aktionen sie durchgeführt haben. Wir erhalten keine Informationen, mit denen wir den Nutzer persönlich identifizieren können. Google selbst nutzt zur Identifikation Cookies oder vergleichbare Wiedererkennungstechnologien.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Die Nutzung von Google Conversion-Tracking erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
    <p class="text-slate-700 leading-relaxed">Mehr Informationen zu Google Conversion-Tracking finden Sie in den Datenschutzbestimmungen von Google: <a href="https://policies.google.com/privacy?hl=de" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">https://policies.google.com/privacy?hl=de</a>.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Facebook Pixel im Detail</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Diese Website nutzt zur Konversionsmessung der Besucheraktions-Pixel von Facebook. Anbieter dieses Dienstes ist die Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittländer übertragen.</p>
    <p class="text-slate-700 leading-relaxed mb-3">So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch können die Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet werden und zukünftige Werbemaßnahmen optimiert werden.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Facebook die Daten für eigene Werbezwecke, entsprechend der Facebook-Datenverwendungsrichtlinie verwenden kann. Dadurch kann Facebook das Schalten von Werbeanzeigen auf Seiten von Facebook sowie außerhalb von Facebook ermöglichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht beeinflusst werden.</p>
    <p class="text-slate-700 leading-relaxed">Die Nutzung von Facebook-Pixel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an effektiven Werbemaßnahmen unter Einschluss der sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
  </div>

  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <h3 class="text-xl font-semibold text-slate-800 mb-3">Facebook Remarketing im Detail</h3>
    <p class="text-slate-700 leading-relaxed mb-3">Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">https://www.facebook.com/legal/EU_data_transfer_addendum</a> und <a href="https://de-de.facebook.com/help/566994660333381" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">https://de-de.facebook.com/help/566994660333381</a>.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Sowohl mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook weitergeleitet werden, sind wir und die Facebook Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung der Daten und deren Weitergabe an Facebook. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook ist nicht Teil der gemeinsamen Verantwortung.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">https://www.facebook.com/legal/controller_addendum</a>.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die Datensicherheit der Facebook- Produkte ist Facebook verantwortlich. Betroffenenrechte (z.B. Auskunftsersuchen) hinsichtlich der bei Facebook verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.</p>
    <p class="text-slate-700 leading-relaxed mb-3">In den Datenschutzhinweisen von Facebook finden Sie weitere Hinweise zum Schutz Ihrer Privatsphäre: <a href="https://de-de.facebook.com/about/privacy/" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">https://de-de.facebook.com/about/privacy/</a>.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Sie können außerdem die Remarketing-Funktion „Custom Audiences" im Bereich Einstellungen für Werbeanzeigen unter <a href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen</a> deaktivieren. Dazu müssen Sie bei Facebook angemeldet sein.</p>
    <p class="text-slate-700 leading-relaxed">Wenn Sie kein Facebook Konto besitzen, können Sie nutzungsbasierte Werbung von Facebook auf der Website der European Interactive Digital Advertising Alliance deaktivieren: <a href="http://www.youronlinechoices.com/de/praferenzmanagement/" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">http://www.youronlinechoices.com/de/praferenzmanagement/</a>.</p>
  </div>
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
                <p className="text-sm uppercase tracking-wide opacity-80">Kontakt</p>
                <p className="text-lg font-semibold mt-1">support@jobspeedy.ai</p>
                <p className="text-sm opacity-90">+49 821 / 486 99 516</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
                <p className="text-sm font-semibold text-slate-700">Schnellzugriff</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• Rechte & Widerruf</li>
                  <li>• Cookies & Tracking</li>
                  <li>• Datensicherheit (SSL)</li>
                  <li>• Bewerberdaten & Weitergabe</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
                <p className="text-sm font-semibold text-slate-700">Letzte Aktualisierung</p>
                <p className="text-sm text-slate-600">Automatisch versioniert – bitte bei Änderungen Seite neu laden.</p>
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

export default PrivacyPolicy;
