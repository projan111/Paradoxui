"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import ParadoxuiLogo from "@/public/newlogo-removebg-preview.png";
import ParadoxuiLogo from "@/public/images/logo/paradox-logo-cream.png";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
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

      setPreviousYPosition(currentYPosition);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visible, prevYPosition]);
  return (
    <div
      className={`w-full gap-10 mx-auto h-[4.5rem] border-b-[1px] overflow-hidden  hover:text-secondary-400 duration-500   border-x-primary-400 flex justify-between items-center  fixed top-0 left-[50%] -translate-x-[50%] backdrop-blur-sm    transition  shadow-sm  text-md z-[999]  font-poppins px-2 py-4  ${
        visible ? `` : ` -translate-y-[100%]`
      } `}
    >
      {/* logo  */}
      <div className="flex justify-between items-center w-full px-5 md:px-[7.5rem]">
        <Link href="./">
          <Image
            src={ParadoxuiLogo}
            alt="paradoxui-logo"
            className="w-[6rem] md:w-[12rem] "
          />
        </Link>
        {/* nav link  */}
        <div
          className="w-full 
        hidden md:flex ml-20 text-[16px] justify-start items-center font-bold  gap-10"
        >
          <span className="cursor-pointer text-secondary-500 hover:text-secondary-400 duration-500 ">
            Components
          </span>
          <Link
            href="/pricing"
            className="text-secondary-500 hover:text-secondary-400 duration-500"
          >
            <span>Pricing</span>
          </Link>
        </div>
        {/* search  */}
        <div className="px-3 hidden  py-[10px] w-[20rem]  rounded-full border-[1px] text-primary-60 font-bold  border-primary-700 md:flex justify-between gap-3 items-center">
          <div className="w-[20px] h-[20px] cursor-pointer flex justify-center items-center">
            <Search className="w-full h-full object-cover object-center" />
          </div>
          <input
            type="text"
            placeholder="Search Components"
            className="bg-transparent outline-none w-full h-full  text-secondary-400 text-[12px]"
          />
        </div>

        <div className="text-secondary-500 md:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
