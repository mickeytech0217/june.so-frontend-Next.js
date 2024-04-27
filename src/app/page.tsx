import HeroSection from "./homepage/heroSection";
import FeatureSection from "./homepage/featureSection";
import TreatmentSection from "./homepage/treatmentSection";
import TestimonialsSection from "./homepage/testimonialsSection";
import TopTreatmentsSection from "./homepage/topTreatmentsSection";
import BlogSection from "./homepage/blogSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <FeatureSection />
      <BlogSection />
      <TestimonialsSection />
    </main>
  );
}
