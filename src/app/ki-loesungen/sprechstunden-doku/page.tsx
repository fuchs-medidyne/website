import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Mic, Brain, ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Sprechstunden-Dokumentation",
  description:
    "KI-gestützte Dokumentation des Arzt-Patienten-Gesprächs — automatische Transkription und Zusammenfassung.",
};

const features = [
  {
    icon: Mic,
    title: "Automatische Erfassung",
    description: "Das Arzt-Patienten-Gespräch wird automatisch erfasst — Sie konzentrieren sich voll auf Ihren Patienten.",
  },
  {
    icon: Brain,
    title: "KI-Transkription",
    description: "Modernste Spracherkennung transkribiert und fasst das Gespräch in eine strukturierte Dokumentation zusammen.",
  },
  {
    icon: FileText,
    title: "Strukturierte Ausgabe",
    description: "Die Zusammenfassung wird für die Patientenakte aufbereitet — Anamnese, Befund und Therapie klar getrennt.",
  },
  {
    icon: ShieldCheck,
    title: "Datenschutzkonform",
    description: "Alle Daten werden DSGVO-konform verarbeitet und gespeichert. Keine Weitergabe an Dritte.",
  },
  {
    icon: Clock,
    title: "Zeitersparnis",
    description: "Deutliche Reduktion der Nachbereitungszeit pro Patient — mehr Zeit für die nächste Behandlung.",
  },
];

export default function SprechstundenDokuPage() {
  return (
    <>
      <section className="relative pt-28 pb-14 bg-gradient-to-br from-midnight via-void to-abyss overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-4">EmMa Modul</p>
            <h1 className="font-display text-3xl lg:text-4xl tracking-tight text-white mb-6">
              Sprechstunden-Dokumentation
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
              Konzentrieren Sie sich voll auf Ihre Patienten — die Dokumentation übernimmt EmMa.
              Das Arzt-Patienten-Gespräch wird KI-gestützt erfasst und automatisch in eine
              strukturierte Dokumentation überführt.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">Funktionen</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-xl bg-snow border border-violet/5">
                <div className="w-10 h-10 rounded-lg bg-violet/8 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-violet" />
                </div>
                <h3 className="text-lg font-semibold text-midnight mb-2">{f.title}</h3>
                <p className="text-sm text-midnight/55 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-snow">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl tracking-tight text-midnight mb-4">Interesse?</h2>
          <p className="text-base text-midnight/50 mb-8">Erfahren Sie, wie die automatische Sprechstunden-Dokumentation Ihren Alltag vereinfacht.</p>
          <Link href="/kontakt" className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.3)]">
            Demo anfragen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
