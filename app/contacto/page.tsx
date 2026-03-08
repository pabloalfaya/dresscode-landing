"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";

function SendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 800);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F6] relative overflow-hidden">
      {/* Subtle grid background */}
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
            ¿Necesitas uniformes corporativos para tu equipo? Cuéntanos tu proyecto y te asesoramos con la mejor solución a medida.
          </p>

          <div className="rounded-2xl sm:rounded-3xl bg-white shadow-xl shadow-zinc-200/50 border border-zinc-100 p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ej: María García"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="maria@empresa.com"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Cuéntanos sobre tu proyecto, sector y necesidades..."
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-4 text-base font-semibold text-white hover:bg-zinc-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  "Enviando..."
                ) : status === "sent" ? (
                  "¡Mensaje enviado!"
                ) : (
                  <>
                    <SendIcon />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-zinc-500 mb-3">¿Prefieres escribirnos directamente?</p>
            <a
              href="mailto:contacto@dresscode.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-700 text-sm font-medium shadow-sm hover:border-accent hover:text-accent transition-colors"
            >
              <EnvelopeIcon />
              contacto@dresscode.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
