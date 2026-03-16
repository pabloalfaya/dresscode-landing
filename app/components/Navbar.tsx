"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "SOLUCIONES", hasDropdown: true },
  { label: "CATÁLOGO", href: "/catalogo" },
  { label: "SECTORES", hasDropdown: true },
  { label: "PROYECTOS", href: "/proyectos" },
  { label: "SOBRE NOSOTROS", href: "/sobre-nosotros" },
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

const solutionsOptions = [
  { label: "SERVICIO INMEDIATO", subLabel: "Stock permanente, envío 24-72h", href: "/soluciones/servicio-inmediato" },
  { label: "COLECCIONES EXCLUSIVAS", subLabel: "Diseño a medida para tu marca", href: "/soluciones/colecciones-exclusivas" },
  { label: "DRESSCODE SYSTEM", subLabel: "Gestión integral para franquicias", href: "/soluciones/dresscode-system" },
];

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
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA] border-b border-zinc-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between gap-4">
          <Link href="/" className="flex items-center shrink-0 mr-4">
            <Image
              src="/logodresscode.png"
              alt="Dresscode - Uniformes Contemporáneos"
              width={180}
              height={48}
              className="h-10 w-auto sm:h-12 object-contain object-left"
              priority
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      if (link.label === "SECTORES") {
                        setSectorsOpen(!sectorsOpen);
                        setSolutionsOpen(false);
                      } else {
                        setSolutionsOpen(!solutionsOpen);
                        setSectorsOpen(false);
                      }
                    }}
                    onBlur={() => {
                      setTimeout(() => {
                        if (link.label === "SECTORES") setSectorsOpen(false);
                        else setSolutionsOpen(false);
                      }, 150);
                    }}
                    className="flex items-center text-xs font-bold text-zinc-500 hover:text-accent transition-colors tracking-widest"
                  >
                    {link.label}
                    <span className={`ml-1 transition-transform ${(link.label === "SECTORES" ? sectorsOpen : solutionsOpen) ? "rotate-180" : ""}`}><ChevronDown /></span>
                  </button>
                  {link.label === "SECTORES" && sectorsOpen && (
                    <div className="absolute left-0 top-full pt-4">
                      <div className="min-w-[200px] border border-zinc-100 bg-white shadow-xl py-2">
                        {sectorOptions.map((opt) => (
                          <Link key={opt.label} href={opt.href} className="block px-6 py-3 text-[13px] font-medium text-zinc-600 hover:bg-[#FBF9F6] hover:text-accent transition-colors">
                            {opt.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {link.label === "SOLUCIONES" && solutionsOpen && (
                    <div className="absolute left-0 top-full pt-4">
                      <div className="w-[320px] border border-zinc-100 bg-white shadow-xl py-6 px-4">
                        <div className="flex flex-col gap-6">
                          {solutionsOptions.map((opt) => (
                            <Link key={opt.label} href={opt.href} className="block group px-4">
                              <span className="block text-xs font-bold text-zinc-900 tracking-widest uppercase mb-1 group-hover:text-accent transition-colors">
                                {opt.label}
                              </span>
                              <span className="block text-xs text-zinc-400 font-light group-hover:text-zinc-500 transition-colors">
                                {opt.subLabel}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} href={link.href!} className="text-xs font-bold text-zinc-500 hover:text-accent transition-colors tracking-widest">
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-6 shrink-0 ml-auto">
            <a href="tel:+34655737973" className="flex items-center gap-2 text-sm font-semibold text-accent">
              <PhoneIcon />
              <span>+34 655 737 973</span>
            </a>
            <Link href="/solicitar-propuesta" className="rounded-none bg-accent px-6 py-3.5 text-xs font-bold text-white uppercase tracking-widest hover:bg-accent/90 transition-colors">
              SOLICITAR PROPUESTA
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-zinc-800 ml-auto lg:ml-4"
            aria-label="Abrir menú"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" /> : <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-zinc-200 py-4 bg-white">
            <nav className="flex flex-col gap-3 px-4">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button type="button" onClick={() => {
                      if (link.label === "SECTORES") setSectorsOpen(!sectorsOpen);
                      else setSolutionsOpen(!solutionsOpen);
                    }} className="flex w-full items-center justify-between py-3 text-[13px] font-bold text-zinc-600 uppercase tracking-widest">
                      {link.label}
                      <span className={`transition-transform ${(link.label === "SECTORES" ? sectorsOpen : solutionsOpen) ? "rotate-180" : ""}`}><ChevronDown /></span>
                    </button>
                    {link.label === "SECTORES" && sectorsOpen && (
                      <div className="pl-4 pb-3 flex flex-col gap-1">
                        {sectorOptions.map((opt) => (
                          <Link key={opt.label} href={opt.href} className="py-2 text-[13px] font-medium text-zinc-500 hover:text-accent" onClick={() => setMobileMenuOpen(false)}>{opt.label}</Link>
                        ))}
                      </div>
                    )}
                    {link.label === "SOLUCIONES" && solutionsOpen && (
                      <div className="pl-4 pb-3 flex flex-col gap-4">
                        {solutionsOptions.map((opt) => (
                          <Link key={opt.label} href={opt.href} className="group py-2" onClick={() => setMobileMenuOpen(false)}>
                            <span className="block text-xs font-bold text-zinc-900 tracking-widest uppercase mb-1 group-hover:text-accent transition-colors">
                              {opt.label}
                            </span>
                            <span className="block text-xs text-zinc-500 font-light transition-colors">
                              {opt.subLabel}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.label} href={link.href!} className="py-3 text-[13px] font-bold text-zinc-600 uppercase tracking-widest hover:text-accent" onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4 mt-2 border-t border-zinc-100 lg:hidden">
                <a href="tel:+34655737973" className="flex items-center gap-3 py-3 text-sm font-semibold text-accent">
                  <PhoneIcon />
                  +34 655 737 973
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
