import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.getQuote": "Get Quote",

    // Hero
    "hero.badge": "Advanced Fire Protection Technology",
    "hero.title": "Protect what matters",
    "hero.titleHighlight": ["Your Business", "Your Family", "Your Future"],
    "hero.subtitle": "MiniT Fire Retardant is an innovative solution designed to prevent materials from catching fire. Advanced chemistry meets reliable safety for modern protection needs.",
    "hero.requestQuote": "Request a Quote",
    "hero.learnMore": "Learn More",
    "hero.stat1": "Effective",
    "hero.stat2": "Protection",
    "hero.stat3": "Materials",

    // Product Overview
    "overview.title": "Our Fire Retardant Solutions",
    "overview.subtitle": "Professional-grade fire retardant products designed to protect various materials. Each formulation is specifically engineered for optimal performance and safety.",
    "overview.viewAll": "View All Products",

    // Products
    "products.title": "Our Products",
    "products.subtitle": "Choose the right fire retardant solution for your specific needs",
    "products.wood.name": "MiniT Wood",
    "products.wood.desc": "Fire retardant for wood and cellulose materials",
    "products.textile.name": "MiniT Textile",
    "products.textile.desc": "Specialized protection for fabrics and textiles",
    "products.total.name": "MiniT Total",
    "products.total.desc": "Universal fire retardant for multiple materials",
    "products.building.name": "MiniT Building",
    "products.building.desc": "Construction and structural fire protection",
    "products.viewDetails": "View Details",
    "products.buyOnline": "Buy Online",
    "products.technicalSheet": "Technical Sheet",
    "products.certificates": "Certificates",
    "products.safetySheet": "Safety Sheet",

    // Product Details
    "product.about": "About this product",
    "product.uses": "Uses",
    "product.packaging": "Packaging",
    "product.certifications": "Certifications",
    "product.chemicalPresentation": "Chemical Presentation",
    "product.backToProducts": "Back to Products",

    // Features
    "features.fireProtection": "Fire Protection",
    "features.fireProtection.desc": "Advanced chemical formulation creates a protective barrier that prevents ignition and flame spread.",
    "features.advancedTech": "Advanced Technology",
    "features.advancedTech.desc": "Cutting-edge fire retardant technology developed through years of research and laboratory testing.",
    "features.reliableSafety": "Reliable Safety",
    "features.reliableSafety.desc": "Proven effectiveness in real-world applications, certified to meet international safety standards.",
    "features.compatibility": "Material Compatibility",
    "features.compatibility.desc": "Compatible with a wide range of materials including textiles, wood, plastics, and composites.",

    // How It Works
    "howItWorks.title": "How It Works",
    "howItWorks.subtitle": "Our advanced fire retardant technology uses a three-stage process to provide comprehensive fire protection.",
    "howItWorks.step1": "Application",
    "howItWorks.step1.desc": "MiniT Fire Retardant is applied to the material surface using spray, brush, or dip coating methods.",
    "howItWorks.step2": "Chemical Reaction",
    "howItWorks.step2.desc": "The formula penetrates the material and forms molecular bonds, creating a protective layer at the microscopic level.",
    "howItWorks.step3": "Fire Protection",
    "howItWorks.step3.desc": "When exposed to heat, the retardant creates an insulating barrier that prevents ignition and stops flame spread.",
    "howItWorks.scienceBacked": "Science-Backed Protection",
    "howItWorks.scienceBacked.desc": "Developed through rigorous laboratory testing and validated by independent safety organizations worldwide.",

    // Contact
    "contact.title": "Request a Quote",
    "contact.subtitle": "Get in touch with our team to learn more about MiniT Fire Retardant and receive a customized quote for your project.",
    "contact.name": "Full Name",
    "contact.company": "Company",
    "contact.email": "Email Address",
    "contact.message": "Project Details",
    "contact.messagePlaceholder": "Tell us about your project and fire protection needs...",
    "contact.send": "Send Request",
    "contact.sending": "Sending...",
    "contact.success": "Quote request submitted successfully!",
    "contact.successDesc": "We'll get back to you within 24 hours.",
    "contact.whyWorkWithUs": "Why Work With Us?",
    "contact.reason1": "Fast response time - we reply within 24 hours",
    "contact.reason2": "Expert consultation to find the right solution",
    "contact.reason3": "Competitive pricing with no hidden costs",
    "contact.reason4": "Ongoing support and technical guidance",

    // CTA
    "cta.title": "Ready to Protect Your Materials?",
    "cta.subtitle": "Join the growing number of businesses choosing MiniT Fire Retardant for superior fire protection. Get started today with a free consultation.",
    "cta.getQuote": "Get Your Quote",
    "cta.learnMore": "Learn More",

    // Footer
    "footer.tagline": "Advanced fire retardant technology for superior material protection.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.getInTouch": "Get in Touch",
    "footer.overview": "Overview",
    "footer.howItWorks": "How It Works",
    "footer.advantages": "Advantages",
    "footer.certifications": "Certifications",
    "footer.aboutUs": "About Us",
    "footer.caseStudies": "Case Studies",
    "footer.resources": "Resources",
    "footer.allRights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.products": "Productos",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.getQuote": "Solicitar Cotización",

    // Hero
    "hero.badge": "Tecnología Avanzada de Protección contra Incendios",
    "hero.title": "Protege lo que",
    "hero.titleHighlight": ["Más Importa", "Tu Empresa", "Tu Familia", "Tu Futuro"],
    "hero.subtitle": "MiniT Retardante de Fuego es una solución innovadora diseñada para prevenir que los materiales se incendien. Química avanzada se encuentra con seguridad confiable para las necesidades de protección modernas.",
    "hero.requestQuote": "Solicitar Cotización",
    "hero.learnMore": "Más Información",
    "hero.stat1": "Efectivo",
    "hero.stat2": "Protección",
    "hero.stat3": "Materiales",

    // Product Overview
    "overview.title": "Nuestras Soluciones Retardantes de Fuego",
    "overview.subtitle": "Productos retardantes de fuego de grado profesional diseñados para proteger diversos materiales. Cada formulación está específicamente diseñada para un rendimiento y seguridad óptimos.",
    "overview.viewAll": "Ver Todos los Productos",

    // Products
    "products.title": "Nuestros Productos",
    "products.subtitle": "Elija la solución retardante de fuego adecuada para sus necesidades específicas",
    "products.wood.name": "MiniT Maderas",
    "products.wood.desc": "Retardante de fuego para maderas y materiales celulósicos",
    "products.textile.name": "MiniT Textil",
    "products.textile.desc": "Protección especializada para telas y textiles",
    "products.total.name": "MiniT Total",
    "products.total.desc": "Retardante de fuego universal para múltiples materiales",
    "products.building.name": "MiniT Edificios",
    "products.building.desc": "Protección contra incendios para construcción y estructuras",
    "products.viewDetails": "Ver Detalles",
    "products.buyOnline": "Compre en Línea",
    "products.technicalSheet": "Ficha Técnica",
    "products.certificates": "Certificados",
    "products.safetySheet": "Hoja de Seguridad",

    // Product Details
    "product.about": "Acerca de este producto",
    "product.uses": "Usos",
    "product.packaging": "Presentación",
    "product.certifications": "Certificaciones",
    "product.chemicalPresentation": "Presentación del Químico",
    "product.backToProducts": "Volver a Productos",

    // Features
    "features.fireProtection": "Protección contra Incendios",
    "features.fireProtection.desc": "La formulación química avanzada crea una barrera protectora que previene la ignición y propagación de llamas.",
    "features.advancedTech": "Tecnología Avanzada",
    "features.advancedTech.desc": "Tecnología retardante de fuego de vanguardia desarrollada a través de años de investigación y pruebas de laboratorio.",
    "features.reliableSafety": "Seguridad Confiable",
    "features.reliableSafety.desc": "Efectividad comprobada en aplicaciones del mundo real, certificada para cumplir con estándares internacionales de seguridad.",
    "features.compatibility": "Compatibilidad de Materiales",
    "features.compatibility.desc": "Compatible con una amplia gama de materiales incluyendo textiles, madera, plásticos y compuestos.",

    // How It Works
    "howItWorks.title": "Cómo Funciona",
    "howItWorks.subtitle": "Nuestra tecnología avanzada de retardante de fuego utiliza un proceso de tres etapas para proporcionar protección integral contra incendios.",
    "howItWorks.step1": "Aplicación",
    "howItWorks.step1.desc": "MiniT Retardante de Fuego se aplica a la superficie del material usando métodos de rociado, brocha o inmersión.",
    "howItWorks.step2": "Reacción Química",
    "howItWorks.step2.desc": "La fórmula penetra el material y forma enlaces moleculares, creando una capa protectora a nivel microscópico.",
    "howItWorks.step3": "Protección contra Incendios",
    "howItWorks.step3.desc": "Cuando se expone al calor, el retardante crea una barrera aislante que previene la ignición y detiene la propagación de llamas.",
    "howItWorks.scienceBacked": "Protección Respaldada por la Ciencia",
    "howItWorks.scienceBacked.desc": "Desarrollado a través de pruebas rigurosas de laboratorio y validado por organizaciones de seguridad independientes en todo el mundo.",

    // Contact
    "contact.title": "Solicitar Cotización",
    "contact.subtitle": "Póngase en contacto con nuestro equipo para obtener más información sobre MiniT Retardante de Fuego y recibir una cotización personalizada para su proyecto.",
    "contact.name": "Nombre Completo",
    "contact.company": "Empresa",
    "contact.email": "Correo Electrónico",
    "contact.message": "Detalles del Proyecto",
    "contact.messagePlaceholder": "Cuéntenos sobre su proyecto y necesidades de protección contra incendios...",
    "contact.send": "Enviar Solicitud",
    "contact.sending": "Enviando...",
    "contact.success": "¡Solicitud de cotización enviada con éxito!",
    "contact.successDesc": "Le responderemos dentro de 24 horas.",
    "contact.whyWorkWithUs": "¿Por Qué Trabajar con Nosotros?",
    "contact.reason1": "Tiempo de respuesta rápido - respondemos dentro de 24 horas",
    "contact.reason2": "Consulta experta para encontrar la solución adecuada",
    "contact.reason3": "Precios competitivos sin costos ocultos",
    "contact.reason4": "Soporte continuo y orientación técnica",

    // CTA
    "cta.title": "¿Listo para Proteger sus Materiales?",
    "cta.subtitle": "Únase al creciente número de empresas que eligen MiniT Retardante de Fuego para una protección superior contra incendios. Comience hoy con una consulta gratuita.",
    "cta.getQuote": "Obtener Cotización",
    "cta.learnMore": "Más Información",

    // Footer
    "footer.tagline": "Tecnología avanzada de retardante de fuego para protección superior de materiales.",
    "footer.product": "Producto",
    "footer.company": "Empresa",
    "footer.getInTouch": "Contáctenos",
    "footer.overview": "Resumen",
    "footer.howItWorks": "Cómo Funciona",
    "footer.advantages": "Ventajas",
    "footer.certifications": "Certificaciones",
    "footer.aboutUs": "Nosotros",
    "footer.caseStudies": "Casos de Estudio",
    "footer.resources": "Recursos",
    "footer.allRights": "Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): any => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
