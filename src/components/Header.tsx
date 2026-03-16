"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  {
    label: "KI Lösungen",
    href: "/ki-loesungen",
    children: [
      { label: "Übersicht", href: "/ki-loesungen" },
      { label: "Self-Check-In Terminal", href: "/ki-loesungen/self-check-in" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-midnight/92 backdrop-blur-2xl shadow-[0_4px_32px_rgba(15,10,31,0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-0.5 text-2xl tracking-tight"
          >
            <span className="font-display text-white transition-colors">
              EmMa
            </span>
            <span className="text-violet font-display transition-transform group-hover:scale-110 inline-block">
              .
            </span>
            <span className="font-display text-white">AI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-white bg-white/10"
                        : "text-white/65 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="glass rounded-xl p-1.5 min-w-[220px] shadow-2xl shadow-midnight/50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                            isActive(child.href)
                              ? "text-white bg-violet/20"
                              : "text-white/65 hover:text-white hover:bg-white/8"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-white bg-white/10"
                      : "text-white/65 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="/kontakt"
              className="ml-4 inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(103,61,230,0.4)] hover:-translate-y-0.5"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Navigation öffnen"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 z-40 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-midnight/98 backdrop-blur-2xl"
          onClick={() => setMobileOpen(false)}
        />
        <div className="relative z-10 flex flex-col pt-24 px-8 gap-2">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className={`block px-4 py-3.5 rounded-xl text-lg font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`block px-8 py-3 rounded-xl text-base transition-colors ${
                    isActive(child.href)
                      ? "text-violet"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/kontakt"
            className="mt-6 inline-flex items-center justify-center bg-violet text-white px-6 py-3.5 rounded-full text-base font-semibold"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </header>
  );
}
