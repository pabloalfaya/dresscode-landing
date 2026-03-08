"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "SOLUCIONES", href: "/soluciones" },
  { label: "PROYECTOS", href: "#" },
  { label: "CONTACTO", href: "/contacto" },
  { label: "SECTORES", hasDropdown: true },
];

const sectorOptions = [
  { label: "Beach Clubs", href: "/sectores/beach-clubs" },
  { label: "Restauración", href: "/sectores/restauracion" },
  { label: "Hoteles", href: "/sectores/hoteles" },
  { label: "Golf", href: "/sectores/golf" },
  { label: "Wellness", href: "/sectores/wellness" },
  { label: "Clínicas", href: "/sectores/clinicas" },
  { label: "Franquicias", href: "/sectores/franquicias" },
];

function LogoIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-accent">
      <path d="M21 3C12.5 3 6 10 6 21C6 32 13 39 21 39C29 39 36 32 36 21C36 10 29.5 3 21 3Z M21 35C15 35 10 28 10 21C10 14 15 9 21 9C27 9 32 14 32 21C32 28 27 35 21 35Z" fill="currentColor" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-0.5">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA] border-b border-zinc-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <LogoIcon />
            <div>
              <span className="block font-bold text-lg tracking-tight text-zinc-950">dresscode</span>
              <span className="block text-xs font-normal text-zinc-600">Uniformes Contemporáneos</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              "hasDropdown" in link ? (
                <div key={link.label} className="relative">
                  <button
                    type="button"
                    onClick={() => setSectorsOpen(!sectorsOpen)}
                    onBlur={() => setTimeout(() => setSectorsOpen(false), 150)}
                    className="flex items-center text-sm font-semibold text-zinc-800 hover:text-accent transition-colors"
                  >
                    {link.label}
                    <span className={`ml-0.5 transition-transform ${sectorsOpen ? "rotate-180" : ""}`}><ChevronDown /></span>
                  </button>
                  {sectorsOpen && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="min-w-[200px] rounded-lg border border-zinc-200 bg-white py-2 shadow-lg">
                        {sectorOptions.map((opt) => (
                          <Link key={opt.label} href={opt.href} className="block px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-accent transition-colors">
                            {opt.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} href={link.href} className="text-sm font-semibold text-zinc-800 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-6 shrink-0">
            <a href="tel:+34900000000" className="flex items-center gap-2 text-sm font-semibold text-accent">
              <PhoneIcon />
              <span>+34 900 000 000</span>
            </a>
            <Link href="/solicitar-propuesta" className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white uppercase tracking-wide hover:bg-zinc-800 transition-colors">
              Solicitar propuesta
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-800"
            aria-label="Abrir menú"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" /> : <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-zinc-200 py-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) =>
                "hasDropdown" in link ? (
                  <div key={link.label}>
                    <button type="button" onClick={() => setSectorsOpen(!sectorsOpen)} className="flex w-full items-center justify-between py-2 text-sm font-semibold text-zinc-800">
                      {link.label}
                      <span className={`transition-transform ${sectorsOpen ? "rotate-180" : ""}`}><ChevronDown /></span>
                    </button>
                    {sectorsOpen && (
                      <div className="pl-4 pb-2 flex flex-col gap-1">
                        {sectorOptions.map((opt) => (
                          <Link key={opt.label} href={opt.href} className="py-1.5 text-sm font-medium text-zinc-600" onClick={() => setMobileMenuOpen(false)}>{opt.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.label} href={link.href} className="py-2 text-sm font-semibold text-zinc-800" onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                )
              )}
              <a href="tel:+34900000000" className="flex items-center gap-2 py-3 text-sm font-semibold text-accent">
                <PhoneIcon />
                +34 900 000 000
              </a>
              <Link href="/solicitar-propuesta" className="rounded-lg bg-zinc-900 px-5 py-3 text-center text-sm font-semibold text-white uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>
                Solicitar propuesta
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
