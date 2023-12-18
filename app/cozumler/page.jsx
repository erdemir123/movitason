"use client";
import Bulb from "@/components/Bulb";
import PageContainer from "@/components/PageContainer";
import ServiceSlider from "@/components/ServiceSlider";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import MotionP from "@/components/MotionP";
import Image from "next/image";
import { solutions } from "@/utils/solutions";
import SwiperPartner from "@/components/SwiperPartner";


export default function page() {
  return (
    <PageContainer>
      <div className="bg-primary/30 xl:py-36 py-4 rounded-md px-4">
        <div className="flex flex-col xl:flex-row ">
          <div className="flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 pt-4 relative  pr-2">
            <motion.div
              className="text-[#F3B664] xl:text-4xl font-bold text-lg md:text-3xl flex gap-2 justify-center xl:justify-start mb-4"
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <span>Çözümlerimiz</span>
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
              Sint veniam tempor sint eu commodo ullamco reprehenderit amet.
              Reprehenderit laborum esse mollit exercitation sit ea commodo eu
              nulla. Aute consectetur dolor tempor exercitation dolor
              reprehenderit veniam. Duis qui ut fugiat culpa pariatur ea velit
              in. Aliqua laboris adipisicing cillum nisi aute est aliquip
              laboris id laboris officia velit esse. Eu aliqua enim
              reprehenderit amet incididunt.
            </MotionP>
          </div>
          <div className="w-full xl:max-w-[65%]">
            <ServiceSlider arrayPage={solutions}/>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <Bulb />
      </div>
      <SwiperPartner/>
    </PageContainer>
  );
}
