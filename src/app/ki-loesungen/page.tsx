import type { Metadata } from "next";
import Link from "next/link";
import {
  Cloud,
  ArrowRight,
  CheckCircle,
  Stethoscope,
  Monitor,
  Server,
  Wrench,
  RefreshCcw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KI Lösungen",
  description:
    "Cloudbasierte Praxissoftware als Service — hohe Verfügbarkeit, zentrale Wartung und stets aktuelle Software für Ihre Arztpraxis.",
};

const benefits = [
  "Hohe Verfügbarkeit und Ausfallsicherheit",
  "Zentrale Wartung ohne lokalen IT-Aufwand",
  "Stets aktuelle Software durch automatische Updates",
  "Skalierbare Lösung für jede Praxisgröße",
  "DSGVO-konforme Datenverarbeitung",
  "Browserbasierter Zugriff — keine Installation nötig",
];

const solutions = [
  {
    icon: Stethoscope,
    title: "Arzt-Patienten-Gespräch",
    description:
      "Unser System unterstützt Ärzte durch automatische Dokumentation und Berichterstellung. So können Sie sich vollständig dem Patienten widmen — die Dokumentation läuft im Hintergrund.",
  },
  {
    icon: Monitor,
    title: "Self-Check-In für Patienten",
    description:
      "Digitale Anmeldung über cloudbasierte Terminals mit konfigurierbaren Check-In-Prozessen. Entlastung des Empfangsteams und optimierte Patientenführung.",
    link: "/ki-loesungen/self-check-in",
  },
  {
    icon: Server,
    title: "Zentrale Verwaltung",
    description:
      "Mehrstufige Benutzer- und Rollenverwaltung über ein zentrales Dashboard. Administrator, Arzt und MFA — jede Rolle mit passenden Berechtigungen.",
  },
  {
    icon: RefreshCcw,
    title: "Kontinuierliche Updates",
    description:
      "Als SaaS-Lösung erhalten Sie automatische Updates mit neuen Funktionen und Verbesserungen. Kein manuelles Update nötig.",
  },
];

export default function KiLoesungenPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-midnight via-void to-abyss overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute bottom-20 left-[15%] w-72 h-72 rounded-full bg-violet/8 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-4">
              Unsere Lösungen
            </p>
            <h1 className="font-display text-5xl lg:text-6xl tracking-tight text-white mb-6">
              Cloudbasierte Praxissoftware
              <br />
              <span className="gradient-text">als Service</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              Unsere Software-as-a-Service-Lösung wurde speziell für
              medizinische Einrichtungen konzipiert — mit höchsten
              Ansprüchen an Sicherheit, Verfügbarkeit und
              Benutzerfreundlichkeit.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Benefits ─── */}
      <section className="py-24 lg:py-32 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-violet/8 text-sm text-violet font-medium">
                <Cloud className="w-4 h-4" />
                SaaS-Plattform
              </div>
              <h2 className="font-display text-4xl tracking-tight text-midnight mb-6">
                Ihre Vorteile auf einen Blick
              </h2>
              <p className="text-lg text-midnight/50 leading-relaxed mb-8">
                Als cloudbasierte Lösung bieten wir Ihnen alle Vorteile
                moderner SaaS-Technologie — ohne die Komplexität einer
                lokalen IT-Infrastruktur.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-violet/5"
                >
                  <CheckCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-midnight/70">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Solutions Grid ─── */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-midnight to-void overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
              Funktionsbereiche
            </p>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-white">
              Unsere Kernmodule
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((sol) => (
              <div
                key={sol.title}
                className="group glass rounded-2xl p-8 hover:bg-white/8 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-violet/15 flex items-center justify-center mb-6">
                  <sol.icon className="w-6 h-6 text-violet" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {sol.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-4">
                  {sol.description}
                </p>
                {sol.link && (
                  <Link
                    href={sol.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-violet hover:text-lavender transition-colors group"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-snow">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl tracking-tight text-midnight mb-6">
            Interesse geweckt?
          </h2>
          <p className="text-lg text-midnight/50 mb-10">
            Wir zeigen Ihnen gerne in einer persönlichen Demo, wie unsere
            Lösungen Ihren Praxisalltag vereinfachen können.
          </p>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_32px_rgba(103,61,230,0.4)] hover:-translate-y-0.5"
          >
            Demo anfragen
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
