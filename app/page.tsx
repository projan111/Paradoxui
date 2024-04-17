"use client";

import Navbar from "@/components/website/Navbar";

import Footer from "@/components/website/Footer";
import SelectFavourite from "@/components/website/home/SelectFavourite/SelectFavourite";
import CollectComponents from "@/components/website/home/CollectComponents/CollectComponents";
import Hero from "@/components/website/home/Hero/Hero";
import FeaturedHero from "@/components/website/home/FeaturedHero/FeaturedHero";
import Reviews from "@/components/website/home/Reviews/Reviews";

// component sections path

export default function Home() {
  return (
    <main className="w-[80vw] mx-auto">
      <Navbar />
      <Hero />
      {/* <FeaturedComponents /> */}
      <SelectFavourite />
      <CollectComponents />
      <FeaturedHero />
      <Reviews />
      <Footer />
    </main>
  );
}
