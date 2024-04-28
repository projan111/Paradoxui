"use client";
import React from "react";
import Navbar from "../../Navbar";
// import ParadoxuiLogo from "@/public/newlogo-removebg-preview.png";
import ParadoxuiLogo from "@/public/images/logo/paradox-logo-cream.png";
import { ChevronsDown, Menu } from "lucide-react";

import Image from "next/image";
import { Search } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type Props = {};

function CollectComponents({ collectContainerRef }: any) {
  const scrollIconRef = useRef(null);
  useGSAP(() => {
    gsap.to(scrollIconRef.current, {
      yoyo: true,
      y: "5px",
      duration: 0.8,
      repeat: -1,
    });
  });
  return (
    <>
      <div
        ref={collectContainerRef}
        className="text-[#FFFCE1]  text-center mx-auto h-[120vh]  z-[-2] py-10 "
      >
        {/* heading  */}
        <h1 className="font-semibold text-3xl  md:text-4xl xl:text-5xl mt-[5rem] mb-5">
          {"Collect other components".split(" ").map((w, i) => (
            <div className="inline-block" key={i}>
              {w.split("").map((c, i) => (
                <span key={i} className="inline-block heading-collect">
                  {c}
                </span>
              ))}
              &nbsp;
            </div>
          ))}
        </h1>

        {/* card  */}
        <div className="collect-card border-green-default flex mx-auto justify-center mt-14 items-center  flex-col gap-6  p-20 w-full md:w-[40vw] rotate-12 rounded-2xl border-[1px] ">
          <p className="text-[17px] md:text-[16px]">
            The road to freedom starts from here
          </p>
          <h2 className="text-sm md:text-3xl text-nowrap">
            Build awesome apps with <span>Paradoxui</span>.
          </h2>
          {/* buttons  */}
          <div className="flex md:flex-row flex-col justify-center  items-center gap-2 text-[15px] font-semibold">
            {/* button explore  */}
            <button className="w-[11rem] md:w-[12rem] h-[2rem] md:h-[3rem] text-sm text-center bg-secondary-400 rounded-full p-2 text-primary-800">
              Explore components
            </button>
            {/* button search components  */}
            <button className="w-[11rem] md:w-[12rem] h-[2rem] md:h-[3rem] text-sm flex justify-center items-center gap-2  text-center border-primary-700 bg-primary-900 hover:border-green-500 border-[1px]  rounded-full p-2 text-primary-100">
              {/* icon search  */}
              <div className="md:w-[20px] w-[15px] h-[15px] md:h-[20px] cursor-pointer flex justify-center items-center">
                <Search className="w-full h-full object-cover object-center" />
              </div>
              <span className="text-nowrap text-sm ">Explore components</span>
            </button>
          </div>
        </div>

        {/* navbar comp  */}
        <div className="collect-nav absolute top-[25%] border-green-default rotate-[-2deg]  w-full scale-[0.8]  md:scale-[0.6] border-[3px]  rounded-xl">
          <div className="gap-10 mx-auto h-[5rem] border-b-[1px] text-secondary-400   border-x-primary-400 flex justify-between items-center">
            {/* logo  */}
            <div className="flex justify-between items-center w-full px-5 md:px-[7.5rem]">
              <Image
                src={ParadoxuiLogo}
                alt="paradoxui-logo"
                className="w-[6rem] md:w-[12rem] "
              />

              {/* nav div  */}
              <div
                className="w-full 
        hidden md:flex ml-20 text-[16px] justify-start items-center font-bold  gap-10"
              >
                <span className="cursor-pointer text-secondary-500 hover:text-secondary-400 duration-500 ">
                  Components
                </span>
                <div className="text-secondary-500 hover:text-secondary-400 duration-500">
                  <span>Pricing</span>
                </div>
              </div>
              {/* search  */}
              <div className="px-3 hidden  py-[10px] w-[20rem]  rounded-full border-[1px] text-primary-60 font-bold  border-primary-700 md:flex justify-between gap-3 items-center">
                <div className="w-[20px] h-[20px] cursor-pointer flex justify-center items-center">
                  <Search className="w-full h-full object-cover object-center" />
                </div>
                <input
                  type="text"
                  placeholder="Search Components"
                  className="bg-transparent outline-none w-full h-full  text-secondary-400 text-[12px]"
                />
              </div>

              <div className="text-secondary-500 md:hidden">
                <Menu />
              </div>
            </div>
          </div>
        </div>

        {/* newsletter comp  */}
        <div className="absolute collect-news translate-x-[-50%] top-[50%] rotate-[-12deg] left-[20%] z-20">
          <div className=" flex  justify-center w-[25rem] absolute top-[20%] left-9   flex-col p-3 rounded-2xl  items-start border-[2px] border-green-default">
            <span className="text-[16px]">Newsletter</span>
            <span className="text-[13px] text-primary-300">
              Last message sent an hour ago
            </span>
            <span className="mt-3 text-[11px] font-semibold">1060 users</span>
          </div>
        </div>
        {/* scroll circle  */}
        <div className="absolute collect-scroll top-[60%] right-[50%] w-[2.5rem] md:w-[3.5rem] md:h-[4rem] h-[3.5rem] p-1 rounded-xl border-[2px] text-[10px] md:text-[13px]  border-green-default flex justify-center items-center">
          <div className="flex justify-center items-center flex-col gap-1">
            <span className="font-semibold">Scroll</span>
            <ChevronsDown ref={scrollIconRef} className="scroll-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectComponents;
