"use client";

import React from "react";

interface ProductProps {
  coverImage: string;
  type: string;
  price: string;
  name: string;
  duration: string;
}

const Product: React.FC<ProductProps> = ({
  coverImage,
  type,
  price,
  name,
  duration,
}) => {
  return (
    <div>
      <div className="rounded-xl overflow-hidden bg-[rgba(141,141,141,0.1)]">
        <img src={coverImage} alt="Product" />
      </div>
      <div className="flex justify-between my-4 text-[#505050] text-xs">
        <div>
          <p>{type}</p>
        </div>
        <div>
          <p>{`$ ${price} USD ${duration}`}</p>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-bold">{name}</h3>
      </div>
      <div className="rounded-xl border-2 border-black p-2 mt-3 text-center">
        <a href="/product/metformin-lotion-20">View Treatment</a>
      </div>
    </div>
  );
};

export default Product;
