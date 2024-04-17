import React from "react";
import ParadoxuiLogo from "@/public/images/paradoxui-logo.png";
import Image from "next/image";

type Props = {};


// const teamImage = [{
//   img: ""
// }]
function Footer({}: Props) {
  return (
    <div className="w-[80vw] mx-auto border-t-2 py-[2rem] border-zinc-800 text-[#FFFCE1]">
      <div className="flex justify-between items-center">
        {/* left part  */}
        <div className="flex w-[30%] gap-2 flex-col">
          {/* logo */}
          <Image
            src={ParadoxuiLogo}
            alt="paradoxui-logo"
            className="w-[9rem]"
          />

          {/* user by  */}
          <span className="mt-4 text-sm">
            A product by<span className="text-sky-500"> WebX</span>
          </span>

          <span className="text-[13px]">
            @Copyright 2024 All Right Reserved
          </span>
        </div>
        {/* middle part our teams  */}
        <div className="flex justify-center items-center flex-col gap-2">
          <span className="">Out team</span>

          <div className="flex justify-center items-center gap-2">
            <div className="rounded-full bg-white w-[3rem] h-[3rem]">
              <img
                src=""
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-full bg-white w-[3rem] h-[3rem]">
              <img
                src=""
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-full bg-white w-[3rem] h-[3rem]">
              <img
                src=""
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="rounded-full bg-white w-[3rem] h-[3rem]">
              <img
                src=""
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        {/* right part  */}
        <div className="w-[30%] text-right text-xl flex flex-col gap-3">
          <span>Components</span>
          <span>Pricing</span>
          <span>Facebook</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
