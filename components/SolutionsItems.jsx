"use client";
import { armoredCar } from "@/utils/solutionsPage.js/armoredCar";
import { bus } from "@/utils/solutionsPage.js/bus";
import { cargo } from "@/utils/solutionsPage.js/cargo";
import { minibus } from "@/utils/solutionsPage.js/minibus";
import { school } from "@/utils/solutionsPage.js/schoolBus";
import { security } from "@/utils/solutionsPage.js/security";
import { taxi } from "@/utils/solutionsPage.js/taxiAndPrivate";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SolutionInfo from "./SolutionInfo";

export default function SolutionsItems({ item }) {
  let content = null;
  switch (item[0]) {
    case "Taksi-Ozel-Araclar":
      console.log("burada");
      content = taxi;
      break;
    case "Minibus-Midibusler":
      content = minibus;
      break;
    case "Sehirler-Arasi-Otobusler":
      content = bus;
      break;
    case "Zirhli-Tasima-Araclari":
      content = armoredCar;
      break;
    case "Guvenlik-Kuvvetleri-Araclari":
      content = security;
      break;
    case "Yuk-Esya-Tasiyan-Araclari":
      content = cargo;
      break;
    case "Okul-Servisleri":
      content = school;
      break;
    case "Belediye-Halk-Otobusleri":
      content = council;
      break;
  }
  return (
    <div>
      <AnimatePresence>
        {content.map((item, index) => (
          <motion.div key={index} style={{ marginBottom: "20px" }}>
            <SolutionInfo {...item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
