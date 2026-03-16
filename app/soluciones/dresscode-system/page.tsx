"use client";

import { Navbar } from "../../components/Navbar";
import Link from "next/link";

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function DresscodeSystemPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F6]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">
              DRESSCODE SYSTEM™
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 leading-[1.1] mb-8">
              Sistema inteligente de <br />
              uniformidad <br />
              <span className="font-light italic text-accent">para marcas en expansión.</span>
            </h1>
            <p className="text-lg text-zinc-500 font-light max-w-2xl leading-relaxed">
              La solución definitiva para franquicias y grupos hoteleros que buscan estandarizar su imagen de marca con eficiencia y control total.
            </p>
          </div>
        </div>
      </section>

      {/* Bloque de características rápidas */}
      <section className="py-12 bg-[#FBF9F6] border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "CONTROL CENTRALIZADO", desc: "Gestión unificada de pedidos y stock." },
              { title: "COHERENCIA DE MARCA", desc: "Garantía de imagen en cada punto de venta." },
              { title: "LOGÍSTICA ESCALABLE", desc: "Entregas directas a cada centro o franquicia." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-white border border-zinc-100 shadow-sm">
                <div className="text-accent mb-4">
                  <CheckIcon />
                </div>
                <h3 className="text-[11px] font-bold text-zinc-900 tracking-widest uppercase mb-2">{item.title}</h3>
                <p className="text-[11px] text-zinc-400 font-light uppercase tracking-wider">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansión sin fricción */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">ESCALABILIDAD</p>
              <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 leading-tight mb-8">
                Expansión <span className="font-bold italic">sin fricción.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  "Estandarización de productos y calidades.",
                  "Precios cerrados para toda la red.",
                  "Plataforma propia de pedidos online.",
                  "Stock de seguridad garantizado.",
                  "Informes detallados de consumo.",
                  "Atención directa a franquiciados."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-zinc-500 font-light">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 bg-zinc-50 border-l-2 border-accent">
                <p className="text-base text-zinc-600 font-light italic leading-relaxed">
                  Diseñado para que la uniformidad sea la menor de tus preocupaciones durante el crecimiento de tu red.
                </p>
              </div>
            </div>
            <div className="relative aspect-video lg:aspect-square bg-zinc-100 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                alt="Gestión inteligente" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sistema para marcas */}
      <section className="py-24 sm:py-32 bg-[#FBF9F6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 mb-16">
            Sistema para marcas <br />
            <span className="font-bold italic text-accent">que se toman en serio su expansión.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200">
            {[
              "Franquicias de Restauración", "Cadenas Hoteleras", "Redes de Clínicas", "Retail & Showrooms",
              "Grupos de Ocio", "Empresas de Servicios", "Centros Educativos", "Cadenas de Wellness"
            ].map((sector, i) => (
              <div key={i} className="bg-white p-12 hover:bg-zinc-50 transition-colors">
                <p className="text-[11px] font-bold text-zinc-600 uppercase tracking-widest">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de solicitud */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">DRESSCODE SYSTEM</p>
              <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 leading-[1.15] mb-8">
                Solicita información <br />
                <span className="font-bold italic text-accent">para tu red.</span>
              </h2>
              <p className="text-sm text-zinc-500 font-light leading-relaxed mb-12 max-w-sm">
                Descubre cómo podemos ayudarte a centralizar y optimizar la uniformidad de tu marca.
              </p>
              <div className="space-y-4">
                {[
                  "Demo de plataforma de pedidos",
                  "Estudio de optimización de costes",
                  "Plan de implementación para red",
                  "Muestrario técnico para grupos"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-800">
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FBF9F6] p-8 sm:p-12 shadow-xl shadow-zinc-200/50 border border-zinc-100">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-b border-zinc-300 pb-2">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">NOMBRE *</label>
                    <input type="text" placeholder="Tu nombre" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400" required />
                  </div>
                  <div className="border-b border-zinc-300 pb-2">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">CARGO *</label>
                    <input type="text" placeholder="Responsable de expansión..." className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400" required />
                  </div>
                </div>
                <div className="border-b border-zinc-300 pb-2">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">EMPRESA / RED *</label>
                  <input type="text" placeholder="Nombre de la marca o grupo" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-b border-zinc-300 pb-2">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">EMAIL *</label>
                    <input type="email" placeholder="tu@email.com" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400" required />
                  </div>
                  <div className="border-b border-zinc-300 pb-2">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">Nº DE PUNTOS</label>
                    <input type="number" placeholder="Ej: 25" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400" />
                  </div>
                </div>
                <button type="button" className="w-full inline-flex items-center justify-center gap-3 bg-zinc-950 px-8 py-4 text-[11px] font-bold text-white uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
                  SOLICITAR CONSULTA TÉCNICA
                  <ArrowRightIcon />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-zinc-950 py-24 sm:py-32 text-center border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">MÁS QUE PRODUCTO</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Diseñamos la logística <br />
            <span className="text-accent italic">de tu marca.</span>
          </h2>
          <div className="flex justify-center mt-12">
            <Link 
              href="/solicitar-propuesta" 
              className="inline-flex items-center justify-center bg-accent px-10 py-5 text-xs font-bold text-white uppercase tracking-widest hover:bg-accent/90 transition-colors"
            >
              SOLICITAR PROPUESTA
              <span className="ml-3"><ArrowRightIcon /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
