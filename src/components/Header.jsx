"use client";
import { IoMoon, IoPersonOutline } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState,useEffect,useRef } from "react";
import Link from "next/link";
import { useMyContext } from "@/context/UserContext";


const Header = () => {
  const { currTab, setCurrTab, AllTabs } = useMyContext();
  const divRef = useRef(null);
  const [activeMobNav, setActiveMobNav] = useState(false);

  const handleOnClick = (a, e) => {
    // e.preventDefault();
    setCurrTab(a);
   
      setActiveMobNav(false);
    
  };

// ====================================================
  // Function to handle clicks outside the div
  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setActiveMobNav(false);
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the div
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);









  return (
    <header className="relative w-full  max-w-7xl">
      <div className="flex flex-row justify-between items-center w-full m-auto px-4 py-10 bg-transparent">
        <h1 className="text-red-500 text-2xl font-bold">My Portfolio</h1>
        <div className="flex gap-x-4">
          <div className="rounded-full shadow-lg border-[1px] bg-white p-3 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-75">
            <IoMoon size={18} />
          </div>
          <div
            className="rounded-full shadow-lg p-3 bg-blue-600 text-white cursor-pointer xl:hidden"
            onClick={() => setActiveMobNav(!activeMobNav)}
          >
            <FaBarsStaggered size={18} />
          </div>
        </div>
      </div>

      {/* // Mobile navigation part -------------------------->>>>>  */}
      <div
       ref={divRef}
        className={`bg-white rounded-lg absolute top-[7rem] left-0 right-0 max-w-7xl w-full m-auto transition-height duration-500 overflow-hidden ${
          activeMobNav ? "h-64 border-b-[1px] border-black " : "h-0"
        } z-40`}
      >
        <ul className="flex flex-col items-start justify-start ms-12 py-3 gap-y-3">
          <div className="flex flex-col justify-start items-center w-full gap-y-4 bg-[#ffffff] py-6 rounded-2xl ">
            {AllTabs.map((a, i) => (
              <div
                onClick={(e) => handleOnClick(a, e)}
                key={i}
                className={`w-full flex flex-col justify-center items-starts gap-y-2 py-1 ps-3 rounded-xl cursor-pointer hover:bg-[#1b74e4] hover:text-white text-[#44566c] `}
              >
                <span className=" font-medium text-sm">{a}</span>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
