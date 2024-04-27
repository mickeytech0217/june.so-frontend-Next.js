"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimationDivProps {
  delay: number;
  children: React.ReactNode;
  className?: string;
}

const AnimationDiv: React.FC<AnimationDivProps> = ({
  delay,
  children,
  className,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {
          opacity: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeIn",
            delay: delay,
          },
        },
      }}
      viewport={{ once: true }}
      className={className ?? className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationDiv;
