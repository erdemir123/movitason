"use client";
import {useTranslations} from 'next-intl';
import { appTabs } from "@/utils/appTabs";
import Image from "next/image";
import React, { useState } from "react";
import movitaqr from "/public/moviqr.svg";
import Modal from "./Modal";
import NavTab from "./NavTab";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Apps() {
  const [activeId, setActiveId] = useState(1);
  const [icons, setIcons] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const changeActiveItem = (id) => {
    setActiveId(id);
  };
  const content = appTabs[activeId - 1];
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
  const t = useTranslations('Index');
  return (
    <>
      <NavTab
        changeActiveItem={changeActiveItem}
        activeId={activeId}
        tabs={appTabs}
      />
      <div className="flex flex-wrap justify-center items-center gap-6 mt-12 bg-primary/30 py-8 rounded-lg">
        {content.apps.map((item, index) => {
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
              className="bg-[rgba(65,47,123,0.15)] w-[400px] h-[400px] py-2 border flex flex-col justify-center items-center gap-4 border-accent rounded-md shadow-lg shadow-[rgba(65,47,123,0.15)]"
            >
              <div className="w-[60%] border flex justify-center rounded-[15%] bg-gray-100 p-4 shadow-custom">
                {item.icon}
              </div>
              <div className="font-bold text-accent">{item.title}</div>
              <div className="text-center text-sm line-clamp-2 antialiased hover:subpixel-antialiased ">
                {item.description}
              </div>
              <div className="flex justify-center items-center gap-6">
                <Link href={item.href} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold  px-4 rounded inline-flex items-center py-2 hover:text-accent">
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#F6931D"
                  >
                    <path fill-rule="evenodd" d="M13 8V2H7v6H2l8 8 8-8h-5z" />
                  </svg>
                  <span>Download</span>
                </Link>
                <button
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2 hover:text-accent"
                  onClick={() => {
                    setOpenModal(!openModal);
                    setIcons(index);
                  }}
                >
                  <Image src={movitaqr} width={25} height={25} alt="movitaqr" />
                  <span>{t('title')}</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          openModal={openModal}
          item={content.apps.find((_, index) => index === icons)?.qr}
        />
      )}
    </>
  );
}
