import { Shield, Zap, CheckCircle, Layers } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Shield,
    title: "Fire Protection",
    description: "Advanced chemical formulation creates a protective barrier that prevents ignition and flame spread.",
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "Cutting-edge fire retardant technology developed through years of research and laboratory testing.",
  },
  {
    icon: CheckCircle,
    title: "Reliable Safety",
    description: "Proven effectiveness in real-world applications, certified to meet international safety standards.",
  },
  {
    icon: Layers,
    title: "Material Compatibility",
    description: "Compatible with a wide range of materials including textiles, wood, plastics, and composites.",
  },
];

export function ProductOverview() {
  return (
    <section id="product" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is MiniT Fire Retardant?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            MiniT Fire Retardant is a state-of-the-art chemical solution designed to protect materials from fire. Our innovative formula creates an invisible shield that prevents ignition and significantly reduces flame spread, keeping people and property safe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 rounded-2xl border border-gray-200 hover:border-red-200 bg-white hover:bg-red-50/50 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
