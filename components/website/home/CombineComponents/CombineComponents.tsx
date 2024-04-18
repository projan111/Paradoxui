"use client"
import React from "react";

type Props = {};

function CombineComponents({ combineContainerRef }: any) {
  return (
    <>
      <div
        ref={combineContainerRef}
        className="text-[#FFFCE1] text-center mx-auto py-10"
      >
        {/* heading  */}
        <h1 className="font-semibold text-5xl">
          Combine them and <br /> make a beatiful hero section
        </h1>
        {/* card  */}
        <div className="flex mx-auto justify-center items-center mt-10 flex-col gap-6 w-full h-[90vh] p-20 rounded-2xl border-2 border-primary-800"></div>
      </div>
    </>
  );
}

export default CombineComponents;
