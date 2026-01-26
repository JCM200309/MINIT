import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Construction, Factory, Home, Tent } from "lucide-react";

const applications = [
  {
    title: "Industria de la Madera",
    description: "Tratamiento de maderas para construcción, revestimientos y muebles.",
    icon: <Construction className="w-12 h-12 text-primary" />,
    // wood stacks industrial
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop"
  },
  {
    title: "Textiles y Telas",
    description: "Ignifugado de cortinas, alfombras y tapicería para espacios públicos.",
    icon: <Factory className="w-12 h-12 text-primary" />,
    // textile fabric rolls
    image: "https://images.unsplash.com/photo-1598048145780-e85d95d105b8?w=800&auto=format&fit=crop"
  },
  {
    title: "Construcción en Seco",
    description: "Protección de estructuras, aislamientos y tabiques divisorios.",
    icon: <Home className="w-12 h-12 text-primary" />,
    // drywall construction
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop"
  },
  {
    title: "Eventos y Espacios Temporales",
    description: "Seguridad para carpas, escenografías y stands de ferias.",
    icon: <Tent className="w-12 h-12 text-primary" />,
    // event tent marquee
    image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?w=800&auto=format&fit=crop"
  }
];

export default function Applications() {
  return (
    <div className="pt-20 min-h-screen">
      <Section className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Aplicaciones Industriales
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Nuestros productos están formulados para integrarse en diversos procesos productivos, garantizando seguridad sin comprometer la calidad de los materiales.
          </p>
        </div>
      </Section>

      <Section>
        <div className="space-y-24">
          {applications.map((app, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="flex-1 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  {app.icon}
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900">{app.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{app.description}</p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Cumplimiento de normas municipales
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Certificados para habilitación
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Asesoramiento técnico especializado
                  </li>
                </ul>
              </div>
              
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-primary rounded-3xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10" />
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img 
                    src={app.image} 
                    alt={app.title} 
                    className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="pattern" className="text-center py-24">
        <h2 className="text-3xl font-display font-bold mb-6">¿Tiene un proyecto específico?</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Nuestro equipo técnico puede desarrollar formulaciones especiales adaptadas a sus necesidades de producción.
        </p>
      </Section>
    </div>
  );
}
