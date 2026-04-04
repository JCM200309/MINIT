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
      className="group bg-white rounded-2xl shadow-sm border border-[#140c03]/10 overflow-hidden hover:border-[#c23b24]/40 hover:shadow-md transition-all duration-500 flex flex-col h-full"
    >
      <div className="flex flex-col p-6 flex-grow">
        {/* Product Image */}
        <div className="relative rounded-xl overflow-hidden bg-[#140c03]/5 border border-[#140c03]/5 flex items-center justify-center p-6 group/img">
          <img
            src={product.image}
            alt={t(product.nameKey)}
            className="w-full h-full object-contain rounded-lg group-hover/img:scale-105 transition-transform duration-700 ease-out"
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
        <div className="flex flex-col justify-between py-2 flex-grow mt-2">
          <div className="space-y-4 flex flex-col flex-grow">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-[#140c03] mb-2 font-heading tracking-tight italic group-hover:text-[#c23b24] transition-colors">
                {t(product.nameKey)}
              </h3>
              <p className="text-[#140c03]/70 font-body leading-relaxed text-base line-clamp-3">
                {t(product.descKey)}
              </p>
            </div>

            {/* Affidavit - Highly Requested */}
            <a
              href={product.affidavitSheet}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-3 mb-5 rounded-xl bg-[#f6d94b]/10 hover:bg-[#f6d94b]/20 border border-[#f6d94b]/30 hover:border-[#f6d94b]/60 transition-all group/affidavit font-body shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#f6d94b]/20 group-hover/affidavit:bg-[#f6d94b] group-hover/affidavit:text-[#140c03] text-[#140c03] transition-colors border border-[#f6d94b]/30">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#140c03] text-sm group-hover/affidavit:text-[#140c03] transition-colors">{t("products.affidavit")}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#140c03]/40 group-hover/affidavit:text-[#140c03] transition-colors mr-1" />
            </a>

            {/* Action Links - Refined */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={product.buyOnline || "https://listado.mercadolibre.com.ar/pagina/minitignifugos/?item_id=MLA1127759488&category_id=MLA413242&client=recoview-selleritems&recos_listing=true"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#c23b24] hover:text-[#c23b24]/80 transition-all group/link font-body"
              >
                <div className="p-1.5 rounded-md bg-[#c23b24]/10 group-hover/link:bg-[#c23b24] group-hover/link:text-white transition-colors border border-[#c23b24]/20 group-hover/link:border-transparent">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-xs">{t("products.buyOnline")}</span>
              </a>
              <a
                href={product.technicalSheet}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#140c03]/60 hover:text-[#140c03] transition-all group/link font-body"
              >
                <div className="p-1.5 rounded-md bg-[#140c03]/5 group-hover/link:bg-[#140c03] group-hover/link:text-white transition-colors border border-[#140c03]/10 group-hover/link:border-transparent">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-xs">{t("products.technicalSheet")}</span>
              </a>
              <a
                href={product.certificateSheet}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#140c03]/60 hover:text-[#140c03] transition-all group/link font-body"
              >
                <div className="p-1.5 rounded-md bg-[#140c03]/5 group-hover/link:bg-[#140c03] group-hover/link:text-white transition-colors border border-[#140c03]/10 group-hover/link:border-transparent">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-xs">{t("products.certificates")}</span>
              </a>
              <a
                href={product.safetySheet}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#140c03]/60 hover:text-[#140c03] transition-all group/link font-body"
              >
                <div className="p-1.5 rounded-md bg-[#140c03]/5 group-hover/link:bg-[#140c03] group-hover/link:text-white transition-colors border border-[#140c03]/10 group-hover/link:border-transparent">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-xs">{t("products.safetySheet")}</span>
              </a>
            </div>
          </div>

          <div className="mt-6">
            <Button
              asChild
              className="w-full bg-[#c23b24] hover:bg-[#c23b24]/90 text-white group/btn py-5 text-base rounded-xl shadow-lg shadow-[#c23b24]/20 border-none relative overflow-hidden"
            >
              <Link to={`/products/${product.id}`}>
                <span className="relative z-10 font-bold tracking-wide">{t("products.viewDetails")}</span>
                <ArrowRight className="ml-2 w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
