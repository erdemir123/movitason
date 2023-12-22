import React from 'react'
import Image from 'next/image'

export default function Bulb() {
  return (
    <div className='absolute -left-36 bottom-8 mix-blend-color-dodge  animate-pulse duration-75 z-auto w-[200px] xl:w-[260px] rotate-[12deg]'>
      <Image src="/bulb.png" width={260} height={200} className="w-full h-full" alt="" priority/>
    </div>
  )
}
