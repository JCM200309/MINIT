import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { ContactForm } from "../components/contact-form";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#140c03]">
      <Navigation forceDark={true} />
      <div className="pt-20">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
