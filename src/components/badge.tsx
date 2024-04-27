"use client";

import React from "react";

interface BadgeProps {
  content: string;
}

const Badge: React.FC<BadgeProps> = ({ content }) => {
  return (
    <div className="bg-[#ebf490] rounded-[100px] w-fit p-2">
      <p className="text-xs">{content}</p>
    </div>
  );
};

export default Badge;
