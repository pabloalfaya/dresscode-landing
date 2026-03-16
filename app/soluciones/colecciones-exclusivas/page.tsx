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

export default function ColeccionesExclusivasPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F6]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">
              COLECCIONES EXCLUSIVAS
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
              Diseñamos <br />
              <span className="font-light italic">identidad.</span>
            </h1>
            <p className="text-lg text-white/90 font-light max-w-2xl leading-relaxed">
              Uniformes que comunican los valores de tu marca a través del diseño, el patronaje y la selección técnica de tejidos.
            </p>
          </div>
        </div>
      </section>

      {/* Desarrollo integral */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 mb-16">
            Desarrollo integral <br />
            <span className="font-bold italic text-accent">de tu colección.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "ANÁLISIS DE MARCA", desc: "Estudiamos tu espacio e identidad.", icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              )},
              { label: "DISEÑO EXCLUSIVO", desc: "Propuestas únicas para tu equipo.", icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                </svg>
              )},
              { label: "PRODUCCIÓN A MEDIDA", desc: "Fabricación controlada paso a paso.", icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              )},
              { label: "GESTIÓN INTEGRAL", desc: "Desde el patrón hasta la entrega.", icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
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

      {/* Diseñamos identidad */}
      <section className="py-24 sm:py-32 bg-[#FBF9F6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">DISEÑO ESTRATÉGICO</p>
              <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 leading-tight mb-8">
                Diseñamos identidad. <br />
                <span className="font-bold italic">No solo uniformes.</span>
              </h2>
              <div className="space-y-6 text-base text-zinc-500 font-light leading-relaxed">
                <p>
                  Cada proyecto de colección exclusiva comienza con una inmersión en tu marca. Analizamos la arquitectura, la paleta de colores y el tipo de servicio para que el uniforme sea un elemento más de la narrativa de tu espacio.
                </p>
                <ul className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    "Asesoría de imagen", "Diseño de autor",
                    "Fabricación ética", "Logística global"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-600 text-sm font-medium">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white p-12 border border-zinc-100 shadow-xl shadow-zinc-200/50">
              <p className="text-xl text-zinc-800 font-light italic leading-relaxed text-center">
                "Tu equipo es el primer contacto físico con el cliente. Su imagen debe reflejar la misma calidad que el resto de tu espacio."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pasos */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 leading-tight">
              De la idea a la prenda <br />
              <span className="font-bold italic text-accent">en 4 pasos.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "CONSULTA & BRIEFING", desc: "Definimos objetivos y necesidades." },
              { step: "02", title: "DISEÑO & MUESTRAS", desc: "Propuestas creativas y prototipado." },
              { step: "03", title: "PRODUCCIÓN", desc: "Fabricación con control de calidad." },
              { step: "04", title: "ENTREGA & REPOSICIÓN", desc: "Gestión logística y stock de seguridad." },
            ].map((item, i) => (
              <div key={i} className="relative p-8 border border-zinc-100 bg-[#FBF9F6]">
                <span className="absolute top-4 right-6 text-4xl font-bold text-accent/10">{item.step}</span>
                <h3 className="text-xs font-bold text-zinc-900 tracking-widest uppercase mb-4">{item.title}</h3>
                <p className="text-[11px] text-zinc-500 font-light uppercase tracking-wider leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas exigentes grid */}
      <section className="py-24 sm:py-32 bg-[#FBF9F6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 mb-16">
            Colecciones para <br />
            <span className="font-bold italic">marcas exigentes.</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200">
            {[
              "Hoteles Boutique", "Restaurantes de Autor", "Beach Clubs Premium",
              "Golf & Country Clubs", "Wellness & Spa", "Clínicas Estéticas"
            ].map((sector, i) => (
              <div key={i} className="bg-white p-12 hover:bg-zinc-50 transition-colors">
                <p className="text-[11px] font-bold text-zinc-600 uppercase tracking-widest">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia que se nota */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">MÁS QUE PRODUCTO</p>
          <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 leading-tight mb-8">
            Experiencia que <span className="font-bold italic">se nota.</span>
          </h2>
          <p className="text-base text-zinc-500 font-light leading-relaxed">
            Nuestro valor añadido reside en el acompañamiento constante. No solo entregamos uniformes; entregamos un sistema de imagen que facilita la gestión diaria y eleva el estatus de tu marca ante el cliente.
          </p>
        </div>
      </section>

      {/* Contacto Form */}
      <section className="py-24 sm:py-32 bg-[#FBF9F6] border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">
                PROYECTOS
              </p>
              <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 leading-[1.15] mb-8">
                Cuéntanos <br />
                <span className="font-bold italic">tu proyecto.</span>
              </h2>
              <p className="text-sm text-zinc-500 font-light leading-relaxed mb-12 max-w-sm">
                Iniciemos una conversación sobre cómo el diseño puede potenciar tu marca.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium text-zinc-800">
                  <CheckIcon />
                  <span>Diseño personalizado</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-zinc-800">
                  <CheckIcon />
                  <span>Muestrario de tejidos</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-zinc-800">
                  <CheckIcon />
                  <span>Presupuesto a medida</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-12 shadow-xl shadow-zinc-200/50">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-b border-zinc-200 pb-2">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">NOMBRE *</label>
                    <input type="text" placeholder="Tu nombre" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400" required />
                  </div>
                  <div className="border-b border-zinc-200 pb-2">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">EMPRESA *</label>
                    <input type="text" placeholder="Nombre del negocio" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400" required />
                  </div>
                </div>
                <div className="border-b border-zinc-200 pb-2">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">EMAIL *</label>
                  <input type="email" placeholder="tu@email.com" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400" required />
                </div>
                <div className="border-b border-zinc-200 pb-2">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">MENSAJE</label>
                  <textarea rows={3} placeholder="Cuéntanos brevemente qué necesitas..." className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400 resize-none"></textarea>
                </div>
                <button type="button" className="w-full inline-flex items-center justify-center gap-3 bg-zinc-950 px-8 py-4 text-[11px] font-bold text-white uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
                  SOLICITAR CONSULTA
                  <ArrowRightIcon />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-zinc-950 py-24 sm:py-32 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Tu equipo es parte <br />
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

      <Footer />
    </div>
  );
}
