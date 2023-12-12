import { product } from "@/utils/product";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

export default function ServiceSlider({arrayPage}) {
  return (
    <div className="h-full bg-primary/30 flex items-center">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="h-[240px] sm:h-[340px]"
      >
        {arrayPage?.map((item, index) => (
          <SwiperSlide key={index} className="px-4">
            <div className="h-full w-full flex items-center justify-center ">
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-rgba(89,65,169,0.15)] transition-all duration-300">
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                <div>
                  <div className="font-bold text-accent">{item.title}</div>
                  <div>{item.description}</div>
                </div>
                <div className="text-3xl font-bold text-accent">
                  <RxArrowTopRight />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
