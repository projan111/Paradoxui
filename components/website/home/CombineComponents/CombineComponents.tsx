"use client";
import React from "react";

type Props = {};

function CombineComponents({ combineContainerRef, webContainerRef }: any) {
  return (
    <>
      <div
        ref={combineContainerRef}
        className="text-[#FFFCE1] text-center mx-auto py-10"
      >
        {/* heading  */}
        <h1 className=" font-semibold text-5xl">
          {` Combine them and make a beatiful hero section`
            .split(" ")
            .map((w, i) => (
              <div className="inline-block" key={i}>
                {w.split("").map((c, i) => (
                  <span key={i} className="inline-block heading-combine">{c}</span>
                ))}
                &nbsp;
              </div>
            ))}
        </h1>
        {/* card  */}
        <div
          ref={webContainerRef}
          className="flex relative mx-auto justify-center items-center mt-10 flex-col gap-6  h-[85vh]  p-20 rounded-2xl border-2 border-primary-800"
        >
          {/* newsletter comp  */}
          <div className="absolute slideNews-anim translate-x-[-50%] bottom-[18%] right-[48%]  z-20">
            <div className=" flex  justify-center w-[25rem] absolute top-[20%] left-9   flex-col p-3 rounded-2xl  items-start border-[2px] border-primary-800">
              <span className="text-[16px]">Newsletter</span>
              <span className="text-[13px] text-primary-300">
                Last message sent an hour ago
              </span>
              <span className="mt-3 text-[11px] font-semibold">1060 users</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CombineComponents;
