import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { useLanguage } from "../context/language-context";
import { Link } from "react-router";

export function FinalCTA() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-border/50">
      {/* Background Pattern - Industrial */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[var(--glass-background)] backdrop-blur-xl border border-[var(--glass-border)] rounded-[2.5rem] shadow-[var(--glass-shadow)] p-12 md:p-20 text-center max-w-5xl mx-auto relative overflow-hidden group"
        >
          {/* Internal Glow on Hover */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-primary/10 border border-primary/20 mb-10 relative">
            <Shield className="w-12 h-12 text-primary" />
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 font-heading tracking-tight italic">
            {t("cta.title")}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto font-body">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-20">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-8 text-xl rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            >
              <Link to="/contact">
                {t("cta.getQuote")}
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-10 py-8 text-xl border-border bg-background/50 backdrop-blur-sm rounded-2xl hover:bg-accent transition-all"
            >
              <Link to="/products">
                {t("cta.learnMore")}
              </Link>
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-border/50">
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="text-5xl font-bold text-primary font-heading italic mb-2">99.9%</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Fire Protection Rate</div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="text-5xl font-bold text-primary font-heading italic mb-2">24/7</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Expert Support</div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="text-5xl font-bold text-primary font-heading italic mb-2">1000+</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Global Deployments</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}