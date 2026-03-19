import { motion } from "motion/react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { ProductAdvantages } from "../components/product-advantages";
import { useLanguage } from "../context/language-context";
import { Flame } from "lucide-react";
import { FireIllusion } from "../components/fire-illusion";
import { MediaGallery } from "../components/media-gallery";

export function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#140c03] relative overflow-hidden border-b border-[#140c03]/10">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fcfaf9 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <FireIllusion />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#f6d94b]/10 backdrop-blur-xl border border-[#f6d94b]/20 shadow-xl shadow-[#f6d94b]/10 mb-6 group-hover:scale-110 transition-transform">
              <Flame className="w-10 h-10 text-[#f6d94b]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#fcfaf9] mb-6 font-heading tracking-tight italic">
              {language === "en" ? "About MiniT" : "Acerca de MiniT"}
            </h1>
            <p className="text-xl text-[#fcfaf9]/70 font-body">
              {language === "en"
                ? "Leading the way in fire protection technology with innovative solutions that save lives and protect property."
                : "Liderando el camino en tecnología de protección contra incendios con soluciones innovadoras que salvan vidas y protegen propiedades."}
            </p>
          </motion.div>
        </div>
      </section>

      <ProductAdvantages />
      
      <MediaGallery />

      <Footer />
    </div>
  );
}
