import { motion, AnimatePresence } from "motion/react";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/language-context";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Juan Pérez",
    rating: 5,
    text: "Excelente producto. Lo aplicamos en nuestra cabaña de madera y la tranquilidad que nos da es impagable. Muy fácil de aplicar.",
    date: "Hace 2 meses",
    avatar: "JP"
  },
  {
    id: 2,
    name: "María Garcia",
    rating: 5,
    text: "Increíble la efectividad. Hicimos una prueba con un trozo de tela tratado y realmente no prende fuego. Muy recomendado para hoteles.",
    date: "Hace 1 mes",
    avatar: "MG"
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    rating: 5,
    text: "Atención de primera y el producto MiniT Total es muy versátil. Lo usamos en cortinas y alfombras. Todo impecable.",
    date: "Hace 3 semanas",
    avatar: "CR"
  },
  {
    id: 4,
    name: "Ana Martínez",
    rating: 4,
    text: "Muy buen producto. El envío llegó rápido y las instrucciones son claras. Lo volvería a comprar para mi próximo proyecto.",
    date: "Hace 4 meses",
    avatar: "AM"
  },
  {
    id: 5,
    name: "Roberto Gómez",
    rating: 5,
    text: "Lo mejor del mercado en cuanto a ignífugos. Las certificaciones me dieron la confianza necesaria para habilitar mi local.",
    date: "Hace 2 semanas",
    avatar: "RG"
  },
  {
    id: 6,
    name: "Lucía Fernández",
    rating: 5,
    text: "Servicio post-venta excelente. Respondieron todas mis dudas técnicas sobre la aplicación en maderas tratadas. El producto es genial.",
    date: "Hace 1 semana",
    avatar: "LF"
  }
];

export function ReviewsCarousel() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleReviews = Array.from({ length: itemsToShow }).map((_, i) => {
    const index = (currentIndex + i) % reviews.length;
    return reviews[index];
  });

  return (
    <section className="py-24 bg-[#fcfaf9] relative border-y border-[#140c03]/10 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #140c03 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#140c03] mb-4 font-heading italic">
            {t("reviews.title")}
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#c23b24] text-[#c23b24]" />
            ))}
          </div>
          <p className="text-lg text-[#140c03]/70">
            4.9/5 basado en <span className="font-semibold text-[#c23b24]">más de 200 reseñas de Google Maps</span>
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleReviews.map((review, idx) => (
                <motion.div
                  key={review.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -50 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
                  className="bg-white p-8 rounded-2xl border border-[#140c03]/10 shadow-sm hover:shadow-md hover:border-[#c23b24]/40 transition-all relative group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#140c03]/5 border border-[#140c03]/10 flex items-center justify-center text-[#c23b24] font-bold text-lg shadow-sm">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#140c03]">{review.name}</h4>
                      <p className="text-sm text-[#140c03]/50">{review.date}</p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-[#c23b24] text-[#c23b24]" : "text-[#140c03]/20"
                          }`}
                      />
                    ))}
                  </div>

                  <p className="text-[#140c03]/80 leading-relaxed italic font-medium">
                    "{review.text}"
                  </p>

                  <div className="absolute top-6 right-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#c23b24]" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.5693 13 6.017 13H5.017V21H6.017Z" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === i ? "bg-[#c23b24] w-6" : "bg-[#140c03]/20 hover:bg-[#140c03]/40"
                  }`}
                aria-label={`Ir a reseña ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
