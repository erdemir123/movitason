"use client"
import React from 'react'
import Socials from "@/components/Socials"
import Link from "next/link"
import Image from "next/image"
import Typewriter from "typewriter-effect";
import LocaleSwitcher from './LocaleSwitch'

export default function Header() {
  return (
    <div className='absolute z-30 w-full flex items-center px-16  xl:px-0 xl:h-[90px] '>
      <div className='container mx-auto  flex items-center justify-center gap-2'>
        
        <Link href={"/"} className='md:flex items-center text-accent font-bold '>
          <Image src={"/movitaLogo.png"} width={100} height={48} alt='' priority={true} />
          <div className='hidden lg:block'>
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
        <div className=' hidden flex-1 lg:flex justify-center lg:justify-end items-center gap-4 text-2xl'>
        <Socials/>
        </div>
        <LocaleSwitcher/>
        <div>
          <Link href="https://movita.com.tr/login" className='text-accent font-bold '>Giriş Yap</Link>
        </div>
      </div>
    </div>
  )
}
