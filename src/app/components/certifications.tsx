import { motion } from "motion/react";
import { Award, FileCheck, Globe, Microscope } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "ISO 9001 Certified",
    description: "Quality management systems certification",
  },
  {
    icon: FileCheck,
    title: "UL Tested",
    description: "Underwriters Laboratories safety testing",
  },
  {
    icon: Globe,
    title: "International Standards",
    description: "Meets EN, ASTM, and NFPA standards",
  },
  {
    icon: Microscope,
    title: "Laboratory Validated",
    description: "Independent third-party testing",
  },
];

export function Certifications() {
  return (
    <section id="safety" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certifications & Safety
          </h2>
          <p className="text-xl text-gray-600">
            MiniT Fire Retardant meets the highest international safety standards and has been rigorously tested by independent laboratories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <cert.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certification Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1706517212966-43695534fe88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBjZXJ0aWZpY2F0aW9uJTIwZG9jdW1lbnR8ZW58MXx8fHwxNzczNjk5MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Safety Certification"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-white/90 text-lg max-w-2xl">
                Our fire retardant solutions are used by leading companies worldwide, backed by comprehensive safety certifications and continuous quality testing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Safety Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
        >
          <div className="text-center p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
            <div className="text-4xl font-bold text-red-500 mb-2">10+</div>
            <div className="text-gray-600">Years of Testing</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
            <div className="text-4xl font-bold text-red-500 mb-2">50+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
            <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
            <div className="text-gray-600">Compliance</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
