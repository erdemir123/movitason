import React from 'react'
import Image from 'next/image'

export default function Avatar() {
  return (
    <div className='hidden xl:flex'><Image src={"/yapay.png"} width={737} height={678} alt="" className="translate-z-0 w-full h-full absolute z-10 opacity-10" priority={true}/></div>
  )
}
