"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-8">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Zurück zur Startseite
        </Link>
      </div>

      {/* Content */}
      <motion.article
        className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-light mb-12">
          Impressum
        </h1>

        {/* Angaben gemäß § 5 TMG */}
        <section className="mb-10">
          <h2 className="text-xl font-medium text-white mb-4">Angaben gemäß § 5 TMG</h2>
          <address className="not-italic text-white/70 leading-relaxed">
            <p className="font-medium text-white">Omar Rageh</p>
            <p>Otfrid-von-Weißenburg-Straße 41</p>
            <p>36043 Fulda</p>
            <p>Deutschland</p>
          </address>
        </section>

        {/* Kontakt */}
        <section className="mb-10">
          <h2 className="text-xl font-medium text-white mb-4">Kontakt</h2>
          <div className="text-white/70 leading-relaxed space-y-1">
            <p>
              Telefon:{" "}
              <a href="tel:+4917655093674" className="text-white hover:underline">
                +49 176 55093674
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:omarragehfulda@gmail.com" className="text-white hover:underline">
                omarragehfulda@gmail.com
              </a>
            </p>
            <p>
              Web:{" "}
              <a href="https://omar-portfolio.xyz" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
                omar-portfolio.xyz
              </a>
            </p>
          </div>
        </section>

        {/* Umsatzsteuer */}
        <section className="mb-10">
          <h2 className="text-xl font-medium text-white mb-4">Umsatzsteuer</h2>
          <p className="text-white/70 leading-relaxed">
            Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
          </p>
        </section>

        {/* Redaktionell verantwortlich */}
        <section className="mb-10">
          <h2 className="text-xl font-medium text-white mb-4">Redaktionell verantwortlich</h2>
          <p className="text-white/70">Omar Rageh</p>
          <p className="text-white/70">Otfrid-von-Weißenburg-Straße 41, 36043 Fulda</p>
        </section>

        {/* Verbraucherstreitbeilegung */}
        <section className="mb-10">
          <h2 className="text-xl font-medium text-white mb-4">
            Verbraucherstreitbeilegung/Universalschlichtungsstelle
          </h2>
          <p className="text-white/70 leading-relaxed">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        {/* Haftung für Inhalte */}
        <section className="mb-10">
          <h2 className="text-xl font-medium text-white mb-4">Haftung für Inhalte</h2>
          <div className="text-white/70 leading-relaxed space-y-4">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
              der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>
        </section>

        {/* Haftung für Links */}
        <section className="mb-10">
          <h2 className="text-xl font-medium text-white mb-4">Haftung für Links</h2>
          <div className="text-white/70 leading-relaxed space-y-4">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
              haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
              der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </div>
        </section>

        {/* Urheberrecht */}
        <section className="mb-10">
          <h2 className="text-xl font-medium text-white mb-4">Urheberrecht</h2>
          <div className="text-white/70 leading-relaxed space-y-4">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
              Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
              Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </section>

        <hr className="border-white/10 my-12" />

        <p className="text-white/40 text-sm">
          Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:text-white/60">e-recht24.de</a>
        </p>
      </motion.article>
    </main>
  );
}
