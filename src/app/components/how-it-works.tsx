import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Droplet, AtomIcon, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/language-context";
import { Link } from "react-router";
import { en } from "../i18n/en";

export function HowItWorks() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  const steps = [
    {
      icon: Droplet,
      title: t("howItWorks.step1"),
      description: t("howItWorks.step1.desc"),
      step: "01",
      color: "#c23b24",
    },
    {
      icon: AtomIcon,
      title: t("howItWorks.step2"),
      description: t("howItWorks.step2.desc"),
      step: "02",
      color: "#f6d94b",
    },
    {
      icon: ShieldCheck,
      title: t("howItWorks.step3"),
      description: t("howItWorks.step3.desc"),
      step: "03",
      color: "#c23b24",
    },
  ];


  return (

    <section
      ref={containerRef}
      id="technology"
      className="bg-[#140c03] relative border-y border-white/5"
    >
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fcfaf9 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      {/* Progress Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#c23b24] -translate-x-1/2 hidden md:block origin-top"
        style={{ scaleY: scrollProgress }}
      />

      <div className="container mx-auto px-6 relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#fcfaf9] mb-6 font-heading italic">
            {t("howItWorks.title")}
          </h2>
          <p className="text-xl text-[#fcfaf9]/70 font-body">
            {t("howItWorks.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-32 md:space-y-48 pb-16">
          {steps.map((step, index) => (
            <StepItem
              key={index}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }: { step: any, index: number }) {
  const { t } = useLanguage();
  const isEven = index % 2 === 0;
  const phase = t("howItWorks.stepLabel");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, type: "spring" }}
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
    >
      {/* Step Visual/Icon */}
      <div className="flex-1 flex justify-center">
        <div className="relative group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-40 h-40 md:w-52 md:h-52 rounded-3xl bg-[#140c03] border border-white/10 flex items-center justify-center p-10 relative overflow-hidden shadow-2xl shadow-black/80 ring-1 ring-white/5"
          >
            {/* Background Glow */}
            <div
              className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity blur-2xl"
              style={{ backgroundColor: step.color }}
            />
            <step.icon
              className="w-full h-full text-white/80 group-hover:scale-110 transition-transform duration-500"
              strokeWidth={1.5}
            />
          </motion.div>

          {/* Outer Step Number */}
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-[#c23b24] text-white flex items-center justify-center text-xl font-bold font-heading italic shadow-xl z-20">
            {step.step}
          </div>
        </div>
      </div>

      {/* Connection Indicator (Mobile/Center) */}
      <div className="md:w-1 flex-shrink-0 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-[#140c03] border-2 border-[#c23b24] z-10 shadow-[0_0_10px_rgba(194,59,36,0.5)]" />
      </div>

      {/* Step Content */}
      <div className={`flex-1 text-center ${isEven ? "md:text-left" : "md:text-right"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-[#c23b24] font-bold tracking-widest uppercase text-xs mb-3 block">
            {phase} {step.step}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#fcfaf9] mb-4 font-heading tracking-tight italic">
            {step.title}
          </h3>
          <p className={`text-[#fcfaf9]/60 text-lg leading-relaxed font-body max-w-md mx-auto ${isEven ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
            }`}>
            {step.description}
          </p>

          {index === 0 && (
            <div className={`mt-6 flex ${isEven ? "justify-start" : "justify-end"}`}>
              <Link
                to="/about?video=6"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c23b24] text-white font-bold text-sm hover:bg-[#c23b24]/90 transition-all shadow-lg shadow-[#c23b24]/20 group/btn"
              >
                {t("howItWorks.applicationGuide")}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
