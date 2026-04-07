import { motion } from "motion/react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { ProductAdvantages } from "../components/product-advantages";
import { useLanguage } from "../context/language-context";
import { Flame } from "lucide-react";


import { FireIllusion } from "../components/fire-illusion";
import { MediaGallery } from "../components/media-gallery";

export function AboutPage() {
  const { language, t } = useLanguage();

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
              {language === "en" ? "About MINIT" : "Acerca de MINIT"}
            </h1>
            <p className="text-xl text-[#fcfaf9]/70 font-body">
              {language === "en"
                ?
                "At MINIT Fireproof Products, we combine high-quality products with expert advice and comprehensive solutions to protect each of your projects."
                : "En MINIT Ignífugos combinamos productos de alta calidad con asesoramiento experto y soluciones integrales para proteger cada uno de tus proyectos."}
            </p>
          </motion.div>
        </div>
      </section>
      <MediaGallery />

      {/* Social Links Section */}
      <section className="pb-24 bg-[#fcfaf9] relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            {/* YouTube */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <a
                href="https://www.youtube.com/@MINITIgnifugos"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-6 no-underline"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#FF0000]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-40 h-40 bg-white rounded-[2rem] flex items-center justify-center shadow-xl border border-black/5 group-hover:scale-105 transition-all duration-500 overflow-hidden">
                    <img
                      src="/Logos/logoYOUTUBE.jpg"
                      alt="Youtube"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-[#140c03] font-heading italic tracking-tight transition-colors group-hover:text-[#c23b24]">
                    {t("about.moreVideos")}
                  </span>
                  <div className="h-1 w-0 bg-[#c23b24] mx-auto group-hover:w-20 transition-all duration-500 rounded-full mt-1" />
                </div>
              </a>
            </motion.div>

            {/* Instagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <a
                href="https://www.instagram.com/minitignifugos/?hl=es-la"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-6 no-underline"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#E1306C]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-40 h-40 bg-white rounded-[2rem] flex items-center justify-center shadow-xl border border-black/5 group-hover:scale-105 transition-all duration-500 overflow-hidden">
                    <img
                      src="/Logos/logoInstagram4.png"
                      alt="Instagram"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-[#140c03] font-heading italic tracking-tight transition-colors group-hover:text-[#c23b24]">
                    {t("about.followInstagram")}
                  </span>
                  <div className="h-1 w-0 bg-[#c23b24] mx-auto group-hover:w-20 transition-all duration-500 rounded-full mt-1" />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>


      <ProductAdvantages />

      <Footer />
    </div>
  );
}
