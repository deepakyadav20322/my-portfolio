'use client'
import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
const Indicator = () => {
        const handleScroll = () => {
          window.scrollTo({
            top: window.innerHeight, // Scroll down by one viewport height
            behavior: 'smooth', // Smooth scroll
          });
        };

  return (
    <div className="">
        <div className="scroll-indicator rounded-full w-12 h-12" onClick={handleScroll}>
      <span className="arrow text-white"><FaArrowDownLong/></span> {/* You can replace this with an actual arrow icon */}
    </div>

    </div>
  )
}

export default Indicator