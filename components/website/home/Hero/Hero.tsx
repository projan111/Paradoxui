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
    <div className=" font-medium pt-[6rem] md:pt-[5rem] md:h-[100vh] flex justify-center items-center gap-9 flex-col text-secondary-400">
      {/* intro  */}
      <div className="flex justify-center md:items-center md:text-center gap-5 flex-col ">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Instantly amplify your Website <br /> looks
          <span className="text-5xl">&nbsp;10x</span>
          <span className="bg-gradient-to-r text-4xl md:text-5xl from-[#58FF0A] to-blue-300 bg-clip-text text-transparent">
            &nbsp;Beautiful.
          </span>
        </h1>

        {/* description  */}
        <p className="text-[16px] font-medium">
          Easily add stylish, animated components to your site!
        </p>
        {/* button explore  */}
        <button className="w-[12rem] relative h-[3rem] text-center bg-secondary-400 overflow-hidden  cursor-pointer hover:scale-[0.96] duration-500   rounded-full p-2 text-primary-800">
          <span className="">Explore components</span>
        </button>
      </div>

      {/* library  */}
      <div className="w-full flex justify-start md:justify-center flex-wrap  items-center gap-4 md:gap-10 mt-4">
        {heroIcon.map((item, index) => (
          <div
            key={index}
            className="flex text-secondary-400 justify-center items-center gap-2"
          >
            <Icon icon={item.icon} width={25} />
            <span className="text-lg pt-1 text-nowrap">{item.name}</span>
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
