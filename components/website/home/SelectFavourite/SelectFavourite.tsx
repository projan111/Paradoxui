"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Search } from "lucide-react";

type Props = {};

function SelectFavourite({ selectContainerRef }: any) {
  const cardAnimRef = useRef(null);
  return (
    <div
      ref={selectContainerRef}
      className="text-[#FFFCE1]   text-center mx-auto py-20"
    >
      {/* heading  */}
      <h1 className="font-semibold text-5xl">
        {"Select your".split(" ").map((w, i) => (
          <div className="inline-block" key={i}>
            {w.split("").map((c, i) => (
              <span className="inline-block heading-select">{c}</span>
            ))}
            &nbsp;
          </div>
        ))}
      </h1>
      <h1 className="font-semibold text-5xl">
        {"favourite component".split(" ").map((w, i) => (
          <div className="inline-block" key={i}>
            {w.split("").map((c, i) => (
              <span className="inline-block heading-select">{c}</span>
            ))}
            &nbsp;
          </div>
        ))}
      </h1>

      <div ref={cardAnimRef} className="h-[45vh]"></div>
    </div>
  );
}
export default SelectFavourite;
