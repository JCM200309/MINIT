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
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            {t("reviews.title")}
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-lg text-gray-600">
            4.9/5 basado en <span className="font-semibold text-primary">más de 200 reseñas de Google Maps</span>
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
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed italic">
                    "{review.text}"
                  </p>

                  <div className="absolute top-6 right-8 opacity-10">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-primary" fill="currentColor">
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
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === i ? "bg-primary w-6" : "bg-gray-300"
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
