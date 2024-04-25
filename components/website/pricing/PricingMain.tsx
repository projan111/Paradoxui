"use client";
import React from "react";
import PricingHero from "./PricingHero";
import PricingPackage from "./PricingPackage";

type Props = {};

function PricingMain({}: Props) {
  return (
    <div>
      <PricingHero />
      <PricingPackage />
    </div>
  );
}

export default PricingMain;
