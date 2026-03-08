import Link from "next/link";
import { Navbar } from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Dresscode Pro",
  description: "Política de privacidad y protección de datos de Dresscode Pro.",
};

const sections = [
  {
    number: "01",
    title: "Responsable del tratamiento",
    content: (
      <>
        <p className="text-zinc-600 leading-relaxed">
          El responsable del tratamiento de los datos personales recabados a través del presente sitio web es:
        </p>
        <ul className="mt-4 space-y-2">
          {["Identidad: [NOMBRE O RAZÓN SOCIAL DE LA EMPRESA]", "NIF/CIF: [IDENTIFICACIÓN FISCAL]", "Dirección: [DIRECCIÓN COMPLETA], Madrid, España", "Email: hola@dresscodepro.es"].map((item) => (
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
    title: "Datos que recabamos",
    content: (
      <>
        <p className="text-zinc-600 leading-relaxed">
          Podemos recoger los siguientes tipos de datos personales en función de la interacción que mantenga con
          nuestro sitio web:
        </p>
        <ul className="mt-4 space-y-2">
          {["Datos de identificación: nombre, apellidos, dirección de correo electrónico, teléfono.", "Datos de navegación: dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia.", "Datos comerciales: historial de consultas, solicitudes de presupuesto o información."].map((item) => (
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
    number: "03",
    title: "Finalidad del tratamiento",
    content: (
      <>
        <p className="text-zinc-600 leading-relaxed">
          Los datos personales que usted nos facilite serán tratados con las siguientes finalidades:
        </p>
        <ul className="mt-4 space-y-2">
          {["Gestionar las consultas, solicitudes de información o presupuesto realizadas a través del formulario de contacto.", "Enviar comunicaciones comerciales sobre nuestros productos y servicios, previa autorización.", "Mejorar la experiencia de usuario y el funcionamiento del sitio web.", "Cumplir con las obligaciones legales aplicables."].map((item) => (
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
    number: "04",
    title: "Base legal",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        El tratamiento de sus datos se basa en: el consentimiento que nos presta al enviar un formulario o
        suscribirse a nuestras comunicaciones; la ejecución de un contrato o precontrato cuando solicita un
        presupuesto; el interés legítimo del responsable en mejorar sus servicios; y el cumplimiento de
        obligaciones legales.
      </p>
    ),
  },
  {
    number: "05",
    title: "Conservación",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        Los datos personales serán conservados durante el tiempo necesario para cumplir con la finalidad para la
        que fueron recabados y para determinar las posibles responsabilidades que se pudieran derivar de dicha
        finalidad y del tratamiento de los datos. En todo caso, se aplicarán los plazos de prescripción legal.
      </p>
    ),
  },
  {
    number: "06",
    title: "Destinatarios",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        Sus datos no serán objeto de cesión a terceros salvo obligación legal o cuando sea necesario para la
        prestación del servicio solicitado (por ejemplo, empresas de mensajería o pasarelas de pago). En su caso,
        se garantizará que los encargados del tratamiento cumplan con la normativa de protección de datos.
      </p>
    ),
  },
  {
    number: "07",
    title: "Derechos",
    content: (
      <>
        <p className="text-zinc-600 leading-relaxed">
          Usted puede ejercer los siguientes derechos ante el responsable del tratamiento:
        </p>
        <ul className="mt-4 space-y-2">
          {["Acceso: conocer si se tratan datos suyos y obtener información sobre dicho tratamiento.", "Rectificación: solicitar la corrección de datos inexactos o incompletos.", "Supresión: solicitar la eliminación de sus datos cuando ya no sean necesarios.", "Limitación: solicitar la limitación del tratamiento en los casos legalmente previstos.", "Oposición: oponerse al tratamiento de sus datos por motivos relacionados con su situación particular.", "Portabilidad: recibir sus datos en formato estructurado para transmitirlos a otro responsable."].map((item) => (
            <li key={item} className="flex items-start gap-3 text-zinc-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          Para ejercer estos derechos puede dirigirse a hola@dresscodepro.es. Asimismo, tiene derecho a presentar
          una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si considera que el
          tratamiento no se ajusta a la normativa vigente.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Cookies",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        Este sitio web puede utilizar cookies y tecnologías similares. Para más información sobre el uso de
        cookies, consulte nuestra política de cookies o el aviso de cookies que aparece en el sitio.
      </p>
    ),
  },
  {
    number: "09",
    title: "Seguridad",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        Se han adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad
        de los datos, así como para evitar su alteración, pérdida, tratamiento o acceso no autorizado.
      </p>
    ),
  },
  {
    number: "10",
    title: "Modificaciones",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        El responsable se reserva el derecho a modificar la presente política de privacidad para adaptarla a
        novedades legislativas o jurisprudenciales, así como a prácticas del sector. Se recomienda la lectura
        periódica de este documento.
      </p>
    ),
  },
];

export default function PoliticaPrivacidadPage() {
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
          <header className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4">
              Protección de datos
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-800 tracking-tight mb-4">
              Política de Privacidad
            </h1>
            <p className="text-sm text-zinc-500">
              Última actualización: marzo 2026
            </p>
          </header>

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
