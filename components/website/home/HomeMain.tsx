"use client";
import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero/Hero";
import FeaturedComponents from "./FeaturedComponents/FeaturedComponents";
import SelectFavourite from "./SelectFavourite/SelectFavourite";
import CollectComponents from "./CollectComponents/CollectComponents";
import CombineComponents from "./CombineComponents/CombineComponents";
import FeaturedHero from "./FeaturedHero/FeaturedHero";
import Reviews from "./Reviews/Reviews";
import Footer from "../Footer";
// gsap import
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// register scroll trigger plugin
gsap.registerPlugin(ScrollTrigger);
type Props = {};

function HomeMain({}: Props) {
  // animation gsap
  const featureContainerRef = useRef(null);
  const collectContainerRef = useRef(null);
  const combineContainerRef = useRef(null);
  const selectContainerRef = useRef(null);
  const webContainerRef = useRef(null);

  useGSAP(() => {
    // timeline one
    const tl1 = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: ".card-anim",
        start: "top 50%",
        end: "bottom -10%",
        scrub: 0.2,
      },
    });
    tl1.to(
      ".card-anim",
      {
        x: "-35%",
        y: "180%",
        scale: 0.9,
        ease: "sine.in",
        duration: 8,
      },
      "first"
    );

    //  border color
    tl1.to(
      ".card-anim",
      {
        borderColor: "green",
        duration: 0.1,
      },
      "first"
    );
    tl1.from(".heading-select", {
      opacity: 0,
      duration: 2,
      stagger: 0.3,
    });

    // timeline two
    const tl2 = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: collectContainerRef.current,
        start: "top 50%",
        end: "10% top",
        scrub: 0.1,
      },
    });
    tl2.to(
      ".card-anim",
      {
        y: "400%",
        scale: 0.7,
        ease: "sine.in",
        rotate: "25deg",
        duration: 5,
      },
      "second"
    );

    // for newsletter comp
    tl2.to(
      ".newsletter-anim",
      {
        marginLeft: "15rem",
        opacity: 1,
        top: "50%",
        ease: "sine.in",
        rotate: "-15deg",
        borderColor: "green",
        duration: 5,
      },
      "second"
    );

    // for navbar comp
    tl2.to(
      ".navbar-anim",
      {
        opacity: 1,
        ease: "sine.in",
        borderColor: "green",
        duration: 5,
        rotate: 12,
        top: "20%",
      },
      "second"
    );

    // collect text
    tl2.from(".heading-collect", {
      opacity: 0,
      duration: 2,
      stagger: 0.3,
    });

    // timeline three
    const tl3 = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: combineContainerRef.current,
        start: "top 75%",
        end: "5% top",
        scrub: 0.1,
      },
    });
    // tl3.to(
    //   webContainerRef.current,
    //   {
    //     background: "gray",
    //     border: "none",
    //     duration: 5,
    //   },
    //   "third"
    // );

    tl3.to(
      ".card-anim",
      {
        y: "620%",
        scale: 1,
        ease: "sine.in",
        rotate: "0",
        border: "none",
        duration: 5,
      },
      "third"
    );

    // for newsletter comp
    tl3.to(
      ".newsletter-anim",
      {
        top: "248%",
        ease: "sine.in",
        rotate: "0",
        marginLeft: "10%",
        borderColor: "#222222",
        duration: 5,
      },
      "third"
    );

    // for navbar comp
    tl3.to(
      ".navbar-anim",
      {
        top: "145%",
        ease: "sine.in",
        rotate: 0,
        scale: 1,
        border: "none",
        duration: 5,
      },
      "third"
    );
    tl3.from(".heading-combine", {
      opacity: 0,
      duration: 2,
      stagger: 0.3,
    });

    // newsletter after on tl3
    const news = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: webContainerRef.current,
        start: "top 75%",
        end: "top 10%",
        scrub: 0.1,
      },
    });
    news.from(".slideNews-anim", {
      opacity: 0,
      ease: "sine.in",
      right: "100%",
      duration: 10,
    });
  });

  return (
    <div data-scroll-section data-scroll data-scroll-speed="0.3">
      {/* <Navbar /> */}
      <Hero />
      <FeaturedComponents featureContainerRef={featureContainerRef} />
      <SelectFavourite selectContainerRef={selectContainerRef} />
      <CollectComponents collectContainerRef={collectContainerRef} />
      <CombineComponents
        combineContainerRef={combineContainerRef}
        webContainerRef={webContainerRef}
      />
      <FeaturedHero />
      <Reviews />
      <Footer />
    </div>
  );
}

export default HomeMain;
