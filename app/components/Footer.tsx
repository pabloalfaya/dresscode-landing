import Link from "next/link";

const sectorLinks = [
  { label: "Beach Clubs", href: "/sectores/beach-clubs" },
  { label: "Restauración", href: "/sectores/restauracion" },
  { label: "Hoteles", href: "/sectores/hoteles" },
  { label: "Golf", href: "/sectores/golf" },
  { label: "Wellness", href: "/sectores/wellness" },
  { label: "Clínicas", href: "/sectores/clinicas" },
  { label: "Franquicias", href: "/sectores/franquicias" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="h-px w-full bg-white" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Columna 1: DRESSCODE PRO */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-zinc-100">DRESSCODE</span>
              <span className="text-accent"> PRO</span>
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
              Vestuario corporativo premium para sectores exigentes. Servicio inmediato, colecciones exclusivas y gestión integral.
            </p>
          </div>

          {/* Columna 2: SECTORES */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-6">
              Sectores
            </h3>
            <ul className="space-y-3">
              {sectorLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: CONTACTO */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-6">
              Contacto
            </h3>
            <address className="not-italic space-y-3">
              <a href="mailto:info@dresscodepro.com" className="block text-sm text-zinc-400 hover:text-accent transition-colors">
                info@dresscodepro.com
              </a>
              <a href="tel:+34900000000" className="block text-sm text-zinc-400 hover:text-accent transition-colors">
                +34 900 000 000
              </a>
              <p className="text-sm text-zinc-400">
                Madrid, España
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            ©2026 DresscodePro. Todos los derechos reservados
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-end">
            <Link href="/aviso-legal" className="text-xs text-zinc-500 hover:text-accent transition-colors">
              Aviso Legal
            </Link>
            <Link href="/politica-de-privacidad" className="text-xs text-zinc-500 hover:text-accent transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="text-xs text-zinc-500 hover:text-accent transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
