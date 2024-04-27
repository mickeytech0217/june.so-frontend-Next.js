"use client";

import React from "react";

interface TestimonialProps {
  content: string;
  name: string;
  job: string;
  avatar?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  content,
  name,
  job,
  avatar,
}) => {
  return (
    <div className="w-full h-full rounded-3xl p-10 bg-[#f4f4f4]">
      <div className="flex">
        <img src="/Icon Star.svg" alt="Icon Star" className="p-0.5" />
        <img src="/Icon Star.svg" alt="Icon Star" className="p-0.5" />
        <img src="/Icon Star.svg" alt="Icon Star" className="p-0.5" />
        <img src="/Icon Star.svg" alt="Icon Star" className="p-0.5" />
        <img src="/Icon Star.svg" alt="Icon Star" className="p-0.5" />
      </div>
      <div className="my-3">
        <p className="text-[#505050]">{`"${content}"`}</p>
      </div>
      <div className="flex items-center">
        {avatar && (
          <div className="mr-5">
            <img src={avatar} alt="avatar" width={50} />
          </div>
        )}
        <div>
          <h3 className="font-bold">{name}</h3>
          <h4>{job}</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
