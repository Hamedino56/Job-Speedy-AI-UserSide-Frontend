import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const pageMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 }
};

const TermsOfUse = () => {
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
                📄 Nutzungsbedingungen
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">Nutzungsbedingungen</h1>
              <p className="text-slate-600 mt-2">
                Die wichtigsten Regeln, Pflichten und Haftungsfragen für Bewerber:innen und Besucher der Plattform.
              </p>
            </div>
            <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white px-4 py-3 rounded-2xl shadow-lg">
              <p className="text-sm font-semibold">Download</p>
              <a
                className="underline font-semibold"
                href="https://portal.jobspeedy.de/download/nutzungsbedingung_bewerber.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF öffnen
              </a>
              <p className="text-sm opacity-90">Stand: aktuell</p>
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
<div class="bg-slate-100 rounded-lg p-6 border-2 border-slate-300 mb-8 text-center">
  <h1 class="text-2xl font-bold text-slate-900 mb-4">Nutzungsbedingungen für (potenzielle) Bewerber</h1>
  <div class="bg-white rounded-lg p-5 border border-slate-200">
    <p class="font-bold text-slate-900 text-lg mb-2">Hitradio MS One Programmanbieter GmbH (Plattformbetreiber)</p>
    <p class="text-slate-700 mb-1">Alfred-Nobel-Str. 9</p>
    <p class="text-slate-700 mb-1">86156 Augsburg</p>
    <p class="text-slate-700 mt-3">E-Mail: <a href="mailto:support@portal.jobspeedy.de" class="text-sky-600 font-medium hover:text-sky-700">support@portal.jobspeedy.de</a></p>
  </div>
</div>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">1. Allgemeine Hinweise und Leistungen</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200 space-y-4">
    <div>
      <p class="font-semibold text-slate-800 mb-2">1.1 Geltungsbereich</p>
      <p class="text-slate-700 leading-relaxed">Diese Nutzungsbedingungen gelten in ihrer bei Betreten der Plattform jeweils aktuellen Fassung für die Plattformnutzung. Allgemeine Geschäftsbedingungen, die von diesen Nutzungsbedingungen abweichen, erkennt der Plattformbetreiber – vorbehaltlich einer ausdrücklichen Zustimmung – nicht an.</p>
    </div>
    <div>
      <p class="font-semibold text-slate-800 mb-2">1.2 Kostenlose Nutzung</p>
      <p class="text-slate-700 leading-relaxed">Die Nutzung der Plattform ist für Plattformbesucher unentgeltlich. Der Plattformbetreiber ist berechtigt, das Leistungsspektrum der Plattform jederzeit zu ändern oder die Plattform zu schließen. Ein Anspruch auf ein bestimmtes Leistungsspektrum oder eine bestimmte Verfügbarkeit besteht nicht.</p>
    </div>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">2. Leistungen</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200 space-y-4">
    <div>
      <p class="font-semibold text-slate-800 mb-2">2.1 Plattformfunktionen</p>
      <p class="text-slate-700 leading-relaxed mb-3">Der Plattformbetreiber betreibt unter der o.g. Domain eine Jobbörse (im Folgenden „Plattform"), auf der Unternehmen Stellenanzeigen einstellen können. Stellensuchende können diese Anzeigen einsehen und mit den potenziellen Arbeitgebern Kontakt aufnehmen.</p>
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-3">
        <p class="text-slate-700 leading-relaxed"><strong>Wichtig:</strong> Der Plattformbetreiber ist nicht für die zwischen dem potenziellen Arbeitgeber und dem Bewerber kommunizierten Inhalte verantwortlich. Der Plattformbetreiber übernimmt keine Garantien für den Erfolg eines Bewerbungsverfahrens, da dieses von Faktoren abhängig ist, die der Plattformbetreiber nicht beeinflussen kann.</p>
      </div>
    </div>
    <div>
      <p class="font-semibold text-slate-800 mb-2">2.2 Keine Beteiligung an Arbeitsverträgen</p>
      <p class="text-slate-700 leading-relaxed">Der Plattformbetreiber ist an den Verträgen, die ggf. zwischen dem Bewerber und dem potenziellen Arbeitgeber zustande kommen in keiner Weise beteiligt.</p>
    </div>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">3. Verhaltenspflichten der Plattform-Besucher</h2>
  <div class="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
    <p class="text-slate-800 font-semibold mb-3">Verbotene Handlungen</p>
    <p class="text-slate-700 leading-relaxed mb-3">Der Plattformbesucher hat bei der Nutzung der Plattform sämtliche gesetzlichen Vorschriften zu beachten und alles zu unterlassen, was dem Ansehen der Plattform schaden könnte.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Plattformbesuchern ist es <strong>insbesondere untersagt:</strong></p>
    <ul class="list-disc list-inside text-slate-700 space-y-2 ml-4">
      <li>andere Nutzer der Plattform (insb. potenzielle Arbeitgeber) zu bedrohen, zu beleidigen, zu belästigen oder deren Rechte in sonstiger Weise zu verletzen</li>
      <li>bei der Nutzung der Plattform gegen diese Nutzungsbedingungen oder geltendes Recht zu verstoßen</li>
      <li>Spam-Anfragen über die Plattform zu versenden</li>
      <li>die Plattform zu eigenen wirtschaftlichen Zwecken auszuspähen (z.B. mit Hilfe von Bots oder Crawlern)</li>
      <li>die Plattform zum Abwerben potenzieller Stellensuchender oder inserierender Unternehmen auf eine andere Plattform zu nutzen</li>
</ul>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">4. Haftung und Freistellung</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200 space-y-4">
    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
      <p class="font-semibold text-slate-800 mb-2">4.1 Uneingeschränkte Haftung</p>
      <p class="text-slate-700 leading-relaxed">Der Plattformbetreiber haftet gegenüber dem Plattformbesucher aus jedem Rechtsgrund – inkl. deliktischer Ansprüche – uneingeschränkt auf Schadens- und Aufwendungsersatz bei:</p>
      <ul class="list-disc list-inside text-slate-700 space-y-1 ml-4 mt-2">
        <li>Vorsatz oder grober Fahrlässigkeit</li>
        <li>vorsätzlicher oder fahrlässiger Verletzung des Lebens, des Körpers oder der Gesundheit</li>
        <li>aufgrund eines Garantieversprechens, soweit diesbezüglich nichts Anderes geregelt ist</li>
        <li>aufgrund zwingender Haftung</li>
</ul>
    </div>
    <div>
      <p class="font-semibold text-slate-800 mb-2">4.2 Begrenzte Haftung bei Fahrlässigkeit</p>
      <p class="text-slate-700 leading-relaxed">Verletzt der Plattformbetreiber fahrlässig eine wesentliche Pflicht, ist die Haftung auf den typischen, vorhersehbaren Schaden begrenzt, sofern nicht gemäß vorstehendem Absatz unbeschränkt gehaftet wird. Wesentliche Pflichten sind Pflichten, deren Erfüllung die ordnungsgemäße Bereitstellung der Webseitendienste überhaupt erst ermöglicht und auf deren Einhaltung der Webseitenbesucher regelmäßig vertrauen darf.</p>
    </div>
    <div>
      <p class="font-semibold text-slate-800 mb-2">4.3 Haftungsausschluss</p>
      <p class="text-slate-700 leading-relaxed">Im Übrigen ist die Haftung des Plattformbetreibers ausgeschlossen.</p>
    </div>
    <div>
      <p class="font-semibold text-slate-800 mb-2">4.4 Erfüllungsgehilfen</p>
      <p class="text-slate-700 leading-relaxed">Vorstehende Haftungsregelungen gelten auch im Hinblick auf die Haftung des Plattformbetreibers für seine Erfüllungsgehilfen und gesetzlichen Vertreter.</p>
    </div>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">5. Einstellen von Bewerberprofilen und Jobbörse</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200 space-y-4">
    <div>
      <p class="font-semibold text-slate-800 mb-2">5.1 Bewerberbörse</p>
      <p class="text-slate-700 leading-relaxed mb-3">Die Plattform bietet Stellensuchenden die Möglichkeit, ihre Daten (z.B. Daten zur Ausbildung, angebotenen Leistungen etc.) in der Bewerberbörse zu hinterlegen. Diese Daten werden anonymisiert in der Bewerberbörse veröffentlicht, in der sie von registrierten Unternehmen eingesehen werden können.</p>
      <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mt-3">
        <p class="text-slate-700 leading-relaxed"><strong>Datenschutz:</strong> Die Unternehmen können hieraus nur auf die Qualifikation und die angebotenen Leistungen, nicht dagegen auf die Person des Stellensuchenden schließen. Die Weitergabe weiterer Daten an Unternehmen, erfolgt nur soweit, wie der Stellensuchende hierin eingewilligt hat. Details hierzu sind der Datenschutzerklärung zu entnehmen.</p>
      </div>
    </div>
    <div>
      <p class="font-semibold text-slate-800 mb-2">5.2 Freiwillige Leistung</p>
      <p class="text-slate-700 leading-relaxed">Die Bewerberbörse ist eine unentgeltliche und freiwillige Leistung des Plattformbetreibers. Ein Anspruch auf Aufrechterhaltung der Bewerberbörse besteht nicht.</p>
    </div>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">6. Datenschutz</h2>
  <div class="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
    <p class="text-slate-700 leading-relaxed mb-3">Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften. Wir verpflichten die bei uns registrierten Unternehmen, sich bei den Stellenausschreibungen und bei den Bewerbungsverfahren an geltendes Recht (insb. Datenschutz) zu halten.</p>
    <p class="text-slate-700 leading-relaxed mb-3"><strong>Wichtig:</strong> Wir haben jedoch keinen Einfluss darauf, was mit Ihren personenbezogenen Daten passiert, nachdem Sie Ihre Bewerbung an das jeweilige Unternehmen versandt haben. Für Fragen, Löschungsgesuche und sonstige Anliegen hinsichtlich Ihrer weitergeleiteten Bewerberdaten müssen Sie sich daher an den jeweiligen Adressaten Ihrer Bewerbung wenden.</p>
    <p class="text-slate-700 leading-relaxed">Näheres entnehmen Sie unserer <a href="/privacy" class="text-sky-600 font-medium hover:text-sky-700 underline">Datenschutzerklärung</a>.</p>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">7. Schlussbestimmungen</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200 space-y-4">
    <div>
      <p class="font-semibold text-slate-800 mb-2">7.1 Anwendbares Recht</p>
      <p class="text-slate-700 leading-relaxed">Anwendbar ist das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts, soweit diese Rechtswahl nicht dazu führt, dass ein Verbraucher hierdurch zwingenden verbraucherschützenden Normen entzogen wird.</p>
    </div>
    <div>
      <p class="font-semibold text-slate-800 mb-2">7.2 Gerichtsstand</p>
      <p class="text-slate-700 leading-relaxed">Ist der Webseitenbesucher Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist das Gericht an unserem o.g. Sitz für alle Streitigkeiten im Anwendungsbereich dieser Nutzungsbedingungen zuständig, sofern nicht für die Streitigkeit ein ausschließlicher Gerichtsstand begründet ist. Dies gilt auch, wenn der Webseitenbesucher keinen Wohnsitz innerhalb der Europäischen Union hat.</p>
    </div>
    <div>
      <p class="font-semibold text-slate-800 mb-2">7.3 Teilunwirksamkeit</p>
      <p class="text-slate-700 leading-relaxed">Sofern einzelne Regelungen dieser AGB unwirksam sind oder unwirksam werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
    </div>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">8. Informationen zur Online-Streitbeilegung</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-700 leading-relaxed mb-3">Im Rahmen unserer gesetzlichen Informationspflicht weisen wir darauf hin, dass die Europäische Kommission im Internet unter folgendem Link eine Plattform zur Online-Streitbeilegung bereitstellt:</p>
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-3">
      <p class="text-slate-700 mb-2"><a href="http://ec.europa.eu/consumers/odr" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">http://ec.europa.eu/consumers/odr</a></p>
    </div>
    <p class="text-slate-700 leading-relaxed mt-3">Diese Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten aus Online-Kauf- oder Dienstleistungsverträgen, an denen ein Verbraucher beteiligt ist. Wir sind nicht bereit und nicht verpflichtet an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Unsere E-Mail-Adresse entnehmen Sie der Überschrift dieser Nutzungsbedingungen.</p>
  </div>
</section>

<div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-8">
  <h2 class="text-xl font-bold text-slate-900 mb-3">Wichtiger Hinweis</h2>
  <p class="text-slate-800 leading-relaxed font-semibold">Von allen Unternehmen, die Inserate auf der Plattform schalten, erhält der Plattformbetreiber ein Entgelt. Bei der Weiterleitung an Drittunternehmen erhält der Plattformbetreiber ggf. eine Provision. Es findet keine Bevorzugung einzelner Unternehmen oder Inserate statt.</p>
</div>

<div class="bg-slate-100 rounded-lg p-5 border border-slate-300 mt-8 text-center">
  <p class="text-slate-700">Nutzungsbedingungen für (potenzielle) Bewerber können auch <a href="https://portal.jobspeedy.de/download/nutzungsbedingung_bewerber.pdf" rel="noopener" target="_blank" class="text-sky-600 font-medium hover:text-sky-700 underline">hier heruntergeladen werden</a></p>
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
                <p className="text-sm uppercase tracking-wide opacity-80">Fragen?</p>
                <p className="text-lg font-semibold mt-1">support@portal.jobspeedy.de</p>
                <p className="text-sm opacity-90">+49 821 / 486 99 516</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
                <p className="text-sm font-semibold text-slate-700">Highlights</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• Nutzung & Verhaltenspflichten</li>
                  <li>• Haftung & Freistellung</li>
                  <li>• Bewerberprofile & Jobbörse</li>
                  <li>• Datenschutz & Streitbeilegung</li>
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

export default TermsOfUse;
