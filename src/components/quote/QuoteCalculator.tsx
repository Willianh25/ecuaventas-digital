import { useMemo, useState } from "react";
import {
  Globe,
  Server,
  Mail,
  Search,
  MessageCircle,
  FileText,
  Settings,
  ShoppingCart,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Building2,
  Store,
  Code2,
} from "lucide-react";
import { COMPANY } from "../../config/company";

const projectTypes = [
  {
    id: "landing",
    name: "Landing Page",
    description: "Una página para promocionar un servicio o negocio.",
    price: 100,
    icon: Monitor,
  },
  {
    id: "corporativa",
    name: "Página Corporativa",
    description: "Sitio profesional para empresas y negocios.",
    price: 180,
    icon: Building2,
  },
  {
    id: "tienda",
    name: "Tienda Online",
    description: "Catálogo, carrito y ventas por Internet.",
    price: 350,
    icon: Store,
  },
  {
    id: "sistema",
    name: "Sistema Web",
    description: "Aplicación personalizada para procesos internos.",
    price: 700,
    icon: Code2,
  },
];

const extras = [
  {
    id: "dominio",
    name: "Dominio",
    description: "Registro del dominio por 1 año.",
    price: 15,
    icon: Globe,
  },
  {
    id: "hosting",
    name: "Hosting",
    description: "Alojamiento web rápido y seguro.",
    price: 60,
    icon: Server,
  },
  {
    id: "correos",
    name: "Correos Corporativos",
    description: "Correos con el nombre de tu empresa.",
    price: 30,
    icon: Mail,
  },
  {
    id: "seo",
    name: "SEO Básico",
    description: "Optimización inicial para Google.",
    price: 80,
    icon: Search,
  },
  {
    id: "whatsapp",
    name: "WhatsApp Integrado",
    description: "Botones directos de contacto.",
    price: 20,
    icon: MessageCircle,
  },
  {
    id: "formulario",
    name: "Formulario Avanzado",
    description: "Formulario personalizado de contacto.",
    price: 25,
    icon: FileText,
  },
  {
    id: "panel",
    name: "Panel Administrativo",
    description: "Área para administrar contenido.",
    price: 250,
    icon: Settings,
  },
  {
    id: "catalogo",
    name: "Catálogo / Productos",
    description: "Sección para productos o servicios.",
    price: 120,
    icon: ShoppingCart,
  },
  {
    id: "analitica",
    name: "Analítica",
    description: "Medición básica de visitas y resultados.",
    price: 40,
    icon: BarChart3,
  },
];

export default function QuoteCalculator() {
  const [selectedProject, setSelectedProject] = useState(projectTypes[0]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const toggleExtra = (id: string) => {
    setSelectedExtras((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const selectedExtraItems = useMemo(() => {
    return extras.filter((extra) => selectedExtras.includes(extra.id));
  }, [selectedExtras]);

  const total = useMemo(() => {
    const extrasTotal = selectedExtraItems.reduce(
      (sum, extra) => sum + extra.price,
      0
    );

    return selectedProject.price + extrasTotal;
  }, [selectedProject, selectedExtraItems]);

  const sendToWhatsApp = () => {
    const extrasText =
      selectedExtraItems.length > 0
        ? selectedExtraItems.map((extra) => `• ${extra.name}`).join("\n")
        : "Sin servicios adicionales seleccionados";

    const message = `Hola, deseo una cotización.

Tipo de proyecto:
${selectedProject.name}

Servicios adicionales:
${extrasText}

Total estimado:
$${total} USD

Quedo atento a más información.`;

    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="cotizador" className="py-24 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            Cotizador
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground">
            Calcula el costo aproximado de tu proyecto
          </h2>

          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Selecciona el tipo de proyecto y los servicios que necesitas. El
            precio es referencial y puede variar según los requerimientos.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-[1fr_1.2fr_0.9fr] gap-6">
          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold text-foreground">
              Tipo de proyecto
            </h3>

            <div className="mt-6 space-y-4">
              {projectTypes.map((project) => {
                const Icon = project.icon;
                const active = selectedProject.id === project.id;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className={`w-full text-left rounded-2xl border p-5 transition-all cursor-pointer hover:-translate-y-1 hover:shadow-lg ${
                      active
                        ? "border-primary bg-primary/10 shadow-md"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`grid place-items-center h-12 w-12 rounded-xl ${
                          active
                            ? "bg-primary text-white"
                            : "bg-slate-100 text-primary"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="font-bold">{project.name}</h4>
                          <span className="font-bold text-primary">
                            ${project.price}
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold text-foreground">
              Servicios adicionales
            </h3>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {extras.map((extra) => {
                const Icon = extra.icon;
                const active = selectedExtras.includes(extra.id);

                return (
                  <button
                    key={extra.id}
                    type="button"
                    onClick={() => toggleExtra(extra.id)}
                    className={`text-left rounded-2xl border p-5 transition-all cursor-pointer hover:-translate-y-1 hover:shadow-lg ${
                      active
                        ? "border-primary bg-primary/10 shadow-md"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`grid place-items-center h-11 w-11 rounded-xl ${
                          active
                            ? "bg-primary text-white"
                            : "bg-slate-100 text-primary"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      {active && (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      )}
                    </div>

                    <h4 className="mt-4 font-bold">{extra.name}</h4>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {extra.description}
                    </p>

                    <div className="mt-4 font-bold text-primary">
                      +${extra.price} USD
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-[color:var(--navy-deep)] text-white p-6 shadow-elegant h-fit sticky top-24">
            <h3 className="text-xl font-bold">Resumen</h3>

            <div className="mt-6 rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-white/60">Proyecto seleccionado</p>
              <p className="mt-1 font-bold">{selectedProject.name}</p>
              <p className="mt-1 text-sm text-white/60">
                Base: ${selectedProject.price} USD
              </p>
            </div>

            <div className="mt-5">
              <p className="text-sm text-white/60 mb-3">
                Servicios adicionales
              </p>

              {selectedExtraItems.length === 0 ? (
                <p className="text-sm text-white/50">
                  Aún no seleccionaste servicios adicionales.
                </p>
              ) : (
                <ul className="space-y-2">
                  {selectedExtraItems.map((extra) => (
                    <li
                      key={extra.id}
                      className="flex items-center justify-between gap-3 text-sm"
                    >
                      <span>{extra.name}</span>
                      <span className="text-[color:var(--gold)] font-semibold">
                        +${extra.price}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm text-white/60">Total estimado</p>

              <div className="mt-2 text-5xl font-extrabold text-[color:var(--gold)]">
                ${total}
              </div>

              <p className="mt-2 text-xs text-white/50">
                Valor referencial. La cotización final dependerá del alcance del
                proyecto.
              </p>
            </div>

            <button
              type="button"
              onClick={sendToWhatsApp}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full gradient-gold text-[color:var(--navy-deep)] font-bold px-6 py-4 shadow-gold cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Solicitar por WhatsApp
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}