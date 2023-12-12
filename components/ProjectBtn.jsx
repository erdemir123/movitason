import React from 'react'
import Link from "next/link"
import { IoArrowRedoCircleOutline } from "react-icons/io5";

export default function ProjectBtn() {
  return (
    <Link href="/" className='bg-accent text-center font-extrabold px-8 py-2 rounded-lg flex justify-center relative w-40 group'><span>Çözümler</span><IoArrowRedoCircleOutline className='absolute opacity-0  group-hover:opacity-100 group-hover:translate-x-14 transition-all duration-300'/> </Link>
  )
}
