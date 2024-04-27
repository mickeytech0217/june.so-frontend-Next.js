"use client";

import Badge from "@/components/badge";
import ReviewItem from "@/components/reviewitem";
import ReviewCountItem from "@/components/reviewCountItem";
import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full p-5 mx-auto max-w-7xl mt-10">
        {/* <div className="relative cursor-pointer lg:hidden" data-projection-id="1" >
          <div className="flex flex-col overflow-hidden bg-[#C9F0FF] text-[#003D5A] w-[345px] rounded-[20px] shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)] relative pt-6 pl-6">
            <div className="text-[24px] font-black leading-[34px] pr-6 mb-[32px] tracking-tighter w-[297px]">
              <h3>You are in great company</h3>
            </div>
            <div className="relative p-6 pr-0 bottom-0 right-0 rounded-br-[20px] bg-gray-50 rounded-tl-[20px] shadow-[0_2px_10px_0_rgba(13,19,27,0.10),0_0_2px_0_rgba(13,19,27,0.20)]">
            </div>
          </div>
        </div> */}
        <div className="relative hidden lg:block flex bg-[#f3f5f8] rounded-[32px] " data-projection-id="2">
          <div className="cursor-pointer text-center z-20 top-[100px] rounded-[20px] pt-[100px] left-[34px]">
            <h1 className="font-['DegularVariable'] text-[64px] font-bold font-black ">You're in great company</h1>
            <h3 className="py-4 text-[24px] font-semibold">Learn more about how our customers use Prosp</h3>
          </div>
          <div className="justify-center w-full mx-auto text-center my-8">
          <a href="/" className="px-8 py-4 border-2 min-w-[500px] text-[18px] border-[#6039db] rounded-xl bg-[#6039db] text-white hover:scale-150 ease-in-out duration-300">See examples</a>
          </div>
          <div className="grid grid-cols-4 grid-rows-1 gap-4 text-center px-24 px-auto">
            <ReviewCountItem connects="300k" details="message sent" />
            <ReviewCountItem connects="6x" details="more replies" />
            <ReviewCountItem connects="100k" details="connections" />
            <ReviewCountItem connects="2k" details="campaigns created" />
          </div>
          <div className="grid grid-cols-3 grid-rows-1 gap-3 p-3">
            <div className="grid gird-rows-3 gap-3">
              <ReviewItem avatar="avatar.png" name="Johe Doe" role="Developer" content=" If you have questions about your organization’s specific Service settings and practices you should contact them directly."/>
              <ReviewItem avatar="avatar1.png" name="Anna" role="Teacher" content="When you register for a June account you are required to provide certain personal information"/>
              <ReviewItem avatar="avatar.png" name="Johe Doe" role="Developer" content="such as your name, and email address, and telephone number, as well as other information that you voluntarily choose to add to your account profile, like a profile photo. "/>
            </div>
            <div className="grid gird-rows-3 gap-3">
              <ReviewItem avatar="avatar2.png" name="Lina" role="Photographer" content=" This may include your contact information, a summary of the problem you are experiencing and any other documentation or information that would be helpful in resolving the issue (which, at your option, may include Personal Data)"/>
              <ReviewItem avatar="avatar2.png" name="Lina" role="Photographer" content="Hello?"/>
              <ReviewItem avatar="avatar.png" name="Johe Doe" role="Developer" content="When you interact with June through the Services, we automatically collect information about you through cookies"/>
            </div>
            <div className="grid gird-rows-3 gap-3">
              <ReviewItem avatar="avatar1.png" name="Anna" role="Teacher" content="browser type and settings, and the date and time of your request."/>
              <ReviewItem avatar="avatar.png" name="Johe Doe" role="Developer" content="In order to perform tasks that are part of the Services we require you to integrate your third party email service with your Service account. "/>
              <ReviewItem avatar="avatar2.png" name="Lina" role="Photographer" content="You or your administrator may also integrate other Third Party Services you use with and into our Services"/>
            </div>
          </div>
        </div>
    </section>
  );
};

export default TestimonialsSection;
