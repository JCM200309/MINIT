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
      className="group bg-white rounded-3xl shadow-sm border border-[#140c03]/10 overflow-hidden hover:border-[#c23b24]/40 hover:shadow-md transition-all duration-500"
    >
      <div className="flex flex-col p-8">
        {/* Product Image */}
        <div className="relative rounded-2xl overflow-hidden bg-[#140c03]/5 border border-[#140c03]/5 flex items-center justify-center p-8 group/img">
          <img
            src={product.image}
            alt={t(product.nameKey)}
            className="w-full h-72 object-cover rounded-xl group-hover/img:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-4 right-4 z-10">
            <div className="px-4 py-1.5 rounded-full bg-[#c23b24] text-white text-xs font-bold uppercase tracking-widest shadow-sm">
              {language === "es" ? product.categoryEs : product.categoryEn}
            </div>
          </div>

          {/* Simple overlay effect on hover */}
          <div className="absolute inset-0 bg-[#140c03]/5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between py-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-[#140c03] mb-3 font-heading tracking-tight italic group-hover:text-[#c23b24] transition-colors">
                {t(product.nameKey)}
              </h3>
              <p className="text-[#140c03]/70 font-body leading-relaxed text-lg">
                {t(product.descKey)}
              </p>
            </div>

            {/* Action Links - Refined */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://listado.mercadolibre.com.ar/pagina/minitignifugos/?item_id=MLA1127759488&category_id=MLA413242&client=recoview-selleritems&recos_listing=true"
                className="flex items-center gap-3 text-sm text-[#c23b24] hover:text-[#c23b24]/80 transition-all group/link font-body"
              >
                <div className="p-2 rounded-lg bg-[#c23b24]/10 group-hover/link:bg-[#c23b24] group-hover/link:text-white transition-colors border border-[#c23b24]/20 group-hover/link:border-transparent">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <span className="font-semibold">{t("products.buyOnline")}</span>
              </a>
              <a
                href={product.technicalSheet}
                className="flex items-center gap-3 text-sm text-[#140c03]/60 hover:text-[#140c03] transition-all group/link font-body"
              >
                <div className="p-2 rounded-lg bg-[#140c03]/5 group-hover/link:bg-[#140c03] group-hover/link:text-white transition-colors border border-[#140c03]/10 group-hover/link:border-transparent">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="font-medium">{t("products.technicalSheet")}</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-[#140c03]/60 hover:text-[#140c03] transition-all group/link font-body"
              >
                <div className="p-2 rounded-lg bg-[#140c03]/5 group-hover/link:bg-[#140c03] group-hover/link:text-white transition-colors border border-[#140c03]/10 group-hover/link:border-transparent">
                  <Award className="w-4 h-4" />
                </div>
                <span className="font-medium">{t("products.certificates")}</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-[#140c03]/60 hover:text-[#140c03] transition-all group/link font-body"
              >
                <div className="p-2 rounded-lg bg-[#140c03]/5 group-hover/link:bg-[#140c03] group-hover/link:text-white transition-colors border border-[#140c03]/10 group-hover/link:border-transparent">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="font-medium">{t("products.safetySheet")}</span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <Button
              asChild
              className="w-full bg-[#c23b24] hover:bg-[#c23b24]/90 text-white group/btn py-6 text-lg rounded-xl shadow-lg shadow-[#c23b24]/20 border-none relative overflow-hidden"
            >
              <Link to={`/products/${product.id}`}>
                <span className="relative z-10 font-bold tracking-wide">{t("products.viewDetails")}</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
