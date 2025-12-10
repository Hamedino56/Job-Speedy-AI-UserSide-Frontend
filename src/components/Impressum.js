import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const pageMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 }
};

const Impressum = () => {
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
                🧭 Impressum
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">Rechtliche Angaben</h1>
              <p className="text-slate-600 mt-2">
                Unternehmensangaben, Verantwortlichkeiten, Aufsichtsbehörden und Kontaktmöglichkeiten.
              </p>
            </div>
            <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white px-4 py-3 rounded-2xl shadow-lg">
              <p className="text-sm font-semibold">Schnellkontakt</p>
              <p className="text-lg font-bold">support@jobspeedy.ai</p>
              <p className="text-sm opacity-90">+49 821 / 486 99 516</p>
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
<h1 class="text-3xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-slate-200">Impressum</h1>

<div class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-8">
  <p class="text-slate-800 font-bold text-lg mb-2">Jobspeedy ist ein Projekt der</p>
  <p class="text-slate-900 font-bold text-xl">Hitradio MS One Programmanbieter GmbH</p>
</div>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">Angaben gemäß § 5 TMG</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="font-bold text-slate-900 text-lg mb-2">Hitradio MS One Programmanbieter GmbH</p>
    <p class="text-slate-700 mb-1">Alfred-Nobel-Str. 9</p>
    <p class="text-slate-700">86156 Augsburg</p>
  </div>
</section>

<section class="mb-8">
  <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Vertreten durch</h3>
  <div class="bg-slate-50 rounded-lg p-4 border border-slate-200">
    <p class="text-slate-700">Maximilian Krug (Geschäftsführer)</p>
  </div>
</section>

<section class="mb-8">
  <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Kontakt</h3>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-700 mb-2">Telefon: <a href="tel:+4982148699516" class="text-sky-600 font-medium hover:text-sky-700">+49 821 / 486 99 516</a></p>
    <p class="text-slate-700 mb-2">Fax: +49 821 / 267 14 877</p>
    <p class="text-slate-700">E-Mail: <a href="mailto:support@jobspeedy.ai" class="text-sky-600 font-medium hover:text-sky-700">support@jobspeedy.ai</a></p>
  </div>
</section>

<section class="mb-8">
  <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Registrierung</h3>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-700 mb-1">Eintrag im Handelsregister Augsburg</p>
    <p class="text-slate-700 mb-1">Registergericht: Amtsgericht Augsburg</p>
    <p class="text-slate-700 font-semibold">Registernummer: HRB 26705</p>
  </div>
</section>

<section class="mb-8">
  <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Umsatzsteuer</h3>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-700 mb-2">Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
    <p class="text-slate-700 font-semibold mb-2">DE281609732</p>
    <p class="text-slate-700">Steuer-Nr.: 103/128/50627</p>
  </div>
</section>

<section class="mb-8">
  <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Inhaltlich Verantwortliche(r) i.S.v. § 18 Abs. 2 MStV</h3>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-700 font-semibold mb-1">Maximilian Krug</p>
    <p class="text-slate-700 mb-1">Alfred-Nobel-Str. 9</p>
    <p class="text-slate-700">86156 Augsburg</p>
  </div>
</section>

<section class="mb-8">
  <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Aufsichtsbehörde</h3>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-700 font-semibold mb-2">Agentur für Arbeit Regionaldirektion Bayern</p>
    <p class="text-slate-700 mb-1">Richard-Wagner-Platz 5</p>
    <p class="text-slate-700">90443 Nürnberg</p>
  </div>
</section>

<section class="mb-8">
  <h3 class="text-xl font-semibold text-slate-800 mt-6 mb-3">Rechtsanwaltschaftlich vertreten durch:</h3>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-700 font-semibold mb-2">Siebert Goldberg Lexow Rechtsanwälte PartGmbB</p>
    <p class="text-slate-700 mb-1">RA Herr Lev Lexow</p>
    <p class="text-slate-700 mb-1">Lietzenburger Str. 94</p>
    <p class="text-slate-700 mb-3">10719 Berlin</p>
    <p class="text-slate-700 mb-1">Internet: <a href="https://www.kanzlei-siebert.de/" target="_blank" rel="noopener" class="text-sky-600 font-medium hover:text-sky-700 underline">https://www.kanzlei-siebert.de/</a></p>
    <p class="text-slate-700 mb-1">E-Mail: <a href="mailto:info@siebert-lexow.de" class="text-sky-600 font-medium hover:text-sky-700">info@siebert-lexow.de</a></p>
    <p class="text-slate-700 mb-1">Telefon: +49 (0) 30 884 75 62 0</p>
    <p class="text-slate-700">Telefax: +49 (0) 30 884 75 62 2</p>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">Informationen zur Online-Streitbeilegung / Verbraucherschlichtung</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-700 leading-relaxed mb-3">Die EU-Kommission stellt im Internet unter folgendem Link eine Plattform zur Online-Streitbeilegung bereit:</p>
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3">
      <p class="text-slate-700"><a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener" class="text-sky-600 font-medium hover:text-sky-700 underline">https://ec.europa.eu/consumers/odr</a></p>
    </div>
    <p class="text-slate-700 leading-relaxed">Diese Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten aus Online-Kauf- oder Dienstleistungsverträgen, an denen ein Verbraucher beteiligt ist. Der Anbieter ist weder bereit noch verpflichtet an einem Verbraucherstreitschlichtungsverfahren nach dem VSBG teilzunehmen. Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">Haftung für Inhalte</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-700 leading-relaxed mb-3">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">Haftung für Links</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-700 leading-relaxed mb-3">Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
    <p class="text-slate-700 leading-relaxed">Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
  </div>
</section>

<section class="mb-8">
  <h2 class="text-2xl font-bold text-sky-700 mt-8 mb-4 pb-2 border-b-2 border-slate-300">Urheberrecht</h2>
  <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
    <p class="text-slate-700 leading-relaxed mb-3">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
    <p class="text-slate-700 leading-relaxed mb-3">Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.</p>
    <p class="text-slate-700 leading-relaxed">Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
  </div>
</section>

<div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-8">
  <h2 class="text-xl font-bold text-slate-900 mb-3">Wichtiger Hinweis</h2>
  <p class="text-slate-800 leading-relaxed font-semibold">Von allen Unternehmen, die Inserate auf der Plattform schalten, erhält der Plattformbetreiber ein Entgelt. Bei der Weiterleitung an Drittunternehmen erhält der Plattformbetreiber ggf. eine Provision. Es findet keine Bevorzugung einzelner Unternehmen oder Inserate statt.</p>
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
                <p className="text-sm uppercase tracking-wide opacity-80">Standort</p>
                <p className="text-lg font-semibold mt-1">Augsburg, Alfred-Nobel-Str. 9</p>
                <p className="text-sm opacity-90">HRB 26705 · DE281609732</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
                <p className="text-sm font-semibold text-slate-700">Aufsichtsbehörde</p>
                <p className="text-sm text-slate-600 mt-2">
                  Agentur für Arbeit Regionaldirektion Bayern<br />
                  Richard-Wagner-Platz 5<br />
                  90443 Nürnberg
                </p>
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

export default Impressum;
