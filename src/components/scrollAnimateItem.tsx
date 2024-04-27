"use client";

import React from "react";

interface ScrollItemProps {
  header: string;
  category: string;
  content: string;
}

const ScrollItem: React.FC<ScrollItemProps> = ({
    header,
    category,
    content,
}) => {
  return (
    <div className="rounded-lg px-[29px] py-[24px] bg-white border-2 border-[#EDEDED] max-w-[500px]">
      <div className="flex items-center">
        <div>
          <h1 className="text-[21px] font-bold">{header}</h1>
          <p className="text-[21px] text-gray-400">{category}</p>
        </div>
      </div>
      <div className="mt-[36px]">
        {content}
      </div>
    </div>
  );
};

export default ScrollItem;
