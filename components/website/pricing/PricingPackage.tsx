"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type Props = {};

function PricingPackage({}: Props) {
  return (
    <div className="w-full mb-20 justify-center items-center">
      {/* packages  */}
      <div className="w-full flex justify-center items-center flex-col md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-center place-items-center mx-auto">
        {packageData.map((item, index) => (
          <div
            key={index}
            className={` bg-primary-900 custom-shadow flex justify-start items-start p-4 gap-4 scale-[0.95] hover:scale-[1] duration-300 flex-col   ${
              item.highlight
                ? "border-sky-500 border-[1px]"
                : "border-primary-700"
            } rounded-2xl w-full md::w-[20vw] md:h-[75vh] relative shadow-sm hover:shadow-sky-800 border`}
          >
            <span className="text-[13px] text-secondary-600">{item.title}</span>

            {/* package name  */}
            <span className="font-semibold text-xl text-sky-200">
              {item.name}
            </span>

            {/* price  */}
            <span className="text-4xl font-bold text-zinc-100">
              {item.price}
            </span>

            {/* description  */}
            <p className="text-[15px] text-zinc-400">{item.desc}</p>

            {/* services  */}
            <div className="flex flex-col  gap-3 justify-start items-start mt-5">
              <div className="flex justify-center items-center gap-3">
                <Icon
                  icon="icon-park-outline:check-correct"
                  className="text-sky-400"
                />
                <span className="text-[15px] text-zinc-200">Easy to use</span>
              </div>
              <div className="flex justify-center items-center gap-3">
                <Icon
                  icon="icon-park-outline:check-correct"
                  className="text-sky-400"
                />
                <span className="text-[15px] text-zinc-200">No credit card required</span>
              </div>
              <div className="flex justify-center items-center gap-3">
                <Icon
                  icon="icon-park-outline:check-correct"
                  className="text-sky-400"
                />
                <span className="text-[15px] text-zinc-200">10,000 monthly active users</span>
              </div>
              <div className="flex justify-center items-center gap-3">
                <Icon
                  icon="icon-park-outline:check-correct"
                  className="text-sky-400"
                />
                <span className="text-[15px] text-zinc-200">Pre-built components</span>
              </div>
            </div>

            {/* button  */}
            <button
              className={`w-[70%] text-nowrap text-[14px] font-semibold  md:absolute md:bottom-[3%] md:left-[50%] md:-translate-x-[50%] h-[2.5rem] text-center    ${
                item.highlight ? "bg-sky-400" : "bg-zinc-200"
              } overflow-hidden  cursor-pointer hover:scale-[0.96] duration-400   rounded-full p-2 text-primary-800`}
            >
              <span>{item.button}</span>
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
    title: "Free Forever",
    name: "Freemium",
    price: "Rs.0",
    desc: "We never cost for fremium model",
    button: "Get started",
    highlight: false,
  },
  {
    id: 2,
    title: "One-time payment",
    name: "Starter",
    price: "Rs.1000",
    desc: "Pay less, use more",
    button: "Get started",
    highlight: false,
  },
  {
    id: 3,
    title: "Everyone's favorite",
    name: "Standard",
    price: "Rs.2500",
    desc: "Pay once and get unlimited components",
    button: "Get started",
    highlight: true,
  },
  {
    id: 4,
    title: "Custom",
    name: "Customize your components",
    price: "Contact now",
    desc: "If you want unique and creative design only for your ends",
    button: "Contact us",
    highlight: false,
  },
];
