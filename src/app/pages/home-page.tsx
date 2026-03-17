import { Navigation } from "../components/navigation";
import { HeroSection } from "../components/hero-section";
import { ProductPreview } from "../components/product-preview";
import { ProductOverview } from "../components/product-overview";
import { HowItWorks } from "../components/how-it-works";
import { Certifications } from "../components/certifications";
import { ContactForm } from "../components/contact-form";
import { FinalCTA } from "../components/final-cta";
import { Footer } from "../components/footer";
import { Toaster } from "../components/ui/sonner";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductPreview />
      <ProductOverview />
      <HowItWorks />
      <Certifications />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <Toaster />
    </div>
  );
}