import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import SwiperCore, { Autoplay,Pagination, Navigation } from 'swiper/modules';


export default function swiper() {
  return (
    <Swiper
    
    spaceBetween={50}
    slidesPerView={3}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    className="swiper-container"
    
      >
        <SwiperSlide className='border border-slate-900 flex justify-center items-center'>d<Image src={"/astor.jpg"} width={120} height={100} alt="" className="" priority={true}/></SwiperSlide>
        <SwiperSlide className=' border border-slate-900 flex justify-center items-center'><Image src={"/asti.jpg"} width={120} height={120} alt="" className="" priority={true}/> 2</SwiperSlide>
        <SwiperSlide className=' border border-slate-900 flex justify-center items-center'><Image src={"/aygazlogo.jpg"} width={120} height={120} alt="" className="" priority={true}/> 3</SwiperSlide>
        <SwiperSlide className=' border border-slate-900 flex justify-center items-center'><Image src={"/raykent.png"} width={120} height={120} alt="" className="" priority={true}/> 4</SwiperSlide>
        <SwiperSlide className=' border border-slate-900 flex justify-center items-center'><Image src={"/yapay.png"} width={120} height={120} alt="" className="" priority={true}/> 5</SwiperSlide>
        <SwiperSlide className=' border border-slate-900 flex justify-center items-center'><Image src={"/yapay.png"} width={120} height={120} alt="" className="" priority={true}/> 6</SwiperSlide>
        <SwiperSlide className=' border border-slate-900 flex justify-center items-center'><Image src={"/yapay.png"} width={120} height={120} alt="" className="" priority={true}/> 7</SwiperSlide>
        <SwiperSlide className=' border border-slate-900 flex justify-center items-center'><Image src={"/yapay.png"} width={120} height={120} alt="" className="" priority={true}/> 8</SwiperSlide>
        <SwiperSlide className=' border border-slate-900 flex justify-center items-center'><Image src={"/yapay.png"} width={120} height={120} alt="" className="" priority={true}/> 9</SwiperSlide>
      </Swiper>
  )
}
