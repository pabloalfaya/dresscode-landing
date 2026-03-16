"use client";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
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

export default function ServicioInmediatoPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F6]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 sm:pt-48 sm:pb-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">
              SERVICIO INMEDIATO
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 leading-[1.1] mb-8">
              Cuando tu marca <br />
              <span className="font-light italic">necesita estar lista hoy.</span>
            </h1>
            <p className="text-lg text-zinc-500 font-light max-w-2xl leading-relaxed">
              Disponemos de un stock permanente de prendas premium listas para ser enviadas y personalizadas en tiempo récord.
            </p>
          </div>
        </div>
      </section>

      {/* Todo lo que necesitas */}
      <section className="py-24 sm:py-32 bg-[#FBF9F6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 mb-16">
            Todo lo que necesitas, <br />
            <span className="font-bold italic text-accent">cuando lo necesitas.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "STOCK PERMANENTE", desc: "Más de 50.000 prendas listas.", icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 8V21H3V8" />
                  <path d="M1 3H23V8H1V3Z" />
                  <path d="M10 12H14" />
                </svg>
              )},
              { label: "ENVÍO 24-72H", desc: "Logística ágil para toda España.", icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 3h15v13H1z" />
                  <path d="M16 8h5l3 3v5h-7V8z" />
                </svg>
              )},
              { label: "PERSONALIZACIÓN RÁPIDA", desc: "Bordado y estampado express.", icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.1 7.1" />
                  <path d="M11 11l.9.9" />
                </svg>
              )},
              { label: "SIN PEDIDO MÍNIMO", desc: "Reponiendo lo que falta.", icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )},
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center text-accent mb-6 border border-accent/20 rounded">
                  {item.icon}
                </div>
                <h3 className="text-[11px] font-bold text-zinc-900 tracking-widest uppercase mb-2">{item.label}</h3>
                <p className="text-[11px] text-zinc-400 font-light uppercase tracking-wider">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners estratégicos */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">MÁS QUE FABRICANTES</p>
              <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 leading-tight mb-8">
                Más que fabricantes. <br />
                <span className="font-bold italic">Partners estratégicos multimarca.</span>
              </h2>
              <div className="space-y-6 text-base text-zinc-500 font-light leading-relaxed">
                <p>
                  No solo dependemos de nuestra propia producción. Hemos tejido una red de partners internacionales para ofrecerte la mayor variedad de estilos y calidades sin esperas.
                </p>
                <ul className="space-y-3 pt-4">
                  {["Multimarca", "Agilidad", "Calidad técnica", "Variedad"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-600 text-sm font-medium">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[#FBF9F6] p-12 border-l-4 border-accent">
              <p className="text-lg text-zinc-600 font-light italic leading-relaxed">
                "La rapidez no sirve de nada sin coherencia. Nuestro equipo asesora para que incluso en servicio inmediato, el look sea impecable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soluciones inmediatas sectors */}
      <section className="py-24 sm:py-32 bg-[#FBF9F6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 leading-tight">
              Soluciones inmediatas <br />
              <span className="font-bold italic">para todos los sectores.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200">
            {[
              "Restauración", "Hotelería", "Concierge", "Mantenimiento",
              "Wellness & Spa", "Clínicas & Salud", "Ventas & Retail", "Lobby & Reception"
            ].map((sector, i) => (
              <div key={i} className="bg-white p-10 flex flex-col items-center justify-center text-center">
                <p className="text-[11px] font-bold text-zinc-600 uppercase tracking-widest">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Selection */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4">CURATED COMPONENT SELECTION™</p>
            <p className="text-sm text-zinc-400 font-light uppercase tracking-widest">Prendas esenciales listas para tu marca.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "CAMISERÍA PREMIUM", desc: "Algodón de alta calidad con acabados impecables." },
              { label: "DELANTALES TÉCNICOS", desc: "Diseños funcionales y resistentes al uso diario." },
              { label: "PANTALONES & CHINOS", desc: "Cortes contemporáneos con gran confort." },
              { label: "OUTERWEAR & ACCESORIOS", desc: "El toque final para una imagen completa." },
            ].map((item, i) => (
              <div key={i} className="bg-[#FBF9F6] p-10 border border-zinc-100 flex flex-col items-center text-center">
                <h3 className="text-xs font-bold text-zinc-900 tracking-widest uppercase mb-4">{item.label}</h3>
                <p className="text-[10px] text-zinc-400 font-light uppercase tracking-wider leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solicita propuesta section */}
      <section className="py-24 sm:py-32 bg-white border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">
                COTIZACIÓN
              </p>
              <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 leading-[1.15] mb-8">
                Solicita tu propuesta <br />
                <span className="font-bold italic text-accent">personalizada.</span>
              </h2>
              <p className="text-sm text-zinc-500 font-light leading-relaxed mb-12 max-w-sm">
                Recibe un presupuesto a medida para tu equipo en menos de 48 horas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium text-zinc-800">
                  <CheckIcon />
                  <span>Sin compromiso</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-zinc-800">
                  <CheckIcon />
                  <span>Asesoramiento experto</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-zinc-800">
                  <CheckIcon />
                  <span>Muestrario disponible</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FBF9F6] p-8 sm:p-12 shadow-xl shadow-zinc-200/50">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-b border-zinc-300 pb-2">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">NOMBRE *</label>
                    <input type="text" placeholder="Tu nombre" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400" required />
                  </div>
                  <div className="border-b border-zinc-300 pb-2">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">EMPRESA *</label>
                    <input type="text" placeholder="Nombre del negocio" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400" required />
                  </div>
                </div>
                <div className="border-b border-zinc-300 pb-2">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">EMAIL *</label>
                  <input type="email" placeholder="tu@email.com" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400" required />
                </div>
                <div className="border-b border-zinc-300 pb-2">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">TIPO DE PROYECTO</label>
                  <select className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800">
                    <option>Nuevo uniforme</option>
                    <option>Reposición rápida</option>
                    <option>Evento / Apertura</option>
                  </select>
                </div>
                <button type="button" className="w-full inline-flex items-center justify-center gap-3 bg-zinc-950 px-8 py-4 text-[11px] font-bold text-white uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
                  SOLICITAR PROPUESTA
                  <ArrowRightIcon />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Dark */}
      <section className="bg-zinc-950 py-24 sm:py-32 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            ¿Necesitas uniformes <br />
            <span className="text-accent italic">esta semana?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <a 
              href="tel:+34655737973" 
              className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 py-4 text-xs font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              LLAMA AL +34 655 737 973
            </a>
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center bg-accent px-8 py-4 text-xs font-bold text-white uppercase tracking-widest hover:bg-accent/90 transition-colors"
            >
              ENVIAR WHATSAPP
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
