"use client";
import PricingHero from "@/components/website/pricing/PricingHero";
import PricingMain from "@/components/website/pricing/PricingMain";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="w-full text-secondary-400 ">
      <PricingMain />
    </div>
  );
}
export default page;
