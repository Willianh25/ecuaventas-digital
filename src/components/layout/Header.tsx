import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { COMPANY } from "../../config/company";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Cotizador", href: "#cotizador" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

/* ---------------- HEADER ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className="relative grid place-items-center h-9 w-9 rounded-xl gradient-primary shadow-elegant">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className={`font-bold tracking-tight text-lg ${scrolled ? "text-foreground" : "text-white"}`}>
            Ecuaventas<span className="text-gradient-gold"> Digital</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-smooth hover:bg-foreground/5 ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 rounded-full gradient-primary text-white text-sm font-semibold px-5 py-2.5 shadow-elegant hover:opacity-95 transition-smooth"
          >
            Solicitar Cotización <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-foreground/80 hover:bg-muted"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Hola,%20quiero%20una%20cotización%20para%20una%20página%20web.`}
              target="_blank"
              rel="noopener noreferrer"
              className="..."
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;