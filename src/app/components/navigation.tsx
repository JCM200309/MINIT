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
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl border ${
        scrolled
          ? "bg-[var(--glass-background)] backdrop-blur-md border-[var(--glass-border)] shadow-[var(--glass-shadow)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="MiniT Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              MiniT
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-gray-600 hover:text-gray-900 transition-colors ${
                location.pathname === "/" ? "text-red-500 font-medium" : ""
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/products"
              className={`text-gray-600 hover:text-gray-900 transition-colors ${
                location.pathname.includes("/products") ? "text-red-500 font-medium" : ""
              }`}
            >
              {t("nav.products")}
            </Link>
            <Link
              to="/about"
              className={`text-gray-600 hover:text-gray-900 transition-colors ${
                location.pathname === "/about" ? "text-red-500 font-medium" : ""
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className={`text-gray-600 hover:text-gray-900 transition-colors ${
                location.pathname === "/contact" ? "text-red-500 font-medium" : ""
              }`}
            >
              {t("nav.contact")}
            </Link>
            
            {/* Language Switcher */}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === "en" ? "ES" : "EN"}
            </Button>
            
            <Button
              asChild
              className="bg-red-500 hover:bg-red-600"
            >
              <Link to="/contact">{t("nav.getQuote")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}