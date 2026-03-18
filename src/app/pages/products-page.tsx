import { motion } from "motion/react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { ProductCard } from "../components/product-card";
import { products } from "../data/products";
import { useLanguage } from "../context/language-context";
import { Flame } from "lucide-react";

export function ProductsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-background relative overflow-hidden">
        {/* Fire Pattern Background - Industrial Version */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-[var(--glass-background)] backdrop-blur-xl border border-[var(--glass-border)] shadow-[var(--glass-shadow)] mb-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <Flame className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 font-heading tracking-tight italic">
              {t("products.title")}
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
              {t("products.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
