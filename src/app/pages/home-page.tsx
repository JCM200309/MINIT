import { Navigation } from "../components/navigation";
import { HeroSection } from "../components/hero-section";
import { ProductPreview } from "../components/product-preview";
import { ProductOverview } from "../components/product-overview";
import { HowItWorks } from "../components/how-it-works";
import { ReviewsCarousel } from "../components/reviews-carousel";
import { Certifications } from "../components/certifications";
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
      <ReviewsCarousel />
      <Certifications />
      <Footer />
      <Toaster />
    </div>
  );
}