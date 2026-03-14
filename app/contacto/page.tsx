"use client";

import { Navbar } from "../components/Navbar";

function EnvelopeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F6] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(184 149 107 / 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(184 149 107 / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <Navbar />

      <main className="relative pt-32 pb-24 px-4 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="text-zinc-800">Solicita </span>
            <span className="text-accent">información</span>
          </h1>
          <p className="text-center text-zinc-500 text-base sm:text-lg mb-12 max-w-xl mx-auto">
            ¿Necesitas uniformes corporativos para tu equipo? Escríbenos y te asesoramos con la mejor solución a medida.
          </p>

          <div className="text-center">
            <p className="text-sm text-zinc-500 mb-3">Escríbenos a:</p>
            <a
              href="mailto:hola@dresscodepro.es"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-zinc-200 bg-white text-zinc-800 text-lg font-medium shadow-sm hover:border-accent hover:text-accent transition-colors select-all"
            >
              <EnvelopeIcon />
              hola@dresscodepro.es
            </a>
            <p className="text-xs text-zinc-400 mt-3">Selecciona y copia el correo o haz clic para abrir tu cliente de email</p>
          </div>
        </div>
      </main>
    </div>
  );
}
