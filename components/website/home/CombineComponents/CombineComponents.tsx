import React from "react";

type Props = {};

function CombineComponents({}: Props) {
  return (
    <>
      <div className="text-[#FFFCE1]  text-center mx-auto py-20">
        {/* heading  */}
        <h1 className="font-semibold text-5xl">
          Combine them and <br /> make a beatiful hero section
        </h1>

        {/* card  */}
        <div className="flex mx-auto justify-center items-center mt-14 flex-col gap-6 w-full h-[50vh] p-20 rounded-2xl border-2 border-primary-800">
          main
        </div>
      </div>
    </>
  );
}

export default CombineComponents;
