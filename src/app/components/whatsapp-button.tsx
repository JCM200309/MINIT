import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "5491122334455"; // Replace with real number if provided, or keep generic for now
  const message = encodeURIComponent("Hola! Quisiera obtener m\u00e1s informaci\u00f3n sobre los productos MINIT.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] flex items-center justify-center w-16 h-16 bg-[#140c03] text-white rounded-full shadow-[0_10px_40px_-5px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_60px_-10px_rgba(194,59,36,0.5)] transition-all duration-300 border-2 border-[#c23b24]/30 hover:border-[#c23b24] group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#c23b24] rounded-full animate-ping opacity-10 group-hover:bg-[#f6d94b] group-hover:opacity-20 transition-all" />
      <MessageCircle className="w-8 h-8 relative z-10 fill-current text-[#fcfaf9] group-hover:text-[#f6d94b] transition-colors" />

      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-4 py-2 bg-[#140c03] text-[#fcfaf9] text-sm font-bold rounded-xl shadow-2xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap border border-[#c23b24]/50 uppercase tracking-wide">
        Contactar ventas
      </div>
    </motion.a>
  );
}
