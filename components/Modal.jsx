import React from 'react'
import Image from 'next/image'

export default function Modal({ item, setOpenModal, openModal }) {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000fc] z-[50] opacity-70"
        onClick={() => setOpenModal(false)}
      ></div>
      <div className="fixed w-[55%] h-[70%] top-[50%] left-[50%] z-[8000] text-black -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <div>{item}</div>
        <div>x</div>
      </div>
    </>
  )
}
