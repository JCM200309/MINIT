import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Building2, User, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../context/language-context";

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(t("contact.success"), {
      description: t("contact.successDesc"),
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#140c03] relative border-t border-white/5">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fcfaf9 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#fcfaf9] mb-6 font-heading tracking-tight italic">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-[#fcfaf9]/70 font-body">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#fcfaf9] font-semibold">
                  {t("contact.name")}
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#fcfaf9]/40" />
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 border-white/20 focus-visible:ring-[#c23b24] bg-white/5 text-[#fcfaf9] placeholder:text-[#fcfaf9]/30"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-[#fcfaf9] font-semibold">
                  {t("contact.company")}
                </Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#fcfaf9]/40" />
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="pl-10 border-white/20 focus-visible:ring-[#c23b24] bg-white/5 text-[#fcfaf9] placeholder:text-[#fcfaf9]/30"
                    placeholder="Your Company"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#fcfaf9] font-semibold">
                  {t("contact.email")}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#fcfaf9]/40" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 border-white/20 focus-visible:ring-[#c23b24] bg-white/5 text-[#fcfaf9] placeholder:text-[#fcfaf9]/30"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#fcfaf9] font-semibold">
                  {t("contact.message")}
                </Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#fcfaf9]/40" />
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="pl-10 min-h-32 border-white/20 focus-visible:ring-[#c23b24] bg-white/5 text-[#fcfaf9] placeholder:text-[#fcfaf9]/30"
                    placeholder={t("contact.messagePlaceholder")}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#c23b24] hover:bg-[#c23b24]/90 text-white font-semibold py-6 text-lg"
              >
                {isSubmitting ? (
                  t("contact.sending")
                ) : (
                  <>
                    {t("contact.send")}
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-[#fcfaf9] shadow-lg border border-white/10 ring-1 ring-black/5">
              <h3 className="text-2xl font-bold mb-4 font-heading">{t("contact.whyWorkWithUs")}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-[#c23b24]" />
                  </div>
                  <span className="text-[#fcfaf9]/80 font-body">{t("contact.reason1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-[#c23b24]" />
                  </div>
                  <span className="text-[#fcfaf9]/80 font-body">{t("contact.reason2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-[#c23b24]" />
                  </div>
                  <span className="text-[#fcfaf9]/80 font-body">{t("contact.reason3")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-[#c23b24]" />
                  </div>
                  <span className="text-[#fcfaf9]/80 font-body">{t("contact.reason4")}</span>
                </li>
              </ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1763289685121-21c4e3f03aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwYWJzdHJhY3QlMjBkZXNpZ258ZW58MXx8fHwxNzczNjgxMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Innovation"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-bold text-white mb-2">
                  Innovation Meets Safety
                </h4>
                <p className="text-white/90 text-sm">
                  Join hundreds of satisfied customers protecting what matters most.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}