import Link from "next/link";
import { Navbar } from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Dresscode Pro",
  description: "Aviso legal y condiciones de uso del sitio web Dresscode Pro.",
};

const sections = [
  {
    number: "01",
    title: "Datos identificativos",
    content: (
      <>
        <p className="text-zinc-600 leading-relaxed">
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los siguientes datos:
        </p>
        <ul className="mt-4 space-y-2">
          {["Titular: [NOMBRE O RAZÓN SOCIAL DE LA EMPRESA]", "NIF/CIF: [IDENTIFICACIÓN FISCAL]", "Domicilio social: [DIRECCIÓN COMPLETA], Madrid, España", "Email: info@dresscodepro.com", "Teléfono: +34 900 000 000"].map((item) => (
            <li key={item} className="flex items-start gap-3 text-zinc-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "02",
    title: "Objeto",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        El presente aviso legal regula el uso del sitio web [URL DEL SITIO], del que es titular la empresa
        anteriormente identificada. La navegación por el sitio web atribuye la condición de usuario e implica la
        aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este aviso legal.
      </p>
    ),
  },
  {
    number: "03",
    title: "Condiciones de uso",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen a través de
        este sitio web y a no emplearlos para: realizar actividades ilícitas, ilegales o contrarias a la buena fe y
        al orden público; provocar daños en los sistemas físicos y lógicos del titular o de terceros; introducir o
        difundir virus informáticos o cualesquiera otros sistemas físicos o lógicos que puedan provocar daños.
      </p>
    ),
  },
  {
    number: "04",
    title: "Propiedad intelectual e industrial",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        El titular, por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e
        industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo:
        imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores,
        estructura y diseño, selección de materiales utilizados, programas de ordenador necesarios para su
        funcionamiento, acceso y uso, etc.). Queda expresamente prohibida la reproducción, distribución y
        comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los
        contenidos de esta página web con fines comerciales, sin la autorización del titular.
      </p>
    ),
  },
  {
    number: "05",
    title: "Exclusión de responsabilidad",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        El titular no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse
        de la interrupción o mal funcionamiento del sitio web, o de la transmisión de virus o programas
        maliciosos en los contenidos. Asimismo, no se hace responsable del uso que los usuarios puedan hacer de
        los contenidos y servicios incluidos en el sitio web.
      </p>
    ),
  },
  {
    number: "06",
    title: "Modificaciones",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        El titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas
        en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten como
        la forma en que estos aparezcan presentados o localizados.
      </p>
    ),
  },
  {
    number: "07",
    title: "Legislación aplicable y jurisdicción",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        La relación entre el titular y el usuario se regirá por la normativa española vigente. Para la resolución
        de cuantas controversias pudieran surgir se someterán los conflictos a los Juzgados y Tribunales del
        domicilio del usuario.
      </p>
    ),
  },
];

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F6] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(184 149 107) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(184 149 107) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <Navbar />

      <main className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <header className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4">
              Información legal
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-800 tracking-tight mb-4">
              Aviso Legal
            </h1>
            <p className="text-sm text-zinc-500">
              Última actualización: marzo 2026
            </p>
          </header>

          {/* Content card */}
          <article className="rounded-2xl bg-white/80 backdrop-blur-sm border border-zinc-200/80 shadow-lg shadow-zinc-200/50 overflow-hidden">
            <div className="p-8 sm:p-10 lg:p-12 space-y-0">
              {sections.map((section, index) => (
                <section
                  key={section.number}
                  className={index > 0 ? "pt-12 mt-12 border-t border-zinc-100" : ""}
                >
                  <div className="flex gap-4 sm:gap-6">
                    <span className="text-2xl sm:text-3xl font-bold text-accent/80 tabular-nums shrink-0">
                      {section.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg sm:text-xl font-bold text-zinc-800 mb-4">
                        {section.title}
                      </h2>
                      <div className="space-y-4">{section.content}</div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </article>

          <p className="mt-10 text-center">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-500 hover:text-accent transition-colors inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Volver al inicio
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
