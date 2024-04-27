"use client"

import React from "react";
import "./feature.css";
import { useScroll, useAnimation, motion, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function HeroSection() {

    const glowVariants = {
        initial: {
            opacity: 0.5,
            scale: 1,
        },
        animate: {
            opacity: 0,
            scale: 1.6 
        }
    };

    const glowVariants1 = {
        initial: {
            opacity: 0.5,
            scale: 1,
        },
        animate: {
            opacity: 0,
            scale: 1.3 
        }
    };

    const transformYVariants1 = {
        initial: {
            opacity: 0,
            transform: 'translateY(100px)',
        },
        animate: {
            opacity: 1,
            transform: 'translateY(0px)',
        },
    };

    const transformYVariants2= {
        initial: {
            opacity: 0,
            transform: 'translateY(-100px)',
        },
        animate: {
            opacity: 1,
            transform: 'translateY(0px)',
        },
    };

    const visibleVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },    
    };

    return (
        <section className="w-full">
            <div className="flex flex-col justify-center">
                <div className="w-full justify-center flex">
                    <motion.div className="badge-container block" 
                                variants={transformYVariants2} 
                                initial="initial"
                                animate="animate" 
                                transition={{ duration: 1, delay:0.6}}>
                        <div className="badge css-0">
                            <div className="badge-front css-0"></div>
                            <div className="badge-back css-0"></div>
                        </div>
                    </motion.div>
                </div>
                <div className="w-full justify-center flex">
                    <h1 className="text-8xl text-center">
                        <span className="css-0 font-bold">
                            <motion.div className="text-[#030334] inline-block"
                                        variants={transformYVariants1} 
                                        initial="initial"
                                        animate="animate" 
                                        transition={{ duration: 1, }} >
                                Make
                            </motion.div>
                            <motion.div className="text-[#030334] inline-block mx-5"
                                        variants={transformYVariants1} 
                                        initial="initial"
                                        animate="animate" 
                                        transition={{ duration: 1, delay: 0.3}} >
                                features
                            </motion.div>
                            <br />
                            <motion.div className="bg-gradient-to-b from-[#6868f7] to-[#3e3e94] bg-clip-text text-transparent inline-block"
                                        variants={transformYVariants1} 
                                        initial="initial"
                                        animate="animate" 
                                        transition={{ duration: 1, delay: 0.5}} >
                                people want
                            </motion.div>
                        </span>
                    </h1>
                </div>

                <div className="relative">
                    <motion.div data-projection-id="2" className="w-full text-center "
                                variants={visibleVariants} 
                                initial="initial"
                                animate="animate" 
                                transition={{ duration: 0.6, delay: 1}}>
                        <p className="chakra-text text-[22px] text-[#343a40] m-8">
                            Use our zero-setup report to validate, iterate <br />and celebrate your features.
                        </p>
                        <a className="bg-gradient-to-b text-lg from-[#6868f7] to-[#4C40D9] min-w-[292px] font-bold py-2 px-8 text-white hover:bg-gradient-to-b hover:from-[#4C40D9] hover:to-[#2a2a63] rounded-lg" href="https://analytics.june.so/start" rel="noreferrer noopener">Get started for free</a>

                    </motion.div>

                    <motion.div className="max-w-[1512px] aspect-[154/100] mx-auto box-border block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-none m-0 p-0 absolute inset-0"
                            variants={transformYVariants1} 
                            initial="initial"
                            animate="animate" 
                            transition={{ duration: 0.3, delay: 0.8}}
                    >
                        <img alt="grid" src="/feature/home-grid-bg.svg"
                            decoding="async" data-nimg="fill"
                            className="absolute inset-0 box-border p-0 border-none mx-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full visible"
                            sizes="100vw"
                            srcSet="/feature/home-grid-bg.svg 640w, /feature/home-grid-bg.svg 750w, /feature/home-grid-bg.svg 828w, /feature/home-grid-bg.svg 1080w, /feature/home-grid-bg.svg 1200w, /feature/home-grid-bg.svg 1920w, /feature/home-grid-bg.svg 2048w, /feature/home-grid-bg.svg 3840w"
                        />
                    </motion.div>
                </div>


                <motion.div className="w-full transform  -translate-y-10"
                            variants={transformYVariants1} 
                            initial="initial"
                            animate="animate" 
                            transition={{ duration: 0.3, delay: 0.8}}>

                    <div>
                        <div className="w-full p-8 md:p-32">
                            <div className="rounded-xl max-w-[1192px] mx-auto box-shadow bg-gradient-to-br from-indigo-300 to-purple-300 border-[4px] border-transparent box-border">

                                <div className="z-20 max-w-[1192px] mx-auto flex items-center gap-x-2 pl-4 w-full h-[12.37px] md:h-[25px] lg:h-[43px] rounded-t-xl bg-white border-[1px] border-[#E9ECEF]">
                                    <div className="hidden lg:block h-[10px] w-[10px] rounded-full bg-[#ED6A5E]"></div>
                                    <div className="hidden lg:block h-[10px] w-[10px] rounded-full bg-[#F4BF50]"></div>
                                    <div className="hidden lg:block h-[10px] w-[10px] rounded-full bg-[#61C554]"></div>
                                </div>

                                <motion.button id="play_button_container" className="w-0 h-0 md:w-[88px] md:h-[88px] z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto rounded-full flex items-center justify-center bg-gradient-to-b from-indigo-600 to-indigo-800 scale-100" initial={{scale: 1}}
                                whileTap={{ scale: 0.8 }}
                                whileHover={{scale: 1.4, transition: { duration: 1 } }}>
                                    <motion.div id="play_button_clone1" className="absolute w-full h-full rounded-full bg-gradient-to-b from-indigo-600 to-indigo-800 opacity-0 transform  scale-125 translate-z-0 animate-scale-opacity1" variants={glowVariants} initial="initial" animate="animate" transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}>
                                    </motion.div>

                                    
                                    <motion.div id="play_button_clone2" className="absolute w-full h-full rounded-full bg-gradient-to-b from-indigo-600 to-indigo-800 opacity-0 transform scale-150 translate-z-0 animate-scale-opacity2" variants={glowVariants} initial="initial" animate="animate" transition={{ repeat: Infinity, repeatDelay: 2, duration: 1, delay: 0.2 }}>

                                    </motion.div>
                                    <div className="relative w-[24px] h-[28px]">
                                        <span className="box-border block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-none m-0 p-0 absolute inset-0">
                                            <img
                                                alt="Play icon"
                                                src="/feature/play.svg"
                                                decoding="async"
                                                data-nimg="fill"
                                                className="absolute inset-0 box-border p-0 border-none mx-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain"
                                                sizes="100vw"
                                                srcSet="/feature/play.svg 640w, /feature/play.svg 750w, /feature/play.svg 828w, /feature/play.svg 1080w, /feature/play.svg 1200w, /feature/play.svg 1920w, /feature/play.svg 2048w, /feature/play.svg 3840w"
                                            />
                                        </span>
                                    </div>
                                </motion.button>






                                <div>
                                    <video
                                        id="hero-video-player"
                                        src={`/videos/video1-1.webm}`}
                                        poster="/background.png"
                                        className="flex z-10 muted overflow-hidden rounded-b-xl"
                                        preload="auto"
                                        playsInline
                                        autoPlay
                                        muted
                                        onEnded={() => {
                                            //   var vtype ='video' + (videoNumber % 3 + 1);
                                            //   handleClickVideoType(vtype);
                                        }}
                                    >
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
