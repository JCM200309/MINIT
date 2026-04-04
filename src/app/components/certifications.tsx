import { motion } from "motion/react";
import { useLanguage } from "../context/language-context";

export function Certifications() {
  const { t } = useLanguage();

  const certs = [
    {
      name: t("products.certificates"),
      fullName: "International Organization for Standardization",
      image: "/certificados/logoISO.png"
    },
    {
      name: "IRAM",
      fullName: "Instituto Argentino de Normalización y Certificación",
      image: "/certificados/logoIRAM2.png"
    },
    {
      name: "ASTM",
      fullName: "American Society for Testing and Materials",
      image: "/certificados/logoASTM.png"
    },
    {
      name: t("memberships.nfa.name"),
      fullName: t("memberships.nfa.fullName"),
      image: "/certificados/LogoNFPA.jpg"
    }
  ];

  const memberships = [
    {
      name: t("memberships.cemera.name"),
      fullName: t("memberships.cemera.fullName"),
      image: "/certificados/logoCEMERA.jpg"
    },
    {
      name: t("memberships.nfa.name"),
      fullName: t("memberships.nfa.fullName"),
      image: "/certificados/LogoNFPA.jpg"
    }
  ];

  const LogoCard = ({ item, index }: { item: any, index: number }) => (
    <motion.div
      key={item.name}
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
      <div className="absolute inset-0 rounded-full bg-white/[0.03] backdrop-blur-xl border-2 border-dashed border-white/20 group-hover:border-[#f6d94b]/50 transition-all duration-500 scale-95 group-hover:scale-105" />
      <div className="absolute inset-2 rounded-full border border-white/10 group-hover:border-[#f6d94b]/20 transition-colors" />

      <div className="relative z-10">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 mb-4 mx-auto shadow-xl group-hover:scale-110 transition-all duration-500 overflow-hidden">
          <img
            src={item.image}
            alt={`${item.name} Logo`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <h3 className="text-2xl font-bold text-[#fcfaf9] mb-1 font-heading tracking-tight drop-shadow-md">
          {item.name}
        </h3>
        <p className="text-[10px] text-[#f6d94b] font-bold uppercase tracking-[0.2em] mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
          {item.desc}
        </p>
        <p className="text-[10px] text-[#fcfaf9]/40 font-medium leading-tight max-w-[120px] mx-auto uppercase">
          {item.fullName}
        </p>
      </div>

      <div className="absolute top-0 right-4 w-8 h-10 bg-[#f6d94b] clip-path-ribbon transform -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full border border-[#140c03]/20" />
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 bg-[#140c03] relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 10% 20%, #f6d94b 0%, transparent 40%)`,
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#fcfaf9] mb-4 font-heading tracking-tight italic">
            {t("certifications.title")}
          </h2>
          <p className="text-lg text-[#fcfaf9]/60 max-w-2xl mx-auto font-body">
            {t("certifications.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto mb-32">
          {certs.map((cert, index) => (
            <LogoCard key={cert.name} item={cert} index={index} />
          ))}
        </div>

        {/* Memberships Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#fcfaf9] mb-4 font-heading tracking-tight italic">
            {t("memberships.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
          {memberships.map((membership, index) => (
            <LogoCard key={membership.name} item={membership} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
