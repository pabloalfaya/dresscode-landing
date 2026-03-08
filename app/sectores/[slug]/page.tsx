import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";

const sectorData: Record<
  string,
  { title: string; subtitle: string; description: string; highlights: string[]; image?: string }
> = {
  "beach-clubs": {
    title: "Beach Clubs",
    subtitle: "Uniformes para clubes de playa",
    image: "beachclub.jpg",
    description:
      "Vestuario resistente al sol, sal y agua para personal de beach clubs, chiringuitos y zonas de piscina. Diseños frescos y funcionales que transmiten el espíritu de tu marca.",
    highlights: [
      "Personal de bar y restaurante",
      "Salvamento y socorrismo",
      "Recepcionistas y hostelería",
      "Ropa técnica resistente",
      "Personalización con logo",
    ],
  },
  hoteles: {
    title: "Hoteles",
    subtitle: "Uniformes premium para hostelería",
    image: "Hoteles.jpg",
    description:
      "Vestuario corporativo de máxima calidad para recepción, camareros, housekeeping y personal de cocina. Diseños elegantes que transmiten profesionalidad y refuerzan la imagen de tu establecimiento.",
    highlights: [
      "Recepción y front desk",
      "Restaurante y bar",
      "Housekeeping y lavandería",
      "Personal de cocina",
      "Comisiones y eventos",
    ],
  },
  restauracion: {
    title: "Restauración",
    subtitle: "Imagen impecable para tu negocio",
    image: "Restauracion.jpg",
    description:
      "Uniformes funcionales y duraderos para restaurantes, bares y cafeterías. Combina comodidad con estilo para que tu equipo luzca profesional en cada servicio.",
    highlights: [
      "Restaurantes y bistrós",
      "Bares y cafeterías",
      "Catering y eventos",
      "Fast casual",
      "Personalización por temporada",
    ],
  },
  golf: {
    title: "Golf",
    subtitle: "Vestuario para clubes y academias",
    image: "Golf.jpg",
    description:
      "Colecciones técnicas y elegantes para clubes de golf, academias y campos. Ropa deportiva de alta gama que combina rendimiento con distinción.",
    highlights: [
      "Personal de campo",
      "Pro shop y recepción",
      "Restaurante del club",
      "Caddies y personal exterior",
      "Colecciones deportivas técnicas",
    ],
  },
  wellness: {
    title: "Wellness",
    subtitle: "Vestuario para spas y centros de bienestar",
    image: "Wellness.jpg",
    description:
      "Uniformes cómodos y elegantes para spas, centros de wellness, gimnasios y balnearios. Tejidos técnicos que favorecen el movimiento y la sensación de bienestar.",
    highlights: [
      "Personal de recepción",
      "Terapeutas y masajistas",
      "Sala de fitness y actividades",
      "Áreas de descanso",
      "Ropa de trabajo transpirable",
    ],
  },
  clinicas: {
    title: "Clínicas",
    subtitle: "Higiene y profesionalidad sanitaria",
    image: "clinicas.jpg",
    description:
      "Uniformes médicos y de clínica que cumplen los más altos estándares de higiene y confort. Diseñados para largas jornadas con máxima funcionalidad.",
    highlights: [
      "Personal médico y enfermería",
      "Recepción y administración",
      "Limpieza y auxiliares",
      "Tejidos antibacterianos",
      "Cumplimiento normativa sanitaria",
    ],
  },
  corporativo: {
    title: "Corporativo",
    subtitle: "Identidad de marca para empresas",
    description:
      "Vestuario corporativo que proyecta la imagen de tu empresa. Desde oficina hasta retail, creamos uniformes que cohesionan equipos y refuerzan tu branding.",
    highlights: [
      "Oficinas y administración",
      "Retail y tiendas",
      "Logística y almacén",
      "Servicios técnicos",
      "Dresscode System para franquicias",
    ],
  },
  franquicias: {
    title: "Franquicias",
    subtitle: "Gestión integral de vestuario multi-centro",
    image: "Franquicias.jpg",
    description:
      "Sistema centralizado de uniformes para cadenas y franquicias. Homogeneidad de imagen en todos los establecimientos con control por centro, pedidos y reporting.",
    highlights: [
      "Portal de pedidos centralizado",
      "Control por centro y talla",
      "Homogeneidad garantizada",
      "Reposición sin mínimos",
      "Reporting de consumo",
    ],
  },
};

const slugs = Object.keys(sectorData);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = sectorData[slug];
  if (!data) return { title: "Sector | Dresscode" };
  return {
    title: `${data.title} | Dresscode - Uniformes Contemporáneos`,
    description: data.description,
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = sectorData[slug];

  if (!data) notFound();

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />

      {/* Hero con imagen de fondo */}
      <section className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {data.image && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/${encodeURIComponent(data.image)}')`,
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        )}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-sm font-light uppercase tracking-[0.2em] text-accent mb-4">
            {data.subtitle}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 drop-shadow-md">
            Uniformes para {data.title}
          </h1>
          <p className="text-lg text-white/95 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            {data.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-950 mb-8">
            Nuestras soluciones para {data.title}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 mb-16">
            {data.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-zinc-700"
              >
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solicitar-propuesta"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-8 py-4 text-sm font-semibold text-white uppercase tracking-wide hover:bg-zinc-800 transition-colors"
            >
              Solicitar propuesta
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-lg border-2 border-zinc-900 px-8 py-4 text-sm font-semibold text-zinc-900 uppercase tracking-wide hover:bg-zinc-50 transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
