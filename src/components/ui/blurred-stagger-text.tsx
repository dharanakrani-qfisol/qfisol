"use client" 

import * as React from "react"
 
import { motion } from "framer-motion";
 
export const BlurredStagger = ({
  text = "we love hextaui.com ❤️",
  className,
}: {
  text: string;
  className?: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`inline-block ${className || ''}`}
    >
      {headingText.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          transition={{ duration: 0.3 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

