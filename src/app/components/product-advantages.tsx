import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "Long-lasting protection",
    minit: true,
    traditional: false,
  },
  {
    feature: "Invisible application",
    minit: true,
    traditional: false,
  },
  {
    feature: "Non-toxic formula",
    minit: true,
    traditional: false,
  },
  {
    feature: "Wide material compatibility",
    minit: true,
    traditional: true,
  },
  {
    feature: "Quick application",
    minit: true,
    traditional: false,
  },
  {
    feature: "No residue or odor",
    minit: true,
    traditional: false,
  },
];

const advantages = [
  {
    title: "Superior Protection",
    description: "Up to 99.9% effectiveness in preventing ignition and flame spread across tested materials.",
  },
  {
    title: "Eco-Friendly Formula",
    description: "Non-toxic, environmentally safe formulation that meets all international environmental standards.",
  },
  {
    title: "Cost-Effective",
    description: "Long-lasting protection reduces reapplication costs and provides excellent value over time.",
  },
  {
    title: "Easy Application",
    description: "Simple application process requires no specialized equipment or extensive training.",
  },
];

export function ProductAdvantages() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose MiniT?
          </h2>
          <p className="text-xl text-gray-600">
            Advanced technology and superior performance set MiniT Fire Retardant apart from traditional solutions.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-red-500 to-red-600">
              <div className="text-white font-semibold text-lg">Feature</div>
              <div className="text-white font-semibold text-lg text-center">MiniT</div>
              <div className="text-white font-semibold text-lg text-center">Traditional</div>
            </div>
            {comparisons.map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-3 gap-4 p-6 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="text-gray-900 font-medium">{item.feature}</div>
                <div className="flex justify-center">
                  {item.minit ? (
                    <Check className="w-6 h-6 text-green-500" />
                  ) : (
                    <X className="w-6 h-6 text-gray-300" />
                  )}
                </div>
                <div className="flex justify-center">
                  {item.traditional ? (
                    <Check className="w-6 h-6 text-green-500" />
                  ) : (
                    <X className="w-6 h-6 text-gray-300" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Advantages */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
