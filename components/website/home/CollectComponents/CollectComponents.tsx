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
        className="text-[#FFFCE1]  text-center mx-auto py-20"
      >
        {/* heading  */}
        <h1 className="font-semibold text-5xl mb-5">
          {"Collect other components".split(" ").map((w, i) => (
            <div className="inline-block" key={i}>
              {w.split("").map((c, i) => (
                <span className="inline-block heading-collect">{c}</span>
              ))}
              &nbsp;
            </div>
          ))}
        </h1>

        {/* main comp part   */}
        <div className="mx-auto h-[65vh] justify-center items-center   relative ">
          {/* navbar comp  */}
          <div className="navbar-anim absolute top-[-10%]  w-full  opacity-0 scale-[0.6] border-2  rounded-xl">
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
          {/* hero comp  */}
          {/* <Hero /> */}

          {/* newsletter comp  */}
          <div className="newsletter-anim opacity-0 flex  justify-center w-[25rem] absolute top-[20%] left-9   flex-col p-3 rounded-2xl  items-start border-[2px] border-primary-800">
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

export default CollectComponents;
