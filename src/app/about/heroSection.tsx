"use client";

import Badge from "@/components/badge";

export default function HeroSection() {
  return (
    <section className="w-full grid md:grid-cols-2 items-center md:h-screen overflow-hidden relative">
      <div className="h-full relative">
        <div className="absolute top-0 right-0 w-[80px] md:w-[250px]">
          <img src="/Blue curve with stars.svg" alt="Blue curve with stars" />
        </div>
        <div className="p-5 md:p-20 m-auto flex flex-col justify-center h-full">
          <Badge content="ABOUT US" />
          <h1 className="text-4xl md:text-6xl font-bold mt-5">Meet Oana</h1>
          <h2 className="text-lg mt-5 text-[#505050]">
            Oana is committed to leading the way in PCOS care with accessible,
            custom compounded treatments. We offer the latest, clinically-backed
            solutions to meet each individual's needs. Our expert medical team
            provides top-quality, prescription-strength treatments for every
            aspect of PCOS, ensuring you receive the most effective and
            innovative care available.
          </h2>
        </div>
      </div>
      <div className="relative overflow-hidden md:flex md:justify-center h-full">
        <img
          src="/about-us.jpg"
          alt="About Us"
          className="md:max-w-fit h-full"
        />
      </div>
    </section>
  );
}
