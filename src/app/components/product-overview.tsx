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
    <section id="product" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading italic">
            {t("overview.title")}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-body">
            {t("overview.subtitle")}
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
              <div className="p-8 rounded-2xl border border-gray-200 hover:border-red-200 bg-white hover:bg-red-50/50 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-body">
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
