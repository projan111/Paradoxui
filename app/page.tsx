"use client";
import Navbar from "@/components/Navbar";
import FeatureHero from "@/components/home/FeaturedHero";
import Hero from "@/components/home/Hero";
import React from "react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureHero />
    </main>
  );
}
