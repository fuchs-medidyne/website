import type { Metadata } from "next";
import heroBg from "../../../public/images/hero_bg.png";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Medidyne Systems GmbH, Tübingen.",
};

export default function ImpressumPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-8 w-full text-center">
          <div className="hero-backdrop px-8 py-6">
            <h1 className="font-display text-2xl lg:text-3xl tracking-tight text-white">
              Impressum
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Content ─── */}
      <section className="py-20 bg-snow">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose-custom space-y-10">
            {/* Company */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-midnight/60 leading-relaxed">
                Medidyne Systems GmbH
                <br />
                Nürtingen Str. 52
                <br />
                72074 Tübingen
              </p>
            </div>

            <div className="section-divider" />

            {/* Management */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Geschäftsführung
              </h2>
              <p className="text-midnight/60">
                Eduard Warth, Dr. med. Christian Fuchs, Bettina Schindler
              </p>
            </div>

            <div className="section-divider" />

            {/* Contact */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Kontakt
              </h2>
              <p className="text-midnight/60">
                E-Mail:{" "}
                <a
                  href="mailto:kontakt@medidyne-systems.de"
                  className="text-violet hover:text-iris transition-colors"
                >
                  kontakt@medidyne-systems.de
                </a>
              </p>
            </div>

            <div className="section-divider" />

            {/* Registration */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Handelsregistereintrag
              </h2>
              <p className="text-midnight/60">
                Registergericht: Stuttgart
                <br />
                Registernummer: HRB 799836
              </p>
            </div>

            <div className="section-divider" />

            {/* Tax */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="text-midnight/60">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz: DE454265901
              </p>
            </div>

            <div className="section-divider" />

            {/* Disclaimer */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Haftungsausschluss
              </h2>

              <h3 className="text-lg font-semibold text-midnight mt-6 mb-3">
                Haftung für Inhalte
              </h3>
              <p className="text-midnight/60 leading-relaxed">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                erstellt. Für die Richtigkeit, Vollständigkeit und
                Aktualität der Inhalte können wir jedoch keine Gewähr
                übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1
                TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
                sind wir als Diensteanbieter jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="text-lg font-semibold text-midnight mt-6 mb-3">
                Haftung für Links
              </h3>
              <p className="text-midnight/60 leading-relaxed">
                Unser Angebot enthält Links zu externen Webseiten Dritter,
                auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der
                jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="text-lg font-semibold text-midnight mt-6 mb-3">
                Urheberrecht
              </h3>
              <p className="text-midnight/60 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke
                auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
