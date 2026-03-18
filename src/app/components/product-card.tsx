import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, FileText, Award, ShieldCheck, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/language-context";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { t, language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-[var(--glass-background)] backdrop-blur-md rounded-3xl shadow-[var(--glass-shadow)] border border-[var(--glass-border)] overflow-hidden hover:border-primary/30 transition-all duration-500"
    >
      <div className="flex flex-col p-8">
        {/* Product Image */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-muted/20 flex items-center justify-center p-8 group/img">
          <img
            src={product.image}
            alt={t(product.nameKey)}
            className="w-full h-72 object-cover rounded-xl group-hover/img:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-4 right-4">
            <div className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20">
              {language === "es" ? product.categoryEs : product.categoryEn}
            </div>
          </div>

          {/* Iridescent overlay effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between py-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-3 font-heading tracking-tight italic">
                {t(product.nameKey)}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed text-lg">
                {t(product.descKey)}
              </p>
            </div>

            {/* Action Links - Refined */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://listado.mercadolibre.com.ar/pagina/minitignifugos/?item_id=MLA1127759488&category_id=MLA413242&client=recoview-selleritems&recos_listing=true"
                className="flex items-center gap-3 text-sm text-primary hover:text-primary/80 transition-all group/link"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <span className="font-semibold">{t("products.buyOnline")}</span>
              </a>
              <a
                href={product.technicalSheet}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all group/link"
              >
                <div className="p-2 rounded-lg bg-muted group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-colors">
                  <FileText className="w-4 h-4" />
                </div>
                <span>{t("products.technicalSheet")}</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all group/link"
              >
                <div className="p-2 rounded-lg bg-muted group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-colors">
                  <Award className="w-4 h-4" />
                </div>
                <span>{t("products.certificates")}</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all group/link"
              >
                <div className="p-2 rounded-lg bg-muted group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>{t("products.safetySheet")}</span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/95 group/btn py-6 text-lg rounded-xl shadow-lg shadow-primary/10"
            >
              <Link to={`/products/${product.id}`}>
                {t("products.viewDetails")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
