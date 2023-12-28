import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { fadeIn } from "@/variants";
import Socials from "./Socials";
import { useTranslations } from "next-intl";


const MotionDiv = () => {
  const t = useTranslations('header');
  return (
    <motion.div  className="text-accent xl:text-4xl font-bold text-lg md:text-3xl flex gap-2 justify-center xl:justify-start mb-4 flex-col"
    variants={fadeIn("down",0.3)}
    initial="hidden"
    animate="show"
    exit="hidden"
    > 
    <span className="hidden lg:block">movita </span>
    <div className="lg:hidden flex justify-center">
      <Typewriter
        options={{
          strings: [t("camera"), t("car"),t("security")],
          autoStart: true,
          loop: true,
          delay: 100,
          cursor:""
        }}
      /> 
     
    </div>
    <div className="flex justify-center lg:hidden">
    <Socials/>

    </div>
    </motion.div>
  );
};

export default MotionDiv;
