"use client";

import { Navbar } from "./components/Navbar";

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
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

const trustLogos = [
  "MELIÁ HOTELS", "NH COLLECTION", "BARCELÓ", "HYATT", "FOUR SEASONS", "MARRIOTT",
  "NOBU", "SOHO HOUSE", "SIX SENSES", "AMAN", "W HOTELS", "MANDARIN ORIENTAL"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBF9F6]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              PREMIUM UNIFORMS
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              La imagen de tu equipo <br className="hidden md:block" />
              <em className="font-serif italic font-medium">habla antes que tu servicio.</em>
            </h1>
            <p className="text-lg text-white/90 font-light mb-10 max-w-xl">
              Uniformes premium diseñados para reflejar la calidad e identidad de tu marca.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/solicitar-propuesta"
                className="inline-flex items-center justify-center gap-3 bg-zinc-950 px-8 py-4 text-xs font-bold text-accent uppercase tracking-widest hover:bg-zinc-800 transition-colors"
              >
                SOLICITAR PROPUESTA
                <ArrowRightIcon />
              </a>
              <a
                href="/catalogo"
                className="inline-flex items-center justify-center gap-3 border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-xs font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                <BookIcon />
                DESCARGAR CATÁLOGO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* El Contexto */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
                EL CONTEXTO
              </p>
              <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 leading-[1.15] mb-8">
                En hostelería, cada detalle <br />
                <span className="font-bold italic">construye la experiencia.</span>
              </h2>
              <div className="space-y-6 text-base text-zinc-500 font-light leading-relaxed">
                <p>El espacio, la iluminación, la música... y también la presencia de tu equipo.</p>
                <p>Sin embargo, encontrar uniformes que realmente reflejen la identidad de tu marca no siempre es fácil.</p>
              </div>
              <div className="mt-8 border-l-2 border-accent pl-6 py-2">
                <p className="text-base text-zinc-600 font-medium italic">
                  Catálogos genéricos, tejidos incómodos o diseños que simplemente no encajan con la personalidad de tu espacio.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                alt="Terraza de restaurante premium"
                className="w-full h-full object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* El Problema */}
      <section className="py-24 sm:py-32 bg-[#FBF9F6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
              EL PROBLEMA
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-900 leading-tight">
              Cuando los uniformes no son los correctos, <br />
              <span className="font-bold italic">se nota.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 sm:p-10 border border-zinc-100 shadow-sm flex flex-col">
              <div className="w-10 h-10 flex items-center justify-center text-accent mb-6 border border-zinc-100 rounded">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-4">Tu equipo se siente incómodo.</h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                Los uniformes genéricos no se adaptan al ritmo ni al movimiento del trabajo diario en hostelería.
              </p>
            </div>
            <div className="bg-white p-8 sm:p-10 border border-zinc-100 shadow-sm flex flex-col">
              <div className="w-10 h-10 flex items-center justify-center text-accent mb-6 border border-zinc-100 rounded">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-4">La imagen de marca pierde coherencia.</h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                Cuando el look del equipo no encaja con el espacio, el mensaje que transmite la marca se diluye.
              </p>
            </div>
            <div className="bg-white p-8 sm:p-10 border border-zinc-100 shadow-sm flex flex-col">
              <div className="w-10 h-10 flex items-center justify-center text-accent mb-6 border border-zinc-100 rounded">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-4">La experiencia del cliente se resiente.</h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                En entornos de alto nivel, cada detalle importa. La presencia del equipo es parte del diseño.
              </p>
            </div>
            <div className="bg-white p-8 sm:p-10 border border-zinc-100 shadow-sm flex flex-col">
              <div className="w-10 h-10 flex items-center justify-center text-accent mb-6 border border-zinc-100 rounded">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-4">En espacios donde cada detalle importa...</h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">
                La presencia del equipo es parte del diseño. No puede ser una decisión secundaria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La Solución */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
                alt="Uniformes elegantes"
                className="w-full h-auto object-cover opacity-90 grayscale-[20%]"
              />
              <div className="absolute bottom-0 left-0 bg-zinc-950 p-8 sm:p-10">
                <p className="text-3xl font-bold text-accent mb-1">+200</p>
                <p className="text-[10px] font-bold text-white uppercase tracking-[0.2em] leading-tight">
                  PROYECTOS<br/>COMPLETADOS
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
                LA SOLUCIÓN
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-900 leading-[1.15] mb-8">
                Uniformes diseñados para espacios donde <br/>
                <span className="font-bold italic">la imagen importa.</span>
              </h2>
              <p className="text-base text-zinc-500 font-light mb-8">
                En Dresscode creamos uniformes que combinan:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Diseño elegante y atemporal",
                  "Tejidos cómodos y duraderos",
                  "Coherencia visual con tu identidad de marca",
                  "Soluciones prácticas para la operación diaria"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-600 text-sm font-medium">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-zinc-400 font-light italic">
                Nuestro objetivo es simple: tu equipo debe reflejar la misma calidad y personalidad que tu espacio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="py-24 sm:py-32 bg-[#FBF9F6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
              SECTORES
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-900 leading-tight">
              Diseñado para profesionales <br />
              <span className="font-bold italic">de la hospitalidad.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Restaurantes", subtitle: "Del bistró íntimo al restaurante gourmet", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" },
              { title: "Hoteles & Resorts", subtitle: "Recepción, room, F&B y más.", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80" },
              { title: "Beach Clubs", subtitle: "Presencia impecable, entre sol y servicio.", img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80" },
              { title: "Golf Clubs", subtitle: "Elegancia funcional en cada ronda.", img: "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?auto=format&fit=crop&q=80" },
              { title: "Wellness Centers", subtitle: "Serenidad y profesionalidad en cada detalle.", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80" },
              { title: "Clínicas Premium", subtitle: "Confianza y distinción en entornos de salud.", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" },
            ].map((sector, i) => (
              <div key={i} className="group relative aspect-[4/3] overflow-hidden bg-zinc-900 cursor-pointer">
                <img src={sector.img} alt={sector.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{sector.title}</h3>
                  <p className="text-sm text-white/70 font-light">{sector.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
                CASOS DE ÉXITO
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-900 leading-tight">
                Proyectos <span className="font-bold italic">seleccionados.</span>
              </h2>
            </div>
            <p className="text-sm text-zinc-400 font-light max-w-xs">
              Haz clic en cualquier proyecto para ver la galería completa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Hotel Palacio del Mar", type: "HOTEL & RESORT", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80" },
              { name: "Alma Beach Club", type: "BEACH CLUB", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80" },
              { name: "Restaurante Mediterráneo", type: "RESTAURANTE", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" },
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden bg-zinc-100 mb-6">
                  <img src={project.img} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="bg-[#FBF9F6] p-6 text-center border border-zinc-100 group-hover:border-accent/30 transition-colors">
                  <h3 className="text-sm font-bold text-zinc-900 mb-2">{project.name}</h3>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">{project.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confianza */}
      <section className="bg-[#111111] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
              CONFIANZA
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              Marcas de hostelería que confían en nosotros.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/5 border border-white/5 mb-24">
            {trustLogos.map((logo, i) => (
              <div key={i} className="bg-[#111111] h-24 flex items-center justify-center p-4">
                <span className="text-xs font-medium text-white/30 uppercase tracking-widest text-center">{logo}</span>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-12 lg:gap-24 text-center">
            <div>
              <div className="w-12 h-12 mx-auto border border-white/10 flex items-center justify-center text-accent mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">TEJIDOS PREMIUM</h3>
              <p className="text-xs text-white/40 font-light leading-relaxed">
                Materiales seleccionados por su durabilidad, tacto y rendimiento en entornos de alta exigencia.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto border border-white/10 flex items-center justify-center text-accent mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">PRODUCCIÓN FLEXIBLE</h3>
              <p className="text-xs text-white/40 font-light leading-relaxed">
                Desde proyectos pequeños hasta grandes corporaciones, nos adaptamos a tus necesidades.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto border border-white/10 flex items-center justify-center text-accent mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">ASESORÍA PERSONALIZADA</h3>
              <p className="text-xs text-white/40 font-light leading-relaxed">
                Le acompañamos desde el diseño hasta la entrega final con un equipo dedicado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Próximo Paso (CTA Image) */}
      <section className="relative py-32 flex items-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
            PRÓXIMO PASO
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            Diseñemos la imagen <br />
            <span className="font-bold italic">correcta para tu equipo.</span>
          </h2>
          <p className="text-sm text-white/80 font-light mb-10">
            Cuéntanos tu proyecto y prepararemos una propuesta a medida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/solicitar-propuesta"
              className="inline-flex items-center justify-center gap-3 bg-accent px-8 py-4 text-xs font-bold text-white uppercase tracking-widest hover:bg-accent/90 transition-colors"
            >
              SOLICITAR PROPUESTA
              <ArrowRightIcon />
            </a>
            <a
              href="/catalogo"
              className="inline-flex items-center justify-center gap-3 border border-white/30 bg-transparent px-8 py-4 text-xs font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              <BookIcon />
              DESCARGAR CATÁLOGO
            </a>
          </div>
        </div>
      </section>

      {/* Contacto Form */}
      <section className="py-24 sm:py-32 bg-[#FBF9F6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
                CONTACTO
              </p>
              <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 leading-[1.15] mb-8">
                Hablemos de <br />
                <span className="font-bold italic">tu proyecto.</span>
              </h2>
              <p className="text-sm text-zinc-500 font-light leading-relaxed mb-12 max-w-sm">
                Cuéntanos sobre tu negocio y el equipo que necesitas vestir. Prepararemos una propuesta sin compromiso.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">EMAIL</p>
                  <a href="mailto:hola@dresscodepro.es" className="text-sm font-medium text-zinc-800 hover:text-accent transition-colors">hola@dresscodepro.es</a>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">TELÉFONO</p>
                  <a href="tel:+34655737973" className="text-sm font-medium text-zinc-800 hover:text-accent transition-colors">+34 655 737 973</a>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">RESPUESTA</p>
                  <p className="text-sm font-medium text-zinc-800">En 24-48 horas hábiles</p>
                </div>
              </div>
            </div>

            <div className="bg-transparent">
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
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-b border-zinc-300 pb-2">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">EMAIL *</label>
                    <input type="email" placeholder="tu@email.com" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400" required />
                  </div>
                  <div className="border-b border-zinc-300 pb-2">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">TELÉFONO</label>
                    <input type="tel" placeholder="+34 600 000 000" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400" />
                  </div>
                </div>
                <div className="border-b border-zinc-300 pb-2">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">TIPO DE NEGOCIO</label>
                  <select className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800">
                    <option>Selecciona una opción</option>
                    <option>Restaurante</option>
                    <option>Hotel / Resort</option>
                    <option>Beach Club</option>
                    <option>Clínica</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="border-b border-zinc-300 pb-2">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">MENSAJE</label>
                  <textarea rows={3} placeholder="Cuéntanos sobre tu proyecto, número de personas, plazos..." className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zinc-800 placeholder:text-zinc-400 resize-none"></textarea>
                </div>
                <button type="button" className="inline-flex items-center justify-center gap-3 bg-accent px-8 py-4 text-xs font-bold text-white uppercase tracking-widest hover:bg-accent/90 transition-colors">
                  ENVIAR MENSAJE
                  <ArrowRightIcon />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-black py-24 text-center border-b border-white/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
            TRABAJA CON NOSOTROS
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight mb-8">
            ¿Listo para elevar la imagen <br className="hidden sm:block" />
            de tu equipo?
          </h2>
          <p className="text-sm text-white/50 font-light mb-10 leading-relaxed max-w-xl mx-auto">
            Dresscode diseña uniformes premium para restaurantes, hoteles, espacios wellness y marcas de servicio modernas. Combinamos diseño, confort e identidad de marca para crear uniformes de los que tu equipo se sentirá orgulloso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/solicitar-propuesta"
              className="inline-flex items-center justify-center bg-accent px-8 py-4 text-xs font-bold text-white uppercase tracking-widest hover:bg-accent/90 transition-colors"
            >
              SOLICITAR PROPUESTA
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center border border-white/20 bg-transparent px-8 py-4 text-xs font-bold text-white/80 uppercase tracking-widest hover:bg-white/5 transition-colors"
            >
              RESERVAR UNA CONSULTA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
