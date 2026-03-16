"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import Link from "next/link";

const categories = [
  "TODOS",
  "CAMISERÍA",
  "DELANTALES",
  "PANTALONES",
  "PUNTO",
  "EXTERIOR",
  "ACCESORIOS",
  "CALZADO",
  "MANTELERÍA",
];

const sectors = [
  "RESTAURACIÓN",
  "HOTELES",
  "BEACH CLUBS",
  "GOLF",
  "WELLNESS",
  "CLÍNICAS",
];

const catalogItems = [
  {
    id: 1,
    tag: "NUEVO",
    title: "Camisa Oxford Premium",
    desc: "Corte entallado y tejido de alta resistencia.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80",
    category: "CAMISERÍA",
    sector: "HOTELES",
  },
  {
    id: 2,
    tag: "BEST SELLER",
    title: "Delantero de Cuero",
    desc: "Diseño ergonómico para coctelería.",
    image: "https://images.unsplash.com/photo-1594932224828-b4b057b7d6ee?auto=format&fit=crop&q=80",
    category: "DELANTALES",
    sector: "RESTAURACIÓN",
  },
  {
    id: 3,
    tag: "PREMIUM",
    title: "Chino Contemporáneo",
    desc: "Tejido elástico para máxima comodidad.",
    image: "https://images.unsplash.com/photo-1473963476477-71639fca727b?auto=format&fit=crop&q=80",
    category: "PANTALONES",
    sector: "HOTELES",
  },
  {
    id: 4,
    tag: "NUEVO",
    title: "Jersey Cuello Pico",
    desc: "Lana merino de tacto suave.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80",
    category: "PUNTO",
    sector: "HOTELES",
  },
  {
    id: 5,
    tag: "RESTAURANTE",
    title: "Americana Slim Fit",
    desc: "Elegancia moderna para recepción.",
    image: "https://images.unsplash.com/photo-1594932224828-b4b057b7d6ee?auto=format&fit=crop&q=80",
    category: "EXTERIOR",
    sector: "RESTAURACIÓN",
  },
  {
    id: 6,
    tag: "BEACH CLUB",
    title: "Polo Técnico Piqué",
    desc: "Transpirable y secado rápido.",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80",
    category: "CAMISERÍA",
    sector: "BEACH CLUBS",
  },
  {
    id: 7,
    tag: "GOLF",
    title: "Gorra Corporativa",
    desc: "Protección solar con estilo.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80",
    category: "ACCESORIOS",
    sector: "GOLF",
  },
  {
    id: 8,
    tag: "WELLNESS",
    title: "Zapatillas Spa",
    desc: "Antideslizantes y confortables.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
    category: "CALZADO",
    sector: "WELLNESS",
  },
  {
    id: 9,
    tag: "NUEVO",
    title: "Mantel Lino Natural",
    desc: "Acabado artesanal para mesas gourmet.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80",
    category: "MANTELERÍA",
    sector: "RESTAURACIÓN",
  },
];

export default function CatalogoPage() {
  const [activeCategory, setActiveCategory] = useState("TODOS");
  const [activeSector, setActiveSector] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = catalogItems.filter(item => {
    const matchesCategory = activeCategory === "TODOS" || item.category === activeCategory;
    const matchesSector = !activeSector || item.sector === activeSector;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSector && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FBF9F6]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-zinc-950 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4">CATÁLOGO</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Explora nuestra colección
          </h1>
          <p className="text-zinc-400 font-light max-w-2xl mx-auto">
            Descubre nuestra gama de prendas diseñadas específicamente para cada sector. Calidad, estilo y durabilidad en cada puntada.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0 space-y-12">
              <div>
                <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6">CATEGORÍAS</h3>
                <ul className="space-y-3">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setActiveCategory(cat)}
                        className={`text-[11px] font-bold tracking-widest uppercase transition-colors ${
                          activeCategory === cat ? "text-accent" : "text-zinc-400 hover:text-zinc-900"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6">POR SECTOR</h3>
                <ul className="space-y-3">
                  {sectors.map(sec => (
                    <li key={sec}>
                      <button 
                        onClick={() => setActiveSector(activeSector === sec ? "" : sec)}
                        className={`text-[11px] font-bold tracking-widest uppercase transition-colors ${
                          activeSector === sec ? "text-accent" : "text-zinc-400 hover:text-zinc-900"
                        }`}
                      >
                        {sec}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Catalog Grid */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="relative mb-12">
                <input 
                  type="text" 
                  placeholder="Buscar prendas..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-zinc-200 px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-accent/50 placeholder:text-zinc-300"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map(item => (
                  <div key={item.id} className="group bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-[3/4] overflow-hidden bg-zinc-50">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent text-white px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-2">{item.title}</h3>
                      <p className="text-[11px] text-zinc-400 font-light leading-relaxed mb-4">{item.desc}</p>
                      <button className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-2 group/btn">
                        VER DETALLES
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-20 bg-white border border-dashed border-zinc-200">
                  <p className="text-zinc-400 font-light italic">No se han encontrado prendas que coincidan con tu búsqueda.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* No encuentras lo que buscas */}
      <section className="py-24 bg-zinc-950 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-8">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-white/60 font-light mb-10 max-w-lg mx-auto leading-relaxed">
            Nuestro equipo puede diseñar y fabricar prendas exclusivas para tu marca o buscar soluciones fuera de catálogo.
          </p>
          <Link 
            href="/solicitar-propuesta"
            className="inline-flex items-center justify-center bg-accent px-8 py-4 text-xs font-bold text-white uppercase tracking-widest hover:bg-accent/90 transition-colors"
          >
            HABLA CON UN ESPECIALISTA
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 sm:py-32 bg-[#FBF9F6] text-center border-t border-zinc-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6">PRÓXIMO PASO</p>
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 leading-tight mb-8">
            ¿Listo para elevar la imagen <br className="hidden sm:block" />
            de tu equipo?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solicitar-propuesta"
              className="inline-flex items-center justify-center bg-accent px-10 py-5 text-xs font-bold text-white uppercase tracking-widest hover:bg-accent/90 transition-colors"
            >
              SOLICITAR PROPUESTA
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center border border-zinc-200 bg-transparent px-10 py-5 text-xs font-bold text-zinc-800 uppercase tracking-widest hover:bg-zinc-50 transition-colors"
            >
              RESERVAR UNA CONSULTA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
