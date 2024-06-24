'use client'
import { useMyContext } from '@/context/UserContext';
import React, { useState } from 'react'
import { IoPersonOutline } from "react-icons/io5";

const DesktopNavigation = () => {
  const { currTab, setCurrTab,AllTabs } = useMyContext();
    const [activeTab,setActiveTab] = useState(currTab); 

  //  const arr = ['about','works','contact','projects','education' ]
 const handleOnClick = (a,e)=>{
  // e.preventDefault();
  setCurrTab(a);
  setActiveTab(a)
 }

  return (
    <div className=''>
    <div className='flex flex-col justify-start items-center w-full gap-y-4 bg-[#ffffff] py-6 rounded-2xl '>
      {AllTabs.map((a,i)=>(
              <div onClick={(e)=>handleOnClick(a,e)} key={i} className={`w-[76px]  h-[76px] flex flex-col justify-center items-center gap-y-2 py-1 rounded-xl cursor-pointer hover:bg-[#1b74e4] hover:text-white text-[#44566c] ${currTab.trim().toLowerCase()==a.trim().toLowerCase()?'bg-[#1b74e4] text-white':'bg-[#f3f6f6] transition-all duration-100'}`}>
              <IoPersonOutline size={30}/>
              <span className=' font-medium text-sm'>{a}</span>
                </div>
      ))}
      

    </div>
    </div>
  )
}

export default DesktopNavigation