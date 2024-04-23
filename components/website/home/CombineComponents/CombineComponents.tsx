"use client";
import React from "react";
import ParadoxuiLogo from "@/public/newlogo-removebg-preview.png";
import { Search } from "lucide-react";
import Image from "next/image";

type Props = {};

function CombineComponents({ combineContainerRef, webContainerRef }: any) {
  return (
    <>
      <div
        ref={combineContainerRef}
        className="text-[#FFFCE1] relative h-[100vh] text-center mx-auto py-10"
      >
        {/* heading  */}
        <h1 className=" font-semibold text-5xl mt-[5rem]">
          {` Combine them and make a beatiful hero section`
            .split(" ")
            .map((w, i) => (
              <div className="inline-block" key={i}>
                {w.split("").map((c, i) => (
                  <span className="inline-block heading-combine">{c}</span>
                ))}
                &nbsp;
              </div>
            ))}
        </h1>

        {/* combine website   */}
        <div className="border-2 border-primary-800 w-full relative h-[75vh] mt-5 ">
          {/* navbar comp  */}
          <div
            className="gap-10 w-[80vw] combine-nav absolute mx-auto h-[5rem] border-b-[1px] text-secondary-50  border-x-primary-400 flex justify-between items-center   top-0 left-[50%] translate-x-[-50%]  backdrop-blur-md   shadow-sm bg-transparent text-md z-[999] font-poppins px-2 py-4  
          "
          >
            {/* logo  */}
            <div className="flex justify-between items-center w-full px-20">
              <Image
                src={ParadoxuiLogo}
                alt="paradoxui-logo"
                className="w-[9rem]"
              />
              {/* nav link  */}
              <div className="w-full flex ml-20 text-[16px] justify-start items-center font-bold  gap-10">
                <span>Components</span>
                <span>Pricing</span>
              </div>
              {/* search  */}
              <div className="px-3 py-[10px] w-[20rem]  rounded-full border-[1px] text-primary-60 font-bold  border-primary-900 flex justify-between gap-3 items-center">
                <div className="w-[20px] h-[20px] cursor-pointer flex justify-center items-center">
                  <Search className="w-full h-full object-cover object-center" />
                </div>
                <input
                  type="text"
                  placeholder="Search Components"
                  className="bg-transparent outline-none w-full h-full  text-secondary-50 text-[12px]"
                />
              </div>
            </div>
          </div>

          {/* combine card  */}
          <div className="combine-card absolute top-[48%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[40vw] flex mx-auto  justify-center items-center   flex-col gap-6  p-20 rounded-2xl ">
            <p className="text-[16px]">The road to freedom starts from here</p>
            <h2 className="text-3xl text-nowrap">
              Build awesome apps with <span>Paradoxui</span>.
            </h2>
            {/* buttons  */}
            <div className="flex justify-cente items-center gap-2 text-[15px] font-semibold">
              {/* button explore  */}
              <button className="w-[12rem] h-[3rem] text-center bg-secondary-50 rounded-full p-2 text-primary-800">
                Explore components
              </button>
              {/* button search components  */}
              <button className="w-[13rem] flex justify-center items-center gap-2 h-[3rem] text-center border-primary-800 bg-primary-900 hover:border-green-500 border-2  rounded-full p-2 text-primary-100">
                {/* icon search  */}
                <div className="w-[20px] h-[20px] cursor-pointer flex justify-center items-center">
                  <Search className="w-full h-full object-cover object-center" />
                </div>
                <span className="text-nowrap">Explore components</span>
              </button>
            </div>
          </div>

          {/* newsletter  */}

          <div className="combine-news flex  justify-center w-[25rem] absolute bottom-[2%] left-[50%] -translate-x-[50%]   flex-col p-3 rounded-2xl  items-start border-[2px] border-primart-800">
            <span className="text-[16px]">Newsletter</span>
            <span className="text-[13px] text-primary-300">
              Last message sent an hour ago
            </span>
            <span className="mt-3 text-[11px] font-semibold">1060 users</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CombineComponents;
