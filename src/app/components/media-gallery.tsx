import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, Maximize2, Image as ImageIcon, Film } from "lucide-react";
import { useLanguage } from "../context/language-context";

interface MediaItem {
  id: number;
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  titleEn: string;
  titleEs: string;
  categoryEn: string;
  categoryEs: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    url: "/gallery/aplicacion4.jpg",
    titleEn: "PONER TITULO",
    titleEs: "PONER TITULO",
    categoryEn: "Product Application",
    categoryEs: "Aplicación de Producto",
  },
  {
    id: 2,
    type: "image",
    url: "/gallery/aplicacion6.jpeg",
    titleEn: "Work at AMA (Argentine Medical Association)",
    titleEs: "Trabajo en AMA (Asociación Médica Argentina)",
    categoryEn: "Product Application",
    categoryEs: "Aplicación de Producto",
  },
  {
    id: 3,
    type: "image",
    url: "/gallery/aplicacion5.jpg",
    titleEn: "PONER TITULO",
    titleEs: "PONER TITULO",
    categoryEn: "Product Application",
    categoryEs: "Aplicación de Producto",
  },
  {
    id: 4,
    type: "video",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    titleEn: "MINIT Building Application Guide",
    titleEs: "Guía de Aplicación MINIT Edificios",
    categoryEn: "Tutorial",
    categoryEs: "Tutorial",
  },
  {
    id: 5,
    type: "image",
    url: "https://images.unsplash.com/photo-1504917595217-d4dc5f583006?q=80&w=2070&auto=format&fit=crop",
    titleEn: "Steel Protection in Construction",
    titleEs: "Protección de Acero en Construcción",
    categoryEn: "Case Study",
    categoryEs: "Caso de Estudio",
  },
  {
    id: 6,
    type: "video",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    thumbnail: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=2070&auto=format&fit=crop",
    titleEn: "Flame Propagation Test - MINIT Total",
    titleEs: "Prueba de Propagación de Llama - MINIT Total",
    categoryEn: "Certification",
    categoryEs: "Certificación",
  },
];

export function MediaGallery() {
  const { language } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  return (
    <section className="py-24 bg-[#fcfaf9] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #140c03 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#140c03] mb-6 font-heading italic">
            {language === "en" ? "Media Gallery" : "Galería Multimedia"}
          </h2>
          <p className="text-lg text-[#140c03]/70 max-w-2xl mx-auto font-body">
            {language === "en"
              ? "Witness the power of MINIT technology through our collection of tests, applications, and industrial success stories."
              : "Sea testigo del poder de la tecnología MINIT a través de nuestra colección de pruebas, aplicaciones e historias de éxito industrial."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-2xl bg-[#140c03] border border-[#140c03]/10"
            >
              <img
                src={item.type === "image" ? item.url : item.thumbnail}
                alt={language === "en" ? item.titleEn : item.titleEs}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#140c03] via-[#140c03]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-2 text-[#f6d94b] text-xs font-bold uppercase tracking-widest mb-2">
                  {item.type === "image" ? <ImageIcon className="w-3 h-3" /> : <Film className="w-3 h-3" />}
                  <span>{language === "en" ? item.categoryEn : item.categoryEs}</span>
                </div>
                <h3 className="text-xl font-bold text-[#fcfaf9] font-heading italic">
                  {language === "en" ? item.titleEn : item.titleEs}
                </h3>
              </div>

              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-[#f6d94b] flex items-center justify-center text-[#140c03] shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  {item.type === "image" ? <Maximize2 className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#140c03]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-8 right-8 text-[#fcfaf9]/50 hover:text-[#f6d94b] transition-colors p-2"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.url}
                  alt={language === "en" ? selectedItem.titleEn : selectedItem.titleEs}
                  className="w-full h-full object-cover"
                />
              ) : (
                <iframe
                  src={selectedItem.url}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#140c03] to-transparent">
                <p className="text-[#f6d94b] text-sm font-bold uppercase tracking-widest mb-2 font-body">
                  {language === "en" ? selectedItem.categoryEn : selectedItem.categoryEs}
                </p>
                <h2 className="text-3xl font-bold text-[#fcfaf9] font-heading italic">
                  {language === "en" ? selectedItem.titleEn : selectedItem.titleEs}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
