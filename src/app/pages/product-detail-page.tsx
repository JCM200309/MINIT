import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { Button } from "../components/ui/button";
import { useLanguage } from "../context/language-context";
import { products } from "../data/products";
import { ArrowLeft, Package, CheckCircle, Award, FileText, ExternalLink } from "lucide-react";

export function ProductDetailPage() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const details = language === "en" ? product.detailsEn : product.detailsEs;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Product Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("product.backToProducts")}
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={product.image}
                alt={t(product.nameKey)}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent" />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4">
                  {product.category}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {t(product.nameKey)}
                </h1>
                <p className="text-xl text-gray-600">
                  {t(product.descKey)}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-500 hover:bg-red-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t("products.buyOnline")}
                </Button>
                <Button variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  {t("products.technicalSheet")}
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Award className="w-4 h-4 text-red-500" />
                  <span>{t("products.certificates")}</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <FileText className="w-4 h-4 text-red-500" />
                  <span>{t("products.safetySheet")}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                {t("product.about")}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {details.about}
              </p>
            </motion.div>

            {/* Uses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                {t("product.uses")}
              </h2>
              <ul className="space-y-3">
                {details.uses.map((use, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{use}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Packaging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                {t("product.packaging")}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {details.packaging.map((pkg, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-gray-200 bg-gray-50"
                  >
                    <p className="text-gray-700 text-lg">{pkg}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Chemical Presentation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("product.chemicalPresentation")}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {details.chemicalPresentation}
              </p>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                {t("product.certifications")}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {details.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border-2 border-red-200 bg-white text-center"
                  >
                    <Award className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <p className="text-gray-900 font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-500 to-red-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === "en" 
              ? "Ready to protect your materials?" 
              : "¿Listo para proteger sus materiales?"}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {language === "en"
              ? "Contact us for a personalized quote"
              : "Contáctenos para una cotización personalizada"}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-red-500 hover:bg-gray-100"
          >
            <Link to="/contact">
              {t("nav.getQuote")}
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
