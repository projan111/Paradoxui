"use client";
import React from "react";
import Image from "next/image";
import { Component, Search } from "lucide-react";

type Props = {};

function FeaturedComponents({ featureContainerRef }: any) {
  return (
    <div
      ref={featureContainerRef}
      className="text-[#FFFCE1] text-center mx-auto py-10"
    >
      {/* heading  */}
      <span className="text-3xl">Paradoxui Components</span>

      {/* components  */}
      <div className="w-full flex  mt-10 justify-center items-center gap-3">
        {/* left part  */}
        <div className="w-[40%] flex flex-col gap-2 justify-center items-center">
          {/* first row  */}
          <div className="flex w-full text-center justify-center items-center gap-2">
            <div className="w-full  gap-5   border-[1px] border-primary-700 rounded-xl h-[15rem] flex flex-col justify-center items-center p-2">
              <span className="text-sm">Radio button</span>
              <label className="toggle-switch">
                <input type="checkbox" />
                <div className="toggle-switch-background">
                  <div className="toggle-switch-handle"></div>
                </div>
              </label>
            </div>
            <div className="w-full border-[1px] border-primary-700 rounded-xl h-[15rem] flex justify-center items-center p-2">
              component
            </div>
          </div>
          {/* second row  */}
          <div className="flex h-[7.5rem] w-full text-center justify-center items-center border-[1px]  border-primary-700 rounded-xl">
            second left
          </div>
          {/* third row  */}
          <div className="flex h-[15rem] w-full text-center justify-center items-center border-[1px]  border-primary-700 rounded-xl">
            third left
          </div>
        </div>
        {/* right part  */}
        <div className="w-[60%] flex flex-col gap-2 justify-center items-center">
          {/* first row  */}
          <div className="flex w-full text-center justify-center items-center gap-2">
            <div className="w-full overflow-hidden  border-[1px] border-primary-700 rounded-xl h-[18rem] flex flex-col gap-2 justify-center items-center p-2">
              <span className="">Card</span>
              <div className="container noselect">
                <div className="canvas">
                  <div className="tracker tr-1"></div>
                  <div className="tracker tr-2"></div>
                  <div className="tracker tr-3"></div>
                  <div className="tracker tr-4"></div>
                  <div className="tracker tr-5"></div>
                  <div className="tracker tr-6"></div>
                  <div className="tracker tr-7"></div>
                  <div className="tracker tr-8"></div>
                  <div className="tracker tr-9"></div>
                  <div className="tracker tr-10"></div>
                  <div className="tracker tr-11"></div>
                  <div className="tracker tr-12"></div>
                  <div className="tracker tr-13"></div>
                  <div className="tracker tr-14"></div>
                  <div className="tracker tr-15"></div>
                  <div className="tracker tr-16"></div>
                  <div className="tracker tr-17"></div>
                  <div className="tracker tr-18"></div>
                  <div className="tracker tr-19"></div>
                  <div className="tracker tr-20"></div>
                  <div className="tracker tr-21"></div>
                  <div className="tracker tr-22"></div>
                  <div className="tracker tr-23"></div>
                  <div className="tracker tr-24"></div>
                  <div className="tracker tr-25"></div>
                  <div id="card">
                    <div className="title">
                      Mouse
                      <br />
                      Tracker
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border-[1px] flex-col gap-2 overflow-hidden border-primary-700 rounded-xl h-[18rem] flex justify-center items-center p-2">
              <span>Form</span>
            </div>
          </div>

          {/* bottom part */}
          {/* card  */}
          <div className="card-anim flex mx-auto justify-center items-center  flex-col gap-6 w-full p-20 rounded-2xl border-[1px] border-primary-700">
            <p className="text-[16px]">The road to freedom starts from here</p>
            <h2 className="text-3xl text-nowrap">
              Build awesome apps with <span>Paradoxui</span>.
            </h2>
            {/* buttons  */}
            <div className="flex justify-cente items-center gap-2 text-[15px] font-semibold">
              {/* button explore  */}
              <button className="w-[12rem] h-[3rem] text-center bg-secondary-400 hover:scale-[0.95] cursor-pointer duration-500 rounded-full p-2 text-primary-800">
                Explore components
              </button>
              {/* button search components  */}
              <button className="w-[13rem] flex justify-center items-center gap-2 h-[3rem] text-center border-primary-700 bg-primary-900 hover:border-green-500 border-[1px]  rounded-full p-2 text-primary-100">
                {/* icon search  */}
                <div className="w-[20px] h-[20px] cursor-pointer flex justify-center items-center">
                  <Search className="w-full h-full object-cover object-center" />
                </div>
                <span className="text-nowrap">Explore components</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedComponents;
