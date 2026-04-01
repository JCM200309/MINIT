import { Shield, Zap, CheckCircle, Layers } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/language-context";

export function ProductOverview() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t("features.fireProtection"),
      description: t("features.fireProtection.desc"),
    },
    {
      icon: Zap,
      title: t("features.advancedTech"),
      description: t("features.advancedTech.desc"),
    },
    {
      icon: CheckCircle,
      title: t("features.reliableSafety"),
      description: t("features.reliableSafety.desc"),
    },
    {
      icon: Layers,
      title: t("features.compatibility"),
      description: t("features.compatibility.desc"),
    },
  ];

  return (
    <section id="product" className="py-24 bg-[#fcfaf9]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#140c03] mb-6 font-heading italic">
            {t("product.characteristics.title")}
          </h2>
          <p className="text-xl text-[#140c03]/70 leading-relaxed font-body">
            {t("product.characteristics.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 rounded-xl border border-[#c23b24]/10 hover:border-[#c23b24]/30 bg-white hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-[#c23b24] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <feature.icon className="w-7 h-7 text-[#fcfaf9]" />
                </div>
                <h3 className="text-xl font-bold text-[#140c03] mb-3 group-hover:text-[#c23b24] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#140c03]/70 leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
