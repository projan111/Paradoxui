import Image from "next/image";
import React from "react";
import ParadoxuiLogo from "@/public/images/paradoxui-logo.png";
import { Search } from "lucide-react";
type Props = {};

function Navbar({}: Props) {
  return (
    <div className="w-[80vw] gap-10 mx-auto h-[5rem] border-b-[1px]   border-x-primary-400 flex justify-between items-center">
      {/* logo  */}
      <div className="flex justify-between items-center w-full px-20">
        <Image src={ParadoxuiLogo} alt="paradoxui-logo" className="w-[9rem]" />
        {/* nav link  */}
        <div className="w-full flex ml-20 text-[16px] justify-start items-center font-bold text-primary-300 gap-10">
          <span>Components</span>
          <span>Pricing</span>
        </div>
        {/* search  */}
        <div className="px-3 py-[10px]  rounded-full border-[1px] text-primary-60 font-bold  border-primary-700 flex justify-between gap-3 items-center">
          <div className="w-[20px] h-[20px] flex justify-center items-center">
            <Search className="w-full h-full object-cover object-center" />
          </div>
          <input
            type="text"
            placeholder="Search Components"
            className="bg-transparent outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
