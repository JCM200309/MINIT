import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { ContactForm } from "../components/contact-form";
import { FinalCTA } from "../components/final-cta";

export function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ContactForm />
        <FinalCTA />
      </div>
      <Footer />
    </div>
  );
}
