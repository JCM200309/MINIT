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
                <span className="w-2 h-2 rounded-full bg-[#f6d94b] shadow-[0_0_10px_2px_rgba(246,217,75,0.8)] animate-pulse"></span>
                {t("hero.badge")}
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#fcfaf9] leading-[1.1] tracking-tight font-heading drop-shadow-lg relative z-10">
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
                  cursorClassName="text-[#c23b24] font-light shadow-sm"
                />
              </span>
            </h1>

            <p
              className="text-xl text-[#fcfaf9]/80 leading-relaxed max-w-xl font-body"
              dangerouslySetInnerHTML={{ __html: t("hero.subtitle") }}
            />

            <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-10">
              <Button
                asChild
                size="lg"
                className="bg-[#c23b24] hover:bg-[#c23b24]/90 text-white px-8 py-7 text-lg rounded-xl shadow-[0_0_30px_-5px_rgba(194,59,36,0.5)] hover:shadow-[0_0_40px_-5px_rgba(246,217,75,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f6d94b]/60 border border-[#c23b24]/50"
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
            <div className="relative ">
              <img
                src="/Logos/minitLogo3.png"
                alt="Fire Protection Technology"
                className="w-[80%] h-[80%] transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>


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