"use client";
import React from "react";
import FeaturedHero1Image from "@/public/images/featured-hero/hero1.png";
import FeaturedHero2Image from "@/public/images/featured-hero/hero2.png";
import FeaturedHero3Image from "@/public/images/featured-hero/hero3.png";
import FeaturedHero4Image from "@/public/images/featured-hero/hero4.jpg";
import FeaturedHero5Image from "@/public/images/featured-hero/hero5.jpg";
import FeaturedHero6Image from "@/public/images/featured-hero/hero6.jpg";

import Image from "next/image";

// icon
import { ChevronsDown, MoveRight, Search } from "lucide-react";

type Props = {};

const featuredHero = [
  {
    id: 1,
    name: "name1",
    img: FeaturedHero1Image,
  },
  {
    id: 2,
    name: "name2",
    img: FeaturedHero2Image,
  },
  {
    id: 3,
    name: "name3",
    img: FeaturedHero3Image,
  },
  {
    id: 4,
    name: "name4",
    img: FeaturedHero4Image,
  },
  {
    id: 5,
    name: "name5",
    img: FeaturedHero5Image,
  },
  {
    id: 6,
    name: "name6",
    img: FeaturedHero6Image,
  },
];
function FeaturedHero({}: Props) {
  return (
    <div className="text-secondary-400  flex justify-center items-center flex-col text-center  mx-auto py-10">
      {/* heading  */}
      <h1 className=" font-semibold text-3xl  md:text-4xl">
        Find more beautiful sections
      </h1>

      <div className="grid md:grid-cols-2 mt-10 lg:grid-cols-3 place-content-center gap-5   place-items-center ">
        {/* cards  */}
        {featuredHero.map((item, index) => (
          <div
            key={index}
            className="p-3 group rounded-lg w-full lg:w-[18rem] xl:w-[24rem] h-[20rem] border-[1px] border-primary-700 hover:border-green-default cursor-pointer"
          >
            <div className="w-full   h-full">
              {/* image  */}
              <div className="w-full h-[16rem] overflow-hidden">
                <Image
                  className="w-full h-full scale-[1.2] group-hover:scale-[1] duration-300 object-cover object-center"
                  src={item.img}
                  alt=""
                />
              </div>
              {/* preview  */}
              <div className="flex mt-3 justify-between items-center gap-2">
                <span className="text-[12px]">Preview</span>
                {/* here give w-full line only  */}
                <hr className="flex-grow  border-primary-700 h-0.1" />
                <button className="px-5 py-[4px] rounded-full bg-primary-800 text-[12px]  text-center">
                  <span className="bg-gradient-to-r  from-[#58FF0A] to-blue-300 bg-clip-text text-transparent">
                    View code
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* see more  */}
      <div className="w-full mb-10 mx-auto mt-14 flex justify-center items-center gap-2">
        <span className="text-[16px] md:text-[18px]">Paradox Hero Page</span>
        <hr className="flex-grow  border-primary-700 h-0.1" />
        <div className="flex justify-center cursor-pointer items-center gap-2">
          <span className="text-[13px] md:text-[15px]">See more</span>
          <MoveRight width={15} />
        </div>
      </div>
    </div>
  );
}

export default FeaturedHero;
