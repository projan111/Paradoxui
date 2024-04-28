"use client";
import React, { useRef } from "react";
import { ChevronsDown, Menu } from "lucide-react";

import { Search } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
          className=" text-[#FFFCE1] relative  text-center mx-auto py-10"
        >
          {/* heading  */}
          <h1 className=" font-semibold text-3xl  md:text-4xl xl:text-5xl mt-[5rem]">
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
          <div className="website w-full relative overflow-hidden border-[1px] border-primary-700   h-[75vh] rounded-2xl mt-5 ">
            {/* navbar comp  */}
            <div
              className="gap-10 w-full combine-nav  absolute mx-auto h-[5rem] border-b-[1.5px] text-secondary-400  border-primary-800 flex justify-between items-center   top-0 left-[50%] translate-x-[-50%]  backdrop-blur-md    text-md  font-poppins px-2 py-4  
          "
            >
              {/* logo  */}
              <div className="flex justify-between items-center w-full px-1 md:px-20">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 513.93 75.17"
                  className="md:w-[15rem] w-[6rem] nav-logo"
                  fill="white"
                >
                  <path d="m142.3,20.52c-.74-1.92-1.95-3.54-3.63-4.86-1.69-1.32-3.93-2.33-6.74-3.02-2.8-.7-6.27-1.05-10.4-1.05h-1.01v6.05h1.8c1.97,0,3.78.11,5.44.32,1.65.22,3.19.65,4.61,1.3,1.41.65,2.55,1.62,3.42,2.92.86,1.29,1.29,2.95,1.29,4.96s-.39,3.76-1.19,5.08c-.79,1.32-1.87,2.33-3.24,3.02-1.36.7-2.86,1.18-4.5,1.44-1.63.27-3.45.4-5.47.4h-2.16v-19.44h-6.77v48.24h6.77v-22.75h3.89c2.69,0,5.17-.3,7.45-.9,2.28-.6,4.29-1.54,6.01-2.81,1.73-1.27,3.09-2.92,4.07-4.93.99-2.02,1.48-4.42,1.48-7.2,0-2.59-.37-4.85-1.12-6.77" />
                  <polygon points="178.19 9.29 152.27 65.88 159.55 65.88 178.19 24.12 196.84 65.88 204.11 65.88 178.19 9.29" />
                  <path d="m239.68,42.26c3.89-.48,7.03-2.14,9.43-5,2.4-2.85,3.6-6.25,3.6-10.19,0-2.64-.63-5.13-1.9-7.49-1.28-2.35-3.02-4.17-5.22-5.47-1.92-1.1-4-1.8-6.23-2.09-2.05-.26-22.78-.41-28.51-.43l4.2,6.05h16.57c1.92,0,3.72.12,5.4.36,1.68.24,3.23.7,4.64,1.37,1.42.67,2.56,1.67,3.42,2.99.87,1.32,1.3,2.98,1.3,5s-.4,3.76-1.19,5.08c-.79,1.32-1.87,2.32-3.24,3.02s-2.87,1.18-4.5,1.44c-1.63.26-3.46.4-5.47.4h-3.25l19.88,28.58h8.21l-17.14-23.62Z" />
                  <polygon points="296.71 9.29 270.79 65.88 278.06 65.88 296.71 24.12 315.35 65.88 322.63 65.88 296.71 9.29" />
                  <path d="m380.33,26.75c-1.56-3.39-3.74-6.19-6.55-8.43-2.81-2.23-6.05-3.91-9.72-5.04-3.67-1.12-7.62-1.69-11.84-1.69h-4.47v6.19h2.38c3.6,0,6.95.36,10.04,1.08,3.1.72,5.82,1.9,8.17,3.53,2.36,1.63,4.2,3.81,5.55,6.52,1.34,2.71,2.01,5.99,2.01,9.83s-.67,7.04-2.01,9.75c-1.35,2.71-3.19,4.89-5.55,6.52-2.35,1.63-5.06,2.82-8.13,3.56-3.07.75-6.43,1.12-10.08,1.12h-2.38V17.78h-6.77v48.1h11.02c4.32,0,8.34-.56,12.06-1.69,3.72-1.13,6.98-2.85,9.79-5.15,2.81-2.3,4.98-5.18,6.52-8.64,1.53-3.46,2.3-7.44,2.3-11.95s-.78-8.32-2.34-11.7" />
                  <path d="m454.67,27.86c-1.49-3.45-3.54-6.49-6.15-9.1s-5.66-4.66-9.11-6.12c-3.46-1.47-7.11-2.2-10.95-2.2s-7.48.73-10.94,2.2c-3.46,1.46-6.49,3.5-9.11,6.12s-4.67,5.65-6.15,9.1c-1.49,3.46-2.24,7.09-2.24,10.88s.74,7.64,2.2,11.12c1.46,3.48,3.5,6.51,6.12,9.07,2.62,2.57,5.65,4.56,9.11,5.98,3.45,1.41,7.13,2.12,11.01,2.12s7.56-.71,11.02-2.12c3.46-1.42,6.49-3.41,9.11-5.98,2.61-2.56,4.65-5.59,6.12-9.07,1.46-3.48,2.19-7.19,2.19-11.12s-.74-7.42-2.23-10.88m-6.23,19.44c-1.13,2.69-2.7,5.04-4.71,7.06-2.02,2.02-4.34,3.58-6.95,4.68-2.62,1.1-5.39,1.66-8.32,1.66s-5.7-.56-8.31-1.66c-2.62-1.1-4.93-2.66-6.95-4.68-2.02-2.02-3.59-4.37-4.72-7.06-1.13-2.68-1.69-5.54-1.69-8.56s.53-5.8,1.59-8.46c1.05-2.67,2.55-5.02,4.5-7.06,1.94-2.04,4.24-3.62,6.91-4.75,2.66-1.13,5.55-1.69,8.67-1.69s6.02.56,8.68,1.69c2.66,1.13,4.97,2.71,6.91,4.75,1.95,2.04,3.45,4.39,4.5,7.06,1.06,2.66,1.59,5.48,1.59,8.46s-.57,5.88-1.7,8.56" />
                  <polygon points="497.44 37.44 513.06 11.59 505.36 11.59 493.55 31.39 482.46 11.59 474.76 11.59 489.73 37.44 472.67 65.88 480.23 65.88 493.55 43.63 506.37 65.88 513.93 65.88 497.44 37.44" />
                  <path d="m37.59,75.17C16.86,75.17,0,58.31,0,37.59S16.86,0,37.59,0s37.59,16.86,37.59,37.59-16.86,37.59-37.59,37.59m0-70.17C19.62,5,5,19.62,5,37.59s14.62,32.59,32.59,32.59,32.59-14.62,32.59-32.59S55.55,5,37.59,5" />
                  <polygon points="32.58 23.74 18.26 34.88 16.96 35.9 16.96 39.27 32.58 51.44 35.2 48.06 21.74 37.59 21.75 37.58 21.75 37.58 35.2 27.11 32.58 23.74" />
                  <polygon points="56.91 34.88 42.6 23.74 39.98 27.11 53.43 37.58 53.42 37.58 53.44 37.59 39.98 48.07 42.6 51.44 58.22 39.27 58.22 35.9 56.91 34.88" />
                </svg>
                {/* nav link  */}
                <div
                  className="w-full 
        hidden md:flex ml-20 text-[16px] justify-start items-center font-bold  gap-10"
                >
                  <span>Components</span>
                  <span>Pricing</span>
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
                <div className="combine-menu text-secondary-500 md:hidden">
                  <Menu />
                </div>
              </div>
            </div>

            {/* combine card  */}
            <div className="combine-card text-secondary-400 absolute top-[48%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full md:w-[40vw] flex mx-auto  justify-center items-center   flex-col gap-6  md:p-20 rounded-2xl ">
              <p className="text-[17px] md:text-[16px]">
                The road to freedom starts from here
              </p>
              <h2 className="text-sm md:text-3xl text-nowrap">
                {" "}
                <span className="bg-gradient-to-r  from-[#58FF0A] to-blue-300 bg-clip-text text-transparent"></span>
                Build awesome apps with <span className="">Paradoxui</span>.
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
