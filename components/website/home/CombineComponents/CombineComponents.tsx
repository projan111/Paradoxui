"use client";
import React, { useRef } from "react";
import { ChevronsDown, Menu } from "lucide-react";

import { Search } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";
import webxui from "@/public/images/logo/webxui.png";
// import Image from "next/image";

type Props = {};

function CombineComponents({ combineContainerRef, webContainerRef }: any) {
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
      <div className="main-container">
        <div
          ref={combineContainerRef}
          className=" text-zinc-200 relative  text-center mx-auto py-10"
        >
          {/* heading  */}
          <h1 className=" font-semibold text-3xl  md:text-4xl mt-[3rem]">
            {` Combine them and make a beatiful hero section`
              .split(" ")
              .map((w, i) => (
                <div className="inline-block" key={i}>
                  {w.split("").map((c, i) => (
                    <span key={i} className="inline-block heading-combine">
                      {c}
                    </span>
                  ))}
                  &nbsp;
                </div>
              ))}
          </h1>

          {/* combine website   */}
          <div className="website w-full relative  overflow-hidden border-[1px] border-primary-700  h-[70vh] md:h-[75vh] rounded-2xl mt-5 ">
            {/* navbar comp  */}
            <div
              className="gap-10 w-full combine-nav  absolute mx-auto h-[4rem] border-b-[1.5px] text-zic-200  border-primary-800 flex justify-between items-center   top-0 left-[50%] translate-x-[-50%]  backdrop-blur-md    text-md  font-poppins px-2 py-4  
          "
            >
              {/* logo  */}
              <div className="flex justify-between items-center w-full px-1 md:px-20">
                <Link href="./">
                  <Image
                    src={webxui}
                    alt="paradoxui-logo"
                    className="w-[6rem] md:w-[10rem] "
                  />
                </Link>
                {/* nav link  */}
                <div className="w-full hidden md:flex ml-20 text-[14px] justify-start items-center font-bold  gap-10">
                  <span>Components</span>
                  <span>Pricing</span>
                </div>
                {/* search  */}
                <div className="px-2 hidden  py-2 w-[20rem]  rounded-xl border text-primary-60 font-bold  border-primary-700 md:flex justify-between gap-3 items-center">
                  <div className="w-[20px] h-[20px] cursor-pointer flex justify-center items-center">
                    <Icon icon="weui:search-outlined" fontSize={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Components"
                    className="bg-transparent outline-none w-full h-full  text-zinc-400 text-[12px] font-normal"
                  ></input>
                  <div className="flex items-center justify-center gap-1 bg-zinc-800 px-3 py-1 rounded-md">
                    <Icon icon="ph:command-light" color="white" fontSize={18} />
                    <span className="text-sm font-normal">K</span>
                  </div>
                </div>
                <div className="combine-menu text-secondary-500 md:hidden">
                  <Menu />
                </div>
              </div>
            </div>

            {/* combine card  */}
            <div className="combine-card text-zinc-200 absolute top-[48%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full md:w-[40vw] flex mx-auto  justify-center items-center   flex-col gap-6  md:p-20 rounded-2xl ">
              <h2 className="text-sm md:text-4xl md:font-bold text-nowrap">
                <span className="bg-gradient-to-r  from-[#58FF0A] to-blue-300 bg-clip-text text-transparent"></span>
                Build awesome apps with <span className="">WebXui</span>.
              </h2>
              <p className="text-[17px] md:text-[16px]">
                The road to freedom starts from here
              </p>
              {/* buttons  */}
              <div className="flex md:flex-row flex-col justify-center  items-center gap-2 text-[15px] font-semibold">
                {/* button explore  */}
                <button className="w-[11rem] md:w-[12rem] h-[2rem] md:h-[3rem] text-sm text-center bg-zinc-100 rounded-full p-2 text-primary-800">
                  Explore components
                </button>
                {/* button search components  */}
                <button className="w-[11rem] md:w-[12rem] h-[2rem] md:h-[3rem] text-sm flex justify-center items-center gap-2  text-center border-primary-700 bg-primary-900 hover:border-green-500 border-[1px]  rounded-full p-2 text-primary-100">
                  {/* icon search  */}
                  <div className="md:w-[20px] w-[15px] h-[15px] md:h-[20px] cursor-pointer flex justify-center items-center">
                    <Search className="w-full h-full object-cover object-center" />
                  </div>
                  <span className="text-nowrap text-sm ">
                    Explore components
                  </span>
                </button>
              </div>
            </div>

            {/* scroll  */}
            <div className="absolute combine-scroll bottom-[16%] md:bottom-[5%] border-none left-[50%] -translate-x-[50%] w-[3.5rem] h-[4rem] rounded-xl border-[2px] text-[13px]  border-green-default flex justify-center items-center">
              <div className="flex justify-center items-center flex-col gap-1">
                <span className="font-semibold">Scroll</span>
                <ChevronsDown ref={scrollIconRef} className="scroll-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CombineComponents;
