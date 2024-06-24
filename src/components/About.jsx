import React from 'react'
import { FaToolbox } from "react-icons/fa";



const About = () => {
  return (
    <section className=''>
    <div className='flex flex-row justify-start items-center gap-x-6'>
        <h1 className='font-extrabold text-4xl'>
        About
    </h1>
    <div className='bg-blue-500 w-44 h-1'></div>

    </div>
    <div className='about-content flex flex-col justify-start items-center gap-y-8 mt-5 mb-3 text-base text-[#44566c]'>
        <p className=''>I'm Creative Designer and Fullstack Developer, working in web development. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
        <p>My aim is to bring across your idea and identity in the most creative way. I created website for many startups and business.</p>
    </div>
    <div className=''>
    <h1 className='font-extrabold text-2xl my-7 str'>What I Do!</h1>

          {/*--------------------- all boxes of work domain------------------ */}
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 ">
        {[{name:"UI/UX Desiginer",desc:"Our UI/UX designs create easy-to-use and enjoyable experiences, making interactions smooth and engaging for users."},{name:"Web Development",desc:"From front-end aesthetics to back-end functionality, our full-stack web development solutions deliver robust, scalable, and user-centric digital experiences for your business."},{name:"Content Creation",desc:"Producing informative and engaging technical content, we deliver clear, concise, and expertly crafted materials tailored to your audience's needs."}].map((item,i)=>(
         <div key={i} className="bg-gray-200 even:bg-[#fff4f4] odd:bg-[#eef5fa] p-4  rounded-lg">
         <div className='flex flex-row justify-start items-start gap-x-6'>
             <div className='icon-box w-20 flex justify-center items-start pt-1'>
                  <FaToolbox size={35} className="" />
                  </div>
                  <div className='flex flex-col justify-start items-start leading-[1.8] text-[#44566c]'>
                     <h2 className='font-semibold text-xl mt-1  mb-3'>{item.name}</h2>
                     <p className=''>{item.desc}</p>
                  </div>
         </div>
     </div>
        ))}
    
    {/* <div className="bg-gray-200 p-4 even:bg-[#fff4f4]">Box 2</div>
    <div className="bg-gray-200 odd:bg-[#eef5fa] p-4">Box 3</div>
    <div className="bg-gray-200 p-4 even:bg-[#fff4f4]">Box 4</div> */}
</div>
</div>

    </section>
  )
}

export default About