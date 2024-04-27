"use client";

import { useState } from "react";

const ProductHeader = () => {
  const [mode, setMode] = useState(false);

  return (
    <section className="mx-auto max-w-7xl">
      <div className="grid md:grid-cols-5 items-center">
        <div className="col-span-3 p-5">
          <img
            src="/Metformin.png"
            alt="Metformin"
            className="object-cover w-full h-full rounded-3xl bg-[#f4f4f4] md:bg-transparent"
          />
        </div>
        <div className="col-span-2 p-5">
          <div>
            <a href="/category/insulin-sensitizers">
              <p className="text-[#505050] text-xs">Insulin Sensitizers</p>
            </a>
            <p className="text-4xl font-bold mt-5">Metformin HCL Lotion 20%</p>
            <div className="flex text-[#505050] mt-3">
              <p className="text-xl">$ 59</p>
              <p className="text-sm ml-2">monthly</p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-10">
            <div
              className={`py-5 border-b-2 cursor-pointer ${
                mode ? "border-[#ebebeb]" : "border-black"
              }`}
              onClick={() => setMode(false)}
            >
              Description
            </div>
            <div
              className={`py-5 border-b-2 cursor-pointer ${
                mode ? "border-black" : "border-[#ebebeb]"
              }`}
              onClick={() => setMode(true)}
            >
              How to use
            </div>
          </div>
          {!mode && (
            <div className="mt-5 text-lg text-[#505050]">
              <div>
                Metformin HCl 20% Topical Lotion is a specially compounded,
                easy-to-apply skin formulation that combines moisturizing
                benefits with the therapeutic effects of Metformin. By reducing
                insulin levels in the blood, it aims to alleviate PCOS symptoms
                like irregular menstrual cycles, excessive hair growth, and
                acne.
              </div>
              <p>&zwj;</p>

              <div>
                Metformin Lotion may prevent side effects commonly associated
                with oral Metformin because it bypasses the digestive tract.
              </div>
              <p>&zwj;</p>

              <div className="font-bold">Science backed research:</div>
              <ul className="list-disc ml-[20px]">
                <li>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/30668537/"
                    target="_blank"
                  >
                    Read about how our formula works
                  </a>
                </li>
              </ul>
              <p>&zwj;</p>

              <div className="font-bold">How it works:</div>
              <ul className="list-disc ml-[20px]">
                <li>
                  Through transdermal absorption, Metformin is delivered
                  directly into the bloodstream from the skin, providing
                  targeted treatment and enhancing effectiveness.
                </li>
              </ul>
              <p>&zwj;</p>

              <div className="font-bold">Key ingredients include:</div>
              <ul className="list-disc ml-[20px]">
                <li>Metformin 200mg per gram</li>
                <li>Pentravan base</li>
              </ul>
              <p>&zwj;</p>
            </div>
          )}
          {mode && (
            <div className="mt-5 text-lg text-[#505050]">
              <div className="font-bold">Application site:</div>
              <ul className="list-disc ml-[20px]">
                <li>
                  Gently apply the cream to either the inner wrists or inner
                  thighs.
                </li>
              </ul>
              <p>&zwj;</p>

              <div className="font-bold">Frequency:</div>
              <ul className="list-disc ml-[20px]">
                <li>Apply your determined dose once daily.</li>
              </ul>
              <p>&zwj;</p>

              <div className="font-bold">Absorption:</div>
              <ul className="list-disc ml-[20px]">
                <li>
                  Avoid washing the applied area for at least 4-6 hours to
                  ensure full absorption and effectiveness of the cream.
                </li>
              </ul>
              <p>&zwj;</p>
            </div>
          )}

          <a href="#">
            <div className="rounded-full md:rounded-lg bg-black text-white text-center p-3">
              Get Topical Metformin
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductHeader;
