"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type Props = {};

function PricingPackage({}: Props) {
  return (
    <div className="w-full mb-20 justify-center items-center">
      {/* packages  */}
      <div className="w-full flex justify-center items-center flex-col md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-center place-items-center mx-auto gap-2">
        {packageData.map((item, index) => (
          <div
            key={index}
            className={`border-[1px] flex justify-start items-start p-4 gap-4 scale-[0.95] hover:scale-[1] duration-500 flex-col   ${
              item.highlight ? "border-green-500 " : "border-primary-700"
            } rounded-2xl w-full md::w-[20vw] md:h-[75vh] relative shadow-md hover:shadow-primary-800`}
          >
            <span className="text-[13px] text-secondary-600">{item.title}</span>

            {/* package name  */}
            <span className="font-semibold text-xl">{item.name}</span>

            {/* price  */}
            <span className="text-4xl font-bold">{item.price}</span>

            {/* description  */}
            <p className="text-[15px]">{item.desc}</p>

            {/* services  */}
            <div className="flex flex-col  gap-3 justify-start items-start mt-5">
              <div className="flex justify-center items-center gap-3">
                <Icon
                  icon="icon-park-outline:check-correct"
                  className="text-green-400"
                />
                <span className="text-[15px]">Easy to use</span>
              </div>
              <div className="flex justify-center items-center gap-3">
                <Icon
                  icon="icon-park-outline:check-correct"
                  className="text-green-400"
                />
                <span className="text-[15px]">No credit card required</span>
              </div>
              <div className="flex justify-center items-center gap-3">
                <Icon
                  icon="icon-park-outline:check-correct"
                  className="text-green-400"
                />
                <span className="text-[15px]">10,000 monthly active users</span>
              </div>
              <div className="flex justify-center items-center gap-3">
                <Icon
                  icon="icon-park-outline:check-correct"
                  className="text-green-400"
                />
                <span className="text-[15px]">Pre-built components</span>
              </div>
            </div>

            {/* button  */}
            <button
              className={`w-[70%] text-nowrap text-[14px] font-semibold  md:absolute md:bottom-[3%] md:left-[50%] md:-translate-x-[50%] h-[2.5rem] text-center    ${
                item.highlight ? "bg-green-400" : "bg-secondary-400"
              } overflow-hidden  cursor-pointer hover:scale-[0.96] duration-500   rounded-full p-2 text-primary-800`}
            >
              <span>Get started</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPackage;

const packageData = [
  {
    id: 1,
    title: "Freemium",
    name: "Pages",
    price: "$1000",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, odit.",
    button: "Get started",
    highlight: false,
  },
  {
    id: 2,
    title: "Basic",
    name: "Blog",
    price: "$1500",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, odit.",
    button: "Get started",
    highlight: false,
  },
  {
    id: 3,
    title: "Pro",
    name: "E-commerce",
    price: "$2000",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, odit.",
    button: "Get started",
    highlight: true,
  },
  {
    id: 4,
    title: "Enterprise",
    name: "Custom",
    price: "Contact us",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, odit.",
    button: "Contact us",
    highlight: false,
  },
];
