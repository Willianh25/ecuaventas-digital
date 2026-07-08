import { useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  FileText,
  Globe,
  Mail,
  MessageCircle,
  Monitor,
  Newspaper,
  Server,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Store,
  Wrench,
  Code2,
} from "lucide-react";
import { COMPANY } from "../../config/company";

type BillingType = "oneTime" | "annual" | "monthly";

type Option = {
  id: string;
  name: string;
  description: string;
  price: number;
  billing: BillingType;
  icon: React.ElementType;
};

const projectTypes = [
  {
    id: "basica",
    name: "Página Web Básica",
    description: "Ideal para emprendedores, profesionales y negocios pequeños.",
    price: 100,
    icon: Monitor,
  },
  {
    id: "empresarial",
    name: "Página Web Empresarial",
    description: "Para negocios que necesitan una presencia más completa.",
    price: 180,
    icon: Building2,
  },
  {
    id: "tienda",
    name: "Tienda Virtual",
    description: "Para vender productos por Internet.",
    price: 350,
    icon: Store,
  },
  {
    id: "sistema",
    name: "Sistema Empresarial",
    description: "Para automatizar procesos, ventas, inventario o gestión.",
    price: 700,
    icon: Code2,
  },
];

const options: Option[] = [
  {
    id: "dominio",
    name: "Dominio .com",
    description: "Nombre de la página por 1 año.",
    price: 15,
    billing: "annual",
    icon: Globe,
  },
  {
    id: "hosting",
    name: "Hosting SSD",
    description: "Alojamiento rápido y seguro.",
    price: 5,
    billing: "monthly",
    icon: Server,
  },
  {
    id: "correos",
    name: "Correos corporativos",
    description: "Correos con el nombre del negocio.",
    price: 2,
    billing: "monthly",
    icon: Mail,
  },
  {
    id: "mantenimiento",
    name: "Mantenimiento",
    description: "Soporte, cambios menores y revisión.",
    price: 10,
    billing: "monthly",
    icon: Wrench,
  },
  {
    id: "seo",
    name: "Posicionamiento básico",
    description: "Configuración inicial para Google.",
    price: 40,
    billing: "oneTime",
    icon: BarChart3,
  },
  {
    id: "catalogo",
    name: "Catálogo de productos",
    description: "Sección para mostrar productos o servicios.",
    price: 50,
    billing: "oneTime",
    icon: ShoppingCart,
  },
  {
    id: "blog",
    name: "Blog o noticias",
    description: "Publicaciones para novedades o artículos.",
    price: 40,
    billing: "oneTime",
    icon: Newspaper,
  },
  {
    id: "panel",
    name: "Panel administrativo",
    description: "Área para editar contenido de la página.",
    price: 180,
    billing: "oneTime",
    icon: Settings,
  },
  {
    id: "formulario",
    name: "Formulario avanzado",
    description: "Formulario personalizado para solicitudes.",
    price: 20,
    billing: "oneTime",
    icon: FileText,
  },
  {
    id: "whatsapp",
    name: "Botón de WhatsApp",
    description: "Contacto rápido desde la página.",
    price: 0,
    billing: "oneTime",
    icon: MessageCircle,
  },
];

const billingLabels: Record<BillingType, string> = {
  oneTime: "Pago único",
  annual: "Pago anual",
  monthly: "Pago mensual",
};

