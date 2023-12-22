"use client"
import { document } from "@/utils/document";
import React, {useState} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Modal from "./Modal";

export default function Belgelerimiz() {
  const [activeId, setActiveId] = useState(1);
  const [icons, setIcons] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const changeActiveItem = (id) => {
    setActiveId(id);
  };
  const fadeInAnimationVAriants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <div className="bg-primary/30 xl:py-12 py-4 rounded-md px-4 mt-32 lg:mt-12">
     <div className="flex flex-wrap justify-center items-center gap-6 mt-12 bg-primary/30 py-8 rounded-lg">
        {document.map((item, index) => {
          return (
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
              className="bg-[rgba(65,47,123,0.15)] w-[400px] h-[500px] px-1 py-2 border flex flex-col cursor-pointer justify-center items-center gap-4 border-accent rounded-md shadow-lg shadow-[rgba(65,47,123,0.15)]"
              onClick={() => {
                setOpenModal(!openModal);
                setIcons(index);
              }}
            >
              <div className="w-[70%] border border-accent rounded-lg p-4 shadow-custom ">
                {item.icon}
              </div>
              <div className="font-bold text-accent">{item.title}</div>
              <div className="text-center text-sm line-clamp-2 antialiased hover:subpixel-antialiased ">
                {item.description}
              </div>
            </motion.div>
          );
        })}
      </div>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          openModal={openModal}
          item={document.find((_, index) => index === icons)}
        />
      )}
    </div>
  );
}
