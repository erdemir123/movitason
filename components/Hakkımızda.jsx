import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hakkımızda() {
  const t = useTranslations('about');
  return (
    <div className=" flex flex-wrap rounded-4  gap-2 justify-center w-[100%] h-full">
      <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
        <h2 className="text-accent font-bold text-center my-2 ">{t(`about`)}</h2>
        <p className="font-semibold">
        {t(`about_content`)}
        </p>
      </div>
      <div className="w-full flex justify-center relative">
      <Image
              src={"/movitaLogo.png"}
              width={400}
              height={400}
              alt=""
              className="translate-z-0 absolute z-10 opacity-90 -top-10"
              priority={true}
            />
      <Image
              src={"/mission.jpeg"}
              width={400}
              height={400}
              alt=""
              className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
              priority={true}
            />
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg ">
          <h2 className="font-bold text-accent text-center">{t(`mission`)}</h2>
          <p className="font-semibold">
          {t(`mission_content`)}
          </p>
        </div>
       
        <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg">
          <h2 className="font-bold text-accent text-center">{t(`vision`)}</h2>
          <p className="font-semibold">
          {t(`vision_content`)}
          </p>
        </div>
        <Image
              src={"/mission.jpg"}
              width={400}
              height={400}
              alt=""
              className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
              priority={true}
            />
        <div className="w-full my-6 px-2 py-6   bg-red-100/10 rounded-lg">
          <h2 className="font-bold text-accent text-center">{t(`team`)}</h2>
          <p className="font-semibold">
          {t(`team_content`)}
          </p>
        </div>
      </div>
    </div>
  );
}
