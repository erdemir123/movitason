import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='w-full h-full bg-site/5 flex justify-center items-center absolute top-0 left-0 z-100  '>
      <Image src={"/movitaLogo.png"} width={350} height={350} alt='' priority={true} />
    </div>
  )
}