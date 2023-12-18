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
      className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-4 flex gap-2 text-center border"
    >
      <Link
        href={href}
        className="bg-accent text-center font-extrabold px-8 py-2 rounded-lg flex justify-center relative w-40 border group cursor-pointer"
      >
        {title}
      </Link>
    </motion.div>
  );
}
