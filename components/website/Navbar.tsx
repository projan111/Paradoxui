"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ParadoxuiLogo from "@/public/newlogo-removebg-preview.png";
// import ParadoxuiLogo from "@/public/newlogo-removebg-preview.png";
import { Search } from "lucide-react";
type Props = {};

function Navbar({}: Props) {
  const [prevYPosition, setPreviousYPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentYPosition = window.scrollY;

      if (
        prevYPosition > currentYPosition &&
        prevYPosition - currentYPosition > 10
      ) {
        setVisible(true);
      }
      if (
        currentYPosition > prevYPosition &&
        currentYPosition - prevYPosition > 10
      ) {
        setVisible(false);
      }
      // if (currentYPosition < 100) {
      //   setVisible(true);
      // }
      setPreviousYPosition(currentYPosition);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visible, prevYPosition]);
  return (
    <div
      className={`gap-10 mx-auto h-[5rem] border-b-[1px] text-secondary-50   border-x-primary-400 flex justify-between items-center  fixed top-0 left-[50%] -translate-x-[50%] w-10/12 backdrop-blur-md transition duration-500  shadow-sm bg-transparent text-md z-[999]  font-poppins px-2 py-4  ${
        visible ? `` : ` -translate-y-[100%]`
      } `}
    >
      {/* logo  */}
      <div className="flex justify-between items-center w-full px-20">
        <Image src={ParadoxuiLogo} alt="paradoxui-logo" className="w-[9rem]" />
        {/* nav link  */}
        <div className="w-full flex ml-20 text-[16px] justify-start items-center font-bold  gap-10">
          <span>Components</span>
          <span>Pricing</span>
        </div>
        {/* search  */}
        <div className="px-3 py-[10px] w-[20rem]  rounded-full border-[1px] text-primary-60 font-bold  border-primary-900 flex justify-between gap-3 items-center">
          <div className="w-[20px] h-[20px] cursor-pointer flex justify-center items-center">
            <Search className="w-full h-full object-cover object-center" />
          </div>
          <input
            type="text"
            placeholder="Search Components"
            className="bg-transparent outline-none w-full h-full  text-secondary-50 text-[12px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
