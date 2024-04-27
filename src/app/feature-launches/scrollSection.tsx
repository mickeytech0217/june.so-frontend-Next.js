"use client";

import React, { useState, useRef, useEffect } from "react";
import "./feature.css";
import {
    useScroll,
    useAnimation,
    motion,
    useMotionValueEvent,
    AnimatePresence,
} from "framer-motion";
import ScrollItem from "@/components/scrollAnimateItem";
import { Anek_Malayalam } from "next/font/google";

export default function ScrolSection() {
    const { scrollY } = useScroll();

    const scrollTopicData = [
        "Easy setup",
        "Validate",
        "Iterate",
        "Celebrate",
        "Compare",
    ];
    const scrollContentData = [
        "It only takes one line of code to set up your report. We detect your new events and create this report for you automatically.",
        "Measure overall how many users or companies use, adopt and return to your features to validate its success.",
        "Get feedback on your features from the right people. Talk to who loved your feature, and who tried it once and never came back.",
        "Why isn’t your team celebrating your first 5, 50 and 500 users? Our reports have milestones your team can be proud to reach.",
        "Compare your launches with the other features in your product. Understand adoption and usage compared to the rest of your product.",
    ];

    const controls = useAnimation();
    const [scrollPos, setScrollPos] = useState(1);
    const [isInScrollDiv, setIsInScrollDiv] = useState(false);
    const [divPos, setDivPos] = useState(1);
    const [arrayNum, setArrayNum] = useState(0);
    const [showText, setShowText] = useState("");

    // const Slide = ({ text, ...rest }) => (
    //     <div
    //       className="text-transparent font-bold text-6xl bg-gradient-to-b from-[#5353c6] to-[#EFEFEF] bg-clip-text p-2 slide"
    //       {...rest}

    //       >
    //           {text}
    //     </div>
    //   )

    useEffect(() => {
        // if (arrayNum !== 0) {
            controls.start({
                y: 10,          // Move right
                opacity: 0,      // Fade out
                transition: { duration: 0.5 },  // Half a second

              }).then(() => {
                setShowText(scrollTopicData[arrayNum]);
                // After animation complete, update the arrayNum
                // setArrayNum((arrayNum + 1) % scrollTopicData.length);
          
                // Start another animation
                controls.start({
                    y: -10,          // Move back to original position
                    opacity: 0,    // Fade in
                    transition: { duration: 0 },  // Half a second
                  }).then(() => {
                    controls.start({
                        y: 0,          // Move back to original position
                        opacity: 1,    // Fade in
                        transition: { duration: 0.5 },  // Half a second
                    });
                  })

              });
        //}
    }, [arrayNum]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrollPos(latest);
        getCurrentYPosition();
        if (isInScrollDiv === true) {
            setArrayNum(
                Math.floor((scrollPos - divPos) / window.innerHeight) % 5
            );
            //console.log(arrayNum);
        } else {
            setArrayNum(0);
        }
    });

    const divRef = useRef<HTMLDivElement>(null); // Create a ref with HTMLDivElement type

    // Function to get the current Y position of the div
    const getCurrentYPosition = () => {
        if (divRef.current) {
            const boundingRect = divRef.current.getBoundingClientRect();
            const yPos = boundingRect.top + window.pageYOffset;
            //   console.log('Current Y position of the div:', yPos);
            setIsInScrollDiv(yPos < scrollPos);
            setDivPos(yPos);
        }
    };

    return (
        <section className="w-full sticky">
            <div
                className="w-full min-h-[500vh] bg-[#030334] bg-center bg-no-repeat bg-contain bg-url flex"
                ref={divRef}
            >
                <div
                    className={`w-full h-[100vh] flex ${
                        isInScrollDiv ? "sticky top-0" : ""
                    }`}
                >
                    <div
                        className={`md:grid flex-col md:flex-row md:grid-cols-2 md:grid-rows-1 md:gap-3 p-8 m-auto `}
                    >
                        <div className="p-4">
                            {/* <ScrollItem
                                header="Overall adoption"
                                category="1000times"
                                content="This may include your contact information, a summary of the problem you are experiencing and any other documentation or information that would be helpful in resolving the issue (which, at your option, may include Personal Data)"
                            />
                            <ScrollItem
                                header="Overall adoption"
                                category="500times"
                                content="AAABBbCCCC"
                            /> */}
                            <img src={`/feature/${scrollTopicData[arrayNum]}.PNG`} />
                        </div>
                        <div className="text-white max-w-[400px] justify-center flex flex-col text-center">
                            <motion.div
                                animate={controls}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-transparent font-bold text-4xl md:text-6xl bg-gradient-to-b from-[#5353c6] to-[#EFEFEF] bg-clip-text p-4"
                            >
                                {/* {scrollTopicData[arrayNum]} */}
                                {showText}
                            </motion.div>
                            {/* <div className="text-transparent font-bold text-6xl bg-gradient-to-b from-[#5353c6] to-[#EFEFEF] bg-clip-text p-2">
                                {scrollTopicData[arrayNum]}
                            </div> */}
                            <div className="p-2">
                                {scrollContentData[arrayNum]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
