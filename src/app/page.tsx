import Link from "next/link";
import {
  Zap,
  Lightbulb,
  Cloud,
  ClipboardCheck,
  Shield,
  Globe,
  RefreshCcw,
  Monitor,
  Settings,
  FileText,
  FileCheck,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Effizienz steigern",
    description:
      "KI-optimierte Abläufe reduzieren Verwaltungsaufwand und schaffen mehr Zeit für das Wesentliche — die Patientenversorgung.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Lösungen",
    description:
      "Modernste KI-Technologie, speziell für den medizinischen Alltag entwickelt. Automatisierung, die wirklich entlastet.",
  },
  {
    icon: Cloud,
    title: "Cloudbasierte SaaS",
    description:
      "Browserbasierter Zugriff ohne lokale Installation. Zentrale Benutzerverwaltung und automatische Updates inklusive.",
  },
];

const pillars = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Effizientere Abläufe",
    description:
      "Digitale Patientenanmeldung und automatisierte Dokumentation beschleunigen den Praxisalltag erheblich.",
  },
  {
    icon: Shield,
    number: "02",
    title: "Sicherheit & Kontrolle",
    description:
      "Rollenbasierte Benutzerverwaltung mit mehrstufigem Zugriffsmodell für maximale Datensicherheit.",
  },
  {
    icon: Globe,
    number: "03",
    title: "SaaS & Cloud",
    description:
      "Browserbasierter Zugriff von überall. Keine lokale Installation, keine Wartung, stets aktuell.",
  },
  {
    icon: RefreshCcw,
    number: "04",
    title: "Kontinuierliche Weiterentwicklung",
    description:
      "Automatische Updates und neue Funktionen basierend auf direktem Praxis-Feedback.",
  },
];

const useCases = [
  {
    icon: Monitor,
    title: "Self-Check-In Terminal",
    description: "Digitale Selbstanmeldung für Patienten am Empfang.",
  },
  {
    icon: Settings,
    title: "Terminal-Konfiguration",
    description: "Individuelle Anpassung der Check-In-Prozesse.",
  },
  {
    icon: FileText,
    title: "Sprechstunden\u00ADdokumentation",
    description: "Automatische Dokumentation des Arzt-Patienten-Gesprächs.",
  },
  {
    icon: FileCheck,
    title: "Gutachten\u00ADerstellung",
    description: "KI-gestützte Erstellung medizinischer Gutachten.",
  },
  {
    icon: Users,
    title: "Wartezimmer\u00ADaufruf",
    description: "Intelligentes Aufruf- und Wartezimmermanagement.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-midnight via-void to-abyss">
        {/* Background pattern */}
        <div className="absolute inset-0 dot-grid opacity-60" />

        {/* Decorative shapes */}
        <div className="absolute top-32 right-[15%] w-72 h-72 rounded-full bg-violet/8 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-24 left-[10%] w-56 h-56 rounded-full bg-iris/6 blur-3xl animate-pulse-glow delay-500" />
        <div className="absolute top-1/2 right-[8%] w-px h-48 bg-gradient-to-b from-transparent via-violet/20 to-transparent" />
        <div className="absolute top-[20%] left-[5%] w-16 h-16 border border-violet/10 rounded-lg rotate-12 animate-float" />
        <div className="absolute bottom-[30%] right-[20%] w-8 h-8 border border-lavender/15 rounded-full animate-float delay-300" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass text-sm text-white/60">
              <Sparkles className="w-4 h-4 text-violet" />
              <span>KI-gestützte Praxissoftware</span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up delay-100 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white mb-8">
              Prozessdigitalisierung
              <br />
              <span className="gradient-text">und Automatisierung</span>
              <br />
              für moderne Arztpraxen
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up delay-200 text-lg sm:text-xl text-white/50 max-w-2xl leading-relaxed mb-12">
              Entlasten Sie Ihr medizinisches Personal durch intelligente,
              KI-gestützte digitale Lösungen. Mehr Zeit für Patienten,
              weniger Verwaltungsaufwand.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_32px_rgba(103,61,230,0.4)] hover:-translate-y-0.5"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/ki-loesungen"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-white/70 border border-white/10 hover:border-white/25 hover:text-white transition-all duration-300 hover:bg-white/5"
              >
                Produktdetails ansehen
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Features ─── */}
      <section className="py-24 lg:py-32 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
              Unsere Stärken
            </p>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-midnight">
              Intelligente Lösungen für
              <br />
              <span className="gradient-text-dark">den medizinischen Alltag</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl bg-white border border-violet/5 shadow-sm hover:shadow-xl hover:shadow-violet/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-violet/8 flex items-center justify-center mb-6 group-hover:bg-violet/15 transition-colors">
                  <feature.icon className="w-6 h-6 text-violet" />
                </div>
                <h3 className="text-xl font-semibold text-midnight mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-midnight/55 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4 Pillars ─── */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-midnight via-void to-abyss overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
              Unsere Säulen
            </p>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-white">
              Worauf wir aufbauen
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group glass rounded-2xl p-8 hover:bg-white/8 transition-all duration-500"
              >
                <span className="block font-display text-5xl text-white/8 mb-4 group-hover:text-violet/20 transition-colors">
                  {pillar.number}
                </span>
                <div className="w-10 h-10 rounded-lg bg-violet/15 flex items-center justify-center mb-5">
                  <pillar.icon className="w-5 h-5 text-violet" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Use Cases ─── */}
      <section className="py-24 lg:py-32 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
              Anwendungsbereiche
            </p>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-midnight">
              Von der Anmeldung bis
              <br />
              <span className="gradient-text-dark">zur Dokumentation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="group flex items-start gap-5 p-6 rounded-2xl bg-white border border-violet/5 hover:shadow-lg hover:shadow-violet/5 transition-all duration-500 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-violet/8 flex items-center justify-center shrink-0 group-hover:bg-violet/15 transition-colors">
                  <uc.icon className="w-5 h-5 text-violet" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-midnight mb-1">
                    {uc.title}
                  </h3>
                  <p className="text-sm text-midnight/50">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="relative py-24 bg-gradient-to-br from-void to-midnight overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-white mb-6">
            Bereit für die digitale Zukunft?
          </h2>
          <p className="text-lg text-white/45 mb-10 max-w-xl mx-auto">
            Erfahren Sie, wie EmMa.AI Ihre Praxis effizienter gestalten
            kann. Wir beraten Sie gerne persönlich.
          </p>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(103,61,230,0.45)] hover:-translate-y-0.5"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
