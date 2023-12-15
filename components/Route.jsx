"use client"
import React from "react";
import route from "../public/route.png";
import follow from "../public/follow1.png";
import Image from "next/image";
import { benefit, routes } from "@/utils/routeOptimization";
import { motion } from "framer-motion";

export default function Route() {
    const fadeInAnimationVAriants = {
        initial: {
          opacity: 0,
          y: 20,
        },
        animate: (index) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.04 * index,
          },
        }),
      };
  return (
    <div className="bg-primary/30 xl:py-6 rounded-md mt-1 py-24 flex flex-col justify-center items-center gap-4 md:px-4 ">
      <div className="flex flex-col justify-center items-center w-full gap-4 md:px-4 bg-red-100/20">
        <div className="w-full mt-4">
          <h2 className="my-2 text-center text-accent  font-bold text-lg">
            Rota Optimizasyonu
          </h2>
          <div className="xl:flex-row flex-col flex gap-6 items-center justify-center text-md">
            <Image
              src={route}
              width={350}
              height={250}
              alt="movitaqr"
              className="w-full rounded-lg"
            />
            <div className="font-bold">
              {routes.map((item, index) => (
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
                  className="flex items-center gap-4"
                >
                  <div className="text-accent">{item.icon}</div>
                  <div>{item.poKey}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full mb-6">
          <h2 className="my-8 text-center text-accent  font-bold text-lg ">
            Sağladığı Yararlar
          </h2>
          <div className="xl:flex-row flex-col flex gap-6 items-center justify-center text-md">
            <div className="font-bold flex flex-col  gap-2">
              {benefit.map((item, index) => (
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
                  className="flex items-center gap-4"
                >
                  <div className="text-accent">{item.icon}</div>
                  <div>{item.poKey}</div>
                </motion.div>
              ))}
            </div>
            <Image
              src={follow}
              width={400}
              height={250}
              alt="movitaqr"
              className=" w-full h-full md:w-[50%] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
