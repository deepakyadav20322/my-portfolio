import AllInformation from "@/components/AllInformation";
import DesktopNavigation from "@/components/DesktopNavigation";
import Header from "@/components/Header";
import Indicator from "@/components/Indicator";
import Profile from "@/components/Profile";



export default function Home() {
  
  return (
   <div className="main-bg relative">
    <main className="max-w-[1320px] w-full m-auto px-6 sm:px-16 lg:px-12 xl:px-3 text-black">
      <div className="flex justify-start items-center w-full">
  <Header/>
      </div>
  <section className="flex flex-col lg:flex-row justify-between items-start w-full relative">
     <div className="profile w-full lg:w-[25%] py-10 bg-[#ffffff] rounded-2xl lg:sticky lg:top-0 lg:z-10  ">
        <Profile/>
     </div>
     <div className="profile w-full lg:w-[70%] xl:w-[60%] bg-[#ffffff] rounded-2xl px-6 lg:px-4 xl:px-6 mt-6 lg:mt-0">
        <AllInformation/>
     </div>
     <div className="profile hidden xl:block w-[10%] py-2 sticky top-24">
         <DesktopNavigation/>
     </div>
  </section>
  </main>
  <div className="fixed bottom-3 right-9 lg:hidden">
        <Indicator />
      </div>
  </div>
  );
}
