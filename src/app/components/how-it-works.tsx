import { motion } from "motion/react";
import { Droplet, AtomIcon, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/language-context";

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Droplet,
      title: t("howItWorks.step1"),
      description: t("howItWorks.step1.desc"),
      step: "01",
    },
    {
      icon: AtomIcon,
      title: t("howItWorks.step2"),
      description: t("howItWorks.step2.desc"),
      step: "02",
    },
    {
      icon: ShieldCheck,
      title: t("howItWorks.step3"),
      description: t("howItWorks.step3.desc"),
      step: "03",
    },
  ];

  return (
    <section id="technology" className="py-24 bg-[#140c03] relative border-y border-white/5">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fcfaf9 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#fcfaf9] mb-6 font-heading italic">
            {t("howItWorks.title")}
          </h2>
          <p className="text-xl text-[#fcfaf9]/70 font-body">
            {t("howItWorks.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-[1px] bg-gradient-to-r from-[#140c03] via-white/10 to-[#140c03]" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#140c03] border border-white/20 flex items-center justify-center text-white text-xl font-bold font-heading italic shadow-[0_0_15px_-3px_rgba(255,255,255,0.05)]">
                {step.step}
              </div>

              {/* Icon Circle */}
              <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-[#140c03] border border-white/10 flex items-center justify-center group-hover:border-[#c23b24]/50 transition-colors shadow-lg shadow-black/50">
                <step.icon className="w-10 h-10 text-white/60 group-hover:text-[#c23b24] transition-colors" />
              </div>

              <h3 className="text-2xl font-semibold text-[#fcfaf9] mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-[#fcfaf9]/60 text-center leading-relaxed font-body">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Diagram 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581093449818-2655b2467fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwc2NpZW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczNjk5MDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Laboratory Technology"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-transparent" />
            <div className="absolute inset-0 flex items-center px-12">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 max-w-md">
                <h4 className="text-2xl font-bold text-gray-900 mb-3 font-heading">
                  {t("howItWorks.scienceBacked")}
                </h4>
                <p className="text-gray-700 font-body">
                  {t("howItWorks.scienceBacked.desc")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>*/}
      </div>
    </section>
  );
}
