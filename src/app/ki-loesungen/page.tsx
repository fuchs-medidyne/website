import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "../../../public/images/hero_bg.png";

export const metadata: Metadata = {
  title: "KI Lösungen",
  description:
    "KI Lösungen für Arztpraxen — cloudbasierte Praxissoftware als Service mit hoher Verfügbarkeit, zentraler Wartung und stets aktueller Software.",
};

const saasPoints = [
  "Hohe Verfügbarkeit",
  "Zentrale Wartung",
  "Stets aktuelle Software",
];

const doctorPoints = [
  "Unterstützung bei der Sprechstundendokumentation",
  "Erstellung von Berichten und Gutachten",
  "Minimierter Zeitaufwand für administrative Aufgaben",
];

const checkinPoints = [
  "Digitale Anmeldung via cloudbasierte Terminals",
  "Individualisierbare Check-In-Prozesse",
  "Entlastung des Empfangsteams",
  "Optimierte Patientenleitung",
];

export default function KiLoesungenPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[30vh] flex items-center pt-24 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/50" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-4">
              EmMa Plattform
            </p>
            <h1 className="font-display text-3xl lg:text-4xl tracking-tight text-white mb-6">
              KI Lösungen{" "}
              <span className="gradient-text">für Arztpraxen</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
              Verwaltungsaufgaben in Arztpraxen automatisiert — medizinisches
              Personal entlasten und die Patientenversorgung optimieren.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Cloudbasierte Praxissoftware ─── */}
      <section className="py-16 lg:py-20 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-violet/8 text-sm text-violet font-medium">
                <Cloud className="w-4 h-4" />
                SaaS-Plattform
              </div>
              <h2 className="font-display text-2xl tracking-tight text-midnight mb-6">
                Cloudbasierte Praxissoftware
              </h2>
              <p className="text-lg text-midnight/50 leading-relaxed mb-8">
                Unsere Lösung wird als Software-as-a-Service (SaaS) bereitgestellt,
                spezialisiert auf medizinische Einrichtungen. So profitieren Sie von:
              </p>
            </div>

            <div className="space-y-4">
              {saasPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 p-5 rounded-xl bg-white border border-violet/5"
                >
                  <CheckCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <span className="text-base font-medium text-midnight/70">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Ärztliche Unterstützung ─── */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-midnight to-void overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
                Für Ärzte
              </p>
              <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-white mb-6">
                Widmen Sie sich voll und ganz Ihrem Patienten
              </h2>
              <p className="text-lg text-white/45 leading-relaxed mb-8">
                Wir unterstützen Sie bei Dokumentation, Berichten und Gutachten —
                mit minimalem Zeitaufwand. So bleibt mehr Zeit für das, was zählt.
              </p>
            </div>

            <div className="space-y-4">
              {doctorPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 glass rounded-xl p-5"
                >
                  <CheckCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <span className="text-white/65">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Self-Check-In für Patienten ─── */}
      <section className="py-16 lg:py-20 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checkinPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 p-5 rounded-xl bg-white border border-violet/5"
                >
                  <CheckCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <span className="text-sm text-midnight/70 leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
                Für Patienten
              </p>
              <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight mb-6">
                Self-Check-In für Patienten
              </h2>
              <p className="text-lg text-midnight/50 leading-relaxed mb-8">
                Digitale Anmeldung via cloudbasierte Terminals mit
                individualisierbaren Check-In-Prozessen. Entlasten Sie Ihr
                Empfangsteam und optimieren Sie die Patientenleitung.
              </p>
              <Link
                href="/ki-loesungen/self-check-in"
                className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.4)]"
              >
                Mehr zum Self-Check-In
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-gradient-to-r from-violet/5 via-mauve/5 to-violet/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl tracking-tight text-midnight mb-6">
            Interesse geweckt?
          </h2>
          <p className="text-lg text-midnight/50 mb-10">
            Wir zeigen Ihnen gerne in einer persönlichen Demo, wie unsere
            Lösungen Ihren Praxisalltag vereinfachen können.
          </p>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_32px_rgba(46,125,142,0.4)] hover:-translate-y-0.5"
          >
            Kontakt aufnehmen
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
