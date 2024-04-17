import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";

// icon
import { MoveRight } from "lucide-react";

type Props = {};

function FeaturedComponents({}: Props) {
  return (
    <div className="text-[#FFFCE1] text-center mx-auto py-10">
      {/* heading  */}
      <span className="text-3xl">Paradoxui Components</span>

      {/* components  */}
      <div className="w-full flex  justify-center items-center gap-3">
        {/* left part  */}
        <div className="w-[35%] flex justify-center items-center">
          {/* first row  */}
          <div className="flex w-full text-center justify-center items-center gap-2">
            <div className="w-full  border-2 border-primary-800">component</div>
            <div className="w-full border-2 border-primary-800">component</div>
          </div>
          {/* second row  */}
          <div></div>
          {/* third row  */}
          <div></div>
        </div>

        {/* right part  */}
        <div className="w-[75%] flex justify-center items-center">
          right part{" "}
        </div>
      </div>
    </div>
  );
}

export default FeaturedComponents;

//   {/* card  */}
//   <div className="flex mx-auto justify-center items-center mt-14 flex-col gap-6 w-[40rem] p-20 rounded-2xl border-2 border-primary-800">
//   <p className="text-[16px]">The road to freedom starts from here</p>
//   <h2 className="text-3xl text-nowrap">
//     Build awesome apps with <span>Paradoxui</span>.
//   </h2>
//   {/* buttons  */}
//   <div className="flex justify-cente items-center gap-2 text-[15px] font-semibold">
//     {/* button explore  */}
//     <button className="w-[12rem] h-[3rem] text-center bg-secondary-50 rounded-full p-2 text-primary-800">
//       Explore components
//     </button>
//     {/* button search components  */}
//     <button className="w-[13rem] flex justify-center items-center gap-2 h-[3rem] text-center border-primary-800 bg-primary-900 hover:border-green-500 border-2  rounded-full p-2 text-primary-100">
//       {/* icon search  */}
//       <div className="w-[20px] h-[20px] cursor-pointer flex justify-center items-center">
//         <Search className="w-full h-full object-cover object-center" />
//       </div>
//       <span className="text-nowrap">Explore components</span>
//     </button>
//   </div>
// </div>
