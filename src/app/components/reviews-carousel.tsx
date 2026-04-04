import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/language-context";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  textEn: string;
  date: string;
  dateEn: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Diego Vargas",
    rating: 5,
    text: "Todo excelente. Muy buena atención y excelente producto",
    textEn: "Everything excellent. Very good service and excellent product",
    date: "Hace 4 años",
    dateEn: "4 years ago",
    avatar: "DV"
  },
  {
    id: 2,
    name: "Juan Cruz Montero",
    rating: 5,
    text: "Excelente servicio. Tenía dudas sobre qué producto necesitaba y me asesoraron súper bien desde el primer momento. Se nota que saben del tema y trabajan con materiales de calidad. Cumplieron con los tiempos y todo llegó perfecto.",
    textEn: "Excellent service. I had doubts about what product I needed and they advised me very well from the first moment. You can tell they know the subject and work quality materials. They met deadlines and everything arrived perfectly.",
    date: "Hace 1 mes",
    dateEn: "1 month ago",
    avatar: "JCM"
  },
  {
    id: 3,
    name: "Abril Sztamfater",
    rating: 5,
    text: "Excelente atención y producto!",
    textEn: "Excellent service and product!",
    date: "Hace 3 semanas",
    dateEn: "3 weeks ago",
    avatar: "AS"
  },
  {
    id: 4,
    name: "Raúl Stocker",
    rating: 5,
    text: "Muy bueno. Lo use para hacer el tratamiento ignífugo de cortinas !!",
    textEn: "Very good. I used it to do the fire retardant treatment on curtains !!",
    date: "Hace 4 años",
    dateEn: "4 years ago",
    avatar: "RS"
  },
  {
    id: 5,
    name: "Jose Raul Correa",
    rating: 5,
    text: "excelente atención!",
    textEn: "excellent service!",
    date: "Hace 3 años",
    dateEn: "3 years ago",
    avatar: "JRC"
  }
];

export function ReviewsCarousel() {
  const { t, language } = useLanguage();
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

  const nextSlide = () => {
    if (currentIndex < reviews.length - itemsToShow) setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

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
            4.5/5 estrellas en <span className="font-semibold text-[#c23b24]">Google Maps</span>
          </p>
        </motion.div>

        <div className="relative px-2 md:px-16">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -mt-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#140c03]/10 text-[#c23b24] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#fcfaf9] hover:scale-105 transition-all focus:outline-none"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="relative overflow-hidden px-2 -mx-2 h-[440px] pt-4">
            <motion.div
              animate={{ x: `-${(currentIndex * 100) / reviews.length}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex h-[380px]"
              style={{ width: `${(reviews.length / itemsToShow) * 100}%` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0"
                  style={{ width: `${100 / reviews.length}%`, padding: "0 0.75rem" }}
                >
                  <div className="bg-white p-8 rounded-2xl border border-[#140c03]/10 shadow-sm hover:shadow-md hover:border-[#c23b24]/40 transition-all relative group h-full flex flex-col select-none">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#140c03]/5 border border-[#140c03]/10 flex items-center justify-center text-[#c23b24] font-bold text-lg shadow-sm">
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#140c03]">{review.name}</h4>
                        <p className="text-xs lg:text-lg text-[#140c03]/50">{language === "en" ? review.dateEn : review.date}</p>
                      </div>
                    </div>

                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "fill-[#c23b24] text-[#c23b24]" : "text-[#140c03]/20"}`}
                        />
                      ))}
                    </div>

                    <p className="text-[#140c03]/80 leading-relaxed italic font-medium flex-grow">
                      "{language === "en" ? review.textEn : review.text}"
                    </p>

                    <div className="absolute top-6 right-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#c23b24]" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.5693 13 6.017 13H5.017V21H6.017Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(reviews.length - itemsToShow + 1)].map((_, i) => (
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

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= reviews.length - itemsToShow}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mt-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#140c03]/10 text-[#c23b24] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#fcfaf9] hover:scale-105 transition-all focus:outline-none"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
