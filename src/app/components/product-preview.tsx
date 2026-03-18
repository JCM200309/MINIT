import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { useLanguage } from "../context/language-context";
import { products } from "../data/products";
import { ArrowRight } from "lucide-react";

export function ProductPreview() {
  const { t, language } = useLanguage();

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("overview.title")}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("overview.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/products/${product.id}`}
                className="group block bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-red-200 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-red-50 to-gray-50">
                  <img
                    src={product.image}
                    alt={t(product.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="px-2 py-1 rounded-full bg-red-500 text-white text-xs font-medium">
                      {language === "es" ? product.categoryEs : product.categoryEn}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-500 transition-colors">
                    {t(product.nameKey)}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {t(product.descKey)}
                  </p>
                  <div className="flex items-center text-red-500 font-medium text-sm group-hover:gap-2 transition-all">
                    {t("products.viewDetails")}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-50"
          >
            <Link to="/products">
              {t("overview.viewAll")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
