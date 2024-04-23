"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { id } from "date-fns/locale";
import gsapLogo from "@/public/images/logo/gsap.png";
import Image from "next/image";
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
    // {
    //   id: 3,
    //   name: "GSAP",
    //   icon: gsapLogo,
    // },
  ];
  return (
    <div className="font-medium pt-[5rem] h-[100vh] flex justify-center items-center gap-9 flex-col text-secondary-50">
      {/* intro  */}
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-5xl font-semibold">
          Instantly amplify your Website
        </h1>
        <h2 className="text-4xl">
          looks <span className="text-5xl">10x</span>
          <span className="bg-gradient-to-r from-[#58FF0A] to-blue-300 bg-clip-text text-transparent">
            &nbsp;Beautiful.
          </span>
        </h2>
      </div>
      {/* description  */}
      <p className="text-[16px] font-medium">
        Easily add stylish, animated components to your site!
      </p>

      {/* button explore  */}
      <button className="w-[12rem] h-[3rem] text-center bg-secondary-50 rounded-full p-2 text-primary-800">
        Explore components
      </button>

      {/* library  */}
      <div className="w-full flex justify-center items-center gap-10">
        {heroIcon.map((item, index) => (
          <div
            key={index}
            className="flex text-secondary-50 justify-center items-center gap-2"
          >
            <Icon icon={item.icon} width={25} />
            <span className="text-lg pt-1">{item.name}</span>
          </div>
        ))}
        <div className="flex text-secondary-50 justify-center items-center gap-2">
          <Image className="" src={gsapLogo} alt="gsap-logo" width={20}/>
          <span className="text-lg pt-1">GSAP</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
