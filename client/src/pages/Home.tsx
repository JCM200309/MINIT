import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/product/ProductCard";
import { Link } from "wouter";
import { Shield, Droplets, Zap, ChevronRight, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { data: products, isLoading } = useProducts();

  // Show first 3 products
  const featuredProducts = products?.slice(0, 3) || [];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* About Section */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="uppercase tracking-widest text-primary font-bold text-sm mb-2">Sobre Nosotros</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Expertos en Seguridad Ignífuga
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              En MINIT Ignífugos desarrollamos y ofrecemos productos ignífugos certificados de la más alta calidad.
              Nuestra misión es proteger vidas y bienes materiales a través de soluciones químicas avanzadas que retardan la propagación del fuego.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Trabajamos con industrias textiles, madereras y de la construcción para asegurar que sus materiales cumplan con las normativas de seguridad más exigentes.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Más sobre nosotros
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <div className="space-y-4 translate-y-8">
               {/* worker in lab coat testing materials */}
               <img src="https://pixabay.com/get/g3e9c1e7fce2711f0db10bd2805b81197cde747a649019b6575e5768be9c5bcb9b337fd062cb10fe8fd50bc7a30510b17bfe0a4aab7e7d7f2b5ef4dbd71b8d024_1280.jpg" alt="Laboratorio" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
               <div className="bg-slate-900 p-6 rounded-2xl text-white">
                 <h3 className="font-bold text-3xl text-primary mb-1">15+</h3>
                 <p className="text-sm text-slate-300">Años de Experiencia</p>
               </div>
             </div>
             <div className="space-y-4">
               <div className="bg-gray-100 p-6 rounded-2xl">
                 <Shield className="w-10 h-10 text-primary mb-4" />
                 <h4 className="font-bold text-slate-900">Certificados</h4>
                 <p className="text-xs text-slate-500 mt-2">Cumplimos normas internacionales</p>
               </div>
               {/* industrial wood processing */}
               <img src="https://images.unsplash.com/photo-1610569244414-5e7453a447a8?w=500&auto=format&fit=crop" alt="Industria" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
             </div>
          </motion.div>
        </div>
      </Section>

      {/* Featured Products */}
      <Section background="gray">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Productos Destacados</h2>
          <p className="text-slate-600">
            Nuestra línea de retardantes de fuego está diseñada para ofrecer la máxima protección en diversos materiales.
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-white rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/products">
            <Button size="lg" className="px-8">
              Ver Catálogo Completo
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Education / Benefits */}
      <Section background="white">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Seguridad Garantizada",
              desc: "Nuestros productos reducen drásticamente la inflamabilidad de los materiales tratados."
            },
            {
              icon: <Droplets className="w-8 h-8" />,
              title: "Fácil Aplicación",
              desc: "Formulaciones diseñadas para ser aplicadas por aspersión, inmersión o pincelado."
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Acción Inmediata",
              desc: "Crean una barrera protectora que se activa al contacto con altas temperaturas."
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-2xl hover:border-primary/20 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications Banner */}
      <Section className="bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 flex items-center gap-3">
              <Award className="text-primary w-8 h-8" />
              Certificados de Calidad
            </h2>
            <p className="text-slate-400">Garantía de seguridad avalada por organismos nacionales.</p>
          </div>
          <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text badges instead of images for simplicity, but simulating logos */}
            <div className="border-2 border-white/20 px-6 py-3 text-2xl font-bold rounded">IRAM</div>
            <div className="border-2 border-white/20 px-6 py-3 text-2xl font-bold rounded">INTI</div>
            <div className="border-2 border-white/20 px-6 py-3 text-2xl font-bold rounded">ISO</div>
          </div>
        </div>
      </Section>
    </div>
  );
}
