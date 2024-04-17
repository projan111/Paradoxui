"use client";

import Navbar from "@/components/website/Navbar";
import FeaturedComponents from "@/components/website/home/FeaturedComponents";
import FeaturedHero from "@/components/website/home/FeaturedHero";
import Hero from "@/components/website/home/Hero";
import Reviews from "@/components/website/home/Reviews";
import Footer from "@/components/website/Footer";

// component sections path

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedHero />
      <FeaturedComponents />
      <Reviews />
      <Footer />
    </main>
  );
}
