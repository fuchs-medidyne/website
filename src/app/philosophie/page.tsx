import type { Metadata } from "next";
import {
  Repeat,
  Route,
  Layers,
  Stethoscope,
  UserCheck,
  Workflow,
} from "lucide-react";
import heroBg from "../../../public/images/hero_bg.png";

export const metadata: Metadata = {
  title: "Philosophie",
  description:
    "Unsere Vision: Eine Plattform für die gesamte Arztpraxis — Routineaufgaben automatisieren, Patientenwege vereinfachen und alle Prozesse unter einem Dach vereinen.",
};

const principles = [
  {
    icon: Repeat,
    title: "Routineaufgaben automatisieren",
    description:
      "Wiederkehrende Bürotätigkeiten wie Dokumentation, Abrechnung oder Patientenanmeldung kosten täglich wertvolle Zeit. Wir automatisieren diese Prozesse, damit sich Ihr Team auf das Wesentliche konzentrieren kann — die Versorgung Ihrer Patienten.",
  },
  {
    icon: Route,
    title: "Patientenwege vereinfachen",
    description:
      "Vom Betreten der Praxis bis zum Verlassen: Wir begleiten Patienten digital durch jeden Schritt — Self-Check-In, Wartezimmeraufruf, Dokumentation. So wenig Aufwand wie möglich für Patient und Praxisteam.",
  },
  {
    icon: Layers,
    title: "Eine Plattform statt vieler Programme",
    description:
      "Praxen arbeiten heute oft mit einem Flickenteppich aus Einzellösungen, denen die Schnittstellen fehlen. Unser Ziel: So viele Aufgaben wie möglich in einer einzigen Plattform abbilden — durchgängig, vernetzt und ohne Medienbrüche.",
  },
];

const perspectives = [
  {
    icon: UserCheck,
    label: "Für MFA und Empfangsteam",
    text: "Weniger Papier, weniger Telefon, weniger Doppelerfassung. Automatisierte Anmeldung, digitaler Patientenaufruf und zentrale Verwaltung entlasten den Praxisalltag spürbar.",
  },
  {
    icon: Stethoscope,
    label: "Für Ärztinnen und Ärzte",
    text: "Sprechstunden-Dokumentation, Gutachten und Berichte — unterstützt durch KI, damit mehr Zeit für den Patienten bleibt. Abrechnung und Dienstplanung laufen im Hintergrund.",
  },
  {
    icon: Workflow,
    label: "Für die gesamte Praxis",
    text: "Eine Plattform, ein Login, ein System. Alle Module greifen ineinander — vom Check-In über die Behandlung bis zur Abrechnung. Keine Insellösungen, keine fehlenden Schnittstellen.",
  },
];

export default function PhilosophiePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[28vh] min-h-[220px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-8 w-full text-center">
          <div className="hero-backdrop px-8 py-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-4">
              Unsere Vision
            </p>
            <h1 className="hero-title-shadow font-display text-3xl lg:text-5xl tracking-tight text-white mb-4">
              Philosophie
            </h1>
            <p className="text-base text-white/70 leading-relaxed max-w-2xl mx-auto">
              Arztpraxen verdienen Software, die mitdenkt — nicht Software,
              die zusätzliche Arbeit macht.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Leitgedanke ─── */}
      <section className="py-16 lg:py-20 bg-snow">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight mb-8">
            Warum wir EmMa entwickeln
          </h2>
          <p className="text-lg text-midnight/55 leading-relaxed mb-6">
            In vielen Arztpraxen verbringt das Team einen großen Teil des Tages
            mit Aufgaben, die sich wiederholen: Patienten anmelden,
            Dokumentationen schreiben, Abrechnungen prüfen, Dienstpläne
            erstellen. Gleichzeitig fehlt oft die Zeit für das, wofür alle
            eigentlich da sind — die Patientenversorgung.
          </p>
          <p className="text-lg text-midnight/55 leading-relaxed">
            Wir glauben, dass Technologie genau hier ansetzen muss. Nicht als
            weiteres Programm in einer langen Liste, sondern als eine
            durchdachte Plattform, die den gesamten Praxisalltag abbildet und
            dort automatisiert, wo es sinnvoll ist.
          </p>
        </div>
      </section>

      {/* ─── Drei Grundprinzipien ─── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">
              Drei Grundprinzipien
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {principles.map((p) => (
              <div
                key={p.title}
                className="p-8 rounded-2xl bg-snow border border-violet/5 hover:shadow-xl hover:shadow-violet/5 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-violet/8 flex items-center justify-center mb-6">
                  <p.icon className="w-6 h-6 text-violet" />
                </div>
                <h3 className="text-lg font-semibold text-midnight mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-midnight/55 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Perspektiven ─── */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-midnight to-void overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-white">
              Was das konkret bedeutet
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {perspectives.map((p) => (
              <div key={p.label} className="glass rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-violet/15 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-violet" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {p.label}
                  </h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Abschluss ─── */}
      <section className="py-16 lg:py-20 bg-snow">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight mb-6">
            Ein System, das mitwächst
          </h2>
          <p className="text-lg text-midnight/55 leading-relaxed">
            EmMa wird kontinuierlich weiterentwickelt — in enger Zusammenarbeit
            mit Arztpraxen, basierend auf echtem Feedback aus dem Alltag. Jede
            Funktion, die wir ergänzen, folgt demselben Prinzip: den Praxisalltag
            einfacher machen, nicht komplizierter.
          </p>
        </div>
      </section>
    </>
  );
}
