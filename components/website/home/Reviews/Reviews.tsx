"use client";
import React, { useRef } from "react";
import Image from "next/image";

// icon
import { Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {};

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
  {
    id: 2,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
  {
    id: 3,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
  {
    id: 1,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
  {
    id: 2,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
  {
    id: 3,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
];
function Reviews({}: Props) {
  const reviewRef = useRef(null);
  useGSAP(() => {
    gsap.to(reviewRef.current, {
      x: "-77vw",
      repeat: -1,
      duration: 15,
      ease: "linear",
      // yoyo: true,
    });
  });
  return (
    <div className="overflow-hidden w-[75vw] flex justify-center items-center text-secondary-400  flex-col mx-auto py-10">
      {/* header  */}
      <span className="text-3xl  md:text-4xl xl:text-5xl font-semibold">Reviews</span>

      {/* reviews  */}
      <div
        ref={reviewRef}
        className="flex justify-center items-center gap-2 mt-8 mx-auto"
      >
        {reviews.map((item, index) => (
          <div
            key={index}
            className="p-3 rounded-lg w-[24rem]   xl:w-[24rem]  border-primary-700 hover:border-green-default border-[1px]"
          >
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-[19px] xl:text-[20px]">
                {item.name}
              </span>
              <p className=" text-[15px] xl:text-[18px] text-secondary-400">
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
