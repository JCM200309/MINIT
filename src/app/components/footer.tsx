import { Flame, Mail, Phone, MapPin, Youtube, Instagram } from "lucide-react";

import { Link, useLocation } from "react-router";
import { useLanguage } from "../context/language-context";

export function Footer() {
  const { t } = useLanguage();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // Only scroll if on home page
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#0a0602] border-t border-white/5 text-[#fcfaf9]/70">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-20 h-20">
                <img src="/Logos/MinitLogo2.png" alt="MINIT" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold text-[#fcfaf9]">
                MINIT
              </span>
            </Link>
            <p className="text-[#fcfaf9]/60 leading-relaxed font-body">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[#fcfaf9] font-bold mb-4 font-heading">{t("footer.product")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/certificates"
                  className="text-[#fcfaf9]/60 hover:text-[#fcfaf9] transition-colors font-body"
                >
                  {t("footer.overview")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#fcfaf9]/60 hover:text-[#fcfaf9] transition-colors font-body"
                >
                  {t("footer.howItWorks")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#fcfaf9]/60 hover:text-[#fcfaf9] transition-colors font-body"
                >
                  {t("footer.advantages")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#fcfaf9]/60 hover:text-[#fcfaf9] transition-colors font-body"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>



          {/* Contact */}
          <div>
            <h3 className="text-[#fcfaf9] font-bold mb-4 font-heading">{t("footer.getInTouch")}</h3>
            <ul className="space-y-3 mb-6">

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#c23b24] flex-shrink-0 mt-0.5" />
                <span className="text-[#fcfaf9]/60 font-body">minitargentina@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#c23b24] flex-shrink-0 mt-0.5" />
                <span className="text-[#fcfaf9]/60 font-body">+54 11 6359-7667</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c23b24] flex-shrink-0 mt-0.5" />
                <span className="text-[#fcfaf9]/60 font-body">
                  Buenos Aires,<br />
                  Argentina
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/@MINITIgnifugos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-[#FF0000] rounded-lg flex items-center justify-center border border-white/10 hover:border-[#FF0000] text-[#fcfaf9]/40 hover:text-white transition-all duration-300 group"
              >
                <Youtube className="w-10 h-10 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/minitignifugos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] rounded-lg flex items-center justify-center border border-white/10 hover:border-transparent text-[#fcfaf9]/40 hover:text-white transition-all duration-300 group"
              >
                <Instagram className="w-10 h-10 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#fcfaf9]/60 text-sm font-body">
              © 2026 MINIT Fire Retardant. {t("footer.allRights")}
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}