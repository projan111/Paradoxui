"use client";
import React from "react";
import Navbar from "../../Navbar";
import ParadoxuiLogo from "@/public/newlogo-removebg-preview.png";
import Image from "next/image";
import { Search } from "lucide-react";

type Props = {};

function CollectComponents({ collectContainerRef }: any) {
  return (
    <>
      <div
        ref={collectContainerRef}
        className="text-[#FFFCE1]  text-center mx-auto h-[120vh]  z-[-2] py-10"
      >
        {/* heading  */}
        <h1 className="font-semibold text-5xl mt-[5rem] mb-5">
          {"Collect other components".split(" ").map((w, i) => (
            <div className="inline-block" key={i}>
              {w.split("").map((c, i) => (
                <span className="inline-block heading-collect">{c}</span>
              ))}
              &nbsp;
            </div>
          ))}
        </h1>

        {/* card  */}
        <div className="collect-card w-[40vw] flex mx-auto  justify-center items-center mt-20  flex-col gap-6 rotate-12 p-20 rounded-2xl border-2 border-green-400">
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

        {/* navbar comp  */}
        <div className="collect-nav absolute top-[25%] border-green-400 rotate-[-2deg]  w-full  scale-[0.6] border-2  rounded-xl">
          <div className="gap-10 mx-auto h-[5rem] border-b-[1px] text-secondary-50   border-x-primary-400 flex justify-between items-center">
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
        </div>

        {/* newsletter comp  */}
        <div className="absolute collect-news translate-x-[-50%] top-[50%] rotate-[-12deg] left-[20%] z-20">
          <div className=" flex  justify-center w-[25rem] absolute top-[20%] left-9   flex-col p-3 rounded-2xl  items-start border-[2px] border-green-400">
            <span className="text-[16px]">Newsletter</span>
            <span className="text-[13px] text-primary-300">
              Last message sent an hour ago
            </span>
            <span className="mt-3 text-[11px] font-semibold">1060 users</span>
          </div>
        </div>

        {/* navbar comp  */}
      </div>
    </>
  );
}

export default CollectComponents;
