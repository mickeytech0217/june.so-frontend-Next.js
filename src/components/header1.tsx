"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useScroll, useAnimation, motion, useMotionValueEvent, AnimatePresence } from 'framer-motion';

import "./header.css";

export default function Header() {
  const [showDropdownList, setShowDropdownList] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDropdownList = () => {
    setShowDropdownList(!showDropdownList);
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

  return (
    <main className="w-full sticky top-0 z-50  max-w-[1192px] mx-auto h-160">
      <div className="absolute hidden w-full h-8 bg-white lg:block opacity-90"></div>
      <div className="absolute hidden w-full h-16 pointer-events-none lg:block top-8 opacity-90 bg-gradient-to-b from-white"></div>
      <motion.div className="sticky z-100 w-full text-[#151531] text-[16px] font-bold mb-5"
                  variants={transformYVariants2} 
                  initial="initial"
                  animate="animate" 
                  transition={{ duration: 0.3, delay:0.8}}>
        <div className="p-4 justify-between items-center relative hidden md:flex">
          <a href="/">
            <Image
              src="/navbar/logo.png"
              alt="Logo"
              width={195}
              height={26.5}
            />
          </a>
          <div className="flex">
            <div>
              <div
                className="flex flex-col navbar-item cursor-pointer"
                onMouseEnter={() => setShowDropdownList(true)}
                onMouseLeave={() => setShowDropdownList(false)}
              >
                <div className="flex items-center">
                  Product
                  <div className="ml-2 duration-100">
                    <FaAngleDown />
                  </div>
                </div>
                {showDropdownList && (
                  <div
                    className={`flex flex-col border-2 rounded-xl border-[#F8F9FA] absolute z-20 top-[50px] bg-white p-3 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] ${showDropdownList ? "visible" : "invisible"
                      }`}
                  >
                    <a href="/" className="flex items-center p-2">
                      <img
                        className="mr-2"
                        src="/navbar/product-analytics.svg"
                        alt="Product analytics"
                      />
                      <p className="mr-2">Product analytics</p>
                      <img src="/navbar/check.svg" alt="Check" />
                    </a>
                    <a
                      href="/feature-launches"
                      className="flex items-center p-2"
                    >
                      <img
                        className="mr-2"
                        src="/navbar/feature-report.svg"
                        alt="Feature report"
                      />
                      <p>Feature report</p>
                    </a>
                    <a
                      href="https://qualify.june.so/"
                      className="flex items-center p-2"
                    >
                      <img
                        className="mr-2"
                        src="/navbar/qualification-bot.svg"
                        alt="Qualification bot"
                      />
                      <p>Qualification bot</p>
                    </a>
                    <a href="/ai" className="flex items-center p-2">
                      <img
                        className="mr-2"
                        src="/navbar/june-ai.svg"
                        alt="June AI"
                      />
                      <p>June AI</p>
                    </a>
                    <div className="w-full h-[1px] bg-gray-200"></div>
                    <a
                      href="/integration/hubspot"
                      className="flex items-center p-2"
                    >
                      <img
                        className="mr-2"
                        src="/navbar/hubspot-integration.svg"
                        alt="HubSpot integration"
                      />
                      <p className="mr-2">HubSpot integration</p>
                      <div className="flex items-center justify-center w-[44px] h-[20px] rounded-full outline outline-2 outline-gray-200 font-black text-[12px]">
                        NEW
                      </div>
                    </a>
                    <a
                      href="/integration/attio"
                      className="flex items-center p-2"
                    >
                      <img
                        className="mr-2"
                        src="/navbar/attio-integration.svg"
                        alt="Attio integration"
                      />
                      <p className="mr-2">Attio integration</p>
                      <div className="flex items-center justify-center w-[44px] h-[20px] rounded-full outline outline-2 outline-gray-200 font-black text-[12px]">
                        NEW
                      </div>
                    </a>
                    <a
                      href="https://widgets.june.so"
                      className="flex items-center p-2"
                    >
                      <img
                        className="mr-2"
                        src="/navbar/widget-for-ios.svg"
                        alt="Widget for iOS"
                      />
                      <p>Widget for iOS</p>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="navbar-item">
              <a href="/">Explorer</a>
            </div>
            <div className="navbar-item">
              <a href="/">Resources</a>
            </div>
            <div className="navbar-item">
              <a href="/">Teams & Companies</a>
            </div>
            <div className="navbar-item">
              <a href="/">Pricing</a>
            </div>
          </div>
          <div className="flex items-center">
            <a href="/" className="navbar-item">
              Login
            </a>
            <a
              href="/"
              className="navbar-item border-2 border-[#151531] rounded-xl bg-[#151531] text-white hover:bg-white hover:text-[#151531]"
            >
              Get started for free
            </a>
          </div>
        </div>
        <div className="md:hidden w-full bg-white">
          <div className="fixed w-full z-20">
            <div className={`flex justify-between items-center ${showDrawer ? 'bg-white' : ''}`}>
              <a href="/" className="p-4">
                <img
                  src="/navbar/june-logo-symbol-only.svg"
                  width={48}
                  height={48}
                />
              </a>
              <div onClick={() => setShowDrawer(!showDrawer)} className="p-2">
                {showDrawer && <IoIosClose className="w-[32px] h-[32px]" />}
                {!showDrawer && (
                  <RxHamburgerMenu className="w-[32px] h-[32px]" />
                )}
              </div>
            </div>
          </div>
          {showDrawer && (
            <>
              <div className="flex pt-[90px] px-4 h-screen w-full overflow-y-auto">
                <div className="flex flex-col gap-4 h-screen w-full">
                  <div>Features</div>
                  <div className="px-5 flex flex-col gap-4">
                    <a className="flex items-center gap-2" href="/">
                      <img
                        src="/navbar/product-analytics.svg"
                        alt="Product analytics"
                      />
                      <div className="flex justify-between w-full">
                        <p>Product analytics</p>
                        <img src="/navbar/check.svg" alt="Check" />
                      </div>
                    </a>
                    <a className="flex items-center gap-2" href="/">
                      <img
                        src="/navbar/feature-report.svg"
                        alt="Feature report"
                      />
                      <div className="flex justify-between w-full">
                        <p>Feature report</p>
                      </div>
                    </a>
                    <a className="flex items-center gap-2" href="/">
                      <img
                        src="/navbar/qualification-bot.svg"
                        alt="Qualification bot"
                      />
                      <p>Qualification bot</p>
                    </a>
                    <a className="flex items-center gap-2" href="/">
                      <img src="/navbar/june-ai.svg" alt="June AI" />
                      <div className="flex justify-between w-full">
                        <p>June AI</p>
                      </div>
                    </a>
                    <div className="w-full h-[1px] bg-gray-200"></div>
                    <a className="flex items-center gap-2" href="/">
                      <img
                        src="/navbar/hubspot-integration.svg"
                        alt="HubSpot integration"
                      />
                      <p>HubSpot integration</p>
                      <div className="flex items-center justify-center w-[44px] h-[20px] rounded-full outline outline-2 outline-gray-200 font-black text-[12px]">
                        NEW
                      </div>
                    </a>
                    <a className="flex items-center gap-2" href="/">
                      <img
                        src="/navbar/attio-integration.svg"
                        alt="Attio integration"
                      />
                      <p>Attio integration</p>
                      <div className="flex items-center justify-center w-[44px] h-[20px] rounded-full outline outline-2 outline-gray-200 font-black text-[12px]">
                        NEW
                      </div>
                    </a>
                    <a className="flex items-center gap-2" href="/">
                      <img
                        src="/navbar/widget-for-ios.svg"
                        alt="Widget for iOS"
                      />
                      <p>Widget for iOS</p>
                    </a>
                  </div>
                  <a className="" href="/">
                    Customers
                  </a>
                  <a className="" href="/">
                    Pricing
                  </a>
                  <a className="" href="/">
                    Changelog
                  </a>
                  <div className="h-[192px] w-full"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4 font-hero text-[20px] bg-white border-t-[1px] border-gray-200 p-6 font-bold absolute w-full h-[192px] bottom-0">
                <a
                  href="/"
                  className="inline-block bg-white h-16 flex items-center justify-center text-[#151531] rounded-[20px] py-2 px-4 md:px-12 text-center border-[1px] border-[#E9ECEF] shadow-[inset_0_-2px_4px_0_rgba(0,0,0,0.20)] "
                >
                  Login
                </a>
                <a
                  href="/"
                  className="flex items-center justify-center inline-block h-16 rounded-[20px] px-4 py-2 text-white text-center bg-[#151531] md:px-12 g-conversion-button"
                >
                  Get started
                </a>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </main>
  );
}
