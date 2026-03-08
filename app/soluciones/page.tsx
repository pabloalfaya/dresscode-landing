import Link from "next/link";
import { Navbar } from "../components/Navbar";

export default function SolucionesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            Soluciones
          </p>
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-800 uppercase tracking-tight mb-16 sm:mb-20">
            Tres formas de vestir tu equipo
          </h1>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Servicio Inmediato */}
            <div className="flex flex-col">
              <div className="mb-6 text-accent">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-4">
                Servicio inmediato
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6">
                Entrega en tiempo récord sin renunciar a la calidad premium que tu marca necesita.
              </p>
              <ul className="space-y-3 mb-8">
                {["Stock permanente de prendas clave", "Envío express 24-72h", "Personalización rápida", "Reposición sin mínimos"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-500">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/solicitar-propuesta" className="mt-auto text-sm font-semibold text-zinc-800 uppercase tracking-wide hover:text-accent transition-colors inline-flex items-center gap-1">
                Saber más
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Colecciones Exclusivas */}
            <div className="flex flex-col">
              <div className="mb-6 text-accent">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-4">
                Colecciones exclusivas
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6">
                Diseños a medida que reflejan la identidad de tu marca con materiales de alta gama.
              </p>
              <ul className="space-y-3 mb-8">
                {["Diseño 100% personalizado", "Tejidos técnicos premium", "Patronaje profesional", "Prototipo en 7 días"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-500">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/solicitar-propuesta" className="mt-auto text-sm font-semibold text-zinc-800 uppercase tracking-wide hover:text-accent transition-colors inline-flex items-center gap-1">
                Saber más
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Dresscode System */}
            <div className="flex flex-col">
              <div className="mb-6 text-accent">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-4">
                Dresscode System
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6">
                Sistema integral de gestión de vestuario para franquicias y cadenas multi-centro.
              </p>
              <ul className="space-y-3 mb-8">
                {["Portal de pedidos centralizado", "Control por centro y talla", "Homogeneidad garantizada", "Reporting de consumo"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-500">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/solicitar-propuesta" className="mt-auto text-sm font-semibold text-zinc-800 uppercase tracking-wide hover:text-accent transition-colors inline-flex items-center gap-1">
                Saber más
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
