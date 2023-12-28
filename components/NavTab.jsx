"use client"
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";


export default function NavTab({ activeId, changeActiveItem, tabs }) {

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
  const t = useTranslations('nav');
  return (
    <div className="w-[80%] flex  flex-wrap rounded-4 absolute top-28 bg-red-100/20 gap-2 justify-center py-3 rounded-lg shadow-md px-2 ">
      {tabs.map((tab, index) => (
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
          className={`${
            activeId === tab.id ? "text-accent" : "text-white"
          } flex justify-center py-1 px-3 text-sm bg-primary/30 rounded-md cursor-pointer `}
          onClick={() => changeActiveItem(tab.id)}
        >
          <p
            className={`${
              activeId === tab.id ? "text-accent" : "text-white"
            } text-start  font-bold flex gap-1 items-center`}
          >
            {tab?.image}
            {t(`${tab.poKey}`)}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
