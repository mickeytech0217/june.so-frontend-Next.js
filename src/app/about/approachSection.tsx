"use client";

import Badge from "@/components/badge";
import Product from "@/components/product";
import React from "react";

const ApproachSection: React.FC = () => {
  return (
    <section className="w-full p-5 mx-auto max-w-7xl my-20">
      <div className="text-center max-w-[800px] mx-auto flex flex-col items-center">
        <Badge content="TREATMENTS" />
        <h2 className="text-4xl md:text-6xl font-bold my-5">Our approach</h2>
        <p className="text-[#505050] mt-3 text-base md:text-lg">
          Our approach is rooted in the latest scientific research, ensuring
          that your PCOS is managed effectively and that you're equipped with
          the most current treatments available.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-10 w-full mt-20 md:p-5">
        <Product
          coverImage="/Metformin.png"
          type="Insulin Sensitizers"
          price="95.00"
          duration="monthly"
          name="Metformin HCL Lotion 20%"
        />
        <Product
          coverImage="/MetSpiro.png"
          type="Reduce Unwanted Hair"
          price="109.00"
          duration="monthly"
          name="MetSpiro"
        />
        <Product
          coverImage="/Hairless Hype.png"
          type="Reduce Unwanted Hair"
          price="89.00"
          duration="monthly"
          name="Hairless Hype"
        />
        <Product
          coverImage="/Hair Plus Plus.png"
          type="Hair Loss"
          price="95.00"
          duration="monthly"
          name="Hair Plus Plus"
        />
      </div>
    </section>
  );
};

export default ApproachSection;
