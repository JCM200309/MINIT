import { motion } from "motion/react";
import { Award, ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/language-context";

export function Certifications() {
  const { t, language } = useLanguage();

  const certs = [
    {
      name: "INTI",
      fullName: "Instituto Nacional de Tecnología Industrial",
      desc: language === "en" ? "National Institute of Industrial Technology" : "Instituto Nacional de Tecnología Industrial",
      icon: <Award className="w-8 h-8" />
    },
    {
      name: "IRAM",
      fullName: "Instituto Argentino de Normalización y Certificación",
      desc: "Normas 11910-3",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      name: "NFPA",
      fullName: "National Fire Protection Association",
      desc: "Standard 701",
      icon: <FileCheck className="w-8 h-8" />
    },
    {
      name: "ASTM",
      fullName: "American Society for Testing and Materials",
      desc: "E 162:1994",
      icon: <CheckCircle2 className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 bg-[#140c03] relative overflow-hidden border-y border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 10% 20%, #f6d94b 0%, transparent 40%)`,
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#fcfaf9] mb-4 font-heading tracking-tight italic">
            {language === "en" ? "Our Certifications" : "Nuestras Certificaciones"}
          </h2>
          <p className="text-lg text-[#fcfaf9]/60 max-w-2xl mx-auto font-body">
            {language === "en" 
              ? "All our products are rigorously tested and certified by leading national and international organizations."
              : "Todos nuestros productos son rigurosamente probados y certificados por organismos líderes nacionales e internacionales."}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1 
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative aspect-square flex flex-col items-center justify-center p-8 text-center group"
            >
              {/* Seal Background */}
              <div className="absolute inset-0 rounded-full bg-white/[0.03] backdrop-blur-xl border-2 border-dashed border-white/20 group-hover:border-[#f6d94b]/50 transition-all duration-500 scale-95 group-hover:scale-105" />
              <div className="absolute inset-2 rounded-full border border-white/10 group-hover:border-[#f6d94b]/20 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#c23b24]/20 flex items-center justify-center text-[#c23b24] mb-4 mx-auto group-hover:bg-[#f6d94b]/20 group-hover:text-[#f6d94b] transition-all shadow-[0_0_30px_-5px_rgba(194,59,36,0.3)]">
                  {cert.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#fcfaf9] mb-1 font-heading tracking-tight drop-shadow-md">
                  {cert.name}
                </h3>
                <p className="text-[10px] text-[#f6d94b] font-bold uppercase tracking-[0.2em] mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  {cert.desc}
                </p>
                <p className="text-[10px] text-[#fcfaf9]/40 font-medium leading-tight max-w-[120px] mx-auto uppercase">
                  {cert.fullName}
                </p>
              </div>

              {/* Verified Badge/Tag */}
              <div className="absolute top-0 right-4 w-8 h-10 bg-[#f6d94b] clip-path-ribbon transform -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                 <div className="w-4 h-4 rounded-full border border-[#140c03]/20" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
        >
          {/* Subtexts or logos could go here */}
        </motion.div>
      </div>
    </section>
  );
}
