import Link from "next/link";
import { Navbar } from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Dresscode Pro",
  description: "Términos y condiciones de uso de los servicios de Dresscode Pro.",
};

const sections = [
  {
    number: "01",
    title: "Aceptación de los términos",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        El acceso y uso de los servicios ofrecidos por [NOMBRE O RAZÓN SOCIAL DE LA EMPRESA] (en adelante, la
        «Empresa») a través del presente sitio web implican la aceptación plena y sin reservas de los presentes
        Términos y Condiciones. Si no está de acuerdo con alguno de ellos, le rogamos que no utilice nuestros
        servicios.
      </p>
    ),
  },
  {
    number: "02",
    title: "Objeto",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        La Empresa se dedica a la venta y distribución de vestuario corporativo, uniformes y prendas de trabajo
        para empresas de diversos sectores. Los presentes Términos y Condiciones regulan la relación entre la
        Empresa y los clientes que contratan sus servicios, ya sea mediante solicitud de presupuesto, pedidos
        online o cualquier otra forma de contratación.
      </p>
    ),
  },
  {
    number: "03",
    title: "Condiciones de contratación",
    content: (
      <>
        <p className="text-zinc-600 leading-relaxed">
          La contratación de productos o servicios se realizará conforme a las siguientes condiciones:
        </p>
        <ul className="mt-4 space-y-2">
          {["Las ofertas y presupuestos tendrán validez durante el plazo indicado en los mismos y estarán sujetos a disponibilidad.", "Los precios indicados incluyen IVA a menos que se indique lo contrario, y no incluyen costes de envío salvo especificación expresa.", "La confirmación del pedido por parte del cliente implicará la aceptación de las condiciones económicas y de entrega ofertadas."].map((item) => (
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
    title: "Precios y formas de pago",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        Los precios se expresarán en euros (€) y podrán ser modificados sin previo aviso, si bien los pedidos
        ya confirmados mantendrán el precio acordado. Las formas de pago aceptadas serán las indicadas en cada
        presupuesto o en el proceso de contratación (transferencia bancaria, domiciliación, tarjeta de crédito,
        etc.). El pago deberá realizarse en los plazos establecidos.
      </p>
    ),
  },
  {
    number: "05",
    title: "Plazos de entrega",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        Los plazos de entrega serán orientativos y se indicarán en la confirmación del pedido. La Empresa hará
        todo lo posible por cumplirlos, pero no se hará responsable de retrasos debidos a causas ajenas a su
        control (suministradores, transportistas, fuerza mayor, etc.). Los plazos comenzarán a computarse desde
        la confirmación del pedido y el pago o conformidad del presupuesto, según corresponda.
      </p>
    ),
  },
  {
    number: "06",
    title: "Devoluciones y garantías",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        En los productos de vestuario corporativo se aplicará lo siguiente: los productos fabricados a medida o
        personalizados no serán objeto de devolución salvo defecto de fabricación. Los productos de stock podrán
        devolverse conforme a la política de devoluciones que se indique en cada caso. Cualquier defecto de
        fabricación deberá comunicarse en el plazo máximo de 7 días desde la recepción del pedido, adjuntando
        fotografías si procede. La Empresa se compromete a la sustitución o reparación de los artículos
        defectuosos.
      </p>
    ),
  },
  {
    number: "07",
    title: "Propiedad intelectual",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        Todos los diseños, patrones, logotipos y elementos creativos desarrollados por la Empresa o por encargo
        del cliente serán propiedad de quien corresponda según el acuerdo entre las partes. El cliente se
        compromete a no reproducir, distribuir ni utilizar con fines ajenos al contrato los materiales
        suministrados sin autorización expresa.
      </p>
    ),
  },
  {
    number: "08",
    title: "Limitación de responsabilidad",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        La Empresa no será responsable de daños indirectos, incidentales o consecuentes derivados del uso de sus
        productos o servicios. La responsabilidad se limitará al importe del pedido o servicio en cuestión, salvo
        en casos de dolo o negligencia grave. Tampoco se hará responsable de las interpretaciones o usos que el
        cliente haga de los productos adquiridos.
      </p>
    ),
  },
  {
    number: "09",
    title: "Resolución y cancelación",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        Cualquiera de las partes podrá dar por terminado el contrato en caso de incumplimiento grave de la otra.
        La cancelación de pedidos por parte del cliente podrá implicar gastos de preparación o fabricación
        iniciada, que serán comunicados con antelación cuando proceda.
      </p>
    ),
  },
  {
    number: "10",
    title: "Legislación y jurisdicción",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        Los presentes Términos y Condiciones se rigen por la legislación española. Para la resolución de
        cualquier controversia, las partes se someten a los Juzgados y Tribunales del domicilio del consumidor o, en su defecto, de Madrid, con renuncia expresa a cualquier otro fuero que pudiera corresponder.
      </p>
    ),
  },
  {
    number: "11",
    title: "Modificaciones",
    content: (
      <p className="text-zinc-600 leading-relaxed">
        La Empresa se reserva el derecho a modificar los presentes Términos y Condiciones en cualquier momento.
        Las modificaciones entrarán en vigor desde su publicación en el sitio web. Los contratos ya formalizados
        se regirán por las condiciones vigentes en el momento de su celebración, salvo que las partes acuerden
        expresamente la aplicación de las nuevas condiciones.
      </p>
    ),
  },
];

export default function TerminosCondicionesPage() {
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
              Condiciones de uso
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-800 tracking-tight mb-4">
              Términos y Condiciones
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
