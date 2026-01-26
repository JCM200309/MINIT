import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* industrial warehouse fire safety */}
        <img 
          src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2000&auto=format&fit=crop" 
          alt="Industrial Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Tecnología Ignífuga Certificada
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Protección Avanzada Contra el <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Fuego</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Productos ignífugos de la más alta calidad para industria, construcción y textiles. 
            Garantía de seguridad con certificaciones internacionales.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/products">
              <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                Ver Productos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300">
                Contactar Especialista
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            className="mt-12 flex items-center gap-8 text-sm text-slate-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary w-5 h-5" />
              <span>Certificación ISO</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary w-5 h-5" />
              <span>Normas IRAM</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary w-5 h-5" />
              <span>Aprobado por INTI</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
