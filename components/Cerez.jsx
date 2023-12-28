import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Cerez() {
  const t = useTranslations("cookies");
  return (
    <div className=" flex flex-wrap rounded-4  gap-2 justify-center w-[100%] h-full text-center">
      <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
        <h2 className="text-accent font-bold text-center my-2 ">
          {t(`header`)}
        </h2>
        <p className="font-semibold">{t(`cookies_content`)}</p>
      </div>
      <div className="w-full flex justify-center relative">
        <Image
          src={"/cerez1.png"}
          width={400}
          height={500}
          alt=""
          className="translate-z-0 lg:w-[60%] h-80 rounded-lg "
          priority={true}
        />
      </div>
      <div className="my-6 px-2 py-6  bg-red-100/10 rounded-lg">
        <h2 className="text-accent font-bold text-center my-2 ">
          {t(`what_is_cookies`)}
        </h2>
        <p className="font-semibold">{t(`what_is_cookies_content`)}</p>
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
        <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg">
          <h2 className="font-bold text-accent text-center">
          {t(`which_cookies`)}
          </h2>
          <p className="font-semibold">
          {t(`which_cookies_content`)}
          </p>
        </div>
        <div className="w-full  xl:w-[48%] my-6 px-2 py-6  bg-red-100/10 rounded-lg ">
          <h2 className="font-bold text-accent text-center">
          {t(`why_cookies`)}
          </h2>
          <p className="font-semibold">
          {t(`why_cookies_content`)}
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
          {t(`cookie_preferences`)}
          </h2>
          <p className="font-semibold">
          {t(`cookie_preferences_content_first`)}
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
          <p className="font-semibold">
          {t(`cookie_preferences_content_second`)}
          </p>
        </div>
      </div>
    </div>
  );
}
