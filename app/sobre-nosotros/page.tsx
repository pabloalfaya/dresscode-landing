"use client";

import { Navbar } from "../components/Navbar";
import Link from "next/link";

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              The Story Behind <br />
              <em className="font-serif italic font-medium">Dresscode</em>
            </h1>
            <p className="text-xl text-white/90 font-light leading-relaxed">
              Más que una marca de uniformes, somos una herramienta estratégica para tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Todo empezó en la mesa */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80" 
                alt="Proceso de diseño" 
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            <div>
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">
                NUESTRA HISTORIA
              </p>
              <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 leading-tight mb-8">
                Todo empezó <br />
                <span className="font-bold italic">en la mesa.</span>
              </h2>
              <div className="space-y-6 text-base text-zinc-500 font-light leading-relaxed">
                <p>
                  Dresscode nace hace más de dos décadas con una idea clara: el vestuario corporativo no es una prenda, es una herramienta estratégica.
                </p>
                <p>
                  Observamos que en el sector de la hospitalidad, se cuidaba cada detalle del interiorismo y la gastronomía, pero el equipo a menudo vestía prendas que no estaban a la altura de la marca.
                </p>
                <p>
                  Decidimos cambiar eso. Empezamos diseñando soluciones a medida que combinaban la elegancia de la moda con la funcionalidad necesaria para el trabajo diario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-24 sm:py-32 bg-[#FBF9F6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">
              FILOSOFÍA
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 leading-tight mb-8">
              Cuando los uniformes <br />
              <span className="font-bold italic">se convierten en identidad.</span>
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed">
              Creemos en un vestuario que empodera al equipo y eleva la percepción del cliente. 
              Nuestra metodología se basa en cuatro pilares fundamentales:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "DISEÑO", desc: "Estética contemporánea y atemporal." },
              { label: "CALIDAD", desc: "Tejidos premium de alta resistencia." },
              { label: "SERVICIO", desc: "Acompañamiento en todo el proceso." },
              { label: "INNOVACIÓN", desc: "Patronaje y materiales de vanguardia." },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-white border border-zinc-100 shadow-sm">
                <h3 className="text-xs font-bold text-zinc-900 tracking-widest mb-4">{item.label}</h3>
                <p className="text-[11px] text-zinc-400 font-light uppercase tracking-wider leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Timeline */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">
                EXPERIENCIA
              </p>
              <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 leading-tight mb-12">
                Más de dos décadas <br />
                <span className="font-bold italic">vistiendo equipos.</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                <div>
                  <p className="text-4xl font-bold text-accent mb-2">200+</p>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">PROYECTOS<br/>COMPLETADOS</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent mb-2">25+</p>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">AÑOS DE<br/>TRAYECTORIA</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent mb-2">6</p>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">SECTORES<br/>ESPECIALIZADOS</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent mb-2">100%</p>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">GESTIÓN<br/>PERSONALIZADA</p>
                </div>
              </div>
            </div>

            <div className="lg:pt-16">
              <div className="space-y-8 text-zinc-500 font-light leading-relaxed">
                <p>
                  No solo fabricamos ropa. Creamos el hilo conductor entre tu marca y tu cliente final. 
                  A lo largo de estos años hemos perfeccionado un sistema que garantiza:
                </p>
                <ul className="space-y-4">
                  {[
                    "Análisis profundo de la identidad de marca.",
                    "Selección técnica de tejidos para cada posición.",
                    "Control de calidad exhaustivo en cada prenda.",
                    "Logística eficiente y reposiciones garantizadas."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Más que uniformes */}
      <section className="bg-zinc-950 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">
            MISIÓN
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight mb-8">
            Más que <span className="font-bold italic text-accent">uniformes.</span>
          </h2>
          <div className="space-y-6 text-white/60 font-light text-sm leading-relaxed max-w-2xl mx-auto">
            <p>
              Entendemos que el uniforme es la primera impresión física que recibe tu cliente. 
              Es una extensión de tu arquitectura, de tu luz y de tu servicio.
            </p>
            <p>
              Nuestra misión es que cada miembro de tu equipo se sienta orgulloso de lo que viste, 
              transmitiendo esa confianza en cada interacción.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 sm:py-32 text-center border-t border-zinc-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">
            PRÓXIMO PASO
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 leading-tight mb-8">
            ¿Listo para elevar la imagen <br className="hidden sm:block" />
            de tu equipo?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solicitar-propuesta"
              className="inline-flex items-center justify-center bg-accent px-8 py-4 text-xs font-bold text-white uppercase tracking-widest hover:bg-accent/90 transition-colors"
            >
              SOLICITAR PROPUESTA
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center border border-zinc-200 bg-transparent px-8 py-4 text-xs font-bold text-zinc-800 uppercase tracking-widest hover:bg-zinc-50 transition-colors"
            >
              RESERVAR UNA CONSULTA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
