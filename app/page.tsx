"use client";

import { Navbar } from "./components/Navbar";

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const trustLogos = [
  { name: "Pierre" },
  { name: "Pans & Company" },
  { name: "RIBS" },
  { name: "Monchos Barcelona" },
  { name: "Barcelonetta" },
  { name: "Asador de Aranda 1983" },
  { name: "Grupo Vips" },
  { name: "NH Hoteles" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20">
          <div className="max-w-xl">
            <p className="text-sm font-light uppercase tracking-[0.2em] text-accent mb-4">
              Vestuario corporativo premium
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              Tu equipo es tu mejor escaparate
            </h1>
            <p className="text-xl sm:text-2xl text-white font-normal mb-4">
              Vístelo al nivel de tu marca
            </p>
            <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-8 max-w-lg">
              Uniformes premium para hostelería, hoteles y sectores exigentes. Servicio inmediato, colecciones exclusivas y DRESSCODE SYSTEM para franquicias.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/solicitar-propuesta"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-semibold text-accent uppercase tracking-wide border border-accent hover:bg-accent/10 transition-colors"
              >
                Solicitar propuesta
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="tel:+34900000000"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-accent px-6 py-4 text-sm font-semibold text-accent uppercase tracking-wide bg-transparent hover:bg-accent/10 transition-colors"
              >
                <PhoneIcon />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - 25 años */}
      <section className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left column - Text content */}
        <div className="bg-[#FBF9F6] flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
            25 años vistiendo equipos.
          </h2>
          <div className="w-24 sm:w-28 h-0.5 bg-accent mt-6 mb-8" aria-hidden />
          <p className="text-base sm:text-lg text-[#575757] leading-relaxed mb-6 max-w-xl">
            Dresscode nace hace más de dos décadas con una idea clara: el vestuario corporativo no es una prenda, es una herramienta estratégica.
          </p>
          <p className="text-base sm:text-lg text-[#575757] leading-relaxed mb-10 max-w-xl">
            Cada colección que desarrollamos combina diseño, funcionalidad y posicionamiento de marca. Porque cuando un equipo viste bien, transmite confianza.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-4 text-base sm:text-lg font-semibold text-[#1A1A1A] uppercase tracking-wide hover:text-accent transition-colors"
          >
            <span>Descubre cómo trabajamos</span>
            <span className="flex-1 h-px bg-accent max-w-[120px] sm:max-w-[160px] group-hover:max-w-[180px] transition-[max-width]" aria-hidden />
          </a>
        </div>

        {/* Right column - Image */}
        <div className="relative min-h-[400px] lg:min-h-full bg-zinc-200">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/handpage 2.jpg')`,
            }}
          />
        </div>
      </section>

      {/* Trust / Logos Carousel */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-light uppercase tracking-[0.2em] text-accent mb-3">
            Confianza
          </p>
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-950 uppercase tracking-tight mb-12 sm:mb-16">
            Empresas que confían en nosotros
          </h2>

          {/* Carousel - autoplay, sin scroll */}
          <div className="overflow-hidden py-4">
            <div className="carousel-track flex gap-8 sm:gap-12 w-max">
              {[...trustLogos, ...trustLogos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex shrink-0 w-40 sm:w-44 h-20 sm:h-24 items-center justify-center grayscale opacity-70"
                >
                  <span className="text-sm sm:text-base font-medium text-zinc-500 text-center px-4">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip - Dark Section */}
      <section className="bg-zinc-900 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Diseño estratégico */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 text-accent">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="13.5" cy="6.5" r="1.5" />
                  <circle cx="17.5" cy="10.5" r="1.5" />
                  <circle cx="8.5" cy="7.5" r="1.5" />
                  <circle cx="6.5" cy="12.5" r="1.5" />
                  <ellipse cx="12" cy="12" rx="10" ry="10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-accent mb-2">Diseño estratégico</h3>
              <p className="text-sm text-accent/80">Alineado con tu marca</p>
            </div>

            {/* Producción */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 text-accent">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
                  <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                  <path d="M12 4v2" />
                  <path d="M12 10v4" />
                  <path d="M12 18v2" />
                  <path d="M8 18v2" />
                  <path d="M16 18v2" />
                  <path d="M6 10h.01" />
                  <path d="M18 10h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-accent mb-2">Producción</h3>
              <p className="text-sm text-accent/80">Calidad garantizada</p>
            </div>

            {/* Logística eficiente */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 text-accent">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 3h15v13H1z" />
                  <path d="M16 8h5l3 3v5h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-accent mb-2">Logística eficiente</h3>
              <p className="text-sm text-accent/80">Control del proceso</p>
            </div>

            {/* Entregas a tiempo */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 text-accent">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                  <path d="M12 2a10 10 0 0 1 10 10" strokeDasharray="2 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-accent mb-2">Entregas a tiempo</h3>
              <p className="text-sm text-accent/80">Cumplimiento riguroso</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
