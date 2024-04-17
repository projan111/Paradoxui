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
  // const cardAnimRef = useRef(null);

  useGSAP(() => {
    // timeline one
    const tl1 = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: ".card-anim",
        start: "top 50%",
        end: "bottom top",
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
      },
      "first"
    );
    tl1.to(
      ".card-anim",
      {
        borderColor: "green",
        duration: 0.1,
      },
      "first"
    );

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
      },
      "second"
    );

    // timeline three
    const tl3 = gsap.timeline({
      scrollTrigger: {
        markers: true,
        trigger: combineContainerRef.current,
        start: "top 75%",
        end: "5% top",
        scrub: 0.1,
      },
    });
    tl3.to(
      ".card-anim",
      {
        y: "630%",
        scale: 1,
        ease: "sine.in",
        rotate: "0",
        borderColor: "#222222",
      },
      "third"
    );

    // for newsletter comp
    tl3.to(
      ".newsletter-anim",
      {
        top: "260%",
        ease: "sine.in",
        rotate: "0",
        marginLeft: "5%",
        borderColor: "#222222",
      },
      "third"
    );

    // for navbar comp
    tl3.to(
      ".navbar-anim",
      {
        top: "150%",
        ease: "sine.in",
        borderColor: "#222222",
      },
      "third"
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedComponents featureContainerRef={featureContainerRef} />
      <SelectFavourite />
      <CollectComponents collectContainerRef={collectContainerRef} />
      <CombineComponents combineContainerRef={combineContainerRef} />
      <FeaturedHero />
      <Reviews />
      <Footer />
    </div>
  );
}

export default HomeMain;
