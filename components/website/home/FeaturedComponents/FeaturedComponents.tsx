import React from "react";
import Image from "next/image";

// icon
import { MoveRight } from "lucide-react";

type Props = {};

function FeaturedComponents({}: Props) {
  return (
    <div className="text-[#FFFCE1] mx-auto my-10">
      {/* components  */}
      <div className="grid grid-cols-2 place-content-center place-items-center items-center">
        {/* left part  */}
        <div></div>
        {/* right part  */}
        <div></div>
      </div>
      {/* see more  */}
      <div className="w-[80vw] mt-10 mx-auto flex justify-center items-center gap-2">
        <span className="text-[18px]">Components</span>
        <hr className="flex-grow  border-primary-800 h-0.1" />
        <div className="flex justify-center items-center gap-2">
          <span className="text-[15px]">See more</span>
          <MoveRight width={15} />
        </div>
      </div>
    </div>
  );
}

export default FeaturedComponents;
