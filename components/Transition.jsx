"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Transition({ children }) {
  const pathname = usePathname();
  const transitionVariants = {
    initial: {
      x: "100%",
      width: "100%",
    },
    animate: {
      x: "50%",
      width: "0%",
    },
    exit: {
      x: ["50%", "100%"],
      width: ["50%", "100%"],
    },
  };
  return (
    <AnimatePresence key={pathname} mode="wait">
      <div className="h-full">
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#131424]"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{delay:0.2, duration:0.6,ease:"easeInOut"}}
        ></motion.div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#1a2441]"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{delay:0.4, duration:0.6,ease:"easeInOut"}}
        ></motion.div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#111729]"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{delay:0.6, duration:0.6,ease:"easeInOut"}}
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
}
