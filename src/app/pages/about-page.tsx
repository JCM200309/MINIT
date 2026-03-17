import { motion } from "motion/react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { HowItWorks } from "../components/how-it-works";
import { ProductAdvantages } from "../components/product-advantages";
import { Certifications } from "../components/certifications";
import { useLanguage } from "../context/language-context";
import { Flame } from "lucide-react";

export function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(239 68 68) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 mb-6">
              <Flame className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {language === "en" ? "About MiniT" : "Acerca de MiniT"}
            </h1>
            <p className="text-xl text-gray-600">
              {language === "en"
                ? "Leading the way in fire protection technology with innovative solutions that save lives and protect property."
                : "Liderando el camino en tecnología de protección contra incendios con soluciones innovadoras que salvan vidas y protegen propiedades."}
            </p>
          </motion.div>
        </div>
      </section>

      <HowItWorks />
      <ProductAdvantages />
      <Certifications />
      
      <Footer />
    </div>
  );
}
