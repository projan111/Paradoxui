"use client";
import React from "react";
// import ParadoxuiLogo from "@/public/newlogo-removebg-preview.png";
import ParadoxuiLogo from "@/public/images/logo/paradox-logo-cream.png";

import Image from "next/image";
import LokiProfileImg from "@/public/images/team-profile/loki.png";
import SubinProfileImg from "@/public/images/team-profile/subin.png";
import HariProfileImg from "@/public/images/team-profile/hari.png";
import KiranProfileImg from "@/public/images/team-profile/kiran.png";

type Props = {};
interface TeamMember {
  id: string;
  img: any;
}

const teamImage: TeamMember[] = [
  {
    id: "0",
    img: LokiProfileImg,
  },
  {
    id: "1",
    img: SubinProfileImg,
  },
  {
    id: "2",
    img: HariProfileImg,
  },
  {
    id: "3",
    img: KiranProfileImg,
  },
];
function Footer({}: Props) {
  return (
    <div className="w-full overflow-hidden   border-t-2 py-[3rem] border-zinc-800 text-secondary-400  ">
      <div className="flex flex-col md:flex-row px- w-full justify-between items-center px-5  lg:px-[9rem] ">
        {/* left part  */}
        <div className="flex w-full lg:w-[30%]  md:gap-2 flex-col">
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
        <div className="flex justify-center items-start md:items-center w-full flex-col gap-2 mt-7  md:mt-0">
          <span className="">Out team</span>

          <div className="flex justify-center items-center gap-2">
            {teamImage.map((item, index) => (
              <div
                key={index}
                className="w-[3rem] h-[3rem] rounded-full overflow-hidden"
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
        <div className="w-full lg:w-[30%] mt-10 text-start md:text-right text-xl flex flex-col gap-2 md:gap-3">
          <span>Components</span>
          <span>Pricing</span>
          <span>Facebook</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
