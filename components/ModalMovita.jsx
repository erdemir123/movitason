import React from "react";
import ServiceModal from "./ServiceModal";
import { motion } from "framer-motion";

export default function ModalMovita({ setIsOpen ,array}) {
  
  const fadeInAnimationVAriants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };
  return (
    <>
      <div
        className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000] z-[5000] opacity-90 "
        onClick={setIsOpen}
      ></div>
      <div className="bg-primary/100 fixed lg:w-[55%] w-[80%] h-[90%] py-4  scrollbar-thin scrollbar-thumb-gray-300 gap-4 top-[50%] left-[50%] z-[8000] text-black -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-wrap rounded-md">
      <div className="block md:hidden w-full xl:max-w-[70%]">
            <ServiceModal arrayPage={array} />
      </div>
      <div className="hidden  w-full xl:max-w-[950%] md:flex justify-center flex-wrap gap-4 ">
      {array.map((tab, index) => (
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
className="bg-red-100/10  w-[40%] h-[160px] flex justify-center items-center gap-4 rounded-md shadow-xl px-2"
        >
         <div className=" flex items-center h-full  justify-center">
<div >{tab.icon}</div>
         </div>
         <div className=" flex-1">
<div className="font-bold text-accent mb-2">{tab.title}</div>
<div className="text-white">{tab.description}</div>
         </div>
        </motion.div>
      ))}
      </div>
     
      </div>
    </>
  );
}
