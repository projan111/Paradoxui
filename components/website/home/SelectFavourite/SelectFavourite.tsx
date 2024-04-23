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
      <h1 className="select-container font-semibold mt-[5rem] text-5xl">
        {"Select your favourite component".split(" ").map((w, i) => (
          <div className="inline-block" key={i}>
            {w.split("").map((c, i) => (
              <span className="inline-block heading-select">{c}</span>
            ))}
            &nbsp;
          </div>
        ))}
      </h1>

      {/* card  */}
      <div className="select-card border-green-400 flex mx-auto justify-center items-center  flex-col gap-6  p-20 w-[40vw] rounded-2xl border-2 ">
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
    </div>
  );
}
export default SelectFavourite;
