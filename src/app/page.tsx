import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Lightbulb,
  Cloud,
  ClipboardCheck,
  Shield,
  Globe,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";
import { getVisibleModules } from "@/data/modules";

const features = [
  {
    icon: Zap,
    title: "Effizienz steigern",
    description:
      "Digitale Abläufe reduzieren Verwaltungsaufwand und schaffen mehr Zeit für die Patientenversorgung.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Lösungen",
    description:
      "Modernste Technologie, speziell für den medizinischen Alltag entwickelt.",
  },
  {
    icon: Cloud,
    title: "Cloudbasierte SaaS",
    description:
      "Browserbasierter Zugriff ohne Installation. Zentrale Verwaltung und automatische Updates.",
  },
];

const pillars = [
  {
    icon: ClipboardCheck,
    title: "Effizientere Abläufe",
    description: "Digitale Patientenanmeldung und automatisierte Dokumentation.",
  },
  {
    icon: Shield,
    title: "Sicherheit & Kontrolle",
    description: "Rollenbasierte Verwaltung mit mehrstufigem Zugriffsmodell.",
  },
  {
    icon: Globe,
    title: "SaaS & Cloud",
    description: "Browserbasierter Zugriff von überall, stets aktuell.",
  },
  {
    icon: RefreshCcw,
    title: "Stetige Weiterentwicklung",
    description: "Automatische Updates basierend auf Praxis-Feedback.",
  },
];

const visibleModules = getVisibleModules();

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[30vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero_bg.png')" }}
        />
        <div className="absolute inset-0 bg-midnight/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-10 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-white mb-5">
              Prozessdigitalisierung{" "}
              <span className="gradient-text">und Automatisierung</span>{" "}
              für moderne Arztpraxen
            </h1>

            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
              Entlasten Sie Ihr medizinisches Personal durch intelligente
              digitale Lösungen. Mehr Zeit für Patienten, weniger Verwaltungsaufwand.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.4)]"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/ki-loesungen"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white/80 border border-white/20 hover:border-white/40 hover:text-white transition-all duration-300 hover:bg-white/5"
              >
                Unsere Lösungen
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── Features (3 Spalten, kompakt) ─── */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">
              Intelligente Lösungen für{" "}
              <span className="gradient-text-dark">den medizinischen Alltag</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-xl bg-snow border border-violet/5 hover:shadow-lg hover:shadow-violet/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-violet/8 flex items-center justify-center mb-4 group-hover:bg-violet/15 transition-colors">
                  <feature.icon className="w-5 h-5 text-violet" />
                </div>
                <h3 className="text-lg font-semibold text-midnight mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-midnight/55 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Praxis-Bild ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="https://placehold.co/1400x400/0F2A33/4DA3B5?text=Bild%3A+Moderne+Arztpraxis+mit+EmMa+Terminal+am+Empfang"
              alt="Moderne Arztpraxis mit EmMa Terminal am Empfang"
              width={1400}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── 4 Säulen (hell, kompakt) ─── */}
      <section className="py-14 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">
              Worauf wir aufbauen
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-white border border-violet/5 hover:shadow-md hover:shadow-violet/5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-violet/8 flex items-center justify-center mb-3">
                  <pillar.icon className="w-4.5 h-4.5 text-violet" />
                </div>
                <h3 className="text-base font-semibold text-midnight mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-midnight/50 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Module (dynamisch, hell) ─── */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-2">
              EmMa Module
            </p>
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">
              Von der Anmeldung bis{" "}
              <span className="gradient-text-dark">zur Abrechnung</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {visibleModules.map((mod) => (
              <div
                key={mod.id}
                className="group flex items-start gap-4 p-4 rounded-xl bg-snow border border-violet/5 hover:shadow-md hover:shadow-violet/5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-violet/8 flex items-center justify-center shrink-0 group-hover:bg-violet/15 transition-colors">
                  <mod.icon className="w-4 h-4 text-violet" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-midnight mb-0.5">
                    {mod.name}
                  </h3>
                  <p className="text-xs text-midnight/50 leading-relaxed">
                    {mod.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/ki-loesungen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet hover:text-iris transition-colors"
            >
              Alle Module im Detail
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner (dezent, hell) ─── */}
      <section className="py-14 bg-gradient-to-r from-violet/5 via-mauve/5 to-violet/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight mb-4">
            Bereit für die digitale Zukunft?
          </h2>
          <p className="text-base text-midnight/50 mb-8 max-w-xl mx-auto">
            Erfahren Sie, wie EmMa Ihre Praxis effizienter gestalten kann.
            Wir beraten Sie gerne persönlich.
          </p>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.3)]"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
