"use client";
import { usePathname } from "next/navigation";
import { navData } from "@/utils/navData";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

export default function Nav({ params,locale }) {
  
  const pathname = usePathname();
  const t = useTranslations('navData');
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed  h-max  bottom-2 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-2 md:px-40 xl:p-4  bg-red-100/20 rounded-[50px] xl:h-max h-[60px] backdrop-blur-sm text-2xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              key={index}
              className={`${
                link.path === pathname ? "text-[#02AAEB]" : "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300 cursor-pointer  justify-center `}
              href={`/${locale}${link.path}`}
            ><div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-accent items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">{t(`${link.poKey}`)}</div>
              </div>
              <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] absolute-right-2"></div>
            </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
