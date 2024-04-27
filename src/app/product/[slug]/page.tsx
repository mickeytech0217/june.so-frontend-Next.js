"use client";

import FAQSection from "./faqSection";
import ProductHeader from "./productHeader";
import PromiseSection from "./promiseSection";
import TestimonialsSection from "./testimonialsSection";

interface ProductDetailProps {
  params: {
    slug: String;
  };
}

const ProductDetail = (props: ProductDetailProps) => {
  // const productId = props.params.slug;

  return (
    <main>
      <ProductHeader />
      <TestimonialsSection />
      <PromiseSection />
      <FAQSection />
    </main>
  );
};

export default ProductDetail;
