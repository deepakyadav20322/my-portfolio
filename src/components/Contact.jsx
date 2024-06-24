  'use client'
import { useState } from 'react'
const Contact = () => {
const [data,setData] = useState({});

const handleSubmit = (e)=>{
          e.preventDefault();
  alert('Please connect with me by my email address');
};


  return (
    <section className=''>
    <div className='flex flex-row justify-start items-center gap-x-6'>
        <h1 className='font-extrabold text-4xl'>
        Contact
    </h1>
    <div className='bg-[#1b74e4] w-44 h-1 mt-1 rounded-md'></div>

    </div>
    <div className='bg-[#f8fbfb] px-4 py-16 my-10 rounded-md'>
      <p className='text-2xl font-normal mb-5'>I'm Always Open To Discussing Product</p>
      <h2 className='font-semibold text-2xl'>design work or partnerships.</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-start w-full gap-y-1 mt-10'>
        <label htmlFor="name" className='text-[#44566c]'>Name<span className='text-red-500 px-1'>*</span></label>
        <input type="text" name="" id="name" className='bg-[#f8fbfb]  border-0 border-b-2 outline-none w-full border-black py-1 focus:border-b-[#1b74e4]' autoComplete='off' />
        </div>
        <div className='flex flex-col justify-center items-start w-full gap-y-1 mt-10'>
        <label htmlFor="email " className='text-[#44566c]'>Email<span className='text-red-500 px-1'>*</span></label>
        <input  type="text" name="" id="email" className='bg-[#f8fbfb]  border-0 border-b-2 outline-none w-full border-black py-1 focus:border-b-[#1b74e4]' />
        </div>
        <div className='flex flex-col justify-center items-start w-full gap-y-1 mt-10'>
        <label htmlFor="message " className='text-[#44566c]'>Message<span className='text-red-500 px-1'>*</span></label>
        <textarea type="text" name="" id="message" className='border-0 border-b-2 outline-none w-full border-black py-1 bg-[#f8fbfb] px-1 min-h-10 h-full focus:border-b-[#1b74e4]' />
        
        </div>
        <div className='mt-8 mb-2'><button type={'submit'} className='bg-[#1b74e4] hover:bg-[#1b75e4d6] rounded-md border-[#1b74e4] text-white  border-2 px-3 py-2 transition-all duration-100 font-medium'>Submit</button></div>
      </form>
    </div>
    </section>
  )
}

export default Contact