"use client";
import React from "react";

type Props = {};

function PricingHero({}: Props) {
  return (
    <div className="w-full md:h-[60vh] py-5 flex justify-center items-center">
      {/* intro  */}
      <div className="flex px-5 justify-center items-center flex-col mt-[5rem] ">
        <h1 className="text-4xl md:text-6xl text-zinc-200 font-semibold text-start md:text-center">
          Adaptable Pricing Solutions <br /> for Every Stage of Your Journey
        </h1>
        {/* <h2 className="text-4xl">
          looks <span className="text-5xl">10x</span>
          <span className="bg-gradient-to-r from-[#58FF0A] to-blue-300 bg-clip-text text-transparent">
            &nbsp;Beautiful.
          </span>
        </h2> */}

        {/* description  */}
        <p className="text-[16px] text-zinc-400 font-normal text-start  md:text-center py-3">
          From custom components to complete website tailored to your needs.{" "}
          <br />
          Simple pricing, no hidden fees.
        </p>
      </div>
    </div>
  );
}

export default PricingHero;
