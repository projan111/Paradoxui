import { id } from "date-fns/locale";
import React from "react";
import FeaturedHero1Image from "@/public/images/featured-hero/hero1.png";
import FeaturedHero2Image from "@/public/images/featured-hero/hero2.png";
import FeaturedHero3Image from "@/public/images/featured-hero/hero3.png";
import Image from "next/image";

// icon
import { MoveRight } from "lucide-react";

type Props = {};

const featuredHero = [
  {
    id: 0,
    name: "name1",
    img: FeaturedHero1Image,
  },

  {
    id: 1,
    name: "name2",
    img: FeaturedHero2Image,
  },
  {
    id: 2,
    name: "name3",
    img: FeaturedHero3Image,
  },
];
function FeatureHero({}: Props) {
  return (
    <div className="w-[80vw] mx-auto my-10">
      <div className="grid grid-cols-3 place-content-center place-items-center items-center">
        {/* cards  */}

        {featuredHero.map((item, index) => (
          <div className="p-3 rounded-lg w-[24rem] h-[20rem] bg-primary-800">
            {/* image  */}
            <div className="w-full h-[16rem]">
              <Image
                className="w-full h-full object-cover object-center"
                src={item.img}
                alt=""
              />
            </div>
            {/* preview  */}
            <div className="flex mt-3 justify-between items-center gap-2">
              <span className="text-[12px]">Preview</span>
              {/* here give w-full line only  */}
              <hr className="flex-grow  border-primary-700 h-0.1" />
              <button className="px-5 py-[4px] rounded-full text-[12px] bg-primary-600 text-center">
                View code
              </button>
            </div>
          </div>
        ))}

        {/* see more  */}
        <div className="w-[80vw] mt-10 mx-auto flex justify-center items-center gap-2">
          <span className="text-[17px]">Paradox Hero Page</span>
          <hr className="flex-grow  border-primary-700 h-0.1" />
          <div className="flex justify-center items-center gap-2">
            <span>See more</span>
            {/* <MoveRight width={10}/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureHero;
