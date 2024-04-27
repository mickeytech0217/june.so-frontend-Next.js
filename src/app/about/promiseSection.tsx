"use client";

import Badge from "@/components/badge";
import PromiseItem from "@/components/promiseItem";

export default function PromiseSection() {
  return (
    <section className="w-full p-5 mt-20 max-w-7xl mx-auto">
      <div className="w-full mx-auto text-center flex flex-col items-center">
        <Badge content="VALUES" />
        <h2 className="text-4xl font-bold my-5">Our promise</h2>
        <p className="text-[#505050] max-w-[768px] text-lg">
          Despite advancements in PCOS research, access to modern treatments
          remains a challenge for many women. Oana is changing that. We promise
          to provide easy access to the latest PCOS treatment options, bypassing
          the complexities of the traditional healthcare system.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        <PromiseItem
          avatar="/promise1.svg"
          heading="Accessible"
          content="No need to visit a doctor's office or pharmacy. Our physicians see you from the comfort of your home. Then mail your treatments directly to your door."
        />
        <PromiseItem
          avatar="/promise2.svg"
          heading="Clinically-backed"
          content="Our medical team is constantly researching any and all advances in PCOS care. We then, provide you with the best these options so you can live your life-free."
        />
        <PromiseItem
          avatar="/promise3.svg"
          heading="Highest Quality"
          content="All our treatments are custom made for you in FDA regulated pharmacies. Providing you with highest quality medication, without leaving your home."
        />
      </div>
    </section>
  );
}
