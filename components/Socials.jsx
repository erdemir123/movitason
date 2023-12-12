"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { BiLogoYoutube } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookSquare,FaInstagramSquare} from "react-icons/fa";


export default function Socials() {
  return (
    <div className='flex-1 flex justify-end items-center gap-4 text-2xl'>
      <Link href={"/"} className='text-[#02AAEB] hover:text-accent transition-all duration-300'><BiLogoYoutube/></Link>
      <Link href={"/"} className='text-[#02AAEB] hover:text-accent transition-all duration-300'><AiOutlineTwitter/></Link>
      <Link href={"/"} className='text-[#02AAEB] hover:text-accent transition-all duration-300'><FaFacebookSquare/></Link>
      <Link href={"/"} className='text-[#02AAEB] hover:text-accent transition-all duration-300'><FaInstagramSquare/></Link>
    </div>
  )
}
