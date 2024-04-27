"use client";

import "./heroSection.css";
import React, { useState } from "react";
import { useScroll, useAnimation, motion, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function HeroSection() {
  const textArray = ['videos','messages','voice notes','e-mails', 'sequences'];
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const [videoURL, setVideoURL] = useState('video1-3.webm');
  const [videoType, setVideoType] = useState('video1');
  const [videoNumber, setVideoNumber] = useState(1);
  const [videoColor, setVideoColor] = useState('#F9E2FB');
  const [openVideoDropDown, setOpenVideoDropDown] = useState(false);
  const [animateText, setAnimateText] = useState(0);
  const [scrollPos, setScrollPos] = useState(1);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
  const [isComplete, setIsCompleted] = useState(false);
  const [animatePos, setAnimatePos] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollPos(latest);
  });

  const handleClickVideoType = (clickedURL: string) => {
    setVideoType(clickedURL);
    setOpenVideoDropDown(false);
    if (clickedURL === 'video1') {
      setVideoColor('#F9E2FB');
      setVideoURL('video1-3.webm');
      setVideoNumber(1);
    }
    if (clickedURL === 'video2') {
      setVideoColor('#C9F0FF');
      setVideoURL('video2-3.webm');
      setVideoNumber(2);
    }
    if (clickedURL === 'video3') {
      setVideoColor('#DAF9D4');
      setVideoURL('video3-3.mp4');
      setVideoNumber(3);
    }
  };
  const handleFinishAnimate = () => {
    
    animatePos === 3 ? setAnimateText( (animateText + 1) % 5 ) : {};
    setAnimatePos( (animatePos + 1) % 4 );
    isAnimationCompleted ? {} : setIsCompleted(!isComplete);
   setIsAnimationCompleted(!isAnimationCompleted);
  }
  return (
    <section className="w-full">
      <motion.div
        className="pt-[80px]  max-w-[1192px] mx-auto mb-[48px] flex flex-col w-full font-hero max-w-[1192px] items-start px-[24px] lg:px-0 lg:flex-row lg:mb-20 lg:p-0 lg:items-end justify-between apperElement"
        initial={{ opacity: 0, scale: 1.5, y: 200 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        onAnimationComplete={() => setScrollPos(0)}
      >
        {/* {scrollY.current} */}
        <div className="font-['DegularVariable'] font-bold text-[36px] w-[345px] leading-[66px] font-black text-[#151531] lg:w-full lg:text-[64px] lg:leading-[106px]  ">
          <h3 className="w-full font-['DegularVariable'] font-bold">
            Book meetings with 
          </h3> 
          <div className="flex font-['DegularVariable'] font-bold md:flex-row flex-col">
            <h3 className="mr-4">
              AI personalized 
            </h3>
            <motion.p
              className="text-[#6039db] flex"
              // initial={!isAnimationCompleted ? { opacity: 0,  x: 0 } : { opacity: 1,  x: 10 }}
              animate={ isAnimationCompleted ? { opacity: 0,  y: isComplete ? 10: -10} : { opacity: isComplete? 1 : 0,  y: 0}}
              transition={{
                duration: isComplete === !isAnimationCompleted  ? 0.5: 0,
                 ease: [0, 0.71, 0.2, 1.01],
                // repeat  : 1, 
                // repeatType: "mirror",
                // repeatDelay : 0.8,
                 delay: isComplete === !isAnimationCompleted  ? 0.3 : 0,
              }}
              //onAnimationComplete ={() => {setAnimateText(animateText + 1)}}
              onAnimationComplete ={() => {handleFinishAnimate()}}
            > 
              {textArray[animateText]}
            </motion.p>
          </div>
        </div>
        <a
          className="relative text-center h-16 w-[227px] border border-[3px] border-[#6039db] min-w-[227px] mt-8 lg:ml-[58px] bg-[#6039db] text-white rounded-[20px] text-[20px] leading-[24px] font-semibold lg:mb-[22px] hover:scale-110 ease-in-out duration-300"
          href="/"
          rel="noreferrer noopener"
          id="[#151531]-cta"
        >
          <div className="m-auto mt-4">Get started</div>
        </a>
      </motion.div>
      <div className={`${scrollPos > 1 ? '' : ''} mb-84 `}>
        <motion.div 
          className="flex justify-end hidden md:flex   max-w-[1192px] mx-auto"
          initial={scrollPos >= 1 ? { opacity:  0 }: { opacity: scrollPos == 1 ? 0 : 1 } }
          animate={scrollPos >= 1 ? { opacity: scrollPos == 1 ? 0 : 1 }: { opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: scrollPos >1 ? 0.3 : 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div
            className="flex bg-[#F9E2FB] text-[#560059]  min-w-[250px] p-3 rounded-t-2xl text-[20px] hover:cursor-pointer"
            onClick={() => handleClickVideoType('video1')}
          >
            <img src="./reports-icon.svg" className="mr-1" />
            Creative outreach
          </div>
          <div
            className="flex bg-[#C9F0FF] text-[#003D5A] min-w-[250px] p-3 rounded-t-2xl text-[20px] hover:cursor-pointer"
            onClick={() => handleClickVideoType('video2')}
          >
            <img src="./profiles.svg" className="mr-1" />
            Manage replies
          </div>
          <div
            className="flex bg-[#DAF9D4] text-[#005900] min-w-[250px] p-3 rounded-t-2xl text-[20px] hover:cursor-pointer"
            onClick={() => handleClickVideoType('video3')}
          >
            <img src="./sync-with-crm.svg" className="mr-1" />
            Find Leads
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full flex justify-end pr-4 "
          initial={scrollPos > 1 ? { opacity: 0 }: { opacity: 1 } }
          animate={scrollPos > 1 ? { opacity: 1 }: { opacity: 0 }}
          transition={{
            duration: 0.4,
            delay: scrollPos > 0 ? 0.7 : 0,

          }}
        >
       
          <div className={`md:hidden absolute z-50 max-w-[90%] flex flex-col w-full items-end p-4 bg-white rounded-[20px] gap-y-4 outline visible ${openVideoDropDown ? '' : 'hidden'}`}>
            <div
              className="hover:cursor-pointer"
              onClick={() => setOpenVideoDropDown(false)}
            ><img src="/june/close.svg" alt="Close" /></div>
            <div
              className="flex w-full justify-between h-[40px] px-4 rounded-[10px] items-center cursor-pointer text-[##560059] bg-[#F9E2FB]"
              onClick={() => handleClickVideoType('video1')}
            >
              <div className="flex gap-x-2"><img src="/june/reports-icon.svg" alt="Reports" />Creative outreach</div>
              <img className={`${videoType === 'video1' ? '' : 'hidden'}`} src="/june/check.svg" alt="Close" />
            </div>
            <div
              className="flex w-full justify-between h-[40px] px-4 rounded-[10px] items-center cursor-pointer text-[##003D5A] bg-[#C9F0FF]"
              onClick={() => handleClickVideoType('video2')}
            >
              <div className="flex gap-x-2"><img src="/june/profiles.svg" alt="Profiles" />Manage replies</div>
              <img className={`${videoType === 'video2' ? '' : 'hidden'}`} src="/june/check.svg" alt="Close" />
            </div>
            <div
              className="flex w-full justify-between h-[40px] px-4 rounded-[10px] items-center cursor-pointer text-[##005900] bg-[#DAF9D4]"
              onClick={() => handleClickVideoType('video3')}
            >
              <div className="flex gap-x-2"><img src="/june/sync-with-crm.svg" alt="CRM" />Find Leads</div>
              <img className={`${videoType === 'video3' ? '' : 'hidden'}`} src="/june/check.svg" alt="Close" />
            </div>
          </div>
        </motion.div>
        <motion.div className="justify-end flex md:hidden "
                  initial={scrollPos > 1 ? { opacity: 0 }: { opacity: 1 } }
                  animate={scrollPos > 1 ? { opacity: 1 }: { opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: scrollPos > 0 ? 0.6 : 0,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
        >

          <div
            className={`flex bg-[#F9E2FB] text-[#560059] min-w-[250px] p-3 rounded-t-2xl text-[20px] hover:cursor-pointer ${videoType === 'video1' ? '' : 'hidden'}`}
            onClick={() => setOpenVideoDropDown(true)}
          >
            
            <img src="./reports-icon.svg" className="mr-1" />
            Creative outreach
            <img src="/june/dropdown-icon.svg" alt="dropdown" />
          </div>
          <div
            className={`flex bg-[#C9F0FF] text-[#003D5A] min-w-[250px] p-3 rounded-t-2xl text-[20px] hover:cursor-pointer ${videoType === 'video2' ? '' : 'hidden'}`}
            onClick={() => setOpenVideoDropDown(true)}
          >
            <img src="./profiles.svg" className="mr-1" />
            Manage replies
            <img src="/june/dropdown-icon.svg" alt="dropdown" />
          </div>
          <div
            className={`flex bg-[#DAF9D4] text-[#005900] min-w-[250px] p-3 rounded-t-2xl text-[20px] hover:cursor-pointer ${videoType === 'video3' ? '' : 'hidden'}`}
            onClick={() => setOpenVideoDropDown(true)}
          >
            <img src="./sync-with-crm.svg" className="mr-1" />
            Find Leads
            <img src="/june/dropdown-icon.svg" alt="dropdown" />
          </div>
        </motion.div>

        <motion.div 
          
          className={` w-full flex bg-[${videoColor}] rounded-tr-[0px] mx-auto ${scrollPos > 1 ? '' : ''}`}
          initial={scrollPos > 1 ? {  borderRadius: 0 ,width: '100%',maxWidth :  1999 }: { borderRadius: 32, borderTopRightRadius : 0 , maxWidth : 1192} }
          animate={scrollPos > 1 ? { borderRadius: 32, borderTopRightRadius : 0, maxWidth : 1192}: { borderRadius: 0  , width : '100%',maxWidth : 1999}}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <motion.div
            className="p-4 rounded-[32px]  max-w-[1192px] mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <motion.div 
              className="relative z-20  max-w-[1192px] mx-auto flex items-center gap-x-2 pl-4 w-full h-[12.37px] md:h-[25px] lg:h-[43px] rounded-t-[32px] bg-white border-[1px] border-[#E9ECEF]"
              initial={scrollPos > 1 ? { y: -100 }: { y: 0} }
              animate={scrollPos > 1 ? { y: 0 }: { y:-100 }}
              // exit={{ opacity: 0 }}
              transition={{
                duration: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              
              <div className="hidden lg:block h-[10px] w-[10px] rounded-full bg-[#ED6A5E]"></div>
              <div className="hidden lg:block h-[10px] w-[10px] rounded-full bg-[#F4BF50]"></div>
              <div className="hidden lg:block h-[10px] w-[10px] rounded-full bg-[#61C554]"></div>
              
            </motion.div>
            <motion.div 
              className="absolute z-50 "
              initial={scrollPos > 1 ? { opacity: 0 }: { opacity: 0 } }
              animate={scrollPos > 1 ? { opacity: 1 }: { opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: scrollPos > 1 ? 1 : 0,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <img src="/june/all-done-for-you.svg" alt="spring" className="hidden lg:block relative object-contain top-[-170.22px] left-[48.31px] z-50" />
            </motion.div>
            <motion.div
                initial={scrollPos > 1 ? { y: -100 }: { y: 0} }
                animate={scrollPos > 1 ? { y: 0 }: { y:-100 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
            >
              <video 
                id="hero-video-player" 
                src={`/videos/${videoURL}`} 


                poster="/background.png" 
                className="flex z-10 muted overflow-hidden rounded-b-[32px]" 
                preload="auto"
                playsInline
                autoPlay
                muted
                onEnded={() => {
                  var vtype ='video' + (videoNumber % 3 + 1);
                  handleClickVideoType(vtype);
                }}
              >
              </video>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
