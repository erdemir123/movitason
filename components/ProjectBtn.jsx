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
      className={`bg-accent text-center font-extrabold px-8 py-2 rounded-lg  w-48 border absolute cursor-pointer`}
    >
      {title}
    </button>
  </motion.div>
  )
}
