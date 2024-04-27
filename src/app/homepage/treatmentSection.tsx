"use client";


import "./heroSection.css";
import React, { useState } from "react";
import { useEffect } from 'react';
import { useScroll, useAnimation, motion, useMotionValueEvent } from 'framer-motion';

import {   } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const controls = useAnimation();

  const [videoURL, setVideoURL] = useState('video1-3.webm');
  const [videoType, setVideoType] = useState('video1');
  const [videoColor, setVideoColor] = useState('#F9E2FB');
  const [openVideoDropDown, setOpenVideoDropDown] = useState(false);
  const [reportType, setReportType] = useState('report1');
  const [reportColor, setReportColor] = useState('#F9E2FB');
  const [openReportDropDown, setOpenReportDropDown] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollPos(latest);
  });

  const handleClickVideoType = (clickedURL: string) => {
    setVideoType(clickedURL);
    setOpenVideoDropDown(false);
    if (clickedURL === 'video1') {
      setVideoColor('#F9E2FB');
      setVideoURL('video1-3.webm');
    }
    if (clickedURL === 'video2') {
      setVideoColor('#C9F0FF');
      setVideoURL('video2-3.webm');
    }
    if (clickedURL === 'video3') {
      setVideoColor('#DAF9D4');
      setVideoURL('video3-3.mp4');
    }
  };

  const handleReportEvent = (clickedURL: string) => {
    setReportType(clickedURL);
    setOpenReportDropDown(false);
    if (clickedURL === 'report1') {
      setReportColor('#F9E2FB');

    }
    if (clickedURL === 'report2') {
      setReportColor('#daf9d4');
      console.log("here2");
    }
    if (clickedURL === 'report3') {
      setReportColor('#C9F0FF');

    }
    if (clickedURL === 'report4') {
      setReportColor('#FFD2E1');
    }
    if (clickedURL === 'report5') {
      setReportColor('#FFE9C8');

    }
  };

  useEffect(() => {
    // Check if scrollY is greater than 0
    // console.log(scrollY);
    // if (scrollY.current > 0) {
    //   // Move the component down by 100px
    //   controls.start({ y: 100 });
    // } else {
    //   // Move the component back to its original position
    //   controls.start({ y: 0 });
    // }
  }, [scrollY]);


  return (
    <section className="w-full">
      <motion.div
        className="pt-[80px] mb-[48px] flex flex-col w-full font-hero max-w-[1192px] items-start px-[24px] lg:px-0 lg:flex-row lg:mb-20 lg:p-0 lg:items-end justify-between apperElement"
        initial={{ opacity: 0, scale: 1.5, y: 200 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {/* {scrollY.current} */}
        <div className="text-[56px] w-[345px] leading-[66px] font-black text-[#151531] lg:w-full lg:text-[88px] lg:leading-[106px]  ">
          <h1>
            Product Analytics <br />
            that works for you
          </h1>
        </div>
        <a
          className="relative h-16 w-[227px] border border-[3px] border-[#151531] min-w-[227px] mt-8 lg:ml-[58px] bg-[#151531] text-white rounded-[20px] text-[20px] leading-[24px] font-semibold lg:mb-[22px] hover:scale-110 ease-in-out duration-300"
          href="/"
          rel="noreferrer noopener"
          id="[#151531]-cta"
        >
          <div className="absolute top-[17px] left-[37px]">Get started</div>
          <img
            className="absolute top-[9px] right-[21px]"
            src="/right-arrow-circle.svg"
            alt="Arrow"
          />
        </a>
      </motion.div>
      <div className={`${scrollPos > 0 ? '' : ''} mb-84`}>
      
        <motion.div 
          className="flex justify-end hidden md:flex "
          initial={scrollPos > 0 ? { opacity: 0 }: { opacity: 1 } }
          animate={scrollPos > 0 ? { opacity: 1 }: { opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: scrollPos > 0 ? 1 : 0,

          }}
        >
          <div
            className="flex bg-[#F9E2FB] text-[#560059] p-3 rounded-t-2xl text-[20px] hover:cursor-pointer"
            onClick={() => handleClickVideoType('video1')}
          >
            <img src="./reports-icon.svg" className="mr-1" />
            Ready to go reports
          </div>
          <div
            className="flex bg-[#C9F0FF] text-[#003D5A] p-3 rounded-t-2xl text-[20px] hover:cursor-pointer"
            onClick={() => handleClickVideoType('video2')}
          >
            <img src="./profiles.svg" className="mr-1" />
            Customer profiles
          </div>
          <div
            className="flex bg-[#DAF9D4] text-[#005900] p-3 rounded-t-2xl text-[20px] hover:cursor-pointer"
            onClick={() => handleClickVideoType('video3')}
          >
            <img src="./sync-with-crm.svg" className="mr-1" />
            Synced with your CRM
          </div>
        </motion.div>
        
        <div className="w-full flex justify-end pr-4">
       
          <div className={`md:hidden absolute z-50 max-w-[90%] flex flex-col w-full items-end p-4 bg-white rounded-[20px] gap-y-4 outline visible ${openVideoDropDown ? '' : 'hidden'}`}>
            <div
              className="hover:cursor-pointer"
              onClick={() => setOpenVideoDropDown(false)}
            ><img src="/june/close.svg" alt="Close" /></div>
            <div
              className="flex w-full justify-between h-[40px] px-4 rounded-[10px] items-center cursor-pointer text-[##560059] bg-[#F9E2FB]"
              onClick={() => handleClickVideoType('video1')}
            >
              <div className="flex gap-x-2"><img src="/june/reports-icon.svg" alt="Reports" />Ready to go reports</div>
              <img className={`${videoType === 'video1' ? '' : 'hidden'}`} src="/june/check.svg" alt="Close" />
            </div>
            <div
              className="flex w-full justify-between h-[40px] px-4 rounded-[10px] items-center cursor-pointer text-[##003D5A] bg-[#C9F0FF]"
              onClick={() => handleClickVideoType('video2')}
            >
              <div className="flex gap-x-2"><img src="/june/profiles.svg" alt="Profiles" />Customer profiles</div>
              <img className={`${videoType === 'video2' ? '' : 'hidden'}`} src="/june/check.svg" alt="Close" />
            </div>
            <div
              className="flex w-full justify-between h-[40px] px-4 rounded-[10px] items-center cursor-pointer text-[##005900] bg-[#DAF9D4]"
              onClick={() => handleClickVideoType('video3')}
            >
              <div className="flex gap-x-2"><img src="/june/sync-with-crm.svg" alt="CRM" />Synced with your CRM</div>
              <img className={`${videoType === 'video3' ? '' : 'hidden'}`} src="/june/check.svg" alt="Close" />
            </div>
          </div>
        </div>
        <div className="justify-end flex md:hidden ">

          <div
            className={`flex bg-[#F9E2FB] text-[#560059] p-3 rounded-t-2xl text-[20px] hover:cursor-pointer ${videoType === 'video1' ? '' : 'hidden'}`}
            onClick={() => setOpenVideoDropDown(true)}
          >
            
            <img src="./reports-icon.svg" className="mr-1" />
            Ready to go reports
            <img src="/june/dropdown-icon.svg" alt="dropdown" />
          </div>
          <div
            className={`flex bg-[#C9F0FF] text-[#003D5A] p-3 rounded-t-2xl text-[20px] hover:cursor-pointer ${videoType === 'video2' ? '' : 'hidden'}`}
            onClick={() => setOpenVideoDropDown(true)}
          >
            <img src="./profiles.svg" className="mr-1" />
            Customer profiles
            <img src="/june/dropdown-icon.svg" alt="dropdown" />
          </div>
          <div
            className={`flex bg-[#DAF9D4] text-[#005900] p-3 rounded-t-2xl text-[20px] hover:cursor-pointer ${videoType === 'video3' ? '' : 'hidden'}`}
            onClick={() => setOpenVideoDropDown(true)}
          >
            <img src="./sync-with-crm.svg" className="mr-1" />
            Synced with your CRM
            <img src="/june/dropdown-icon.svg" alt="dropdown" />
          </div>
        </div>

        <motion.div 
          className="absolute"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
            delay: 2.5,
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <img src="/june/all-done-for-you.svg" alt="spring" className="hidden lg:block relative object-contain top-[-104.22px] left-[48.31px] z-50"  />
        </motion.div>
        <motion.div animate={controls} className={`transform-origin: center bottom; transform: none; w-full bg-[${videoColor}] rounded-[32px] rounded-tr-[0px]`}>
        
        
          <motion.div
            className="p-4 rounded-[32px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <motion.div 
              className="relative z-20 flex items-center gap-x-2 pl-4 w-full h-[12.37px] md:h-[25px] lg:h-[43px] rounded-t-[32px] bg-white border-b-[1px] border-[#E9ECEF]"
              initial={scrollPos > 0 ? { y: -50 }: { y: 0 } }
              animate={scrollPos > 0 ? { y: 0 }: { y:-50 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              <div className="hidden lg:block h-[10px] w-[10px] rounded-full bg-[#ED6A5E]"></div>
              <div className="hidden lg:block h-[10px] w-[10px] rounded-full bg-[#F4BF50]"></div>
              <div className="hidden lg:block h-[10px] w-[10px] rounded-full bg-[#61C554]"></div>
            </motion.div>

            <motion.video 
              id="hero-video-player" 
              src={`/videos/${videoURL}`} 
              
              initial={scrollPos > 0 ? { y: -50 }: { y: 0 } }
              animate={scrollPos > 0 ? { y: 0 }: { y:-50 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
              }}
              poster="https://res.cloudinary.com/dhjaxcce6/image/upload/v1706625996/landing-page-header-2024/images/qzoxkpf25a6zifxjunid.png" 
              className="absolute z-10 relative muted" 
               
              preload="auto"
              playsInline
              autoPlay
            >
              {/* <source srcset="https://res.cloudinary.com/dhjaxcce6/video/upload/q_auto,f_auto,w_640/v1705400380/landing-page-header-2024/tcm9rwkyazz79wu7l6bp.mp4" media="(max-width: 640px)" type="video/mp4">
              <source srcset="https://res.cloudinary.com/dhjaxcce6/video/upload/q_auto,f_auto,w_1280/v1705400380/landing-page-header-2024/tcm9rwkyazz79wu7l6bp.mp4" media="(max-width: 1280px)" type="video/mp4"> */}
            </motion.video>
            
            {/* <video
              className="rounded-b-[32px]"
              id="hero-video-player"
              src={`/videos/${videoURL}`}
              preload="auto"
              playsInline
              autoPlay
              controls
              
            />
            <source
              src="/videos/video1-3.webm"
              type="video/mp4"
            /> */}
            {/* </video> */}
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center mt-[160px]">
        <div className="text-center text-primary font-hero font-black w-[345px] text-[24px] leading-[34px] lg:w-full lg:px-0 lg:text-[40px] lg:leading-[50px]">
          <h4>Trusted by the next-gen B2B SaaS</h4>
        </div>
        <div className="items-center hidden mt-12 lg:flex gap-x-16 justify-stretch">
          <img className="object-cover h-[32px]" src="/june/aleph.svg" alt="Aleph" />
          <img className="object-cover h-[28px]" src="/june/amie.svg" alt="Amie" />
          <img className="object-cover h-[35px]" src="/june/causal.svg" alt="Causal" />
          <img className="object-cover h-[48px]" src="/june/passionfroot.svg" alt="Passionfruit" />
          <img className="object-cover h-[32px]" src="/june/reveal.svg" alt="Reveal" />
          <img className="object-cover h-[32.75px]" src="/june/rootly.svg" alt="Rootly" />
        </div>
        <div className="relative w-[345px] flex flex-col items-start mx-auto mt-12 lg:hidden">
          <div className="flex items-center gap-x-[52.59px] ">
            <img src="/june/aleph.svg" alt="Aleph" />
            <img src="/june/causal.svg" alt="Causal" />
          </div>
          <div className="flex items-center relative left-[18.5px] gap-x-[41.21px] mt-[31.5px]">
            <img src="/june/amie.svg" alt="Amie" />
            <img src="/june/passionfroot.svg" alt="Passionfruit" />
          </div>
          <div className="flex items-center gap-x-[25.86px] mt-[25px]">
            <img className="-rotate-2" src="/june/reveal.svg" alt="Reveal" />
            <img src="/june/rootly.svg" alt="Rootly" />
          </div>
        </div>
        <div className="flex flex-col mt-20 lg:flex-row lg:gap-x-16 gap-y-8 lg:mt-20">
          <div className="flex flex-col items-center justify-center relative w-[209px] h-[63px] font-hero font-black text-primary leading-7 text-4">
            <img className="absolute" src="/june/laurel-wreath.svg" alt="Laurel Wreath" />
            <div>Product Hunt award</div>
            <div className="text-[24px] ">Winner</div>
          </div>
          <div className="flex flex-col items-center justify-center relative w-[209px] h-[63px] font-hero font-black text-primary leading-7 text-4">
            <img className="absolute" src="/june/laurel-wreath.svg" alt="Laurel Wreath" />
            <div>Fastest growing on</div>
            <div className="text-[24px] ">Segment</div>
          </div><div className="flex flex-col items-center justify-center relative w-[209px] h-[63px] font-hero font-black text-primary leading-7 text-4">
            <img className="absolute" src="/june/laurel-wreath.svg" alt="Laurel Wreath" />
            <div>G2 High Performer</div>
            <div className="text-[24px] ">2023</div>
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-y-8 lg:gap-y-16 items-center mt-40 text-primary font-hero mb-[124px]">
        <div className="text-[24px] leading-[34px] lg:text-[40px] lg:leading-[50px] font-black text-center w-[345px] md:w-full">
          <h2>We already built the reports you need</h2>
        </div>
      


        <div className="bg-[#F8F9FA] p-4 pb-0 h-[502px] relative overflow-hidden lg:h-fit lg:p-[20px] lg:pb-0 rounded-[20px] mt-2 lg:mt-0 shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)]">
        <div 
          className={`w-full flex justify-center `}
        >

          <div className={`lg:hidden absolute z-50 flex flex-col items-end p-4 bg-white rounded-[20px] gap-y-4 visible ${openReportDropDown ? '' : 'hidden'}`}>
            <div
              className="hover:cursor-pointer "
              onClick={() => {setOpenReportDropDown(false)}}
            ><img src="/june/close.svg" alt="Close" /></div>
            <div 
              className="flex hover:cursor-pointer items-center border-2 border-[#F9E2FB] shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)] lg:hidden justify-between rounded-[20px] bg-white p-4 w-[313px] h-[64px]"
              onClick={() => {handleReportEvent('report1')}}
            >
              <div className="flex items-center gap-x-[12px]">
                <div className="flex justify-center items-center h-8 w-8 rounded-full bg-[#F9E2FB]">
                  <img className="p-1.5" src="/june/activation-icon.svg" alt="report icon" />
                </div>
                <div className="font-semibold text-[20px]">Activation</div>
              </div>
              <img className={`mr-1 ${reportType === 'report1' ? 'visible' : 'hidden'}`}  src="/june/check.svg" alt="Check" />
            </div>

            <div 
              className="flex hover:cursor-pointer items-center border-2 border-gray-200 lg:hidden justify-between rounded-[20px] bg-white p-4 w-[313px] h-[64px]"
              onClick={() => {handleReportEvent('report2')}}
            >
              <div className="flex items-center gap-x-[12px]">
                <div className="flex justify-center items-center h-8 w-8 rounded-full bg-[#DAF9D4]">
                  <img className="p-1.5" src="/june/retention-icon.svg" alt="report icon" />
                </div>
                <div className="font-semibold text-[20px]">Retention</div>
              </div>
              <img className={`mr-1 ${reportType === 'report2' ? 'visible' : 'hidden'}`}  src="/june/check.svg" alt="Check" />
            </div>
            
            <div 
              className="flex hover:cursor-pointer items-center border-2 border-gray-200 lg:hidden justify-between rounded-[20px] bg-white p-4 w-[313px] h-[64px]"
              onClick={() => {handleReportEvent('report3')}}
            >
              <div className="flex items-center gap-x-[12px]">
                <div className="flex justify-center items-center h-8 w-8 rounded-full bg-[#C9F0FF]">
                  <img className="p-1.5" src="/june/active-users-icon.svg" alt="report icon" />
                </div>
                <div className="font-semibold text-[20px]">Active users</div>
              </div>
              <img className={`mr-1 ${reportType === 'report3' ? 'visible' : 'hidden'}`}  src="/june/check.svg" alt="Check" />
            </div>
            
            <div 
              className="flex hover:cursor-pointer items-center border-2 border-gray-200 lg:hidden justify-between rounded-[20px] bg-white p-4 w-[313px] h-[64px]"
              onClick={() => {handleReportEvent('report4')}}
            >
              <div className="flex items-center gap-x-[12px]">
                <div className="flex justify-center items-center h-8 w-8 rounded-full bg-[#FFD2E1]">
                  <img className="p-1.5" src="/june/features-icon.svg" alt="report icon" />
                </div>
                <div className="font-semibold text-[20px]">Features</div>
              </div>
              <img className={`mr-1 ${reportType === 'report4' ? 'visible' : 'hidden'}`}  src="/june/check.svg" alt="Check" />
            </div>
            <div 
              className="flex hover:cursor-pointer items-center border-2 border-gray-200 lg:hidden justify-between rounded-[20px] bg-white p-4 w-[313px] h-[64px]"
              onClick={() => {handleReportEvent('report5')}}
            >
              <div className="flex items-center gap-x-[12px]">
                <div className="flex justify-center items-center h-8 w-8 rounded-full bg-[#FFE9C8]">
                  <img className="p-1.5" src="/june/churn-risk-icon.svg" alt="report icon" />
                </div>
                <div className="font-semibold text-[20px]">Churn risk</div>
              </div>
              <img className={`mr-1 ${reportType === 'report5' ? 'visible' : 'hidden'}`}  src="/june/check.svg" alt="Check" />
            </div>
          </div>
        </div>
          <div className=" gap-x-[15px] hidden lg:flex mb-20">


            
            <div
              className={`flex items-center gap-x-[6px] bg-white cursor-pointer text-[24px] rounded-[20px] p-[22px] pr-[24px] lg:border-2 border-${reportType === 'report1' ? '[' + reportColor + ']' : 'white'}`}
              onMouseEnter={() => handleReportEvent("report1")}
            >
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-[#F9E2FB]">
                <img src="/june/activation-icon.svg" />
              </div>
              <div className="font-semibold whitespace-nowrap">Activation</div>
            </div>
            <div
              className={`flex items-center gap-x-[6px] bg-white cursor-pointer text-[24px] rounded-[20px] p-[22px] pr-[24px] lg:border-2 border-${reportType === 'report2' ? '[' + reportColor + ']' : 'white'}`}
              onMouseEnter={() => handleReportEvent("report2")}
            >
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-[#DAF9D4]">
                <img src="/june/retention-icon.svg" />
              </div>
              <div className="font-semibold whitespace-nowrap">Retention</div>
            </div>
            <div
              className={`flex items-center gap-x-[6px] bg-white cursor-pointer text-[24px] rounded-[20px] p-[22px] pr-[24px] lg:border-2 border-${reportType === 'report3' ? '[' + reportColor + ']' : 'white'}`}
              onMouseEnter={() => handleReportEvent("report3")}
            >
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-[#C9F0FF]">
                <img src="/june/active-users-icon.svg" />
              </div>
              <div className="font-semibold whitespace-nowrap">Active users</div>
            </div>
            <div
              className={`flex items-center gap-x-[6px] bg-white cursor-pointer text-[24px] rounded-[20px] p-[22px] pr-[24px] lg:border-2 border-${reportType === 'report4' ? '[' + reportColor + ']' : 'white'}`}
              onMouseEnter={() => handleReportEvent("report4")}
            >
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-[#FFD2E1]">
                <img src="/june/features-icon.svg" />
              </div>
              <div className="font-semibold whitespace-nowrap">Features</div>
            </div>
            <div
              className={`flex items-center gap-x-[6px] bg-white cursor-pointer text-[24px] rounded-[20px] p-[22px] pr-[24px] lg:border-2 border-${reportType === 'report5' ? '[' + reportColor + ']' : 'white'}`}
              onMouseEnter={() => handleReportEvent("report5")}
            >
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-[#FFE9C8]">
                <img src="/june/churn-risk-icon.svg" />
              </div>
              <div className="font-semibold whitespace-nowrap">Churn risk</div>
            </div>
          </div>
          
          <div 
            className=" hover:cursor-pointer flex items-center lg:hidden justify-between rounded-[20px] border-2 border-[#F9E2FB] p-4 mb-8 w-[313px] h-[64px] shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)]"
            onClick={() => {setOpenReportDropDown(true)}}
          >
            <div className="flex items-center gap-x-[12px] pointer-events-none">
              <div className="flex justify-center items-center h-8 w-8 rounded-full bg-[#F9E2FB]">
                <img className="p-1.5" src="/june/activation-icon.svg" alt="report icon" />
              </div>
              <div className="font-semibold text-[20px]">Activation</div>
            </div>
            <img className="m-1" src="/june/dropdown-icon.svg" alt="Dropdown" />
          </div>
          <motion.div 
            className={`${reportType === 'report1' ? 'lg:relative lg:block' : 'hidden'}` }
          >
            <div className="lg:relative lg:ml-[60px]">
              <div className="block lg:hidden">
                <img className="absolute z-10 left-[130px] top-[160px] lg:left-[706.5px] lg:-top-[21.5px] rotate-2 visible" src="/june/fastest.svg" alt="Fastest"  />
                <img className="absolute bottom-20 lg:hidden rounded-br-[20px] visible" src="/june/struggling.svg" alt="Milestones"  />
              </div>
              <motion.div 
                className="hidden  lg:block"
                initial={{ opacity: 0, scale: 1, y: -100 }}
                animate={reportType === 'report1' ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="transform-none">
                  <img className="h-[390px] w-[960px] object-cover overflow-visible lg:translate-y-[2px] visible" src="/june/milestones.svg" alt="Activation"  />
                </div>
                <img className="absolute z-10 left-[21.5px] top-[101.5px] lg:left-[546.5px] lg:-top-[45.5px] transform translate-y-0 scale-100 rotate-[-2deg] translate-z-0 visible" src="/june/struggling.svg" alt="Struggling"  />
                <img className="absolute z-10 left-[181.5px] top-[125.5px] lg:left-[706.5px] lg:-top-[21.5px] rotate-2 transform translate-y-0 scale-100 rotate-[-2deg] translate-z-0 visible" src="/june/fastest.svg" alt="Fastest"  />
              </motion.div>
            </div>
          </motion.div>


          <motion.div 
            className={`${reportType === 'report2' ? 'lg:relative lg:block' : 'hidden'}` }
          >
            <div className="lg:relative lg:ml-[60px]">
              <div className="flex justify-center items-center lg:hidden">
                <img className="lg:hidden rounded-br-[20px]" src="/june/retention/company.svg" alt="Retention"   />
                <img className="absolute left-[160px] bottom-12" src="/june/retention/cohorts2.svg" alt="Cohorts"  />
              </div>
              <motion.div 
                className="hidden  lg:block"
                initial={{ opacity: 0, scale: 1, y: -100 }}
                animate={reportType === 'report2' ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div data-projection-id="311">
                  <img className="hidden lg:block h-[390px] w-[960px] object-cover overflow-visible lg:translate-y-px" src="/june/retention/retention.svg" alt="Retention"  />
                </div>
                <img className="absolute z-10 left-[21.5px] top-[101.5px] lg:left-[546.5px] lg:-top-[45.5px] -rotate-2" src="/june/retention/company.svg" alt="Company" data-projection-id="312"   />
                <div className="absolute z-10 w-[320px] left-[181.5px] top-[125.5px] lg:left-[706.5px] lg:-top-[21.5px] rotate-2" data-projection-id="313" >
                  <img className="absolute" src="/june/retention/cohorts1.svg" alt="Cohorts"  />
                  <img className="relative left-[24px] top-[112.5px]" src="/june/retention/cohorts2.svg" alt="Cohorts"  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className={`${reportType === 'report3' ? 'lg:relative lg:block' : 'hidden'}` }
            
          >
              <div className="lg:relative lg:ml-[60px]">
                <div className="block lg:hidden">
                  <img className="absolute z-10 top-[101.5px]" src="/june/active-users/stripe.svg" alt="Stripe" />
                    <img className="absolute z-20 bottom-8 right-4 lg:hidden rounded-br-[20px]" src="/june/active-users/include-weekends.svg" alt="Active-users" />
                    </div>
                    <motion.div 
                      className="hidden  lg:block"
                      initial={{ opacity: 0, scale: 1, y: -100 }}
                      animate={reportType === 'report3' ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <img className="hidden lg:block absolute z-0 -left-[50px] bottom-[302px] -rotate-2" src="/june/active-users/include-weekends.svg" alt="Include-weekends" data-projection-id="428"  />
                      {/* style="transform: translateY(0px) scale(1) rotate(-2deg) translateZ(0px);" */}
                        <div data-projection-id="429">
                          <img className="absolute lg:relative z-0 bottom-[-26px] lg:bottom-0 right-0 h-[394px] lg:h-[390px] w-[329px] lg:w-[960px] object-cover object-left lg:object-center overflow-visible lg:translate-y-[2px]" src="/june/active-users/active-users.svg" alt="Active-users"  />
                        </div>
                        <img className="absolute z-10 left-[21.5px] top-[101.5px] lg:left-[546.5px] lg:-top-[45.5px] -rotate-2" src="/june/active-users/stripe.svg" alt="Stripe" data-projection-id="430"  />
                        {/* style="transform: translateY(0px) scale(1) rotate(-2deg) translateZ(0px);" */}
                      </motion.div>
                    </div>
                </motion.div>

                <motion.div 
                  className={`${reportType === 'report4' ? 'lg:relative lg:block' : 'hidden'}` }
                 
                >
                  <div className="lg:relative lg:ml-[60px]">
                    <div className="block lg:hidden">
                      <img className="absolute bottom-0 right-0 lg:hidden rounded-br-[20px]" src="/june/features/features-mobile.svg" alt="Features" />
                    </div>
                    <motion.div 
                      className="hidden  lg:block"
                      initial={{ opacity: 0, scale: 1, y: -100 }}
                      animate={reportType === 'report4' ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <img className="absolute z-0 left-[52.23px] bottom-[276.3px] lg:-left-[50px] lg:bottom-[302px] -rotate-2 " src="/june/features/launch-mode.svg" alt="Launch-mode" data-projection-id="431"  />
                      {/* style="transform: translateY(0px) scale(1) rotate(-2deg) translateZ(0px);" */}
                        <div data-projection-id="432">
                          <img className="absolute lg:relative z-0 bottom-[-26px] lg:bottom-0 right-0 h-[394px] lg:h-[390px] w-[329px] lg:translate-y-[2px] lg:w-[960px] object-cover object-left lg:object-center overflow-visible" src="/june/features/features.svg" alt="Features"  />
                        </div>
                        <img className="absolute z-0 left-[13.2px] bottom-[438.6px] lg:left-[136px] lg:bottom-[326.5px] -rotate-2" src="/june/features/live-users.svg" alt="Live-users" data-projection-id="433" />
                        {/* style="transform: translateY(0px) scale(1) rotate(-2deg) translateZ(0px);" */}
                          <img className="absolute z-10 left-[37.33px] bottom-[533.33px] lg:left-[759.67px] lg:bottom-[287.33px] rotate-2" src="/june/features/adoption-goals.svg" alt="Adoption-goals" data-projection-id="434" />
                          {/* style="transform: translateY(0px) scale(1) rotate(2deg) translateZ(0px);" */}
                          </motion.div>
                        </div>
                    </motion.div>

                    <motion.div 
                      className={`${reportType === 'report5' ? 'lg:relative lg:block' : 'hidden'}` }

                    >
                    <div className="lg:relative lg:ml-[60px]">
                      <div className="block lg:hidden">
                        <img className="absolute bottom-0 right-0 lg:hidden rounded-br-[20px]" src="/june/churn-risk/churn-risk-mobile.svg" alt="Churn-risk"  />
                      </div>
                      <motion.div 
                        className="hidden  lg:block"
                        initial={{ opacity: 0, scale: 1, y: -100 }}
                        animate={reportType === 'report5' ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.8,
                          delay: 0.3,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <div data-projection-id="442">
                          <img className="hidden lg:block h-[390px] w-[960px] object-cover overflow-visible lg:translate-y-[2px]" src="/june/churn-risk/churn-risk.svg" alt="Churn-risk"  />
                        </div>
                        <img className="absolute z-10 left-[21.5px] top-[101.5px] lg:left-[546.5px] lg:-top-[45.5px] -rotate-2" src="/june/churn-risk/audiences.svg" alt="Audiences" data-projection-id="443"  />
                        {/* style="transform: translateY(0px) scale(1) rotate(-2deg) translateZ(0px); visibility: visible;" */}
                          <img className="absolute z-10 left-[181.5px] top-[125.5px] lg:left-[706.5px] lg:-top-[21.5px] rotate-2" src="/june/churn-risk/miro.svg" alt="Miro" data-projection-id="444"   />
                          {/* style="transform: translateY(0px) scale(1) rotate(2deg) translateZ(0px); visibility: visible;" */}
                          </motion.div>
                      </div>
                    </motion.div>


                </div>
                <div className="hidden lg:visible bg-white text-[18px] flex items-center justify-center h-[76px] w-[288px] font-bold rounded-[20px] shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)] absolute z-25 -bottom-[48px] left-[58px] lg:-bottom-[61px] lg:left-[843px] rotate-2">
                  <div className="flex items-center gap-x-[12px]">
                    <svg id="ask-ai" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.3804 4.23716C10.5976 4.24479 10.8064 4.32293 10.9751 4.45978C11.1439 4.59662 11.2635 4.78472 11.3159 4.9956L12.2668 8.82579C12.4715 9.65066 12.8831 10.4097 13.4628 11.0313C14.0424 11.6529 14.7709 12.1164 15.5795 12.3782L19.334 13.594C19.5406 13.6611 19.7197 13.7936 19.8443 13.9715C19.9689 14.1494 20.0322 14.363 20.0246 14.58C20.0171 14.7971 19.939 15.0058 19.8023 15.1746C19.6656 15.3433 19.4777 15.463 19.2669 15.5155L15.4367 16.4664C14.6119 16.6711 13.8528 17.0828 13.2312 17.6624C12.6096 18.242 12.1461 18.9705 11.8843 19.7791L10.6685 23.5336C10.6015 23.7402 10.469 23.9193 10.2911 24.0439C10.1132 24.1685 9.89954 24.2318 9.68248 24.2243C9.46542 24.2167 9.25673 24.1386 9.08796 24.0019C8.91919 23.8652 8.79951 23.6773 8.74702 23.4665L7.79611 19.6363C7.59138 18.8115 7.17976 18.0524 6.60013 17.4308C6.0205 16.8092 5.29199 16.3457 4.48341 16.0839L0.728884 14.8681C0.522305 14.8011 0.343175 14.6686 0.218576 14.4907C0.093977 14.3128 0.0306827 14.0992 0.0382626 13.8821C0.0458424 13.665 0.123884 13.4563 0.260589 13.2876C0.397294 13.1188 0.58523 12.9991 0.795984 12.9466L4.62617 11.9957C5.45104 11.791 6.21011 11.3794 6.83169 10.7997C7.45327 10.2201 7.91684 9.4916 8.17861 8.68302L9.39438 4.9285C9.46132 4.72178 9.59377 4.54249 9.77168 4.41775C9.94959 4.29302 10.1633 4.22962 10.3804 4.23716ZM22.5127 0.658389C22.7357 0.66605 22.9497 0.748045 23.1207 0.891329C23.2917 1.03461 23.4098 1.23096 23.4564 1.44914L23.752 2.84163C24.0227 4.10519 24.9666 5.11741 26.2082 5.47563L27.5767 5.86762C27.7915 5.92887 27.9797 6.06028 28.1111 6.2409C28.2425 6.42152 28.3097 6.64096 28.3019 6.86421C28.2941 7.08746 28.2118 7.30167 28.0681 7.47269C27.9244 7.6437 27.7275 7.76167 27.5089 7.80778L26.1164 8.10336C24.8529 8.37409 23.8407 9.31801 23.4824 10.5596L23.0904 11.9281C23.0292 12.1429 22.8978 12.331 22.7172 12.4625C22.5365 12.5939 22.3171 12.6611 22.0939 12.6533C21.8706 12.6455 21.6564 12.5632 21.4854 12.4195C21.3144 12.2758 21.1964 12.0789 21.1503 11.8603L20.8547 10.4678C20.7224 9.84741 20.424 9.27461 19.9914 8.81066C19.5588 8.34671 19.0082 8.00908 18.3985 7.83384L17.03 7.44184C16.8152 7.3806 16.627 7.24919 16.4956 7.06857C16.3641 6.88794 16.297 6.66851 16.3048 6.44526C16.3126 6.22201 16.3949 6.00779 16.5386 5.83678C16.6823 5.66577 16.8792 5.5478 17.0977 5.50169L18.4902 5.20611C19.1107 5.07383 19.6835 4.77542 20.1474 4.34278C20.6114 3.91015 20.949 3.35955 21.1242 2.74987L21.5162 1.38139C21.5779 1.16699 21.7095 0.979362 21.89 0.848354C22.0706 0.717346 22.2898 0.650479 22.5127 0.658389ZM19.8858 18.5776C20.0957 18.5848 20.298 18.6579 20.464 18.7866C20.63 18.9152 20.7513 19.0929 20.8106 19.2943L21.2806 20.889C21.4597 21.4917 21.9097 21.977 22.4997 22.1964L24.0577 22.7778C24.2539 22.8514 24.422 22.9847 24.5383 23.1589C24.6546 23.3332 24.7133 23.5396 24.7059 23.749C24.6986 23.9584 24.6257 24.1602 24.4976 24.3259C24.3694 24.4916 24.1924 24.6129 23.9916 24.6726L22.3968 25.1439C21.7942 25.323 21.3088 25.773 21.0895 26.363L20.5081 27.921C20.4345 28.1172 20.3012 28.2853 20.1269 28.4016C19.9526 28.5179 19.7462 28.5766 19.5368 28.5693C19.3275 28.5619 19.1257 28.4891 18.9599 28.3609C18.7942 28.2327 18.6729 28.0557 18.6132 27.8549L18.1419 26.2601C18.054 25.9626 17.8981 25.6896 17.6865 25.4627C17.475 25.2358 17.2135 25.0612 16.9228 24.9528L15.3648 24.3714C15.1686 24.2978 15.0005 24.1645 14.8842 23.9902C14.7679 23.8159 14.7093 23.6095 14.7166 23.4002C14.7239 23.1908 14.7968 22.989 14.925 22.8232C15.0532 22.6575 15.2302 22.5362 15.431 22.4765L17.0257 22.0052C17.6283 21.8262 18.1137 21.3761 18.3331 20.7861L18.9145 19.2281C18.9877 19.0315 19.1209 18.8629 19.2952 18.7462C19.4695 18.6294 19.6761 18.5705 19.8858 18.5776Z" fill="#C172FF"></path>
                    </svg>
                    <p className="font-bold ask-ai-container">Ask any question with AI</p>
                  </div>
                </div>
              </div>



        </section>
        );
}
