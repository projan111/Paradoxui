"use client";
import React, { useRef, useState } from "react";

// icon
import { Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  Parallax,
  Pagination,
  Navigation,
  FreeMode,
  Autoplay,
} from "swiper/modules";

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
    <div className="overflow-hidden w-full  flex justify-center items-center text-secondary-400  flex-col mx-auto py-10">
      {/* header  */}
      <span className="text-3xl  md:text-4xl font-semibold">Reviews</span>

      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          924: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          1256: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1576: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          dynamicBullets: true,
          // clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper w-full  h-[30vh] mt-4"
      >
        {reviews.map((item, index) => (
          <SwiperSlide
            key={index}
            className="p-4 rounded-lg  max-h-[80%]    border-primary-700 hover:border-green-default border-[1px]"
          >
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-[16px]">{item.name}</span>
              <p className=" text-[15px] text-primary-300">{item.review}</p>
              <div className="flex gap-1 justify-start items-center">
                <Star width={18} />
                <Star width={18} />
                <Star width={18} />
                <Star width={18} />
                <Star width={18} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Reviews;
