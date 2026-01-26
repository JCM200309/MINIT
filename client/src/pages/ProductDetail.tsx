import { useRoute, useLocation } from "wouter";
import { useProduct } from "@/hooks/use-products";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft, Check, Download, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:id");
  const [, setLocation] = useLocation();
  const id = match ? parseInt(params.id) : 0;
  
  const { data: product, isLoading, isError } = useProduct(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 gap-4">
        <h2 className="text-2xl font-bold">Producto no encontrado</h2>
        <Button onClick={() => setLocation("/products")}>Volver al catálogo</Button>
      </div>
    );
  }

  const specs = product.specifications as Record<string, string>;

  return (
    <div className="min-h-screen pt-20 pb-20 bg-slate-50">
      <Section container={true}>
        <Button 
          variant="ghost" 
          onClick={() => setLocation("/products")}
          className="mb-8 pl-0 hover:pl-2 transition-all text-slate-500 hover:text-primary hover:bg-transparent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Productos
        </Button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            {/* Image Side */}
            <div className="relative bg-gray-100 h-96 md:h-auto min-h-[500px]">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
               <img 
                 src={product.imageUrl} 
                 alt={product.name} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-8 left-8 right-8 z-20">
                 <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded mb-3">
                   {product.category}
                 </span>
                 <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                   {product.name}
                 </h1>
               </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col">
              <div className="prose prose-slate max-w-none mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Descripción</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {product.features && product.features.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    Características Clave
                  </h3>
                  <div className="grid gap-3">
                    {product.features.map((feature, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
                      >
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {specs && Object.keys(specs).length > 0 && (
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Especificaciones Técnicas</h3>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full text-sm text-left">
                      <tbody>
                        {Object.entries(specs).map(([key, value], idx) => (
                          <tr key={key} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-6 py-3 font-medium text-slate-900 border-b border-gray-100">{key}</td>
                            <td className="px-6 py-3 text-slate-600 border-b border-gray-100">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 h-12 text-base shadow-lg shadow-primary/20">
                  Solicitar Presupuesto
                </Button>
                <Button variant="outline" className="flex-1 h-12 text-base border-slate-200 text-slate-700 hover:bg-slate-50">
                  <Download className="mr-2 h-4 w-4" />
                  Ficha Técnica (PDF)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
