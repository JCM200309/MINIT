import { Section } from "@/components/ui/section";
import { ProductCard } from "@/components/product/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  const { data: products, isLoading } = useProducts();

  return (
    <div className="pt-20 min-h-screen">
      <Section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Nuestros Productos
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Catálogo completo de soluciones ignífugas para madera, textiles, papel y cartón. 
            Protección certificada para cada necesidad.
          </p>
        </div>
      </Section>

      <Section>
        {isLoading ? (
          <div className="flex justify-center items-center py-32">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products?.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </Section>

      <Section background="pattern" className="text-center py-24">
        <h2 className="text-2xl font-bold mb-4">¿No encuentra lo que busca?</h2>
        <p className="text-slate-600 mb-8">Desarrollamos soluciones a medida para industrias específicas.</p>
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 transition-colors"
        >
          Contactar con un asesor
        </a>
      </Section>
    </div>
  );
}
