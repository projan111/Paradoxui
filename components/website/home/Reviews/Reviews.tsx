"use client";
import React from "react";
import Image from "next/image";

// icon
import { Star } from "lucide-react";

type Props = {};

const reviews = [
  {
    id: 0,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
  {
    id: 0,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
  {
    id: 0,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
];
function Reviews({}: Props) {
  return (
    <div className=" flex text-secondary-50  border-zinc-800 justify-center items-center flex-col mx-auto my-10">
      {/* header  */}
      <span className="text-3xl font-semibold">Reviews</span>

      {/* reviews  */}
      <div className="grid md:grid-cols-2   lg:grid-cols-3 gap-2 mt-8 mx-auto">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="p-3 rounded-lg  xl:w-[24rem] bg-primary-900 border-primary-800 hover:border-green-500 border-2"
          >
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-[19px] xl:text-[20px]">
                {item.name}
              </span>
              <p className=" text-[16px] xl:text-[18px] text-primary-200">
                {item.review}
              </p>
              <div className="flex gap-1 justify-start items-center">
                <Star width={18} />
                <Star width={18} />
                <Star width={18} />
                <Star width={18} />
                <Star width={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
