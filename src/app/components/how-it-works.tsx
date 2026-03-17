import { motion } from "motion/react";
import { Droplet, AtomIcon, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Droplet,
    title: "Application",
    description: "MiniT Fire Retardant is applied to the material surface using spray, brush, or dip coating methods.",
    step: "01",
  },
  {
    icon: AtomIcon,
    title: "Chemical Reaction",
    description: "The formula penetrates the material and forms molecular bonds, creating a protective layer at the microscopic level.",
    step: "02",
  },
  {
    icon: ShieldCheck,
    title: "Fire Protection",
    description: "When exposed to heat, the retardant creates an insulating barrier that prevents ignition and stops flame spread.",
    step: "03",
  },
];

export function HowItWorks() {
  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Our advanced fire retardant technology uses a three-stage process to provide comprehensive fire protection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                {step.step}
              </div>

              {/* Icon Circle */}
              <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-white border-4 border-red-100 flex items-center justify-center">
                <step.icon className="w-10 h-10 text-red-500" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581093449818-2655b2467fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwc2NpZW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczNjk5MDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Laboratory Technology"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-transparent" />
            <div className="absolute inset-0 flex items-center px-12">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 max-w-md">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Science-Backed Protection
                </h4>
                <p className="text-gray-700">
                  Developed through rigorous laboratory testing and validated by independent safety organizations worldwide.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
