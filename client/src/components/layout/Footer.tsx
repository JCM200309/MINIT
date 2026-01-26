import { Link } from "wouter";
import { Flame, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Flame size={20} fill="currentColor" />
              </div>
              <span className="font-display font-bold text-xl text-white">MINIT</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Líderes en desarrollo de productos ignífugos certificados. 
              Protegemos lo que más importa con tecnología avanzada y soluciones certificadas.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {[
                { label: "Inicio", href: "/" },
                { label: "Nuestros Productos", href: "/products" },
                { label: "Aplicaciones", href: "/applications" },
                { label: "Contacto", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Parque Industrial, Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contacto@minitfire.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Boletín</h4>
            <p className="text-sm text-slate-400 mb-4">
              Reciba las últimas novedades sobre seguridad industrial.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-900 border border-slate-800 rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:border-primary transition-colors"
              />
              <Button size="icon" className="shrink-0">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} MINIT Ignífugos. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
