import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Columna 1: DRESSCODE */}
          <div className="lg:pr-8">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logodresscode.png"
                alt="Dresscode - Uniformes Contemporáneos"
                width={180}
                height={48}
                className="h-10 w-auto object-contain object-left opacity-95"
              />
            </Link>
            <p className="text-[13px] leading-relaxed text-white/50 font-light">
              Dresscode es un estudio con sede en Barcelona especializado en el diseño y producción de uniformes premium para hostelería, wellness y marcas de servicio.
            </p>
          </div>

          {/* Columna 2: SECTORES */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6">
              SECTORES
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Uniformes para Restauración", href: "/sectores/restauracion" },
                { label: "Uniformes para Hoteles", href: "/sectores/hoteles" },
                { label: "Uniformes Spa & Wellness", href: "/sectores/wellness" },
                { label: "Uniformes para Golf", href: "/sectores/golf" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] font-light hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: EMPRESA */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6">
              EMPRESA
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Sobre Dresscode", href: "/sobre-nosotros" },
                { label: "Nuestro Proceso", href: "/soluciones" },
                { label: "Proyectos", href: "/proyectos" },
                { label: "Contacto", href: "/contacto" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] font-light hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: CONTACTO */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6">
              CONTACTO
            </h3>
            <address className="not-italic space-y-4">
              <p className="text-[13px] font-light">
                Barcelona - España
              </p>
              <a href="mailto:hola@dresscodepro.es" className="block text-[13px] font-light hover:text-accent transition-colors">
                hola@dresscodepro.es
              </a>
              <a href="tel:+34655737973" className="block text-[13px] font-light hover:text-accent transition-colors">
                +34 655 737 973
              </a>
            </address>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/30 font-light">
            ©2026 Dresscode. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center sm:justify-end">
            <Link href="/aviso-legal" className="text-[11px] text-white/30 font-light hover:text-accent transition-colors">
              Aviso Legal
            </Link>
            <Link href="/politica-de-privacidad" className="text-[11px] text-white/30 font-light hover:text-accent transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="text-[11px] text-white/30 font-light hover:text-accent transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
