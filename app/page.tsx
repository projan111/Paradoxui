"use client";
import HomeMain from "@/components/website/home/HomeMain";
import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll: any = new LocomotiveScroll();

export default function Home() {
  return (
    <main className="w-[80vw] mx-auto">
      <HomeMain />
    </main>
  );
}
