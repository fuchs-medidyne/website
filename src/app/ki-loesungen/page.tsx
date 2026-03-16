import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, ArrowRight, CheckCircle } from "lucide-react";
import { getVisibleModules } from "@/data/modules";

export const metadata: Metadata = {
  title: "Lösungen",
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

export default function KiLoesungenPage() {
  const visibleModules = getVisibleModules();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-28 pb-14 bg-gradient-to-br from-midnight via-void to-abyss overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute bottom-20 left-[15%] w-72 h-72 rounded-full bg-violet/8 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-4">
              EmMa Plattform
            </p>
            <h1 className="font-display text-3xl lg:text-4xl tracking-tight text-white mb-6">
              Cloudbasierte Praxissoftware{" "}
              <span className="gradient-text">als Service</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
              EmMa ist eine modulare Cloud-Plattform, speziell für
              medizinische Einrichtungen konzipiert — mit höchsten
              Ansprüchen an Sicherheit, Verfügbarkeit und
              Benutzerfreundlichkeit.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Benefits ─── */}
      <section className="py-16 lg:py-20 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-violet/8 text-sm text-violet font-medium">
                <Cloud className="w-4 h-4" />
                SaaS-Plattform
              </div>
              <h2 className="font-display text-2xl tracking-tight text-midnight mb-6">
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

      {/* ─── Module Grid (dynamisch aus modules.ts) ─── */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-midnight to-void overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
              EmMa Module
            </p>
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-white">
              Unsere Module im Überblick
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleModules.map((mod) => (
              <div
                key={mod.id}
                className="group glass rounded-2xl p-7 hover:bg-white/8 transition-all duration-500 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-violet/15 flex items-center justify-center mb-5">
                  <mod.icon className="w-5 h-5 text-violet" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {mod.name}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-4 flex-1">
                  {mod.summary}
                </p>
                {mod.detailPage && (
                  <Link
                    href={mod.detailPage}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-violet hover:text-lavender transition-colors"
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
      <section className="py-16 bg-snow">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl tracking-tight text-midnight mb-6">
            Interesse geweckt?
          </h2>
          <p className="text-lg text-midnight/50 mb-10">
            Wir zeigen Ihnen gerne in einer persönlichen Demo, wie unsere
            Module Ihren Praxisalltag vereinfachen können.
          </p>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_32px_rgba(46,125,142,0.4)] hover:-translate-y-0.5"
          >
            Demo anfragen
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
