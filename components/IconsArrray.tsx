'use client'
import React from 'react'
import { motion } from "framer-motion";
import { iconsArray } from '@/data';

const IconsArrray = () => {
  return (
    <div className="w-full flex items-center justify-start gap-8 lg:gap-16 py-0 lg:my-2 my-0 overflow-x-hidden scrollbar-hidden">
        <motion.div
          className="flex gap-8 lg:gap-16"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          }}
          style={{ display: "flex", minWidth: "200%" }}
        >
          {[...iconsArray, ...iconsArray].map((Icon, index) => (
            <div key={index} className="flex-shrink-0">
              <Icon size={35}  className='text-white'/>
            </div>
          ))}
        </motion.div>
      </div>
  )
}

export default IconsArrray
