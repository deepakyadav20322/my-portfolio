import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const project = [
    {
      projectName: "GitHub Profile Search",
      projectLiveLink: "https://git-hub-search-2.vercel.app/",
      projectGithubLink: "https://github.com/deepakyadav20322/GitHub-search-2",
      projectImageLink: "githubsearchScreenshot.png",
      projectDuration: "",
    },
    {
      projectName: "Blog Web App",
      projectLiveLink: "https://blog-app-frontend-pi.vercel.app/",
      projectGithubLink: "https://github.com/deepakyadav20322/Blog-app-frontend/tree/main/blog_app-fronted",
      projectImageLink: "blogImgScreenshot.png",
      projectDuration: "",
    },
    {
      projectName: "Web Cart",
      projectLiveLink: "https://web-cart-app.netlify.app/",
      projectGithubLink: "https://github.com/deepakyadav20322/E-Commerce-Cart",
      projectImageLink: "webCartScreenshot.png",
      projectDuration: "",
    },
    {
      projectName: "Nested Data visulization",
      projectLiveLink: "https://rezo-ai-projects.vercel.app/",
      projectGithubLink: "https://github.com/deepakyadav20322/RezoAI-projects/tree/main/pagination/client2",
      projectImageLink: "enrichtable.png",
      projectDuration: "",
    },
    {
      projectName: "IOT_Verse",
      projectLiveLink: "https://iot-verse-final-prooduct.vercel.app/",
      projectGithubLink: "https://github.com/deepakyadav20322/IoTVerseFinal_Prooduct",
      projectImageLink: "iotNextJsScreenshot.png",
      projectDuration: "",
    },
    {
      projectName: "File Sharing Application",
      projectLiveLink: "https://doc-wave-share.netlify.app/",
      projectGithubLink: "https://github.com/deepakyadav20322/file_share_app-frontend-",
      projectImageLink: "docWave.png",
      projectDuration: "",
    },
    {
      projectName: "AI-SAAS-TEMPLATE",
      projectLiveLink: "https://ezsyncs.vercel.app/",
      projectGithubLink: "https://github.com/deepakyadav20322/AI-SAAS-TEMPLATE",
      projectImageLink: "AI-SAAS-TEMPLATE.png",
      projectDuration: "",
    },
    {
      projectName: "Design-Agency-Template",
      projectLiveLink: "https://degin-agency-template.vercel.app/",
      projectGithubLink: "https://github.com/deepakyadav20322/degin-agency-template",
      projectImageLink: "design-template.png",
      projectDuration: "",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const hoverEffect = {
    scale: 1.03,
    transition: { duration: 0.3 },
  };

  const imageHover = {
    scale: 1.05,
    transition: { duration: 0.4 },
  };

  return (
    <section className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row justify-start items-center gap-x-6 mb-4"
      >
        <h1 className="font-extrabold text-4xl">Projects</h1>
        <div className="bg-blue-500 w-44 h-1"></div>
      </motion.div>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-row justify-evenly items-start flex-wrap gap-10 w-full px-3 sm:px-5 lg:px-0"
      >
        {project.map((a, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={hoverEffect}
            className="border-2 rounded-md bg-gray-100 w-full lg:min-w-80 lg:max-w-[325px] lg:min-h-64 flex flex-col gap-3 justify-center p-4 shadow-lg hover:shadow-xl"
          >
            <div className="w-full max-h-56 h-full m-auto flex justify-center overflow-hidden">
              <Link key={i} href={a.projectLiveLink} className="h-full group" target='_blank'>
                <motion.div whileHover={imageHover}>
                  <Image
                    className="lg:w-[100%] lg:h-[70%] md:w-[540px] md:h-[540px] w-[100%] h-[70%] border-[1px] border-blue-300 group-hover:border-blue-500 p-1 rounded"
                    alt="image-photo"
                    src={`/Images/${a.projectImageLink}`}
                    width={285}
                    height={210}
                  />
                </motion.div>
              </Link>
            </div>
            <div className="flex flex-col justify-between items-start w-full">
              <div className="flex flex-row justify-between items-center w-full mb-1">
                <Link
                  target="_blank"
                  className="flex flex-row text-red-400 font-semibold"
                  href={a.projectLiveLink}
                >
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="italic underline"
                  >
                    Live link 
                  </motion.span>
                  <div className="pulse">
                    <span style={{ "--i": "0" }}></span>
                    <span style={{ "--i": "1" }}></span>
                    <span style={{ "--i": "2" }}></span>
                    <span style={{ "--i": "3" }}></span>
                  </div>
                </Link>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    target="_blank"
                    className="underline"
                    href={a.projectGithubLink}
                  >
                    GitHub Code
                  </Link>
                </motion.div>
              </div>

              <p className="mt-2 font-semibold">{a.projectName}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;