"use client";

import "./heroSection.css";
import React, { useState } from "react";
import {  motion } from 'framer-motion';


export default function FeatureSection() {


  const [reportType, setReportType] = useState('report1');
  const [reportColor, setReportColor] = useState('#F9E2FB');
  const [openReportDropDown, setOpenReportDropDown] = useState(false);
  const [randAnimation, setRandAnimation] = useState(0);

  const handleReportEvent = (clickedURL: string) => {
    setReportType(clickedURL);
    setOpenReportDropDown(false);
    if (clickedURL === 'report1') {
      setReportColor('#F9E2FB');
      setRandAnimation((randAnimation + 1)%2);
    }
    if (clickedURL === 'report2') {
      setReportColor('#DAF9D4');
      setRandAnimation((randAnimation + 1)%2);
    }
    if (clickedURL === 'report3') {
      setReportColor('#C9F0FF');
      setRandAnimation((randAnimation + 1)%2);
    }
    if (clickedURL === 'report4') {
      setReportColor('#FFD2E1');
      setRandAnimation((randAnimation + 1)%2);
    }
    if (clickedURL === 'report5') {
      setReportColor('#FFE9C8');
      setRandAnimation((randAnimation + 1)%2);
    }
  };
  return (
    <section className="w-full">
      <div className="flex flex-col gap-y-8 lg:gap-y-16 items-center mt-40 text-primary font-hero mb-[124px]">
        <div className="text-[24px] leading-[34px] lg:text-[40px] lg:leading-[50px] font-black text-center w-[345px] md:w-full lg:flex justify-center">
          <h2 className="font-['DegularVariable'] text-[42px] lg:text-[72px] m-2 sg:pb-2 ">Turn strangers into </h2>
          <p className="font-['DegularVariable'] italic font-semibold m-2 text-[42px] lg:text-[72px] sg:pt-2">clients</p>
        </div>
        <div className="bg-[#F8F9FA] p-4 pb-0 h-[502px] relative overflow-hidden lg:h-fit lg:p-[20px] lg:pb-0 rounded-[20px] mt-2 lg:mt-0 shadow-[0_0_1px_0_rgba(13,19,27,0.25),0_2px_1px_0_rgba(13,19,27,0.05)]">
        <div className={`w-full flex justify-center `}>
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
                <div className="font-semibold text-[20px]">AI Videos</div>
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
                <div className="font-semibold text-[20px]">Voice notes</div>
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
                <div className="font-semibold text-[20px]">AI Messages</div>
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
                <div className="font-semibold text-[20px]">Lead finder</div>
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
                <div className="font-semibold text-[20px]">Auto-like & comment</div>
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
              <div className="flex max-w-[120px] justify-center items-center h-12 w-12 rounded-full bg-[#F9E2FB]">
                <img src="/june/activation-icon.svg" />
              </div>
              <div className="font-semibold whitespace-nowrap flex max-w-[120px]">AI Videos</div>
            </div>
            <div
              className={`flex items-center gap-x-[6px] bg-white cursor-pointer text-[24px] rounded-[20px] p-[22px] pr-[24px] lg:border-2 border-${reportType === 'report2' ? '[' + reportColor + ']' : 'white'}`}
              onMouseEnter={() => handleReportEvent("report2")}
            >
              <div className="flex max-w-[120px] justify-center items-center h-12 w-12 rounded-full bg-[#DAF9D4]">
                <img src="/june/retention-icon.svg" />
              </div>
              <div className="font-semibold whitespace-nowrap flex max-w-[120px]">Voice notes</div>
            </div>
            <div
              className={`flex items-center gap-x-[6px] bg-white cursor-pointer text-[24px] rounded-[20px] p-[22px] pr-[24px] lg:border-2 border-${reportType === 'report3' ? '[' + reportColor + ']' : 'white'}`}
              onMouseEnter={() => handleReportEvent("report3")}
            >
              <div className="flex max-w-[120px] justify-center items-center h-12 w-12 rounded-full bg-[#C9F0FF]">
                <img src="/june/active-users-icon.svg" />
              </div>
              <div className="font-semibold whitespace-nowrap flex max-w-[120px]">AI Messages</div>
            </div>
            <div
              className={`flex items-center gap-x-[6px] bg-white cursor-pointer text-[24px] rounded-[20px] p-[22px] pr-[24px] lg:border-2 border-${reportType === 'report4' ? '[' + reportColor + ']' : 'white'}`}
              onMouseEnter={() => handleReportEvent("report4")}
            >
              <div className="flex max-w-[120px] justify-center items-center h-12 w-12 rounded-full bg-[#FFD2E1]">
                <img src="/june/features-icon.svg" />
              </div>
              <div className="font-semibold whitespace-nowrap flex max-w-[120px]">Lead finder</div>
            </div>
            <div
              className={`flex items-center gap-x-[6px] bg-white cursor-pointer text-[24px] rounded-[20px] p-[22px] pr-[24px] lg:border-2 border-${reportType === 'report5' ? '[' + reportColor + ']' : 'white'}`}
              onMouseEnter={() => handleReportEvent("report5")}
            >
              <div className="flex max-w-[120px] justify-center items-center h-12 w-12 rounded-full bg-[#FFE9C8]">
                <img src="/june/churn-risk-icon.svg" />
              </div>
              <div className="font-semibold whitespace-nowrap flex max-w-[120px]">Auto-like & <br /> comment</div>
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
              <div className="font-semibold text-[20px]">AI Videos</div>
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
                initial={randAnimation === 0 ? { opacity: 0, scale: 1, y: -100 } :{ opacity: 0, scale: 1, y: 100 }}
                animate={reportType === 'report1' ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  ease: "backOut",
                  scale: {
                    type: "spring",
                  },
                }}
              >
                <div className="transform-none">
                  <img className="h-[390px] w-[960px] object-cover overflow-visible lg:translate-y-[2px] visible" src="/june/milestones.svg" alt="AI Videos"  />
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
                <img className="lg:hidden rounded-br-[20px]" src="/june/retention/company.svg" alt="Voice notes"   />
                <img className="absolute left-[160px] bottom-12" src="/june/retention/cohorts2.svg" alt="Cohorts"  />
              </div>
              <motion.div 
                className="hidden  lg:block"
                initial={randAnimation === 0 ? { opacity: 0, scale: 1, y: -100 } :{ opacity: 0, scale: 1, y: 100 }}
                animate={reportType === 'report2' ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  ease: "backOut",
                  scale: {
                    type: "spring",
                  },
                }}
              >
                <div data-projection-id="311">
                  <img className="hidden lg:block h-[390px] w-[960px] object-cover overflow-visible lg:translate-y-px" src="/june/retention/retention.svg" alt="Voice notes"  />
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
                      initial={randAnimation === 0 ? { opacity: 0, scale: 1, y: -100 } :{ opacity: 0, scale: 1, y: 100 }}
                      animate={reportType === 'report3' ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: "backOut",
                        scale: {
                          type: "spring",
                        },
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
                      <img className="absolute bottom-0 right-0 lg:hidden rounded-br-[20px]" src="/june/features/features-mobile.svg" alt="Lead finder" />
                    </div>
                    <motion.div 
                      className="hidden  lg:block"
                      initial={randAnimation === 0 ? { opacity: 0, scale: 1, y: -100 } :{ opacity: 0, scale: 1, y: 100 }}
                      animate={reportType === 'report4' ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: "backOut",
                        scale: {
                          type: "spring",
                        },
                      }}
                    >
                      <img className="absolute z-0 left-[52.23px] bottom-[276.3px] lg:-left-[50px] lg:bottom-[302px] -rotate-2 " src="/june/features/launch-mode.svg" alt="Launch-mode" data-projection-id="431"  />
                        <div data-projection-id="432">
                          <img className="absolute lg:relative z-0 bottom-[-26px] lg:bottom-0 right-0 h-[394px] lg:h-[390px] w-[329px] lg:translate-y-[2px] lg:w-[960px] object-cover object-left lg:object-center overflow-visible" src="/june/features/features.svg" alt="Lead finder"  />
                        </div>
                        <img className="absolute z-0 left-[13.2px] bottom-[438.6px] lg:left-[136px] lg:bottom-[326.5px] -rotate-2" src="/june/features/live-users.svg" alt="Live-users" data-projection-id="433" />
                          <img className="absolute z-10 left-[37.33px] bottom-[533.33px] lg:left-[759.67px] lg:bottom-[287.33px] rotate-2" src="/june/features/adoption-goals.svg" alt="Adoption-goals" data-projection-id="434" />
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
                        initial={randAnimation === 0 ? { opacity: 0, scale: 1, y: -100 } :{ opacity: 0, scale: 1, y: 100 }}
                        animate={reportType === 'report5' ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          ease: "backOut",
                          scale: {
                            type: "spring",
                          },
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
