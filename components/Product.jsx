"use client";
import React from "react";
import MotionP from "./MotionP";
import Image from "next/image";
import ServiceSlider from "./ServiceSlider";
import Bulb from "./Bulb";
import { product } from "@/utils/product";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import SwiperPartner from "./SwiperPartner";
export default function Product({locale}) {
  
  return (
    <>
      <div className="bg-primary/30 xl:py-36 py-4 rounded-md px-4">
        <div className="flex flex-col xl:flex-row ">
          <div className="flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 pt-4 relative  pr-2">
            <motion.div
              className="text-accent xl:text-4xl font-bold text-lg md:text-3xl flex gap-2 justify-center xl:justify-start mb-4"
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <span>Ürünlerimiz</span>
            </motion.div>
            <Image
              src={"/yapay.png"}
              width={400}
              height={400}
              alt=""
              className="translate-z-0 absolute z-10 opacity-10 top-2"
              priority={true}
            />
            <MotionP>
              Movita, mobil araçlar için yerli mühendisler tarafından
              geliştirilen araç takip ve uzaktan izlemeli kamera kayıt özelliği
              bulunan bir sistemdir. Yeni nesil takip sistemi olarak bilinen
              mobil nvr cihazı sayesinde okul taşıtlarında koltuk sensörü
              cihazımız ile entegreli çalışmaktadır. Ayrıca bir çok yeni
              çözümler sunmaktadır.
            </MotionP>
          </div>
          <div className="w-full xl:max-w-[65%]">
            <ServiceSlider arrayPage={product} locale={locale} page="urunler"/>
          </div>
        </div>
      </div>
      <div className="hidden xl:block absolute left-0 bottom-0 z-50">
          <Bulb />
      </div>
      <SwiperPartner color={"#F6931D"} />
    </>
  );
}
