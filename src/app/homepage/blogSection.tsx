"use client";


import "./heroSection.css";
import React, { useState } from "react";

import {   } from "framer-motion";

export default function BlogSection() {


  return (
    <section className="w-full">
      <div className="relative flex flex-col items-center px-6 mt-40 mb-40 font-hero">
        <div className="text-[24px] text-center leading-[34px] lg:text-[40px] text-primary lg:leading-[50px] font-black mb-8 lg:mb-16">
          <h2 className="font-['DegularVariable'] font-bold text-[42px] lg:text-[72px]">Creative <span className="font-['DegularVariable'] font-semibold italic text-[42px] lg:text-[72px]">outbound</span> at scale</h2>
        </div>
        <div className="relative cursor-pointer lg:hidden" data-projection-id="1" >
          <div className="flex flex-col overflow-hidden bg-[#C9F0FF] text-[#003D5A] w-[345px] rounded-[20px] shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)] relative pt-6 pl-6">
            <div className="text-[24px] font-black leading-[34px] pr-6 mb-[32px] tracking-tighter w-[297px]">
              <h3>connect unlimited Linkedin and e-mails accounts</h3>
            </div>
            <div className="relative p-6 pr-0 bottom-0 right-0 rounded-br-[20px] bg-gray-50 rounded-tl-[20px] shadow-[0_2px_10px_0_rgba(13,19,27,0.10),0_0_2px_0_rgba(13,19,27,0.20)]">
              <img src="/june/intercom2.svg" alt="Intercom" />
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block" data-projection-id="2">
          <div className="w-[1259px] pointer-events-none flex flex-col lg:flex-row lg:justify-between text-[#003D5A] rounded-[20px] relative">
            <div className="absolute top-[60px] left-[74px] z-20 text-[24px] overflow-hidden font-black leading-[34px] mb-[32px] tracking-tighter lg:tracking-tight w-[297px] lg:w-[394px]">
              <h3>connect unlimited Linkedin and e-mails accounts</h3>
            </div>
            <div className="relative z-10 pointer-events-none">
              <video id="celebrate-milestones-video" poster="https://res.cloudinary.com/dhjaxcce6/image/upload/v1709561760/landing-page-header-2024/bento/posters/zv1khbkqu88vrchzkesh.png" preload="metadata" className="object-cover w-full h-full max-w-full">
                <source src="https://res.cloudinary.com/dhjaxcce6/video/upload/v1706684770/landing-page-header-2024/bento/rqjne2v9rom1f289krfh.mp4" />
              </video>
            </div>
          </div>
          <div className="cursor-pointer absolute z-20 top-[20px] rounded-[20px] left-[34px] h-[350px] lg:w-[1192px]"></div>
        </div>
        <div className="relative top-[-67px] flex flex-col items-center lg:items-start lg:flex-row gap-x-[24px]">
          <div className="relative mt-8 lg:mt-[24px]">
            <div className="cursor-pointer lg:hidden bg-[#F9E2FB] text-[#560059] flex flex-col p-6 pr-0 h-[583px] w-[345px] rounded-[20px] shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)] relative" data-projection-id="3">
              <div className="text-[24px] font-black leading-[34px] tracking-tighter">Chrome Extension</div>
              <div className="text-[18px] font-medium mt-[8px] leading-[28px] pr-6 tracking-tight">
                <p>Sales at about spped and volume. Prosp is always near and reacty to help you turn a stranger into client in no time.</p>
              </div>
              <img className="relative mt-[22.86px] h-[388px] object-cover object-left m-auto" src="/june/intercom.svg" alt="Alert-intercom" />
            </div>
            <div className="relative hidden lg:block z-20 text-[#560059] flex flex-col h-[583px] lg:h-[600px] w-[345px] lg:w-[585px] rounded-[20px] overflow-hidden shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)] relative" data-projection-id="4" >
              <div className="absolute z-20 p-6 pr-0 pointer-events-none lg:p-10">
                <div className="text-[24px] font-black leading-[34px] tracking-tighter lg:tracking-tight">
                  <h3>Chrome Extension</h3>
                </div>
                <div className="text-[18px] font-medium mt-[8px] leading-[28px] pr-6 tracking-tight lg:w-[475px]">
                  <p>Sales at about spped and volume. Prosp is always near and reacty to help you turn a stranger into client in no time.</p>
                </div>
              </div>
              <div className="absolute z-10 w-full h-full p-0 m-0">
                <video id="celebrate-milestones-video" poster="https://res.cloudinary.com/dhjaxcce6/image/upload/v1709561760/landing-page-header-2024/bento/posters/mo6ii64p2pf0nw4abwbp.png" preload="metadata" className="object-cover w-full h-full max-w-full">
                  <source src="https://res.cloudinary.com/dhjaxcce6/video/upload/v1706684771/landing-page-header-2024/bento/yn9qjjfls3kbqpzsrvhs.mp4" />
                </video>
              </div>
              <div className="cursor-pointer absolute z-20 rounded-[20px] w-full h-full"></div>
            </div>
            <img className="relative z-40 hidden lg:block mt-[75.61px] ml-[159px]" src="/june/all-done-for-you.svg" alt="All-done-for-you" />
          </div>
          <div className="flex flex-col items-center">
            <div className="relative mt-[24px] lg:hidden cursor-pointer overflow-hidden" data-projection-id="5" >
              <div className="bg-[#FFE9C8] text-[#5F2700] overflow-hidden flex flex-col h-[363px] w-[345px] rounded-[20px] shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)] relative p-6">
                <div className="text-[24px] font-black tracking-tighter">
                  <h3>Analytics & Reports</h3>
                </div>
                <div className="text-[18px] font-medium mt-[8px] tracking-tight">
                  <p>Track the success of your campaigns to discover the wining strategy for your outbound</p>
                </div>
                <img className="absolute bottom-0 right-[-14px] h-[183px] object-cover object-left rounded-br-[20px]" src="/june/enriched-with-ai.svg" alt="Enriched-with-ai" />
              </div>
              <img className="absolute top-[155.45px] right-[32.66px]" src="/june/avatar2.svg" alt="Avatar2" />
              <img className="absolute top-[145.34px] right-[-24.69px]" src="/june/avatar1.svg" alt="Avatar1" />
            </div>
            <div className="relative hidden lg:block mt-[24px] lg:mt-[75px] w-[584px] h-[340px] top-[6px] left-[-8.5px]" data-projection-id="6">
              <div className="absolute w-[641.5px] top-[-12px] h-[348px] overflow-none">
                <div className="absolute w-[641.5px] text-[#5F2700] flex flex-col">
                  <div className="absolute z-20 lg:p-[48.5px] top-[-1.5px]">
                    <div className="text-[24px] font-black tracking-tighter lg:tracking-tight">
                      <h3>Analytics & Reports</h3>
                    </div>
                    <div className="text-[18px] font-medium mt-[8px] tracking-tight">
                      <p>Track the success of your campaigns to discover the wining strategy for your outbound</p>
                    </div>
                  </div>
                  <div className="relative z-10 pointer-events-none rounded-[20px]">
                    <video id="celebrate-milestones-video" poster="https://res.cloudinary.com/dhjaxcce6/image/upload/v1709561761/landing-page-header-2024/bento/posters/arbjoti1a44c8cplhq9h.png" preload="metadata" className="object-cover w-full h-full max-w-full">
                      <source src="https://res.cloudinary.com/dhjaxcce6/video/upload/v1706971546/landing-page-header-2024/bento/xsz1uzr3vm8nqss6ybyx.mp4" />
                    </video>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer relative z-20 rounded-[20px] w-full h-full"></div>
            </div>
            <div className="relative hidden lg:block w-[584px] h-[340px] mt-[7.5px]" data-projection-id="7">
              <div className="relative w-[851.5px] right-[253.5px] top-0 text-[#005900] flex flex-col overflow-hidden rounded-[20px] ">
                <div className="absolute top-[16px] right-[54px] z-20 p-6 lg:p-10">
                  <div className="text-[24px] font-black tracking-tighter lg:tracking-tight">
                    <h3>Integrated with your CRM</h3>
                  </div>
                  <div className="text-[18px] font-medium mt-[8px] lg:w-[464px] tracking-tight">
                    <p>Connect Prosp to your CRM to automatically push new leads and update their status in your sales funnel</p>
                  </div>
                </div>
                <div className="relative z-10 pointer-events-none rounded-[20px]">
                  <video id="celebrate-milestones-video" poster="https://res.cloudinary.com/dhjaxcce6/image/upload/v1709561760/landing-page-header-2024/bento/posters/n7bbdkblheiu4dha2mdt.png" preload="metadata" className="object-cover w-full h-full max-w-full">
                    <source src="https://res.cloudinary.com/dhjaxcce6/video/upload/v1706711427/landing-page-header-2024/bento/hq8sj4tmrtcybglwfndn.mp4" />
                  </video>
                </div>
                <div className="cursor-pointer absolute right-[14px] top-[16px] z-30 rounded-[20px] w-[584px] h-[340px]"></div>
              </div>
            </div>
            <div className="relative mt-6 cursor-pointer lg:hidden" data-projection-id="8" >
              <div className="bg-[#DAF9D4] text-[#005900] flex flex-col p-6 overflow-hidden h-[363px] w-[345px] rounded-[20px] shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)] relative p-10">
                <div className="text-[24px] font-black tracking-tighter">
                  <h3>Integrated with your CRM</h3>
                </div>
                <div className="text-[18px] font-medium mt-[8px] tracking-tight">
                  <p>Connect Prosp to your CRM to automatically push new leads and update their status in your sales funnel.</p>
                </div>
                <img className="absolute bottom-0 right-[-14px] h-[183px] object-cover object-left" src="/june/crm.svg" alt="CRM" />
              </div>
              <img className="absolute bottom-[129px] right-[71.12px]" src="/june/avatar1.svg" alt="Avatar2" />
              <img className="absolute bottom-[125px] right-[24px]" src="/june/avatar2.svg" alt="Avatar1" />
              <img className="absolute bottom-[-13px] left-[-53px]" src="/june/active-seats.svg" alt="Active-seats" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
