"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ParallaxShowcase from "@/components/sections/ParallaxShowcase";
import TypographyStatement from "@/components/sections/TypographyStatement";
import GalleryGrid from "@/components/sections/GalleryGrid";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CustomCursor />
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <FeaturedProjects />
          <ParallaxShowcase />
          <TypographyStatement />
          <GalleryGrid />
          <About />
          <Contact />
        </main>
      </SmoothScroll>
    </>
  );
}
