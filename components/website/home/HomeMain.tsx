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
        trigger: ".main-container",
        start: "top top",
        end: "950% top",
        // markers: true,
        scrub: 0.2,
        pin: combineContainerRef.current,
      },
    });

    // select heading
    tl3Head.from(".heading-combine", {
      opacity: 0,
      duration: 0.3,
      stagger: 0.2,
      ease: "sine.in",
    });

    // for skin theme
    tl3Head.to(
      ".website",
      {
        // delay: 3.5,
        backgroundColor: "#F2EFE5",
        ease: "sine.in",
        duration: 0.8,
      },
      "skin"
    );

    tl3Head.to(
      ".nav-logo",
      {
        fill: "black",
        duration: 0.8,
        ease: "sine.in",
      },
      "skin"
    );
    tl3Head.to(
      ".combine-nav",
      {
        color: "#444444",
        ease: "sine.in",
        duration: 0.8,
        borderColor: "#DDDDDD",
      },
      "skin"
    );

    tl3Head.to(
      ".combine-menu",
      {
        color: "black",
        ease: "sine.in",
        duration: 0.8,
      },
      "skin"
    );

    tl3Head.to(
      ".nav-search",
      {
        color: "#272121",
        borderColor: "#B0A695",
        ease: "sine.in",
        duration: 0.8,
      },
      "skin"
    );
    tl3Head.to(
      ".search-input",
      {
        color: "#272121",
        ease: "sine.in",
        duration: 0.8,
      },
      "skin"
    );
    tl3Head.to(
      ".combine-card",
      {
        color: "#272121",
        ease: "sine.in",
        duration: 0.8,
      },
      "skin"
    );
    tl3Head.to(
      ".card-button1",
      {
        backgroundColor: "#B0A695",
        ease: "sine.in",
        duration: 0.8,
      },
      "skin"
    );
    tl3Head.to(
      ".card-button2",
      {
        borderColor: "#393B44",
        backgroundColor: "#393B44",
        ease: "sine.in",
        duration: 0.8,
      },
      "skin"
    );
    tl3Head.to(
      ".combine-news",
      {
        color: "#393B44",
        borderColor: "#B0A695",
        ease: "sine.in",
        duration: 0.8,
      },
      "skin"
    );
    tl3Head.to(
      ".combine-scroll",
      {
        color: "black",
        ease: "sine.in",
        duration: 0.8,
      },
      "skin"
    );

    //  for green theme
    tl3Head.to(
      ".website",
      {
        delay: 3.5,
        backgroundColor: "#D9EDBF",
        duration: 0.8,
        ease: "sine.in",
      },
      "green"
    );
    tl3Head.to(
      ".combine-nav",
      {
        delay: 3.5,
        color: "#444444",
        ease: "sine.in",
        duration: 0.8,
        borderColor: "#B2B2B2",
      },
      "green"
    );

    // tl3Head.to(
    //   ".nav-logo",
    //   {
    //     fill: "black",
    //     duration: 0.8,
    //     ease: "sine.in",
    //   },
    //   "green"
    // );
    // tl3Head.to(
    //   ".combine-nav",
    //   {
    //     color: "#444444",
    //     ease: "sine.in",
    //     duration: 0.8,
    //     borderBottom: "#444444",
    //   },
    //   "green"
    // );
    // tl3Head.to(
    //   ".nav-search",
    //   {
    //     color: "#272121",
    //     borderColor: "#B0A695",
    //     ease: "sine.in",
    //     duration: 0.8,
    //   },
    //   "green"
    // );
    // tl3Head.to(
    //   ".search-input",
    //   {
    //     color: "#272121",
    //     ease: "sine.in",
    //     duration: 0.8,
    //   },
    //   "green"
    // );
    // tl3Head.to(
    //   ".combine-card",
    //   {
    //     color: "#272121",
    //     ease: "sine.in",
    //     duration: 0.8,
    //   },
    //   "green"
    // );
    // tl3Head.to(
    //   ".card-button1",
    //   {
    //     backgroundColor: "#B0A695",
    //     ease: "sine.in",
    //     duration: 0.8,
    //   },
    //   "green"
    // );
    // tl3Head.to(
    //   ".card-button2",
    //   {
    //     borderColor: "#393B44",
    //     backgroundColor: "#393B44",
    //     ease: "sine.in",
    //     duration: 0.8,
    //   },
    //   "green"
    // );

    // tl3Head.to(
    //   ".combine-scroll",
    //   {
    //     color: "black",
    //     ease: "sine.in",
    //     duration: 0.8,
    //   },
    //   "green"
    // );

    // third color theme
    tl3Head.to(
      ".website",
      {
        delay: 3.5,
        backgroundColor: "#D5EEFF",
        duration: 0.8,
        ease: "sine.in",
      },
      "blue"
    );

    tl3Head.to(
      ".nav-logo",
      {
        delay: 3.5,
        fill: "black",
        duration: 0.8,
        ease: "sine.in",
      },
      "blue"
    );
    tl3Head.to(
      ".combine-nav",
      {
        delay: 3.5,
        color: "#444444",
        ease: "sine.in",
        duration: 0.8,
        borderColor: "#DDDDDD",
      },
      "blue"
    );
    tl3Head.to(
      ".nav-search",
      {
        delay: 3.5,
        color: "#272121",
        borderColor: "#B0A695",
        ease: "sine.in",
        duration: 0.8,
      },
      "blue"
    );
    tl3Head.to(
      ".search-input",
      {
        delay: 3.5,
        color: "#272121",
        ease: "sine.in",
        duration: 0.8,
      },
      "blue"
    );
    tl3Head.to(
      ".combine-card",
      {
        delay: 3.5,
        color: "#272121",
        ease: "sine.in",
        duration: 0.8,
      },
      "blue"
    );
    tl3Head.to(
      ".card-button1",
      {
        delay: 3.5,
        backgroundColor: "#B7C9F2",
        ease: "sine.in",
        duration: 0.8,
      },
      "blue"
    );
    tl3Head.to(
      ".card-button2",
      {
        delay: 3.5,
        borderColor: "#393B44",
        backgroundColor: "#393B44",
        ease: "sine.in",
        duration: 0.8,
      },
      "blue"
    );

    tl3Head.to(
      ".combine-scroll",
      {
        delay: 3.5,
        color: "black",
        ease: "sine.in",
        duration: 0.8,
      },
      "blue"
    );
    // third color theme
    tl3Head.to(
      ".website",
      {
        delay: 3.5,
        backgroundColor: "#fce9c4",
        duration: 0.8,
        ease: "sine.in",
      },
      "brown"
    );
    tl3Head.to(
      ".combine-nav",
      {
        delay: 3.5,
        borderColor: "#F3EFE0",
        duration: 0.8,
        ease: "sine.in",
      },
      "brown"
    );
    tl3Head.to(
      ".card-button1",
      {
        delay: 3.5,
        backgroundColor: "#D1BB9E",
        duration: 0.8,
        ease: "sine.in",
      },
      "brown"
    );
    tl3Head.to(
      ".website",
      {
        delay: 2,
        opacity: 0.7,
        duration: 0.5,
        ease: "sine.in",
      },
      "hide"
    );

    // component animation gsap
    //  timeline first card
    const tl1Card = gsap.timeline({
      scrollTrigger: {
        trigger: featureContainerRef.current,
        start: "20% top",
        end: "bottom top",
        // markers: true,
        scrub: 0.5,
      },
    });
    // select card
    tl1Card.to(
      ".card-anim",
      {
        y: "85vh",
        scale: 0.8,
        x: "-43%",
        ease: "sine.in",
      },
      "select-card"
    );
    tl1Card.to(
      ".card-anim",
      {
        delay: 0.2,
        opacity: 0,
      },
      "select-card"
    );

    // select card
    tl1Card.from(
      ".select-card",
      {
        delay: 0.6,
        opacity: 0,
        ease: "sine.in",
      },
      "select-card"
    );

    //  timeline second card
    const tl2Card = gsap.timeline({
      scrollTrigger: {
        trigger: selectContainerRef.current,
        start: "40% top",
        end: "bottom top",
        // markers: true,
        scrub: 0.5,
      },
    });
    // select card
    tl2Card.to(
      ".select-card",
      {
        y: "90vh",
        rotate: 12,
        ease: "sine.in",
        opacity: 0,
      },
      "collect-card"
    );

    // select card
    tl2Card.from(
      ".collect-card",
      {
        delay: 0.4,
        opacity: 0,
        ease: "sine.in",
      },
      "collect-card"
    );
    // collect card
    tl2Card.from(
      ".collect-news",
      {
        left: "0",
        top: "-5%",
        rotate: 0,
        opacity: 0,
        ease: "sine.in",
      },
      "collect-card"
    );
    // collect card
    tl2Card.from(
      ".collect-nav",
      {
        left: "50%",
        top: "-5%",
        rotate: 0,
        opacity: 0,
        ease: "sine.in",
      },
      "collect-card"
    );
    tl2Card.from(
      ".collect-scroll",
      {
        right: "0",
        top: "80%",
        rotate: "360deg",
        opacity: 0,
        ease: "sine.in",
      },
      "collect-card"
    );

    //  timeline second card
    const tl3Card = gsap.timeline({
      scrollTrigger: {
        trigger: collectContainerRef.current,
        start: "20% top",
        end: "bottom top",
        // markers: true,
        scrub: 0.5,
      },
    });
    // select card
    tl3Card.to(
      ".collect-card",
      {
        y: "125vh",
        ease: "sine.in",

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
        opacity: 0,
        rotate: 0,
      },
      "combine-card"
    );

    tl3Card.to(
      ".collect-news",
      {
        top: "170%",
        left: "30%",
        ease: "sine.in",
        opacity: 0,
        rotate: 0,
      },
      "combine-card"
    );
    tl3Card.to(
      ".collect-scroll",
      {
        top: "174%",
        left: "45%",
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
    <>
      <div className="overflow-hidden px-5">
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
      </div>
    </>
  );
}

export default HomeMain;
