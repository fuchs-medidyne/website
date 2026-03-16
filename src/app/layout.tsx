import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EmMa.AI – Prozessdigitalisierung für Arztpraxen | Medidyne Systems",
    template: "%s | EmMa.AI – Medidyne Systems",
  },
  description:
    "KI-gestützte Prozessdigitalisierung und Automatisierung für moderne Arztpraxen. Entlastung medizinischen Personals durch innovative digitale Lösungen.",
  keywords: [
    "Arztpraxis Digitalisierung",
    "KI Gesundheitswesen",
    "Self-Check-In Terminal",
    "Praxissoftware",
    "Medidyne Systems",
    "EmMa.AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${sora.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
