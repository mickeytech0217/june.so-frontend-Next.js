"use client";

import Badge from "@/components/badge";
import PromiseItem from "@/components/promiseItem";

export default function PromiseSection() {
  return (
    <section className="bg-[#f4f4f4]">
      <div className="w-full p-5 py-20 max-w-7xl mx-auto ">
        <div className="w-full mx-auto text-center flex flex-col items-center">
          <Badge content="VALUES" />
          <h2 className="text-4xl font-bold my-5">Why choose Oana?</h2>
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
            content="All of our treatments are doctor trusted, evidence based, and custom made for you in FDA regulated pharmacies."
          />
          <PromiseItem
            avatar="/promise3.svg"
            heading="Affordable"
            content="We leverage telemedicine and compounding pharmacy services to offer you affordable pricing. Access our prescriptions with just a $20 doctor fee."
          />
        </div>
      </div>
    </section>
  );
}
