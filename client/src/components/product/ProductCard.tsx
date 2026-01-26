import { Link } from "wouter";
import { type Product } from "@shared/schema";
import { ArrowRight, ShieldCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 shadow-lg shadow-gray-200/50 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-60" />
        {/* Using product image from API */}
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-slate-900 border border-white/50 shadow-sm uppercase tracking-wide">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-slate-500 text-sm mb-6 line-clamp-3 flex-grow">
          {product.description}
        </p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {product.features?.slice(0, 2).map((feature, i) => (
              <div key={i} className="flex items-center text-xs text-slate-600 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                <ShieldCheck className="w-3 h-3 text-primary mr-1" />
                {feature}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <Link href={`/products/${product.id}`}>
              <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80 hover:bg-transparent group/btn">
                Ver Detalles
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <div className="flex gap-2 text-slate-400">
               <FileText className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
