"use client";

import React from "react";

interface ReviewItemProps {
  content: string;
  name: string;
  role: string;
  avatar: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  content,
  name,
  role,
  avatar,
}) => {
  return (
    <div className="rounded-lg px-[29px] py-[24px] bg-white border-2 border-[#EDEDED]">
      <div className="flex items-center">
        <div className="mr-[20px]">
          <img className="rounded-full w-[64px] h-[64px]" src={`/avatar/${avatar}`} />
        </div>
        <div>
          <h1 className="text-[21px] font-bold">{name}</h1>
          <p className="text-[21px] text-gray-400">{role}</p>
        </div>
      </div>
      <div className="mt-[36px]">
        {content}
      </div>
    </div>
  );
};

export default ReviewItem;
