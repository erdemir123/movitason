import React from 'react'
import { motion } from 'framer-motion';
import logo from "@/public/movitaLogo.png"
import Image from 'next/image';
import { FaBattleNet } from "react-icons/fa";
export default function SolutionInfo({ header, content, header2, especially, img1, img2 }) {
    const defaultTransition = { duration: 2, ease: "easeInOut" };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={defaultTransition}
      style={{ marginBottom: '20px' }}
      className='flex justify-center items-center flex-col'
    >
        <motion.div
        initial={{ x: '-200%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '200%', opacity: 0 }}
        className='flex justify-center item-center'
      >
         <div style={{ width: '100%'}}>
          <Image
            src={img2.props.src.src}
            alt="armored-car-1"
            layout="responsive"
            width={800}
            height={480}  // Yüksekliği orantılı olarak ayarlanabilir
          />
        </div>
      </motion.div>
      <motion.h2
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        className='flex justify-center my-4 font-bold text-xl text-accent'
      >
        {header}
      </motion.h2>
      <div className='border my-4  bg-red-100/20 px-4 py-2 rounded-md border-accent'>
        {content.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            className='flex gap-4 items-center font-bold text-white'
            
          >
      <div className='flex justify-center items-center '>
        <FaBattleNet size={30} className='text-accent' />
      </div>
      {paragraph}
          </motion.p>
        ))}
      </div>
      <motion.div
        initial={{ x: '-200%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '200%', opacity: 0 }}
        className='flex justify-center item-center my-4'
      >
         <div style={{ width: '100%'}}>
          <Image
            src={img1.props.src.src}
            alt="armored-car-1"
            layout="responsive"
            width={800}
            height={480}  // Yüksekliği orantılı olarak ayarlanabilir
          />
        </div>
      </motion.div>
      
      <motion.h2
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        className='flex justify-center my-4 font-bold text-xl text-accent '
      >
        {header2}
      </motion.h2>
      <ul className='border mt-4 mb-8 bg-red-100/20 px-4 py-4 rounded-md border-accent '>
  {especially.map((feature, index) => (
    <motion.li
      key={index}
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      className='flex gap-4 items-center  w-full mb-2'
    >
      <div className='flex justify-center items-center '>
        <FaBattleNet size={30} className='text-accent' />
      </div>
      {feature}
    </motion.li>
  ))}
</ul>

    </motion.div>
  );
}
