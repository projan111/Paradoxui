"use client";
import React from "react";
// import ParadoxuiLogo from "@/public/newlogo-removebg-preview.png";
import WebxuiLogo from "@/public/images/logo/webxui.png";

import Image from "next/image";
import Samir from "@/public/images/team-profile/samir.jpg";
import Jeet from "@/public/images/team-profile/jeet.jpg";
import Boby from "@/public/images/team-profile/babish.jpg";
import Kamal from "@/public/images/team-profile/kamal.jpg";
import Link from "next/link";

type Props = {};
interface TeamMember {
  id: string;
  img: any;
}

const teamImage: TeamMember[] = [
  {
    id: "0",
    img: Samir,
  },
  {
    id: "1",
    img: Jeet,
  },
  {
    id: "2",
    img: Boby,
  },
  {
    id: "3",
    img: Kamal,
  },
  
];
function Footer({}: Props) {
  return (
    <div className="w-full overflow-hidden border-t-2 py-[3rem] border-zinc-800 text-zinc-300  ">
      <div className="flex flex-col md:flex-row px- w-full justify-between items-center px-5  lg:px-[9rem] ">
        {/* left part  */}
        <div className="flex w-full lg:w-[30%]  md:gap-2 flex-col">
          {/* logo */}
          <Image src={WebxuiLogo} alt="paradoxui-logo" className="w-[6rem]" />

          {/* user by  */}
          {/* <span className="mt-4 text-sm">
            A product by<span className="text-sky-500"> WebX</span>
          </span> */}

          <span className="text-[13px]">
            ©Copyright 2024 All Right Reserved
          </span>
        </div>
        {/* middle part our teams  */}
        <div className="flex justify-center items-start md:items-center w-full flex-col gap-2 mt-7  md:mt-0">
          <span className="text-2xl pb-2 text-zinc-200">Our team</span>

          <div className="flex  justify-center items-center gap-1">
            {teamImage.map((item, index) => (
              <div
                key={index}
                className="w-[3rem] group relative  ml-[-4%] hover:z-[20] hover:scale-[1.3] group h-[3rem] rounded-full overflow-hidden  duration-500"
              >
                <Image
                  key={index}
                  src={item.img}
                  alt=""
                  className="object-cover w-full h-full object-center"
                />
              </div>
            ))}
          </div>
        </div>
        {/* right part  */}
        <div className="w-full lg:w-[30%] mt-10 text-start md:text-right text-lg flex flex-col gap-2 md:gap-3">
          <Link href={''} className="text-zinc-400 font-semibold hover:text-zinc-200 ">Instagram</Link>
          <Link href={''} className="text-zinc-400 font-semibold hover:text-zinc-200 ">Facebook</Link>
          <Link href={''} className="text-zinc-400 font-semibold hover:text-zinc-200 ">Twitter</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
