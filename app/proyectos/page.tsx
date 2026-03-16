"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "TODOS",
  "RESTAURACIÓN",
  "HOTELES",
  "BEACH CLUBS",
  "GOLF",
  "WELLNESS",
  "CLÍNICAS",
];

const projects = [
  {
    id: 1,
    title: "Hotel Palacio del Mar",
    location: "Marbella, España",
    category: "HOTELES",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Alma Beach Club",
    location: "Ibiza, España",
    category: "BEACH CLUBS",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Restaurante Mediterráneo",
    location: "Barcelona, España",
    category: "RESTAURACIÓN",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Club de Golf Roca Verde",
    location: "Madrid, España",
    category: "GOLF",
    image: "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Serena Wellness Spa",
    location: "Alicante, España",
    category: "WELLNESS",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Clinique Lumière",
    location: "Barcelona, España",
    category: "CLÍNICAS",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    title: "Bistro Gourmet",
    location: "Valencia, España",
    category: "RESTAURACIÓN",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    title: "Luxury Resort & Spa",
    location: "Tenerife, España",
    category: "HOTELES",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    title: "Blue Wave Beach",
    location: "Mallorca, España",
    category: "BEACH CLUBS",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    title: "Golf Club Mar de Cristal",
    location: "Valencia, España",
    category: "GOLF",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80",
  },
  {
    id: 11,
    title: "Wellness Retreat",
    location: "Gerona, España",
    category: "WELLNESS",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
  },
  {
    id: 12,
    title: "Dental Premium Center",
    location: "Madrid, España",
    category: "CLÍNICAS",
    image: "https://images.unsplash.com/photo-1629909608135-ca2903f4d996?auto=format&fit=crop&q=80",
  },
  {
    id: 13,
    title: "Restaurante El Olivo",
    location: "Sevilla, España",
    category: "RESTAURACIÓN",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
  },
  {
    id: 14,
    title: "Sky View Hotel",
    location: "Bilbao, España",
    category: "HOTELES",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80",
  },
  {
    id: 15,
    title: "Palm Beach Lounge",
    location: "Málaga, España",
    category: "BEACH CLUBS",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80",
  },
];

export default function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState("TODOS");

  const filteredProjects = activeCategory === "TODOS" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FBF9F6]">
      <Navbar />

      {/* Volver Button */}
      <div className="absolute top-28 left-4 z-10 sm:left-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-zinc-200 text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-colors shadow-sm"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          VOLVER
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Uniformes en acción
          </h1>
          <p className="text-lg text-white/80 max-w-xl font-light">
            Explora nuestra galería de proyectos seleccionados y descubre cómo el vestuario corporativo transforma la experiencia de marca.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4">
              EXPLORA POR SECTOR
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-[11px] font-bold tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-zinc-950 text-white"
                    : "bg-transparent text-zinc-400 hover:text-zinc-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 mb-6 shadow-sm">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] font-bold text-zinc-900 tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="px-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-zinc-900 mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-light italic">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-400 font-light">No hay proyectos disponibles en esta categoría actualmente.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">
            TRABAJA CON NOSOTROS
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight mb-8">
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
              className="inline-flex items-center justify-center border border-white/20 bg-transparent px-8 py-4 text-xs font-bold text-white/80 uppercase tracking-widest hover:bg-white/5 transition-colors"
            >
              RESERVAR UNA CONSULTA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
