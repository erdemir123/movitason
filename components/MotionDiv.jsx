import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { fadeIn } from "@/variants";


const MotionDiv = () => {
  return (
    <motion.div  className="text-[#F3B664] xl:text-4xl font-bold text-lg md:text-3xl flex gap-2 justify-center xl:justify-start mb-4"
    variants={fadeIn("down",0.3)}
    initial="hidden"
    animate="show"
    exit="hidden"
    > <span>Movita</span>
      <Typewriter
        options={{
          strings: ["Araç Takip Sistemleri", "Kamera Sistemleri", "Güvenlik Sistemleri"],
          autoStart: true,
          loop: true,
          delay: 100,
          cursor:""
        }}
      /> 
    </motion.div>
  );
};

export default MotionDiv;
