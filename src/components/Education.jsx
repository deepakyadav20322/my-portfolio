import React from "react";
import { FaToolbox } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { motion } from "framer-motion";

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
    { company: 'EZSync', timeLineFrom: 'April 2024', timeLineTo: 'June 2024', workArea:"Web development internship",desc:"Made An AI interview platform by using MERN stack and Redux and Deploy on AWS." }, 
    { company: 'Prodigy Infotech', timeLineFrom: 'September 2023', timeLineTo: 'August 2023', workArea:"Web development internship",desc:"Creating Responsive web apps by using React, javascript, Tailwind CSS." }, 
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const hoverEffect = {
    scale: 1.02,
    transition: { duration: 0.2 }
  };

  const progressBarAnimation = {
    hidden: { width: 0 },
    show: {
      width: "100%",
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  return (
    <div className="">
      {/*--------------------- all boxes of Edu/Exp domain ------------------ */}
      <motion.div 
        initial="hidden"
        animate="show"
        variants={container}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4"
      >
        {/* Education section----------------------- */}
        <div className="grid grid-cols-1 self-start gap-y-5">
          <motion.div 
            variants={item}
            className="icon-box flex justify-start items-start pt-1 gap-x-4 my-4"
          >
            <LuGraduationCap size={40} className="text-blue-500" />
            <h1 className="text-[1.8rem] font-medium">Education</h1>
          </motion.div>
          
          {educationHistory.map((b, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={hoverEffect}
              className="bg-gray-200 even:bg-[#fff4f4] odd:bg-[#eef5fa] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-row justify-start items-start gap-x-6">
                <div className="flex flex-col justify-start items-start leading-[1.8] text-[#44566c]">
                  <p className="text-sm font-medium text-gray-500">{b.timeLine}</p>
                  <h2 className="font-semibold text-xl mt-1 mb-3 text-gray-800">
                    {b.profession}
                  </h2>
                  <p className="text-gray-700">{b.institute}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/*----------------- Experience section----------------------- */}
        <div className="grid grid-cols-1 self-start gap-y-5">
          <motion.div 
            variants={item}
            className="icon-box flex justify-start items-start pt-1 gap-x-4 my-4"
          >
            <FaToolbox size={35} className="text-blue-500" />
            <h1 className="text-[1.8rem] font-medium">Experience</h1>
          </motion.div>
          
          {exprienceHistory.map((ex, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={hoverEffect}
              className="bg-gray-200 even:bg-[#fff4f4] odd:bg-[#eef5fa] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-row justify-start items-start gap-x-6">
                <div className="flex flex-col justify-start items-start leading-[1.8] text-[#44566c]">
                  <p className="text-sm font-medium text-gray-500">
                    {ex.timeLineTo}
                    <span className="mx-2 h-[2px] w-3 align-middle inline-block bg-[#44566c]"></span> 
                    {ex.timeLineFrom}
                  </p>
                  <h2 className="font-semibold text-lg mt-1 mb-3 text-gray-800">
                    {ex.workArea}
                  </h2>
                  <p className="font-medium text-[#1b74e4]">
                    Company: <span className="text-gray-700">{ex.company}</span>
                  </p>
                  <p className="text-gray-700 mt-2">{ex.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills and Knowledge Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14 py-16 bg-[#f8fbfb] px-4 rounded-xl"
      >
        {/* Working Skills */}
        <div className="grid grid-cols-1 self-start gap-y-5">
          <motion.h1 
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-medium text-gray-800"
          >
            Working Skill
          </motion.h1>
          
          {slillAndPercentageArr.map((a,i) => (
            <motion.div 
              key={i}
              initial="hidden"
              animate="show"
              variants={container}
              className="flex flex-col justify-start items-center w-full gap-y-2 text-[#44566c]"
            >
              <div className="flex flex-row justify-between items-center w-full">
                <span className="font-medium text-gray-700">{a.skillName}</span>
                <span className="font-medium">{a.percentage}%</span>
              </div>
             
              <div className="w-full h-[6px] bg-[#edf2f2] rounded-xl overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${a.percentage}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="h-[6px] rounded-xl"
                  style={{ backgroundColor: `${skillcolor[i] || '#65B741'}` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
       
        {/* Knowledge */}
        <div className="grid grid-cols-1 self-start gap-y-5">
          <motion.h1 
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-medium text-gray-800"
          >
            Knowledge
          </motion.h1>
          
          <motion.div 
            variants={container}
            className="flex justify-start items-start flex-wrap gap-y-3 gap-x-2 text-[#44566c]"
          >
            {Knowledge.map((k,i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#1b74e4",
                  color: "white"
                }}
                className="bg-[#edf2f2] px-5 py-[5px] rounded-md cursor-default shadow-sm"
              >
                <span>{k}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;