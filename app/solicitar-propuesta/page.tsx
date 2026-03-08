"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";

const sectorOptions = ["Hoteles", "Restauración", "Golf", "Clínicas", "Corporativo", "Otro"];
const projectTypes = ["Servicio inmediato", "Colección exclusiva", "Dresscode System", "Otro"];

export default function SolicitarPropuestaPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 800);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Contacto
          </p>
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-950 tracking-tight mb-3">
            ¿Quieres que tu equipo vista al nivel de tu marca?
          </h1>
          <p className="text-center text-base text-zinc-500 mb-14">
            Propuesta personalizada en 24-48h
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 mb-12">
              <div>
                <label htmlFor="empresa" className="block text-sm text-zinc-500 mb-1">
                  Empresa *
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  required
                  className="w-full py-2 border-0 border-b border-zinc-300 bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-accent focus:ring-0 transition-colors"
                  placeholder=" "
                />
              </div>
              <div>
                <label htmlFor="sector" className="block text-sm text-zinc-500 mb-1">
                  Sector *
                </label>
                <select
                  id="sector"
                  name="sector"
                  required
                  className="w-full py-2 border-0 border-b border-zinc-300 bg-transparent text-zinc-800 focus:outline-none focus:border-accent focus:ring-0 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Selecciona un sector</option>
                  {sectorOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="ciudad" className="block text-sm text-zinc-500 mb-1">
                  Ciudad
                </label>
                <input
                  id="ciudad"
                  name="ciudad"
                  type="text"
                  className="w-full py-2 border-0 border-b border-zinc-300 bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-accent focus:ring-0 transition-colors"
                  placeholder=" "
                />
              </div>
              <div>
                <label htmlFor="personas" className="block text-sm text-zinc-500 mb-1">
                  Nº de personas
                </label>
                <input
                  id="personas"
                  name="personas"
                  type="text"
                  className="w-full py-2 border-0 border-b border-zinc-300 bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-accent focus:ring-0 transition-colors"
                  placeholder=" "
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-zinc-500 mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full py-2 border-0 border-b border-zinc-300 bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-accent focus:ring-0 transition-colors"
                  placeholder=" "
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm text-zinc-500 mb-1">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  className="w-full py-2 border-0 border-b border-zinc-300 bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-accent focus:ring-0 transition-colors"
                  placeholder=" "
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="proyecto" className="block text-sm text-zinc-500 mb-1">
                  Tipo de proyecto
                </label>
                <select
                  id="proyecto"
                  name="proyecto"
                  className="w-full py-2 border-0 border-b border-zinc-300 bg-transparent text-zinc-800 focus:outline-none focus:border-accent focus:ring-0 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Selecciona tipo de proyecto</option>
                  {projectTypes.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-8 py-4 text-sm font-semibold text-white uppercase tracking-wide hover:bg-zinc-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  "Enviando..."
                ) : status === "sent" ? (
                  "¡Solicitud enviada!"
                ) : (
                  <>
                    Solicitar propuesta
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
