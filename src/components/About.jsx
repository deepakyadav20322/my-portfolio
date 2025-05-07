import React from 'react';
import { FaToolbox } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const services = [
    {
      name: "UI/UX Designer",
      desc: "Our UI/UX designs create easy-to-use and enjoyable experiences, making interactions smooth and engaging for users."
    },
    {
      name: "Web Development",
      desc: "From front-end aesthetics to back-end functionality, our full-stack web development solutions deliver robust, scalable, and user-centric digital experiences for your business."
    },
    {
      name: "Content Creation",
      desc: "Producing informative and engaging technical content, we deliver clear, concise, and expertly crafted materials tailored to your audience's needs."
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const hoverEffect = {
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  };

  return (
    <section className='max-w-6xl mx-auto px-4 py-12'>
      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='flex flex-row justify-start items-center gap-x-6 mb-12'
      >
        <h1 className='font-extrabold text-4xl text-gray-800'>
          About Me
        </h1>
        <div className='bg-blue-500 w-44 h-1'></div>
      </motion.div>

      {/* About Content */}
      <motion.div 
        initial="hidden"
        animate="show"
        variants={container}
        className='about-content flex flex-col justify-start items-center gap-y-8 mb-16 text-base text-[#44566c]'
      >
        <motion.p variants={item} className='text-lg leading-relaxed text-center max-w-3xl'>
          I am a Creative Designer and Fullstack Developer, working in web development. I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </motion.p>
        <motion.p variants={item} className='text-lg leading-relaxed text-center max-w-3xl'>
          My aim is to bring across your idea and identity in the most creative way. I've created websites for many startups and businesses.
        </motion.p>
      </motion.div>

      {/* Services Section */}
      <div className='mb-16'>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='font-extrabold text-2xl my-7 text-gray-800'
        >
          What I Do!
        </motion.h1>

        {/* Services Grid */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={hoverEffect}
              className="bg-gray-100 even:bg-[#fff4f4] odd:bg-[#eef5fa] p-6 rounded-lg shadow-md transition-all"
            >
              <div className='flex flex-row justify-start items-start gap-6'>
                <div className='icon-box w-16 flex justify-center items-start pt-1'>
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="text-blue-500"
                  >
                    <FaToolbox size={32} />
                  </motion.div>
                </div>
                <div className='flex flex-col justify-start items-start leading-relaxed text-[#44566c]'>
                  <h2 className='font-semibold text-xl mt-1 mb-3 text-gray-800'>{item.name}</h2>
                  <p className='text-gray-600'>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About;