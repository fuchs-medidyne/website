# CLAUDE.md — Medidyne Systems Website

## Projekt-Übersicht
Website für die **Medidyne Systems GmbH** (Marke: EmMa.AI) — KI-Lösungen für Arztpraxen.
Produktionswebsite unter: https://www.medidyne-systems.de/ (aktuell noch auf Hostinger)
Preview unter: https://fuchs-medidyne.github.io/website/ (GitHub Pages)

## Steuerungsebene

Planung und Weiterentwicklung werden auf der uebergeordneten Steuerungsebene koordiniert.
Aktuelle Plaene und Roadmaps: `../Plaene/Website/`
Bei Session-Start relevante Plaene pruefen falls vorhanden.

## Das Team

Die Website hat ein eigenes Projekt-Team. Schnittstelle zur Steuerungsebene ist der Web-Leiter.
Vollstaendige Profile: `Team/`, Verzeichnis: `Team/VERZEICHNIS.md`.

| Rolle | Funktion | Wann delegieren |
|-------|----------|-----------------|
| **Web-Leiter** | Koordination | Seitenuebergreifende Aufgaben, Priorisierung |
| **Web-Architekt** | Technische Struktur | Next.js-Architektur, Komponenten, Performance |
| **Web-Rollen** | Rollenspezialist | Neuen Spezialisten brauchen, Team erweitern |

## Tech-Stack
- **Framework:** Next.js 16 (App Router, `src/app/` Verzeichnisstruktur)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS v4 (via `@import "tailwindcss"` in `globals.css`, Farben über `@theme` Block)
- **Icons:** lucide-react
- **Fonts:** Sora (Headlines) + Plus Jakarta Sans (Body) — geladen via `next/font/google`
- **Deployment:** GitHub Pages (Static Export, automatisch via GitHub Actions)
- **Package Manager:** npm

## Projektstruktur
```
src/
├── app/
│   ├── globals.css          # Tailwind @theme, Animationen, Utilities
│   ├── layout.tsx           # Root Layout (Header + Footer)
│   ├── page.tsx             # Startseite
│   ├── ueber-uns/page.tsx
│   ├── ki-loesungen/
│   │   ├── page.tsx         # KI Lösungen Übersicht
│   │   └── self-check-in/page.tsx
│   ├── kontakt/page.tsx
│   ├── impressum/page.tsx
│   └── datenschutz/page.tsx
├── components/
│   ├── Header.tsx           # Sticky Nav mit Mobile-Menu
│   └── Footer.tsx
public/
└── images/
    ├── logo_medidyne.png    # Firmenlogo
    ├── hero_bg.png          # Hero-Hintergrundbild
    └── terminal_1-6.jpeg    # Self-Check-In Terminal Produktfotos
.github/
└── workflows/
    └── deploy.yml           # GitHub Pages Auto-Deploy bei Push auf main
```

## Farbschema (aus dem Logo abgeleitet)
Definiert in `src/app/globals.css` im `@theme` Block. IMMER diese Farben verwenden:

| Token      | Hex       | Verwendung                          |
|------------|-----------|-------------------------------------|
| midnight   | #091A1F   | Tiefster Hintergrund                |
| void       | #0F2A33   | Dunkler Hintergrund                 |
| abyss      | #1A4250   | Mittlerer dunkler Hintergrund       |
| iris       | #24616F   | Mittel-Teal                         |
| violet     | #2E7D8E   | **Primärfarbe** (Buttons, Akzente)  |
| lavender   | #4DA3B5   | Heller Akzent                       |
| mauve      | #8E6B87   | **Sekundärfarbe** (Akzente, Gradienten) |
| mist       | #B8DCE5   | Heller Teal-Ton                     |
| frost      | #DFF0F4   | Sehr hell                           |
| snow       | #F4FAFB   | Hintergrund helle Sektionen         |

**Niemals** Standard-Tailwind-Palette (indigo-500, blue-600, etc.) verwenden.

## Sprache
- Alle Inhalte auf **Deutsch**
- Kommunikation mit dem User auf Deutsch
- Technische Bezeichnungen (Code, Variablen, Dateinamen) bleiben Englisch

## Brand Assets
- Bilder liegen in `public/images/` — immer verwenden statt Platzhalter
- Logo: `logo_medidyne.png` — im Header und Footer eingebunden, in Originalfarben (Teal + Mauve)
- Bei neuen Bildern: in `public/images/` ablegen, via Next.js `Image` Komponente einbinden

## Design-Richtlinien
- **Überschriften:** Immer zentriert. Kompakte Größen (h1: max text-5xl, h2: max text-3xl). Keine festen `<br />`-Umbrüche — Text fließt responsiv je nach Bildschirmbreite
- **Sektions-Abstände:** Kompakt halten (py-16 lg:py-20), nicht zu viel Leerraum
- **Schatten:** Layered, farb-getönt (z.B. `shadow-violet/5`), keine flachen `shadow-md`
- **Animationen:** Nur `transform` und `opacity` animieren. Kein `transition-all`
- **Interaktive Elemente:** Hover-, Focus- und Active-States für alle klickbaren Elemente
- **Glasmorphismus:** Für Karten auf dunklem Hintergrund (`.glass` Klasse in globals.css)
- **Hero-Banner:** Hintergrundbild mit `.hero-backdrop` Glas-Panel für Textlesbarkeit. Bilder via statische Imports (wegen basePath)
- **Responsive:** Mobile-first, Hamburger-Menu auf kleinen Screens

## Local Dev
```bash
npm run dev      # Dev-Server auf http://localhost:3000
npm run build    # Production Build
npm run lint     # ESLint
```

## Git
- Commit-Messages auf Englisch, kurz und prägnant
- Neue Features/Änderungen als eigene Commits (nicht amenden)
- Vor dem Commit immer `npm run build` erfolgreich durchlaufen lassen
