import React from "react";
import Image from "next/image";
import { MdCancel } from "react-icons/md";

export default function Modal({ item, setOpenModal, openModal }) {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000] z-[5000] opacity-70"
        onClick={() => setOpenModal(false)}
      ></div>
      <div className="bg-primary/80 rounded-lg border-accent fixed w-[70%] h-[90%] top-[50%] px-20 left-[50%] z-[8000] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center border">
        <div className="w-[350px] sm:w-[400px] lg:w-[500px] border border-accent px-4 py-2  rounded-lg">{item.icon}</div>
       
          <div className="font-bold text-2xl text-accent text-center w-[250px]">{item.title}</div>

        <div className="font-bold text-lg w-[250px] md:w-[500px] text-center">{item.description}</div>
        <div>
          <MdCancel className="text-accent absolute  top-2 right-2 text-2xl" onClick={() => setOpenModal(false)}/>
        </div>
      </div>
    </>
  );
}
