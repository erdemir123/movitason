import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export default function ProjectBtn({title,handleClick,isOpen}) {
  return (
    <motion.div
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    animate="show"
    exit="hidden"
    
  >
    <button
      type='button'
      onClick={handleClick}
      className="bg-accent font-bold text-[16px] py-2 rounded-lg flex justify-center relative w-32 md:w-48 border group cursor-pointer"
    >
      {title}
    </button>
  </motion.div>
  )
}
