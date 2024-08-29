import React from "react";
import { FaToolbox } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
const Education = () => {

  const skillcolor = ['#FF6464','#9272D4','#5185D4','#CA56F2','#FFAF45'];
  const slillAndPercentageArr = [
    { skillName: 'Javascript', percentage: '76' },
    { skillName: 'ReactJs', percentage: '75' },
    { skillName: 'NextJs', percentage: '70' },
    { skillName: 'NodeJs', percentage: '65' },
    { skillName: 'MongoDb', percentage: '60' }
  ];
  const educationHistory = [
    { institute: 'Rajkiya Engineering College Banda', timeLine: '2020-2024', profession:"B.Tech" },
    { institute: 'Sant Kabir Inter College Mau',timeLine: '2018-2019', profession:"Intermediate" },
   
  ];
 const Knowledge = ["Next.js","React.js","Node.js","MongoDb","PostgreSQL","SQL","Docker","AWS","Javascript","C++",'Redis',"Responsive Design"]
  const exprienceHistory = [
    
    { company: 'EZSync', timeLineFrom: 'April 2024', timeLineTo: 'June 2024', workArea:"Web development internship",desc:"Made An AI interview plateform by using MERN stack and Redux and Deploy on AWS." }, 
    
    { company: 'Prodigy Infotech', timeLineFrom: 'September 2023', timeLineTo: 'August 2023', workArea:"Web development internship",desc:"Creating Responsive web apps by using React, javascript ,Tailwind CSS." }, 
    
  ];


  return (
    <div className="">
      {/*--------------------- all boxes of Edu/Exp domain ------------------ */}
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 px-4">
        {/* Education section----------------------- */}
        <div className="grid grid-cols-1 self-start gap-y-5 ">
          <div className="icon-box flex justify-start items-start pt-1 gap-x-4 my-4">
            <LuGraduationCap size={40} className="" />
            <h1 className=" text-[1.8rem] font-medium">Education</h1>
          </div>
          {educationHistory.map((b, i) => (
            <div
              key={i}
              className="bg-gray-200 even:bg-[#fff4f4] odd:bg-[#eef5fa] p-4  rounded-lg"
            >
              <div className="flex flex-row justify-start items-start gap-x-6">
                <div className="flex flex-col justify-start items-start leading-[1.8] text-[#44566c]">
                  <p className="">{b.timeLine}</p>
                  <h2 className="font-semibold text-xl mt-1  mb-3">
                   {b.profession}
                  </h2>
                  <p className="">{b.institute}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

       {/*----------------- Exprience section----------------------- */}
        <div className="grid grid-cols-1 self-start gap-y-5 ">
          <div className="icon-box flex justify-start items-start pt-1 gap-x-4 my-4">
            <FaToolbox size={35} className="" />
            <h1 className=" text-[1.8rem] font-medium">Exprience</h1>
          </div>
          
          {exprienceHistory.map((ex, i) => (
            <div
              key={i}
              className="bg-gray-200 even:bg-[#fff4f4] odd:bg-[#eef5fa] p-4  rounded-lg"
            >
              <div className="flex flex-row justify-start items-start gap-x-6">
                <div className="flex flex-col justify-start items-start leading-[1.8] text-[#44566c]">
                  <p className="">{ex.timeLineTo}<span className="mx-2 h-[2px] w-3 align-middle inline-block bg-[#44566c] "></span> {ex.timeLineFrom}</p>
                  <h2 className="font-semibold text-lg mt-1  mb-3">
                   {ex.workArea}
                  </h2>
                  <p className="font-medium text-[#1b74e4]"> Company:<span className="text-[#000]">{" "}{ex.company}</span></p>
                  <p>{ex.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 mt-14 py-16 bg-[#f8fbfb] px-4">
      <div className="grid grid-cols-1 self-start gap-y-5 ">
          <h1 className="text-2xl font-medium">Working Skill</h1>
          {
            slillAndPercentageArr.map((a,i)=>(
                <div key={i} className="flex flex-col justify-start items-center w-full gap-y-2 text-[#44566c]">
            
                <div className=" flex flex-row justify-between items-center w-full">
                    <span>{a.skillName}</span>
                    <span>{a.percentage}%</span>
                </div>
               
                <div className="w-full h-[6px] bg-[#edf2f2] rounded-xl">
                    <div className={` h-[6px] rounded-xl`} style={{width:`${a.percentage || 55}%`, backgroundColor:`${skillcolor[i] || '#65B741'}`}}></div>
                </div>
             
               
              </div>
            ))
          
}
        </div>
       
      <div className="grid grid-cols-1 self-start gap-y-5 ">
          <h1 className="text-2xl font-medium">Knowledge</h1>
          <div className="flex justify-start items-start flex-wrap gap-y-3 gap-x-2 text-[#44566c] ">
            {
            Knowledge.map((k,i)=>(
                <div key={i} className="bg-[#edf2f2] px-5 py-[5px] rounded-md">
                <span>{k}</span>
            </div>
            ))
}
          </div>
        </div>
        
    </div>
    </div>
  );
};

export default Education;
