"use client"
import React from "react";
import Navbar from "../../Navbar";
type Props = {};

function CollectComponents({ collectContainerRef }: any) {
  return (
    <>
      <div
        ref={collectContainerRef}
        className="text-[#FFFCE1]  text-center mx-auto py-20 "
      >
        {/* heading  */}
        <h1 className="font-semibold text-5xl">Collect other components</h1>

        {/* main comp part   */}
        <div className="mx-auto h-[65vh] justify-center items-center   rounded-2xl relative ">
          {/* navbar comp  */}
          <div className="navbar-anim absolute top-1  w-full   opacity-0 scale-[0.8]">
            <Navbar />
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
