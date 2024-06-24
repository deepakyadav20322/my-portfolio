import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { PiDownloadBold } from "react-icons/pi";
import { HiMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link'


const Profile = () => {
  return (
 
    <div className='personal-Info-area  sticky top-0 '>
        <div className='flex flex-col justify-start items-center '>
          <div className='Image-wrapper rounded-lg bg-slate-300 lg:w-56 lg:h-56 xl:h-60 xl:w-60 overflow-hidden '>
            <Image alt='profile-img' src={"/Images/profImg.jpg"} width={240} height={240} loading='lazy' className='rounded-lg'/>
            </div>
        <h4 className='mt-5 text-xl md:text-[1.65rem] font-semibold'>Deepak Yadav</h4>
        <div className='px-5 py-2 rounded-lg bg-[#f3f6f6] my-3 text-blue-500 '><span>Fullstack Developer</span></div>
        </div>

        <div className='Social-media-links flex flex-row justify-center items-center gap-5'>
       
        <Link target='_blank' href={` https://github.com/deepakyadav20322`}>
        <FaGithub className='p-2 bg-[#f3f6f6] rounded-lg hover:bg-[#1c9cea] text-[#000] hover:text-white transition-colors duration-100 leading-10 cursor-pointer' size={33} />
        </Link>
        <Link target='_blank' href={`https://twitter.com/Deepaky16035236?t=9r0Pw9ynIKDHUv13aNuv3g&s=08`}>
        <FaXTwitter className='p-2 bg-[#f3f6f6] rounded-lg hover:bg-[#1c9cea] hover:text-white transition-colors duration-100 leading-10 cursor-pointer' size={33} />
        </Link>
        <Link target='_blank' href={`https://www.instagram.com/solvertech7/?igsh=MWhkZHJtajh5dzBxbQ%3D%3D`}>
        <FaInstagram className='p-2 bg-[#f3f6f6] rounded-lg hover:bg-[#1c9cea] text-[#e12a72] hover:text-white transition-colors duration-100 leading-10 cursor-pointer font-semibold' size={33} />
        </Link>
        <Link target='_blank' href={`https://www.linkedin.com/in/deepak-yadav-944860205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`}>
        <FaLinkedinIn className='p-2 bg-[#f3f6f6] rounded-lg hover:bg-[#1c9cea] text-[#1c9cea] hover:text-white transition-colors duration-100 leading-10 cursor-pointer' size={33} />
        </Link>
        </div>
        <div className='extra-communication-channnel px-5 md:px-3 my-6'>
        <div className='bg-[#f3f6f6] lg:min-w-56 xl:min-w-72 px-3 py-6 w-full m-auto flex flex-col justify-center  items-start rounded-xl gap-3 '>
          {
          [{name:'email',val:"deepakyadav20322@gmail.com"},{name:'phone',val:"9793435373"},{name:"location",val:"Uttar Pradesh"}].map((item)=>(
            <div key={item.name} className='phone flex flex-row justify-start items-center gap-3 border-b-[1px] border-gray-300 w-full pb-3'>
          { item.name=="phone"?<FaMobileScreenButton className='w-10 h-10 p-2 bg-[white] rounded-lg shadow-lg  text-red-600' size={35} />:""}
         { item.name=="email"? <HiMail className='w-10 h-10 p-2  bg-[white] rounded-lg shadow-lg  text-red-600'size={35} />:""}
         { item.name=="location"? <FaLocationDot className='w-10 h-10 p-2 bg-[white] rounded-lg shadow-lg  text-red-600' size={35} />:""}
            <div className='flex flex-col justify-center items-start text-sm gap-y-2'>
              <span className=' text-xs text-[#44566c]'>{item.name}</span>
              <span className=' text-sm font-medium'>{item.name=="phone"?"+ "+item.val:item.val}</span>
            </div>
          </div>
          ))
          }

          {/* <div className='email'></div>
          <div className='location'></div>
          <div className='DOB'></div> */}
  
         
        </div>
        </div>
        <div className='flex flex-row justify-center items-center w-full text-lg font-semibold'>
        <a href={'/Images/Resume_deepak_pu.pdf'} download={'deepak_yadav_Reasume'} className='text-white bg-[#1b74e4] rounded-xl px-6 py-3 outline-none flex flex-row justify-center items-center gap-x-2'><PiDownloadBold size={25}/>Download CV</a>
        </div>
    </div>
    
  )
}

export default Profile   