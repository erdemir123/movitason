"use client"
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export default function MotionP({children}) {
  return (
    <motion.p
            variants={fadeIn("up",0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[100%] xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-4 font-bold "
          >
            {children}
            
          </motion.p>
   
  )
}