export default function QuoteCalculator() {
  const [selectedProject, setSelectedProject] = useState(projectTypes[0]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "whatsapp",
  ]);

  const selectedItems = useMemo(
    () => options.filter((option) => selectedOptions.includes(option.id)),
    [selectedOptions]
  );

  const oneTimeItems = selectedItems.filter((item) => item.billing === "oneTime");
  const annualItems = selectedItems.filter((item) => item.billing === "annual");
  const monthlyItems = selectedItems.filter((item) => item.billing === "monthly");

  const oneTimeTotal = selectedProject.price + oneTimeItems.reduce((sum, item) => sum + item.price, 0);
  const annualTotal = annualItems.reduce((sum, item) => sum + item.price, 0);
  const monthlyTotal = monthlyItems.reduce((sum, item) => sum + item.price, 0);

  const toggleOption = (id: string) => {
    setSelectedOptions((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const sendToWhatsApp = () => {
    const formatItems = (items: Option[]) =>
      items.length
        ? items.map((item) => `• ${item.name}: $${item.price}`).join("\n")
        : "• No seleccionado";

    const message = `Hola, quiero una cotización.

Proyecto:
${selectedProject.name}
Valor base: $${selectedProject.price}

Pago único:
${formatItems(oneTimeItems)}
Total inicial: $${oneTimeTotal}

Pago anual:
${formatItems(annualItems)}
Total anual: $${annualTotal}

Pago mensual:
${formatItems(monthlyItems)}
Total mensual: $${monthlyTotal}

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
            Elige el tipo de página y los servicios que necesitas. Verás el
            costo inicial separado de los pagos mensuales o anuales.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-[1fr_1.3fr_0.9fr] gap-6">
          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold text-foreground">
              1. Tipo de proyecto
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
                            Desde ${project.price}
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
              2. Servicios opcionales
            </h3>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {options.map((option) => {
                const Icon = option.icon;
                const active = selectedOptions.includes(option.id);

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => toggleOption(option.id)}
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

                    <h4 className="mt-4 font-bold">{option.name}</h4>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {option.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {billingLabels[option.billing]}
                      </span>

                      <span className="font-bold text-primary">
                        {option.price === 0 ? "Incluido" : `$${option.price}`}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-[color:var(--navy-deep)] text-white p-6 shadow-elegant h-fit sticky top-24">
            <h3 className="text-xl font-bold">3. Resumen</h3>

            <div className="mt-6 rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-white/60">Proyecto seleccionado</p>
              <p className="mt-1 font-bold">{selectedProject.name}</p>
              <p className="mt-1 text-sm text-white/60">
                Valor base: ${selectedProject.price}
              </p>
            </div>

            <SummaryBlock
              title="Pago inicial"
              items={[
                { name: selectedProject.name, price: selectedProject.price },
                ...oneTimeItems,
              ]}
              total={oneTimeTotal}
              suffix="USD"
            />

            <SummaryBlock
              title="Pago anual"
              items={annualItems}
              total={annualTotal}
              suffix="USD/año"
            />

            <SummaryBlock
              title="Pago mensual"
              items={monthlyItems}
              total={monthlyTotal}
              suffix="USD/mes"
            />

            <div className="mt-6 rounded-2xl bg-[color:var(--gold)]/10 border border-[color:var(--gold)]/30 p-4">
              <div className="flex items-center gap-2 text-[color:var(--gold)]">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-sm font-semibold">
                  Precios referenciales
                </span>
              </div>
              <p className="mt-2 text-xs text-white/60">
                La cotización final puede variar según funciones, contenido,
                cantidad de secciones y requerimientos del cliente.
              </p>
            </div>

            <button
              type="button"
              onClick={sendToWhatsApp}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full gradient-gold text-[color:var(--navy-deep)] font-bold px-6 py-4 shadow-gold cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Solicitar cotización
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryBlock({
  title,
  items,
  total,
  suffix,
}: {
  title: string;
  items: Array<{ name: string; price: number }>;
  total: number;
  suffix: string;
}) {
  return (
    <div className="mt-5 border-t border-white/10 pt-5">
      <p className="text-sm text-white/60 mb-3">{title}</p>

      {items.length === 0 ? (
        <p className="text-sm text-white/45">No seleccionado</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <span>{item.name}</span>
              <span className="text-[color:var(--gold)] font-semibold">
                ${item.price}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 flex items-end justify-between">
        <span className="text-sm text-white/60">Total</span>
        <span className="text-2xl font-extrabold text-[color:var(--gold)]">
          ${total} <span className="text-xs font-medium">{suffix}</span>
        </span>
      </div>
    </div>
  );
}