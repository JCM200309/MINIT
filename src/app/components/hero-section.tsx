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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Fire Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1637039749968-3924dae001bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZmxhbWUlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MzY5OTgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Fire Protection"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(239 68 68) 1px, transparent 0)`,
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
              <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                {t("hero.badge")}
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] tracking-tight font-heading">
              {t("hero.title")}
              <br />
              <span className="text-primary italic">
                <TextType
                  text={highlights}
                  typingSpeed={70}
                  deletingSpeed={40}
                  pauseDuration={2500}
                  showCursor={true}
                  cursorCharacter="_"
                  cursorClassName="text-primary/50"
                />
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-body">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-7 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
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
                className="px-8 py-7 text-lg border-border bg-background/50 backdrop-blur-sm rounded-xl hover:bg-accent transition-all"
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
                className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-multiply" />
              
              {/* Glass Overlay for Image */}
              <div className="absolute inset-0 border-[0.5px] border-white/20 rounded-3xl pointer-events-none" />
            </div>

            {/* Floating Stats - Industrial Glass */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-10 -left-10 lg:-left-20 bg-[var(--glass-background)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl shadow-[var(--glass-shadow)] p-8 grid grid-cols-3 gap-8 min-w-[400px]"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-heading italic">99.9%</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mt-1">{t("hero.stat1")}</div>
              </div>
              <div className="text-center border-x border-border/50 px-4">
                <div className="text-3xl font-bold text-primary font-heading italic">24h</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mt-1">{t("hero.stat2")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-heading italic">100+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mt-1">{t("hero.stat3")}</div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </section>
  );
}