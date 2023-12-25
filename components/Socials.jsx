"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialTabs } from "@/utils/socialTabs";
import { motion } from "framer-motion";
import TawkToScript from "./TawkToScript";

export default function Socials() {
  const fadeInAnimationVAriants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <div className="flex-1 flex justify-center lg:justify-end items-center gap-4 text-2xl">
      {socialTabs.map((item, index) => {
        return (
          <motion.div
          key={index}
          initial="initial"
          variants={fadeInAnimationVAriants}
          animate="animate"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          <Link
            href={item.href}
            className="text-[#02AAEB] hover:text-accent transition-all duration-300"
          >
            {item.icon}
          </Link>
          <TawkToScript/>
        </motion.div>
        )
      })}
    </div>
  );
}
