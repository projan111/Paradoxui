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
import Position from "rsuite/esm/internals/Overlay/Position";

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
    // Determine the size category based on window width

    //  timeline first
    const tl1Head = gsap.timeline({
      scrollTrigger: {
        trigger: selectContainerRef.current,
        start: "top top",
        end: "bottom top",
        // markers: true,
        scrub: 0.2,
        pin: true,
      },
    });
    // select heading
    tl1Head.from(".heading-select", {
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "sine.in",
    });

    //  timeline second
    const tl2Head = gsap.timeline({
      scrollTrigger: {
        trigger: collectContainerRef.current,
        start: "top top",
        end: "bottom top",
        // markers: true,
        scrub: 0.2,
        pin: true,
      },
    });
    // select heading
    tl2Head.from(".heading-collect", {
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "sine.in",
    });

    //  timeline third
    const tl3Head = gsap.timeline({
      scrollTrigger: {
        trigger: combineContainerRef.current,
        start: "top top",
        end: "bottom top",
        // markers: true,
        scrub: 0.2,
        pin: true,
      },
    });
    // select heading
    tl3Head.from(".heading-combine", {
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "sine.in",
    });

    // component animation gsap
    //  timeline first card
    const tl1Card = gsap.timeline({
      scrollTrigger: {
        trigger: featureContainerRef.current,
        start: "20% top",
        end: "bottom top",
        // markers: true,
        scrub: 0.2,
      },
    });
    // select card
    tl1Card.to(
      ".card-anim",
      {
        y: "85vh",
        width: "40vw",
        opacity: 0,
        x: "-45%",
        ease: "sine.in",
        borderColor: "green",
      },
      "select-card"
    );

    // select card
    tl1Card.from(
      ".select-card",
      {
        delay: 0.5,
        opacity: 0,
        ease: "sine.in",
      },
      "select-card"
    );

    //  timeline second card
    const tl2Card = gsap.timeline({
      scrollTrigger: {
        trigger: selectContainerRef.current,
        start: "50% top",
        end: "bottom top",
        // markers: true,
        scrub: 0.2,
      },
    });
    // select card
    tl2Card.to(
      ".select-card",
      {
        y: "100vh",
        rotate: 12,
        ease: "sine.in",
        borderColor: "green",
        opacity: 0,
      },
      "collect-card"
    );

    // select card
    tl2Card.from(
      ".collect-card",
      {
        delay: 0.5,
        opacity: 0,
        ease: "sine.in",
      },
      "collect-card"
    );
    // collect card
    tl2Card.from(
      ".collect-news",
      {
        delay: 1,
        left: "5%",
        rotate: 0,
        opacity: 0,
        ease: "sine.in",
      },
      "collect-comp"
    );
    // collect card
    tl2Card.from(
      ".collect-nav",
      {
        delay: 1,
        left: "20%",
        rotate: 0,
        opacity: 0,
        ease: "sine.in",
      },
      "collect-comp"
    );

    //  timeline second card
    const tl3Card = gsap.timeline({
      scrollTrigger: {
        trigger: collectContainerRef.current,
        start: "20% top",
        end: "bottom top",
        markers: true,
        scrub: 0.2,
      },
    });
    // select card
    tl3Card.to(
      ".collect-card",
      {
        y: "120vh",
        ease: "sine.in",
        borderColor: "green",
        opacity: 0,
        rotate: 0,
      },
      "combine-card"
    );
    tl3Card.to(
      ".collect-nav",
      {
        top: "120%",
        scale: 1,
        ease: "sine.in",
        borderColor: "green",
        opacity: 0,
        rotate: 0,
      },
      "combine-card"
    );
    tl3Card.to(
      ".collect-news",
      {
        top: "165%",
        left: "30%",
        ease: "sine.in",
        opacity: 0,
        rotate: 0,
      },
      "combine-card"
    );

    // select card
    tl3Card.from(
      ".combine-nav ",
      {
        delay: 0.1,
        opacity: 0,
        ease: "sine.in",
      },
      "combine-comp"
    );
    tl3Card.from(
      ".combine-card",
      {
        delay: 0.1,
        opacity: 0,
        ease: "sine.in",
      },
      "combine-comp"
    );
    tl3Card.from(
      ".combine-news",
      {
        delay: 0.1,
        opacity: 0,
        ease: "sine.in",
      },
      "combine-comp"
    );
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
