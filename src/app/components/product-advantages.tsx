import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { useLanguage } from "../context/language-context";

export function ProductAdvantages() {
  const { t } = useLanguage();

  const comparisons = [
    {
      feature: t("advantages.comp1"),
      minit: true,
      traditional: false,
    },
    {
      feature: t("advantages.comp2"),
      minit: true,
      traditional: false,
    },
    {
      feature: t("advantages.comp3"),
      minit: true,
      traditional: false,
    },
    {
      feature: t("advantages.comp4"),
      minit: true,
      traditional: true,
    },
    {
      feature: t("advantages.comp5"),
      minit: true,
      traditional: false,
    },
    {
      feature: t("advantages.comp6"),
      minit: true,
      traditional: false,
    },
  ];

  const advantages = [
    {
      title: t("advantages.card1.title"),
      description: t("advantages.card1.desc"),
    },
    {
      title: t("advantages.card2.title"),
      description: t("advantages.card2.desc"),
    },
    {
      title: t("advantages.card3.title"),
      description: t("advantages.card3.desc"),
    },
    {
      title: t("advantages.card4.title"),
      description: t("advantages.card4.desc"),
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#fcfaf9] border-t border-[#140c03]/10 relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #140c03 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#140c03] mb-6 font-heading tracking-tight italic">
            {t("advantages.title")}
          </h2>
          <p className="text-xl text-[#140c03]/70 font-body">
            {t("advantages.subtitle")}
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[#140c03]/10">
            <div className="grid grid-cols-3 gap-4 p-6 bg-[#140c03] border-b border-[#140c03]/10">
              <div className="text-[#fcfaf9] font-bold text-lg font-heading tracking-wider uppercase">{t("advantages.feature")}</div>
              <div className="text-[#c23b24] font-bold text-lg text-center font-heading tracking-wider uppercase">{t("advantages.minit")}</div>
              <div className="text-[#fcfaf9]/70 font-bold text-lg text-center font-heading tracking-wider uppercase">{t("advantages.traditional")}</div>
            </div>
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 p-6 items-center ${index % 2 === 0 ? "bg-white" : "bg-[#140c03]/[0.02]"
                  }`}
              >
                <div className="text-[#140c03] font-semibold text-sm md:text-base font-body">{item.feature}</div>
                <div className="flex justify-center">
                  {item.minit ? (
                    <div className="w-8 h-8 rounded-full bg-[#140c03]/5 flex items-center justify-center border border-[#140c03]/10">
                      <Check className="w-5 h-5 text-[#c23b24]" strokeWidth={3} />
                    </div>
                  ) : (
                    <X className="w-5 h-5 text-[#140c03]/20" />
                  )}
                </div>
                <div className="flex justify-center">
                  {item.traditional ? (
                    <div className="w-8 h-8 rounded-full bg-[#140c03]/5 flex items-center justify-center border border-[#140c03]/10">
                      <Check className="w-5 h-5 text-[#140c03]/50" strokeWidth={3} />
                    </div>
                  ) : (
                    <X className="w-5 h-5 text-[#140c03]/20" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Advantages */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto pt-8 border-t border-[#140c03]/10">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#140c03]/10 shadow-sm flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#c23b24]/5 group-hover:bg-[#c23b24]/10 transition-colors" />
                  <Check className="w-7 h-7 text-[#c23b24] relative z-10" strokeWidth={2.5} />
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-bold text-[#140c03] mb-2 font-heading tracking-tight">
                  {advantage.title}
                </h3>
                <p className="text-[#140c03]/70 leading-relaxed font-body">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
