import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

export default function ServiceModal({ arrayPage }) {
  return (
    <div className="h-[500px] bg-primary/30 flex items-center ">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-full "
      >
        {arrayPage?.map((item, index) => (
          <SwiperSlide key={index} className="px-4 flex items-center justify-center  py-12 ">
            <div className="bg-[rgba(65,47,123,0.15)] w-full h-full min-h-[400px] rounded-lg p-6 flex py-12 flex-col gap-4  group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-xl text-accent mb-4">{item.icon}</div>
              <div className="flex-grow">
                <div className="font-bold text-accent">{item.title}</div>
                <div className="text-white">{item.description}</div>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
