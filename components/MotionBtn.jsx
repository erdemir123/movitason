"use client"
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";


export default function MotionBtn({children}) {
  return (
    <motion.div
            variants={fadeIn("up",0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-4 flex gap-2 text-center"
          >
            {children}
          </motion.div>
  )
}