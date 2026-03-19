import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/language-context";
import { Link, useLocation } from "react-router";
import logo from "../../assets/minitLogo.avif";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl border ${scrolled
          ? "bg-[#140c03]/95 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="MiniT Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-[#fcfaf9] tracking-tight">
              MiniT
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-[#fcfaf9]/70 hover:text-[#fcfaf9] transition-colors ${location.pathname === "/" ? "text-[#c23b24] font-medium" : ""
                }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/products"
              className={`text-[#fcfaf9]/70 hover:text-[#fcfaf9] transition-colors ${location.pathname.includes("/products") ? "text-[#c23b24] font-medium" : ""
                }`}
            >
              {t("nav.products")}
            </Link>
            <Link
              to="/about"
              className={`text-[#fcfaf9]/70 hover:text-[#fcfaf9] transition-colors ${location.pathname === "/about" ? "text-[#c23b24] font-medium" : ""
                }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className={`text-[#fcfaf9]/70 hover:text-[#fcfaf9] transition-colors ${location.pathname === "/contact" ? "text-[#c23b24] font-medium" : ""
                }`}
            >
              {t("nav.contact")}
            </Link>

            {/* Language Switcher */}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="gap-2 border-white/20 text-[#fcfaf9] hover:bg-white/10 hover:text-white bg-transparent"
            >
              <Globe className="w-4 h-4" />
              {language === "en" ? "ES" : "EN"}
            </Button>

            <Button
              asChild
              className="bg-[#c23b24] hover:bg-[#c23b24]/90 text-white"
            >
              <Link to="/contact">{t("nav.getQuote")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}