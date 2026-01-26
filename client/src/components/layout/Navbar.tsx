import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/products", label: "Productos" },
    { href: "/applications", label: "Aplicaciones" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-100"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg text-white shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
              <Flame size={24} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className={cn("font-display font-bold text-xl leading-none tracking-tight", isScrolled ? "text-slate-900" : "text-slate-900 md:text-white md:mix-blend-difference")}>
                MINIT
              </span>
              <span className={cn("text-[10px] font-medium tracking-widest uppercase", isScrolled ? "text-slate-500" : "text-slate-500 md:text-white/80 md:mix-blend-difference")}>
                Fire Retardant
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-primary",
                  location === link.href
                    ? "text-primary font-semibold"
                    : isScrolled
                    ? "text-slate-600"
                    : "text-white/90 hover:text-white shadow-sm"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button 
                variant={isScrolled ? "default" : "secondary"}
                className={cn("font-semibold", !isScrolled && "bg-white text-primary hover:bg-white/90")}
              >
                Solicitar Cotización
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu className={isScrolled ? "text-slate-800" : "text-white mix-blend-difference"} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-gray-50",
                location === link.href ? "bg-blue-50 text-primary" : "text-slate-600"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full">Solicitar Cotización</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
