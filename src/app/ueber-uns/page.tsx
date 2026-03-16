import type { Metadata } from "next";
import { Users, Heart, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie das Team hinter EmMa.AI kennen — interdisziplinäre Experten aus Medizin, IT und Betriebswirtschaft.",
};

const team = [
  {
    name: "Eduard Warth",
    role: "CEO",
    description:
      "Strategische Unternehmensführung und Geschäftsentwicklung mit Fokus auf nachhaltige Digitalisierungslösungen im Gesundheitswesen.",
    initials: "EW",
  },
  {
    name: "Bettina Schindler",
    role: "CTO",
    description:
      "Technologische Vision und Produktentwicklung. Verantwortlich für die KI-Architektur und cloudbasierte Infrastruktur.",
    initials: "BS",
  },
  {
    name: "Dr. Christian Fuchs",
    role: "COO",
    description:
      "Operative Leitung und Qualitätssicherung. Medizinische Expertise für praxisnahe, bedarfsgerechte Lösungen.",
    initials: "CF",
  },
];

const values = [
  {
    icon: Heart,
    title: "Patienten im Fokus",
    description:
      "Jede Lösung, die wir entwickeln, hat ein Ziel: die Versorgungsqualität für Patienten nachhaltig zu verbessern.",
  },
  {
    icon: Users,
    title: "Praxisnah entwickelt",
    description:
      "Unsere Produkte entstehen in enger Zusammenarbeit mit Arztpraxen — basierend auf echtem Feedback aus dem Alltag.",
  },
  {
    icon: TrendingUp,
    title: "Kontinuierlich besser",
    description:
      "Wir entwickeln unsere Lösungen stetig weiter, um den sich wandelnden Anforderungen des Gesundheitswesens gerecht zu werden.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-midnight via-void to-abyss overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-32 right-[20%] w-64 h-64 rounded-full bg-violet/8 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-4">
              Über uns
            </p>
            <h1 className="font-display text-5xl lg:text-6xl tracking-tight text-white mb-6">
              Prozessdigitalisierung
              <br />
              <span className="gradient-text">und Automatisierung</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              Die Medidyne Systems GmbH setzt KI ein, um Verwaltungsaufgaben
              in Arztpraxen zu automatisieren. Unser Expertenteam entlastet
              medizinisches Personal und verbessert die Patientenversorgung
              nachhaltig.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Team ─── */}
      <section className="py-24 lg:py-32 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
              Unser Team
            </p>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-midnight">
              Interdisziplinäre Expertise
            </h2>
            <p className="mt-4 text-lg text-midnight/50 max-w-2xl mx-auto">
              Mit einem Team aus Medizin, IT und Betriebswirtschaft entwickeln
              wir innovative KI-Lösungen für das Gesundheitssystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center p-8 rounded-2xl bg-white border border-violet/5 shadow-sm hover:shadow-xl hover:shadow-violet/5 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Avatar */}
                <div className="mx-auto w-24 h-24 rounded-2xl bg-gradient-to-br from-violet to-iris flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-2xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-midnight">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-violet mt-1 mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-midnight/50 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-midnight to-void overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
              Unsere Werte
            </p>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-white">
              Woran wir glauben
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass rounded-2xl p-8 hover:bg-white/8 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-violet/15 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-violet" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <section className="py-24 lg:py-32 bg-snow">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl tracking-tight text-midnight mb-6">
            Nachhaltige SaaS-Lösungen
          </h2>
          <p className="text-lg text-midnight/55 leading-relaxed mb-6">
            Wir fokussieren uns auf nachhaltige Software-as-a-Service-Lösungen
            für Arztpraxen. Unsere Produktentwicklung basiert auf
            kontinuierlichem Feedback direkt aus der Praxis.
          </p>
          <p className="text-lg text-midnight/55 leading-relaxed">
            So stellen wir sicher, dass unsere Lösungen nicht nur
            technologisch innovativ sind, sondern auch den realen
            Bedürfnissen im medizinischen Alltag gerecht werden.
          </p>
        </div>
      </section>
    </>
  );
}
