import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default function Kvkk() {
  const t = useTranslations("kvkk");

  return (
    <div className=" flex flex-wrap rounded-4  gap-2 justify-center w-[100%] h-full text-center">
      <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
        <h2 className="text-accent font-bold text-center my-2 ">
        {t(`title`)}
        </h2>
        <p className="font-semibold">
        {t(`content`)}
        </p>
      </div>
      <div className="w-full flex justify-center relative">
        <Image
          src={"/kvkk1.jpg"}
          width={400}
          height={500}
          alt=""
          className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
          priority={true}
        />
      </div>
      <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
        <h2 className="text-accent font-bold text-center my-2 ">
          {t(`law`)}
        </h2>
        <p className="font-semibold">
        {t(`law_content`)}
        </p>
      </div>
      <div className="w-full flex justify-center relative">
        <Image
          src={"/kvkk.jpg"}
          width={400}
          height={400}
          alt=""
          className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
          priority={true}
        />
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg ">
          <h2 className="font-bold text-accent text-center">
          {t(`data_indentity`)}
          </h2>
          <p className="font-semibold">
          {t(`data_indentity_content`)}
          </p>
        </div>

        <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg">
          <h2 className="font-bold text-accent text-center">{t(`processing_data`)}</h2>
          <p className="font-semibold">
          {t(`processing_data_content`)}
          </p>
        </div>
        <Image
          src={"/kvkk2.jpeg"}
          width={400}
          height={400}
          alt=""
          className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
          priority={true}
        />
        <div className="w-full my-6 px-2 py-6   bg-red-100/10 rounded-lg">
          <h2 className="font-bold text-accent text-center">
          {t(`purpose`)}
          </h2>
          <p className="font-semibold">
          {t(`purpose_content`)}
          </p>
        </div>
        <div className="w-full flex justify-center relative">
          

          <Image
            src={"/kvkk3.webp"}
            width={400}
            height={400}
            alt=""
            className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
            priority={true}
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg ">
            <h2 className="font-bold text-accent text-center">
            {t(`principles`)}
            </h2>
            <p className="font-semibold">
            {t(`principles_content`)}
            </p>
          </div>

          <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg">
            <h2 className="font-bold text-accent text-center">
            {t(`way_of_processing`)}
            </h2>
            <p className="font-semibold">
             {t(`way_of_processing_content`)}
            </p>
          </div>
          <Image
            src={"/cerez2.jpg"}
            width={400}
            height={400}
            alt=""
            className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
            priority={true}
          />
          <div className="w-full my-6 px-2 py-6   bg-red-100/10 rounded-lg">
            <h2 className="font-bold text-accent text-center">
            {t(`legal_reason`)}
            </h2>
            <p className="font-semibold">
            {t(`legal_reason_content`)}
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
          <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
            <h2 className="text-accent font-bold text-center my-2 ">
            {t(`to_whom`)}
            </h2>
            <p className="font-semibold">
            {t(`to_whom_content`)}
            </p>
          </div>
          <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
            <h2 className="text-accent font-bold text-center my-2 ">
            {t(`application`)}
            </h2>
            <p className="font-semibold">
            {t(`application_content`)}
            </p>
          </div>
          <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
            <h2 className="text-accent font-bold text-center my-2 ">
            {t(`data_owner`)} 
            </h2>
            <p className="font-semibold">
            {t(`data_owner_content`)} 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
