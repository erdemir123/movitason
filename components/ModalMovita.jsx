import React from "react";

export default function ModalMovita() {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000] z-[5000] opacity-90"
        onClick={() => setOpenModal(false)}
      ></div>
      <div className="bg-red-50/40 fixed w-[55%] h-[70%] top-[50%] left-[50%] z-[8000] text-black -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-md shadow-lg shadow-orange-200/20">
        sadık
      </div>
    </>
  );
}
