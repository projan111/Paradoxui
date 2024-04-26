"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Search } from "lucide-react";

type Props = {};

function SelectFavourite({ selectContainerRef }: any) {
  const cardAnimRef = useRef(null);
  return (
    <div
      ref={selectContainerRef}
      className="text-[#FFFCE1] z-[-1] h-[100vh] flex justify-center items-center flex-col gap-5   text-center mx-auto py-10"
    >
      {/* heading  */}
      <h1 className="select-container font-semibold mt-[5rem] text-3xl  md:text-4xl xl:text-5xl">
        {"Select your favourite component".split(" ").map((w, i) => (
          <div className="inline-block" key={i}>
            {w.split("").map((c, i) => (
              <span key={i} className="inline-block heading-select">
                {c}
              </span>
            ))}
            &nbsp;
          </div>
        ))}
      </h1>

      {/* card  */}
      <div className="select-card border-green-default flex mx-auto justify-center items-center  flex-col gap-6  p-20 w-full md:w-[40vw] rounded-2xl border-[1px] ">
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
    </div>
  );
}
export default SelectFavourite;
