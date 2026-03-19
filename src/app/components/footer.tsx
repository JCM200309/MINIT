import { Flame, Mail, Phone, MapPin } from "lucide-react";
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
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#140c03] border border-white/10 shadow-sm">
                <Flame className="w-6 h-6 text-[#c23b24]" />
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
                  to="/products"
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
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#c23b24] flex-shrink-0 mt-0.5" />
                <span className="text-[#fcfaf9]/60 font-body">info@minitfire.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#c23b24] flex-shrink-0 mt-0.5" />
                <span className="text-[#fcfaf9]/60 font-body">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c23b24] flex-shrink-0 mt-0.5" />
                <span className="text-[#fcfaf9]/60 font-body">
                  123 Safety Boulevard<br />
                  Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#fcfaf9]/60 text-sm font-body">
              © 2026 MiniT Fire Retardant. {t("footer.allRights")}
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}