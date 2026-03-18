import { Button } from "./ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/language-context";
import { Link } from "react-router";
import TextType from "./textType";

export function HeroSection() {
  const { t } = useLanguage();
  const highlights = (t("hero.titleHighlight") as unknown) as string[];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#140c03]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fcfaf9 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#140c03] border border-white/10 text-white text-sm font-semibold tracking-wide backdrop-blur-sm shadow-xl">
                <span className="w-2 h-2 rounded-full bg-[#c23b24] animate-pulse"></span>
                {t("hero.badge")}
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#fcfaf9] leading-[1.1] tracking-tight font-heading drop-shadow-lg">
              {t("hero.title")}
              <br />
              <span className="text-[#c23b24] italic">
                <TextType
                  text={highlights}
                  typingSpeed={70}
                  deletingSpeed={40}
                  pauseDuration={2500}
                  showCursor={true}
                  cursorCharacter="_"
                  cursorClassName="text-[#c23b24]/40"
                />
              </span>
            </h1>

            <p className="text-xl text-[#fcfaf9]/80 leading-relaxed max-w-xl font-body">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-[#c23b24] hover:bg-[#c23b24]/90 text-white px-8 py-7 text-lg rounded-xl shadow-[0_0_30px_-5px_rgba(194,59,36,0.4)] transition-transform duration-300 hover:-translate-y-1 border border-[#c23b24]/50"
              >
                <Link to="/contact">
                  {t("hero.requestQuote")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                onClick={() => scrollToSection("products")}
                size="lg"
                variant="outline"
                className="px-8 py-7 text-lg border border-white/20 bg-white/5 backdrop-blur-md rounded-xl hover:bg-white/10 text-white shadow-sm transition-all"
              >
                {t("hero.learnMore")}
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
              <img
                src="https://images.unsplash.com/photo-1666285571949-3ee1a4946059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmaXJlJTIwcHJvdGVjdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczNjk5MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fire Protection Technology"
                className="w-full h-auto grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140c03]/80 via-[#140c03]/20 to-transparent mix-blend-multiply" />

              {/* Glass Overlay for Image */}
              <div className="absolute inset-0 border border-black/20 rounded-3xl pointer-events-none" />
            </div>

            {/* Floating Stats - Dark Premium Glass Base */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 left-0 right-0 lg:-left-20 lg:right-auto bg-[#140c03]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_40px_-10px_rgba(20,12,3,0.5)] p-6 lg:p-8 grid grid-cols-3 gap-4 lg:gap-8 min-w-full lg:min-w-[400px] z-20"
            >
              <div className="text-center group/stat hover:-translate-y-1 transition-transform cursor-default">
                <div className="text-2xl lg:text-3xl font-bold text-[#c23b24] font-heading italic group-hover:text-[#c23b24]/90 transition-colors">99.9%</div>
                <div className="text-[10px] lg:text-xs uppercase tracking-widest text-white/50 font-semibold mt-2">{t("hero.stat1")}</div>
              </div>
              <div className="text-center border-x border-white/10 px-2 lg:px-4 group/stat hover:-translate-y-1 transition-transform cursor-default">
                <div className="text-2xl lg:text-3xl font-bold text-[#c23b24] font-heading italic group-hover:text-[#c23b24]/90 transition-colors">24h</div>
                <div className="text-[10px] lg:text-xs uppercase tracking-widest text-white/50 font-semibold mt-2">{t("hero.stat2")}</div>
              </div>
              <div className="text-center group/stat hover:-translate-y-1 transition-transform cursor-default">
                <div className="text-2xl lg:text-3xl font-bold text-[#c23b24] font-heading italic group-hover:text-[#c23b24]/90 transition-colors">100+</div>
                <div className="text-[10px] lg:text-xs uppercase tracking-widest text-white/50 font-semibold mt-2">{t("hero.stat3")}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => scrollToSection("products")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#140c03]/50 hover:text-[#c23b24] transition-colors"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </section>
  );
}