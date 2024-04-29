"use client";
import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { id } from "date-fns/locale";
import gsapLogo from "@/public/images/logo/gsap.png";
import Image from "next/image";
import gsap from "gsap";
type Props = {};

function Hero({}: Props) {
  const heroIcon = [
    {
      id: 0,
      name: "React.js",
      icon: "mdi:react",
    },
    {
      id: 1,
      name: "Next.js",
      icon: "tabler:brand-nextjs",
    },

    {
      id: 2,
      name: "Tailwind.css",
      icon: "mdi:tailwind",
    },
    {
      id: 3,
      name: "Framer Motion",
      icon: "tabler:brand-framer-motion",
    },
  ];

  return (
    <div className="pt-[4rem] h-[80vh] md:h-[100vh] flex justify-center items-center gap-9 flex-col text-secondary-500">
      {/* intro  */}
      <div className="flex  text-[25px] md:text-5xl justify-center items-center text-center gap-5 flex-col ">
        <h1 className="font-bold">
          Instantly amplify your Website <br /> looks
          <span className="text-4xl">&nbsp;10x</span>
          <span className="bg-gradient-to-r  from-[#58FF0A] to-blue-300 bg-clip-text text-transparent">
            &nbsp;Beautiful.
          </span>
        </h1>

        {/* description  */}
        <p className="text-[15px]  text-secondary-400">
          Easily add stylish, animated components to your site!
        </p>
        {/* button explore  */}
        <button className="w-[10rem] md:w-[12rem] font-semibold relative h-[2.5rem] md:h-[3rem] mx-auto flex justify-center items-center text-center bg-secondary-400 overflow-hidden  cursor-pointer hover:scale-[0.96] duration-500   rounded-full  text-primary-800">
          <span className="text-sm">Explore components</span>
        </button>
      </div>

      {/* library  */}
      <div className="w-full flex  justify-center flex-wrap  items-center gap-4 md:gap-10 mt-4">
        {heroIcon.map((item, index) => (
          <div
            key={index}
            className="flex text-secondary-400 justify-center items-center gap-2"
          >
            <Icon icon={item.icon} />
            <span className="text-[15px] md:text-[17px] pt-1 text-nowrap">
              {item.name}
            </span>
          </div>
        ))}
        <div className="flex text-secondary-400 justify-center items-center gap-1 md:gap-2">
          <Image className="" src={gsapLogo} alt="gsap-logo" width={20} />
          <span className="text-lg pt-1">GSAP</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
