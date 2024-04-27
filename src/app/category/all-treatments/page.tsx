import FeatureSection from "@/app/homepage/featureSection";
import ProductCategories from "./productCategories";
import ProductCategoryHeader from "./productCategoryHeader";

export default function AllTreaments() {
  return (
    <main>
      <ProductCategoryHeader />
      <ProductCategories />
      <FeatureSection />
    </main>
  );
}
