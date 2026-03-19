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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-white/[0.05] hover:border-[#f6d94b]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-[#c23b24]/10 flex items-center justify-center text-[#c23b24] mb-6 group-hover:scale-110 group-hover:bg-[#c23b24]/20 transition-all shadow-[0_0_20px_-5px_rgba(194,59,36,0.2)]">
                {cert.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#fcfaf9] mb-2 font-heading tracking-tight">
                {cert.name}
              </h3>
              <p className="text-sm text-[#fcfaf9]/40 font-semibold mb-3 uppercase tracking-wider">
                {cert.desc}
              </p>
              <p className="text-xs text-[#fcfaf9]/30 font-body leading-tight">
                {cert.fullName}
              </p>
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
