import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu, X, ArrowRight, Sparkles, Globe, Users, Clock, MessageCircle,
  Smartphone, Search, Server, ShieldCheck, Monitor, Rocket, ShoppingBag,
  Database, Code2, HardDrive, AtSign, Mail, Wrench, LifeBuoy, ArrowUpRight,
  Check, ChevronDown, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter,
  Star, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-dashboard.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function LandingPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <Benefits />
      <Services />
      <Plans />
      <Recovery />
      <Process />
      <Portfolio />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

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
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
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
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-smooth hover:bg-foreground/5 ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
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
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full gradient-primary text-white font-semibold px-5 py-3"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen gradient-hero overflow-hidden pt-24 md:pt-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[color:var(--blue)]/20 blur-3xl animate-glow" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[color:var(--sky)]/15 blur-3xl animate-glow" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/90 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] animate-pulse" />
            Agencia digital premium · Ecuador
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Transformamos negocios tradicionales en{" "}
            <span className="text-gradient-gold">empresas digitales</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
            Creamos páginas web, sistemas empresariales y soluciones digitales
            para ayudar a crecer a empresas y emprendedores.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-white font-semibold px-7 py-4 shadow-elegant hover:shadow-gold transition-smooth"
            >
              Solicitar Cotización
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </a>
            <a
              href="#portafolio"
              className="inline-flex items-center justify-center gap-2 rounded-full glass text-white font-semibold px-7 py-4 hover:bg-white/10 transition-smooth"
            >
              Ver Portafolio
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "+150", v: "Proyectos" },
              { k: "+8", v: "Años" },
              { k: "99%", v: "Satisfacción" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{s.k}</div>
                <div className="text-xs md:text-sm text-white/60 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-6 gradient-primary opacity-30 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-white/10 animate-float">
            <img
              src={heroImg}
              alt="Dashboard tecnológico premium Ecuaventas Digital"
              width={1408}
              height={1200}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl glass px-4 py-3 shadow-soft">
            <div className="grid place-items-center h-10 w-10 rounded-xl gradient-gold">
              <ShieldCheck className="h-5 w-5 text-[color:var(--navy-deep)]" />
            </div>
            <div className="text-white">
              <div className="text-xs text-white/60">Seguridad</div>
              <div className="text-sm font-semibold">SSL & Backups</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  return (
    <div className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Tecnologías</span>
        {["React", "Next.js", "Node", "PostgreSQL", "AWS", "Stripe"].map((t) => (
          <span key={t} className="font-semibold text-foreground/70">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- BENEFITS ---------------- */
function Benefits() {
  const items = [
    { icon: Globe, title: "Mayor presencia en Internet", desc: "Posicionamiento profesional que hace visible tu marca." },
    { icon: Users, title: "Más clientes", desc: "Convertimos visitas en ventas reales." },
    { icon: Clock, title: "Disponible 24/7", desc: "Tu negocio nunca deja de vender." },
    { icon: MessageCircle, title: "WhatsApp integrado", desc: "Contacto directo con un solo clic." },
    { icon: Smartphone, title: "Diseño Responsive", desc: "Perfecto en cualquier dispositivo." },
    { icon: Search, title: "SEO optimizado", desc: "Aparece primero en Google." },
    { icon: Server, title: "Hosting incluido", desc: "Servidores rápidos y confiables." },
    { icon: ShieldCheck, title: "Seguridad SSL", desc: "Datos protegidos con cifrado." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Beneficios"
          title="Todo lo que tu negocio necesita para crecer"
          subtitle="Una plataforma completa, sin complicaciones técnicas."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((b, i) => (
            <div
              key={b.title}
              className="reveal group relative rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="grid place-items-center h-12 w-12 rounded-xl gradient-primary shadow-elegant mb-5 group-hover:scale-110 transition-smooth">
                <b.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const items = [
    { icon: Monitor, title: "Diseño de Páginas Web", desc: "Sitios corporativos elegantes y de alta conversión." },
    { icon: Rocket, title: "Landing Pages", desc: "Páginas de aterrizaje que convierten visitas en clientes." },
    { icon: ShoppingBag, title: "Tiendas Online", desc: "E-commerce completo con pasarela de pago." },
    { icon: Database, title: "Sistemas ERP", desc: "Gestión empresarial a medida de tu negocio." },
    { icon: Code2, title: "Desarrollo de Software", desc: "Aplicaciones web y sistemas personalizados." },
    { icon: HardDrive, title: "Hosting", desc: "Servidores rápidos, seguros y con soporte." },
    { icon: Globe, title: "Dominios", desc: "Registra el nombre perfecto para tu marca." },
    { icon: AtSign, title: "Correos Corporativos", desc: "Correos profesionales con tu propio dominio." },
    { icon: Wrench, title: "Mantenimiento", desc: "Actualizaciones y monitoreo continuo." },
    { icon: LifeBuoy, title: "Recuperación Web", desc: "Rescatamos y restauramos sitios perdidos." },
  ];
  return (
    <section id="servicios" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Servicios"
          title="Soluciones tecnológicas de nivel internacional"
          subtitle="Diseñamos, desarrollamos y mantenemos cada pieza de tu ecosistema digital."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition-smooth" />
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-6">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <a href="#contacto" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-smooth">
                Más información <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PLANS ---------------- */
function Plans() {
  const plans = [
    { name: "Impulso", price: 100, tag: "Ideal para emprendedores", features: ["Página web de 1 sección", "Diseño responsive", "SSL incluido", "Formulario de contacto"] },
    { name: "Crecimiento", price: 180, tag: "Ideal para pequeños negocios", features: ["Hasta 5 secciones", "SEO básico", "WhatsApp integrado", "Hosting 1 año", "Soporte prioritario"], featured: true },
    { name: "Empresa", price: 350, tag: "Ideal para empresas", features: ["Sitio web corporativo", "Blog / noticias", "SEO avanzado", "Correos corporativos", "Analítica avanzada"] },
    { name: "Corporativo", price: 700, tag: "Ideal para proyectos grandes", features: ["Sistema a medida", "Panel de administración", "Integraciones API", "Hosting premium", "Soporte 24/7"] },
  ];
  return (
    <section id="planes" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Planes"
          title="Un plan para cada etapa de tu negocio"
          subtitle="Transparencia total: sin costos ocultos, sin sorpresas."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative rounded-3xl p-8 flex flex-col transition-smooth hover:-translate-y-2 ${
                p.featured
                  ? "bg-[color:var(--navy-deep)] text-white shadow-elegant border border-white/10"
                  : "bg-card border border-border shadow-soft hover:shadow-elegant"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-gold text-[color:var(--navy-deep)] text-xs font-bold px-4 py-1 shadow-gold">
                  MÁS POPULAR
                </span>
              )}
              <div className="text-xs uppercase tracking-widest opacity-70">Plan</div>
              <h3 className={`mt-1 text-2xl font-bold ${p.featured ? "text-white" : "text-foreground"}`}>{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-white/60" : "text-muted-foreground"}`}>{p.tag}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm opacity-70">Desde</span>
                <span className={`text-5xl font-extrabold ${p.featured ? "text-gradient-gold" : "text-foreground"}`}>
                  ${p.price}
                </span>
                <span className="text-sm opacity-70">USD</span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-[color:var(--gold)]" : "text-primary"}`} />
                    <span className={p.featured ? "text-white/85" : "text-foreground/85"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full font-semibold px-6 py-3 transition-smooth ${
                  p.featured
                    ? "gradient-gold text-[color:var(--navy-deep)] hover:opacity-95"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                Elegir {p.name} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RECOVERY ---------------- */
function Recovery() {
  const items = ["Recuperación de dominios", "Migración de sitios", "Hosting profesional", "Reconstrucción total", "Respaldos automáticos"];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-16 shadow-elegant">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
          <div className="grid lg:grid-cols-2 gap-10 items-center relative">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-white/90 mb-5">
                <LifeBuoy className="h-3.5 w-3.5" /> Soporte de emergencia
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                ¿Perdió su <span className="text-gradient-gold">página web?</span>
              </h2>
              <p className="mt-5 text-white/70 max-w-xl">
                Nuestro equipo puede ayudarte a recuperar dominios, migrar
                servidores y reconstruir tu sitio desde cero cuando sea posible.
              </p>
              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-2 rounded-full gradient-gold text-[color:var(--navy-deep)] font-semibold px-6 py-3 shadow-gold hover:opacity-95 transition-smooth"
              >
                Recuperar mi sitio <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {items.map((i) => (
                <li key={i} className="flex items-center gap-3 rounded-xl glass px-4 py-3 text-white/90">
                  <Check className="h-4 w-4 text-[color:var(--gold)]" />
                  <span className="text-sm font-medium">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { n: "01", title: "Reunión", desc: "Entendemos tu negocio y objetivos." },
    { n: "02", title: "Análisis", desc: "Estudiamos mercado y competencia." },
    { n: "03", title: "Diseño", desc: "Prototipos visuales de alto impacto." },
    { n: "04", title: "Desarrollo", desc: "Programación con tecnología moderna." },
    { n: "05", title: "Revisión", desc: "Pruebas de calidad y ajustes finales." },
    { n: "06", title: "Publicación", desc: "Lanzamiento en servidores premium." },
    { n: "07", title: "Soporte", desc: "Mantenimiento continuo y monitoreo." },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Proceso"
          title="Un método probado, resultados predecibles"
          subtitle="De la idea inicial al lanzamiento sin fricciones."
        />
        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`reveal relative flex md:grid md:grid-cols-2 gap-6 md:gap-16 items-center ${
                  i % 2 === 1 ? "md:[&>div:first-child]:col-start-2" : ""
                }`}
              >
                <div className={`flex-1 md:${i % 2 === 1 ? "text-left" : "text-right"} pl-12 md:pl-0`}>
                  <div className={`inline-flex flex-col ${i % 2 === 1 ? "md:items-start" : "md:items-end"}`}>
                    <span className="text-6xl font-black text-gradient-primary leading-none">{s.n}</span>
                    <h3 className="mt-2 text-xl font-bold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground max-w-xs">{s.desc}</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 grid place-items-center h-8 w-8 rounded-full gradient-primary text-white text-xs font-bold shadow-elegant ring-4 ring-background">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
function Portfolio() {
  const projects = [
    { img: p1, title: "Tienda de moda online", tag: "E-commerce" },
    { img: p2, title: "Corporativo financiero", tag: "Sitio web" },
    { img: p3, title: "Plataforma SaaS analytics", tag: "Software" },
    { img: p4, title: "Restaurante gourmet", tag: "Landing" },
    { img: p5, title: "Inmobiliaria premium", tag: "Portal" },
    { img: p6, title: "Academia online", tag: "Educación" },
  ];
  return (
    <section id="portafolio" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portafolio"
          title="Proyectos que hablan por sí solos"
          subtitle="Una selección de trabajos entregados a clientes de la región."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href="#"
              className="reveal group relative overflow-hidden rounded-3xl bg-card border border-border shadow-soft hover:shadow-elegant transition-smooth"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <div className="text-xs opacity-80">{p.tag}</div>
                    <div className="mt-1 font-semibold">{p.title}</div>
                  </div>
                  <span className="grid place-items-center h-10 w-10 rounded-full glass group-hover:gradient-gold transition-smooth">
                    <ArrowUpRight className="h-4 w-4 text-white group-hover:text-[color:var(--navy-deep)]" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    { name: "María Fernanda C.", role: "CEO, Boutique Andina", text: "Nuestro sitio triplicó las consultas en el primer mes. El equipo entendió perfectamente lo que necesitábamos." },
    { name: "Carlos Villacís", role: "Gerente, Import S.A.", text: "El sistema ERP nos permitió automatizar procesos que antes tomaban días. Un cambio total en la operación." },
    { name: "Andrea Salazar", role: "Fundadora, EcoMarket", text: "Diseño elegante, entrega puntual y un soporte que responde de verdad. Recomendados 100%." },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes"
          subtitle="Historias reales de negocios que dieron el salto digital."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="reveal relative rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant transition-smooth" style={{ transitionDelay: `${i * 60}ms` }}>
              <Quote className="h-8 w-8 text-primary/20" />
              <div className="mt-4 flex gap-0.5 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-foreground/85 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Nosotros</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Un equipo que combina <span className="text-gradient-primary">diseño, tecnología y estrategia</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            En Ecuaventas Digital creemos que toda empresa merece una presencia
            digital de nivel internacional. Trabajamos con estándares de las
            mejores agencias del mundo, adaptados a la realidad de Latinoamérica.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { k: "150+", v: "Proyectos entregados" },
              { k: "8 años", v: "De experiencia" },
              { k: "24/7", v: "Soporte técnico" },
              { k: "100%", v: "Enfoque en resultados" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border p-5 bg-card shadow-soft">
                <div className="text-2xl font-bold text-gradient-primary">{s.k}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal relative">
          <div className="absolute -inset-6 gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-border">
            <img src={heroImg} alt="Equipo Ecuaventas Digital" loading="lazy" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const qs = [
    { q: "¿Cuánto tiempo toma desarrollar mi página web?", a: "Depende del alcance, pero un sitio estándar toma entre 2 y 4 semanas. Proyectos más grandes se planifican por fases." },
    { q: "¿Puedo pagar en cuotas?", a: "Sí, ofrecemos planes de pago flexibles. Un anticipo al iniciar y saldos según los hitos del proyecto." },
    { q: "¿El hosting está incluido?", a: "Los planes Crecimiento, Empresa y Corporativo incluyen hosting el primer año. Luego se renueva anualmente." },
    { q: "¿Ofrecen soporte después del lanzamiento?", a: "Sí. Todos nuestros clientes cuentan con soporte técnico y planes de mantenimiento opcionales." },
    { q: "¿Trabajan con clientes fuera de Ecuador?", a: "Sí, atendemos clientes en toda Latinoamérica y trabajamos 100% en línea." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Resolvamos tus dudas"
          subtitle="Todo lo que quieres saber antes de trabajar con nosotros."
        />
        <div className="mt-16 space-y-3">
          {qs.map((item, i) => (
            <div key={i} className="reveal rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-foreground">{item.q}</span>
                <ChevronDown className={`h-5 w-5 text-muted-foreground transition-smooth ${open === i ? "rotate-180 text-primary" : ""}`} />
              </button>
              <div
                className={`grid transition-all duration-500 ease-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div className="reveal">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Contacto</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Hablemos de tu <span className="text-gradient-primary">próximo proyecto</span>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            Cuéntanos qué necesitas y en menos de 24 horas recibirás una
            propuesta personalizada, sin compromiso.
          </p>
          <div className="mt-10 space-y-4">
            {[
              { icon: Phone, label: "Teléfono", value: "+593 000 000 000" },
              { icon: Mail, label: "Correo", value: "hola@ecuaventasdigital.com" },
              { icon: MessageCircle, label: "WhatsApp", value: "Escríbenos ahora" },
              { icon: MapPin, label: "Ubicación", value: "Ecuador · Latinoamérica" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-semibold text-foreground">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="reveal rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nombre" placeholder="Tu nombre" />
            <Field label="Correo" type="email" placeholder="tu@empresa.com" />
            <Field label="Teléfono" placeholder="+593" />
            <Field label="Empresa" placeholder="Nombre de tu empresa" />
          </div>
          <div className="mt-5">
            <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
            <textarea
              rows={5}
              placeholder="Cuéntanos sobre tu proyecto..."
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth"
            />
          </div>
          <button
            type="submit"
            className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-white font-semibold px-6 py-4 shadow-elegant hover:shadow-gold transition-smooth"
          >
            Solicitar Cotización <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            Al enviar aceptas nuestros términos y política de privacidad.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <input
        {...rest}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-[color:var(--navy-deep)] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid place-items-center h-9 w-9 rounded-xl gradient-primary">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="font-bold text-lg">Ecuaventas <span className="text-gradient-gold">Digital</span></span>
          </div>
          <p className="mt-5 text-sm text-white/60 leading-relaxed">
            Transformamos negocios tradicionales en empresas digitales con
            soluciones tecnológicas premium.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin, Twitter].map((I, i) => (
              <a key={i} href="#" className="grid place-items-center h-10 w-10 rounded-full glass hover:gradient-gold transition-smooth group">
                <I className="h-4 w-4 text-white group-hover:text-[color:var(--navy-deep)]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Empresa</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            {["Nosotros", "Servicios", "Planes", "Portafolio", "Contacto"].map((l) => (
              <li key={l}><a href="#" className="hover:text-white transition-smooth">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Servicios</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            {["Páginas Web", "Sistemas ERP", "Hosting", "Dominios", "Correos Corporativos"].map((l) => (
              <li key={l}><a href="#" className="hover:text-white transition-smooth">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hola@ecuaventasdigital.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +593 000 000 000</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp directo</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Ecuador</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Ecuaventas Digital. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-smooth">Términos</a>
            <a href="#" className="hover:text-white transition-smooth">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- SHARED ---------------- */
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="reveal max-w-2xl mx-auto text-center">
      <span className="text-xs uppercase tracking-widest text-primary font-semibold">{eyebrow}</span>
      <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}
