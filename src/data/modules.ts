import {
  Monitor,
  Users,
  FileText,
  FileCheck,
  Calculator,
  CalendarDays,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";

export interface Module {
  /** Eindeutige ID */
  id: string;
  /** Anzeigename */
  name: string;
  /** Kurzbeschreibung (1 Satz) für Übersichtsseiten */
  summary: string;
  /** Ausführliche Beschreibung für die Detailansicht */
  description: string;
  /** Stichpunkte mit Kernfunktionen */
  features: string[];
  /** lucide-react Icon */
  icon: LucideIcon;
  /** Modul auf der Website anzeigen? */
  visible: boolean;
  /** Optionaler Link zu einer eigenen Detailseite */
  detailPage?: string;
}

/**
 * Zentrale Modul-Konfiguration.
 *
 * Um ein Modul ein-/auszublenden, einfach `visible` auf true/false setzen.
 * Um ein neues Modul hinzuzufügen, einen neuen Eintrag ans Array anhängen.
 */
export const modules: Module[] = [
  {
    id: "self-check-in",
    name: "Self-Check-In",
    summary:
      "Digitale Selbstanmeldung für Patienten am Empfangsterminal.",
    description:
      "Ermöglichen Sie einen schnellen, kontaktarmen und intuitiven Praxisempfang. Patienten melden sich selbstständig über ein Touchscreen-Terminal an — klar strukturiert, barrierearm und individuell an Ihre Praxis anpassbar.",
    features: [
      "Touchscreen-basierte Selbstanmeldung",
      "Konfigurierbare Check-In-Prozesse pro Praxis",
      "Rollenbasierte Verwaltung (Administrator, Arzt, MFA)",
      "Mehrere Terminals zentral verwaltbar",
      "Avatar- und Sprachnavigation für Barrierearmut",
      "Robustes Standterminal mit integriertem Router und GPS-Schutz",
    ],
    icon: Monitor,
    visible: true,
    detailPage: "/ki-loesungen/self-check-in",
  },
  {
    id: "patienten-aufruf",
    name: "Patienten-Aufruf",
    summary:
      "Intelligentes Wartezimmer-Management mit digitalem Aufruf-System.",
    description:
      "Steuern Sie den Patientenfluss effizient mit einem digitalen Aufruf-System. Patienten werden über Bildschirme im Wartezimmer aufgerufen — organisiert, diskret und ohne lautes Rufen am Empfang.",
    features: [
      "Digitaler Aufruf über Wartezimmer-Bildschirme",
      "Virtuelles Wartezimmer mit Echtzeit-Übersicht",
      "Automatische Zuordnung nach Anmeldung",
      "Priorisierung und Reihenfolge-Management",
      "Integration mit dem Self-Check-In Terminal",
    ],
    icon: Users,
    visible: true,
    detailPage: "/ki-loesungen/patienten-aufruf",
  },
  {
    id: "sprechstunden-doku",
    name: "Sprechstunden-Dokumentation",
    summary:
      "KI-gestützte Dokumentation des Arzt-Patienten-Gesprächs.",
    description:
      "Konzentrieren Sie sich voll auf Ihre Patienten — die Dokumentation übernimmt EmMa. Das Arzt-Patienten-Gespräch wird KI-gestützt erfasst und automatisch in eine strukturierte Dokumentation überführt.",
    features: [
      "Automatische Erfassung des Arzt-Patienten-Gesprächs",
      "KI-gestützte Transkription und Zusammenfassung",
      "Strukturierte Ausgabe für die Patientenakte",
      "Datenschutzkonforme Verarbeitung",
      "Zeitersparnis bei der Nachbereitung",
    ],
    icon: FileText,
    visible: true,
    detailPage: "/ki-loesungen/sprechstunden-doku",
  },
  {
    id: "gutachten-erstellung",
    name: "Gutachten-Erstellung",
    summary:
      "KI-unterstützte Erstellung medizinischer Gutachten und Atteste.",
    description:
      "Erstellen Sie medizinische Gutachten, Atteste und Arztbriefe schneller und präziser. Laden Sie relevante Unterlagen hoch — die KI analysiert diese und erstellt einen strukturierten Entwurf zur Nachbearbeitung.",
    features: [
      "Upload von PDF, DOCX, Bildern und Audiodateien",
      "KI-Analyse und automatische Dokumentenerstellung",
      "Verschiedene Kategorien: Gutachten, Atteste, Arztbriefe",
      "Ergebnis zur Nachbearbeitung und Freigabe",
      "Versionierung und Job-Historie",
    ],
    icon: FileCheck,
    visible: true,
    detailPage: "/ki-loesungen/gutachten-erstellung",
  },
  {
    id: "abrechnungs-korrektur",
    name: "Abrechnungs-Optimierung",
    summary:
      "KI-basierte Erkennung fehlender Abrechnungsziffern und Optimierungspotenziale.",
    description:
      "Wurde eine Leistung erbracht, aber nicht abgerechnet? Unser Abrechnungsmodul analysiert Ihre dokumentierten Leistungen und identifiziert systematisch fehlende Abrechnungsziffern — für EBM, GOÄ und HZV.",
    features: [
      "Regelbasierte Erkennung fehlender Abrechnungsziffern",
      "Unterstützung für EBM (GKV), GOÄ (Privat) und HZV",
      "Fachgruppenvergleich mit Durchschnittswerten",
      "Statistik-Dashboard mit Trend-Analysen",
      "Fallspezifische Begründungen für jede Empfehlung",
      "DSGVO-konforme Pseudonymisierung",
    ],
    icon: Calculator,
    visible: true,
    detailPage: "/ki-loesungen/abrechnungs-optimierung",
  },
  {
    id: "dienstplanung",
    name: "Dienstplanung",
    summary:
      "Intelligente Schicht- und Urlaubsplanung für Praxen mit mehreren Standorten.",
    description:
      "Planen Sie Dienste, Schichten und Urlaube für Ihr gesamtes Team — standortübergreifend und fair. Der intelligente Auto-Generator berücksichtigt Verfügbarkeit, Qualifikation und Arbeitszeitmodelle.",
    features: [
      "Monatsübersicht im Excel-ähnlichen Layout",
      "Automatische Dienstplan-Generierung",
      "Mehrstufiges Berufsgruppen-System (Ärzte, MFA, Labor, Verwaltung)",
      "Urlaubsverwaltung mit Jahres- und Sonderurlaub",
      "Wochenstunden-Validierung bei jeder Zuweisung",
      "Mehrere Niederlassungen gleichzeitig verwaltbar",
    ],
    icon: CalendarDays,
    visible: true,
    detailPage: "/ki-loesungen/dienstplanung",
  },
  {
    id: "dokumenten-management",
    name: "Dokumenten-Management",
    summary:
      "Zentrale Verwaltung und Organisation medizinischer Dokumente und Befunde.",
    description:
      "Behalten Sie den Überblick über alle Befunde, Berichte und Dokumente Ihrer Praxis. Das Dokumenten-Management-Modul bietet eine zentrale, strukturierte Ablage mit schnellem Zugriff.",
    features: [
      "Zentrale Ablage für Befunde und Dokumente",
      "Kategorisierung und Verschlagwortung",
      "Schnelle Suche und Filterung",
      "Sichere, DSGVO-konforme Speicherung",
    ],
    icon: FolderOpen,
    visible: true,
    detailPage: "/ki-loesungen/dokumenten-management",
  },
];

/** Nur sichtbare Module zurückgeben */
export function getVisibleModules(): Module[] {
  return modules.filter((m) => m.visible);
}
