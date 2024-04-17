import React from "react";
import { Icon } from "@iconify/react";
import { id } from "date-fns/locale";
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
      id: 22,
      name: "Tailwind.css",
      icon: "mdi:tailwind",
    },
    {
      id: 3,
      name: "Framer Motion",
      icon: "tabler:brand-framer-motion",
    },
  ];
  return (
    <div className="mt-[7rem] font-medium flex justify-center items-center gap-9 flex-col text-secondary-50">
      {/* intro  */}
      <div className="flex justify-center items-center flex-col gap-1">
        <h1 className="text-5xl">Instantly amplify your Website</h1>
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

      {/* ecplore button  */}
      <button className="bg-[#FFFCE1] px-7 py-[1rem] text-md rounded-full text-primary-800 font-semibold ">
        Explore Components
      </button>

      {/* library  */}
      <div className="w-full flex justify-center items-center gap-10">
        {heroIcon.map((item, index) => (
          <div className="flex justify-center items-center gap-2">
            <Icon icon={item.icon} style={{ color: "white" }} width={25} />
            <span className="text-lg pt-1">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
