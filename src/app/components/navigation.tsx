import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/language-context";
import { Link, useLocation } from "react-router";


interface NavigationProps {
  forceDark?: boolean;
}

export function Navigation({ forceDark = false }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const isScrolledOrDark = scrolled || forceDark;

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/products", label: t("nav.products") },
    { to: "/about", label: t("nav.about") },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl border ${isScrolledOrDark
          ? "bg-[#140c03]/95 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-transparent"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/Logos/minitLogo3.png" alt="MINIT Logo" className="h-12 md:h-16 w-auto" />
              <span className="text-lg md:text-xl font-bold text-[#fcfaf9] tracking-tight">
                MINIT
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[#fcfaf9]/70 hover:text-[#fcfaf9] transition-colors ${location.pathname === link.to || (link.to !== "/" && location.pathname.startsWith(link.to)) ? "text-[#c23b24] font-medium" : ""
                    }`}
                >
                  {link.label}
                </Link>
              ))}

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

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-4">
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="gap-1 border-white/20 text-[#fcfaf9] hover:bg-white/10 hover:text-white bg-transparent px-2"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="text-[10px]">{language === "en" ? "ES" : "EN"}</span>
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#fcfaf9] p-1"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[49] bg-[#140c03] flex flex-col pt-32 px-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-2xl font-bold ${location.pathname === link.to || (link.to !== "/" && location.pathname.startsWith(link.to)) ? "text-[#c23b24]" : "text-[#fcfaf9]"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#c23b24] hover:bg-[#c23b24]/90 text-white text-lg h-14"
                >
                  <Link to="/contact">{t("nav.getQuote")}</Link>
                </Button>
              </div>
            </div>

            <div className="mt-auto pb-12 text-[#fcfaf9]/40 text-sm">
              &copy; {new Date().getFullYear()} MiniT Fire Retardant. All rights reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}