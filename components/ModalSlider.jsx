import React from 'react';
import { MdCancel } from 'react-icons/md';
import { solutionsModal } from '@/utils/solutionsModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

export default function ModalSlider({ setIsOpen }) {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000] z-[5000] opacity-70"
        onClick={setIsOpen}
      ></div>
      <div className="bg-primary/80 rounded-lg border-accent fixed w-[80%] h-[90%] top-[50%] left-[50%] z-[8000] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center border  overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="w-full h-full"
        >
          {solutionsModal?.map((item, index) => (
            <SwiperSlide key={index} className="h-full px-4 flex items-center justify-center gap-4 py-12">
              <div className="text-xl text-accent mb-4  h-[700px] flex items-center justify-center bg-white rounded-md">
                
                {item.icon}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      <div>
          <MdCancel className="text-accent absolute top-2 right-2 text-2xl z-50 cursor-pointer" onClick={setIsOpen} />
        </div>
      </div>
    </>
  );
}
