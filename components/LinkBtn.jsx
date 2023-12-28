import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export default function LinkBtn({ title, href }) {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
     
    >
      <Link
        href={href}
        className="bg-accent font-bold py-2 rounded-lg flex justify-center relative w-36 md:w-48 border group cursor-pointer"
      >
        {title}
      </Link>
    </motion.div>
  );
}
