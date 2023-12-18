import React from 'react'
import { partner } from "@/utils/partner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


export default function SwiperPartner() {
        
  return (
    <div className="absolute bottom-20 xl:bottom-2 left-0 w-full h-24 px-4 hidden lg:block ">
    <div className={`bg-red-100/10 w-full h-full rounded-md flex justify-center items-center  cursor-pointer `} >
      <Swiper
        spaceBetween={30}
        slidesPerView={4} // Buradaki değeri 2 olarak değiştirin
      
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {partner.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" w-52 h-[80px] flex justify-center items-center py-2 px-4">
              {item.icon}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  )
}
