import Image from "next/image";
import Link from "next/link";
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
      projectName: "Web Cart",
      projectLiveLink: "https://web-cart-app.netlify.app/",
      projectGithubLink: "https://github.com/deepakyadav20322/E-Commerce-Cart",
      projectImageLink: "webCartScreenshot.png",
      projectDuration: "",
    },
    {
      projectName: "Blog Web App",
      projectLiveLink:
        "https://blog-app-frontend-3o4yb8dv8-deepakyadav20322.vercel.app/",
      projectGithubLink:
        "https://github.com/deepakyadav20322/Blog-app-frontend/tree/main/blog_app-fronted",
      projectImageLink: "blogImgScreenshot.png",
      projectDuration: "",
    },
    {
      projectName: "IOT_Verse",
      // projectLiveLink: "https://iot-next-js-final.vercel.app/",
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
  ];

  return (
    <section className="w-full">
      <div className="flex flex-row justify-start items-center gap-x-6 mb-4">
        <h1 className="font-extrabold text-4xl">Projects</h1>
        <div className="bg-blue-500 w-44 h-1"></div>
      </div>
      <div className="flex flex-row justify-evenly items-start flex-wrap gap-10 w-full px-3 sm:px-5 lg:px-0">
        {project.map((a, i) => (
          <div
            key={i}
            className="border-2 rounded-md bg-gray-100 w-full lg:min-w-80 lg:max-w-[325px] lg:min-h-64  flex flex-col gap-3 justify-center p-4 "
          >
            <div className="w-full max-h-56 h-full m-auto flex justify-center overflow-hidden">
              <Link key={i} href={a.projectLiveLink} className="h-full group " target='_blanck'>
                <Image
                  className="lg:w-[100%] lg:h-[70%] md:w-[540px] md:h-[540px] w-[100%] h-[70%] border-[1px]  rounded-sm group-hover:border-blue-500 p-1"
                  alt="image-photo"
                  src={`/Images/${a.projectImageLink}`}
                  width={285}
                  height={210}
                />
              </Link>
            </div>
            <div className="flex flex-col justify-between items-start w-full">
              <div className="flex flex-row justify-between items-center w-full mb-1">
                <Link
                  target="_blank"
                  className=" flex flex-row text-red-400 font-semibold"
                  href={a.projectLiveLink}
                >
                  <span className=" italic underline">Live link </span>
                  <div className="pulse">
                    <span style={{ "--i": "0" }}></span>
                    <span style={{ "--i": "1" }}></span>
                    <span style={{ "--i": "2" }}></span>
                    <span style={{ "--i": "3" }}></span>
                  </div>
                </Link>
                <Link
                  target="_blank"
                  className=" underline italic"
                  href={a.projectGithubLink}
                >
                  GitHub Code
                </Link>
              </div>

              <p className=" mt-2 font-semibold">{a.projectName}</p>
              {/* <p className="mt-1 text-base">Sep 2023 - Oct 2023</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
