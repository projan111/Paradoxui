"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import ParadoxuiLogo from "@/public/newlogo-removebg-preview.png";
import WebxuiLogo from "@/public/images/logo/webxui.png";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";
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

  const [mobileNav, setMobileNav] = useState(false);
  const dropNav = useRef(null);

  const handelHam = () => {
    if (mobileNav === false) {
      setMobileNav(true);
      gsap.to(dropNav.current, {
        height: "60vh",
        opacity: 1,
        duration: 0.6,
      });
    }
  };
  // Update animation based on mobileNav state

  // console.log(mobileNav);
  return (
    <>
      <div
        className={`w-full px-2  gap-10 mx-auto h-[4rem] overflow-hidden  hover:text-secondary-400 duration-500 border-b border-x-primary-400 flex justify-between items-center fixed top-0 left-[50%] -translate-x-[50%] backdrop-blur-sm    transition  shadow-sm  text-md z-[999]  font-poppins  py-4  ${
          visible ? `` : ` -translate-y-[100%]`
        } `}
      >
        {/* logo  */}
        {/* <div className="flex justify-between items-center w-full  "> */}
        <div className="flex justify-between items-center w-full md:w-11/12 mx-auto ">
          <Link href="./">
            <Image
              src={WebxuiLogo}
              alt="paradoxui-logo"
              className="w-[6rem] md:w-[10rem] "
            />
          </Link>
          {/* nav link  */}
          <div className="w-full hidden md:flex ml-16 text-[14px] justify-start items-center font-bold  gap-8">
            <Link
              href="/docs"
              className="cursor-pointer text-zinc-400 hover:text-zinc-200 duration-500 "
            >
              Components
            </Link>
            <Link
              href="/docs"
              className="cursor-pointer text-zinc-400 hover:text-zinc-200 duration-500 "
            >
              Templates
            </Link>
            <Link
              href="/pricing"
              className="text-zinc-400 hover:text-zinc-200 duration-500"
            >
              <span>Pricing</span>
            </Link>
          </div>

          {/* nav link  */}
          <div className="fixed top-[10rem] left-0 w-full h-[50vh] bg-black"></div>
          {/* search  */}
          <div className="px-2 hidden  py-2 w-[20rem]  rounded-xl border text-primary-60 font-bold  border-primary-700 md:flex justify-between gap-3 items-center">
            <div className="w-[20px] h-[20px] cursor-pointer flex justify-center items-center">
              <Icon icon="weui:search-outlined" fontSize={18} />
            </div>
            <input
              type="text"
              placeholder="Search Components"
              className="bg-transparent outline-none w-full h-full  text-zinc-400 text-[12px] font-normal"
            ></input>
            <div className="flex items-center justify-center gap-1 bg-zinc-800 px-3 py-1 rounded-md">
              <Icon icon="ph:command-light" color="white" fontSize={18} />
              <span className="text-sm font-normal">K</span>
            </div>
          </div>

          <div onClick={handelHam} className="scale-[0.5] md:hidden">
            <label className="burger" htmlFor="burger">
              <input type="checkbox" id="burger" />
              <span className="bg-zinc-400"></span>
              <span className="bg-zinc-400"></span>
              <span className="bg-zinc-400"></span>
            </label>
          </div>
        </div>
      </div>

      {/* drop down nav  */}

      <div
        ref={dropNav}
        className={` "md:hidden  fixed top-[4rem] ${
          mobileNav ? "opacity-1" : "opacity-0"
        } w-full left-0 h-0 z-[10] text-xl flex flex-col gap-5 justify-center items-center bg-black custom-shadow`}
      >
        <Link
          href="/docs"
          className="cursor-pointer text-zinc-500 hover:text-zinc-400 duration-500 "
        >
          Components
        </Link>
        <Link
          href="/pricing"
          className="text-zinc-500 hover:text-zinc-400 duration-500"
        >
          <span>Pricing</span>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
