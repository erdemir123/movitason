"use client"
import React from 'react'
import Socials from "@/components/Socials"
import Link from "next/link"
import Image from "next/image"
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div className='absolute z-30 w-full flex items-center px-16  xl:px-0 xl:h-[90px] '>
      <div className='container mx-auto  flex items-center justify-center gap-2'>
        
        <Link href={"/"} className='md:flex items-center text-accent font-bold '>
          <Image src={"/movitaLogo.png"} width={100} height={48} alt='' priority={true} />
          <div className='hidden md:block'>
          <Typewriter
        options={{
          strings: ["Araç Takip Sistemleri", "Kamera Sistemleri", "Güvenlik Sistemleri"],
          autoStart: true,
          loop: true,
          delay: 100,
          cursor:""
        }}
      /> 
          </div>
        </Link>
        <Socials/>
      </div>
    </div>
  )
}
