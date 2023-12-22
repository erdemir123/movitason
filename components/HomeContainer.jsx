"use client";
import React, { useState } from "react";
import ParticleContainer from "./ParticleContainer";
import LinkBtn from "./LinkBtn";
import MotionP from "./MotionP";
import Avatar from "./Avatar";

import MotionBtn from "./MotionBtn";

import CountUp from "react-countup";
import MotionDiv from "./MotionDiv";
import { preference } from "@/utils/preference";
import Modal from "./Modal";
import ModalMovita from "./ModalMovita";
import ProjectBtn from "./ProjectBtn";

export default function HomeContainer() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <ParticleContainer />
      <div className="flex flex-col text-center justify-center xl:pt-10 xl:text-left h-full container mx-auto  ">
        <MotionDiv />
        <MotionP>
          movita, mobil araçlar için yerli mühendisler tarafından geliştirilen
          araç takip ve uzaktan izlemeli kamera kayıt özelliği bulunan bir
          sistemdir. Yeni nesil takip sistemi olarak bilinen mobil nvr cihazı
          sayesinde okul taşıtlarında koltuk sensörü cihazımız ile entegreli
          çalışmaktadır. Ayrıca bir çok yeni çözümler sunmaktadır.
        </MotionP>
        <div className=" flex justify-around xl:justify-start w-full gap-1 xl:gap-4">
         
            <div className=" flex">
              <LinkBtn title={"Çözümlerimiz"} href="/urunler" />
            </div>
            <div className="">
              <ProjectBtn
                title="Neden movita?"
                handleClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
              />
            </div>
         
        </div>

        <div className="relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 mt-4 flex gap-x-14 justify-center xl:justify-start">
          <div className="mb-2">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent ">
              <CountUp start={0} end={900} duration={4} /> K+
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mb-4 font-bold">
              Satır kod
            </div>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent ">
              <CountUp start={0} end={1500} duration={4} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-bold">
              Memnun Müşteri
            </div>
          </div>
          <div>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent ">
              <CountUp start={0} end={20} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mb-4 font-bold">
              Çözümler
            </div>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent ">
              <CountUp start={0} end={5} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-bold">
              Yıllık Deneyim
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-[800px] h-full absolute right-0 bottom-0 border">
        <div className="bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <div className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-24 lg:right-[14%] ">
          <Avatar />
        </div>
      </div> */}

      {isOpen && <ModalMovita setIsOpen={()=>setIsOpen(!isOpen)}  array={preference} />}
    </>
  );
}
