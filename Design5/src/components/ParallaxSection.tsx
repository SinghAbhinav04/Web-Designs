"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    gsap.to(imageRef.current, {
      yPercent: 30, // Move image down slightly as we scroll down, creating parallax
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[120vh] w-full overflow-hidden group cursor-pointer"
    >
      <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/10 transition-colors duration-1000" />
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2560&auto=format&fit=crop"
        alt="Minimalist Architecture Parallax"
        className="absolute top-[-20%] left-0 w-full h-[140%] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out"
      />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] mb-4 drop-shadow-lg">
          CINEMATIC Space
        </h2>
        <p className="text-foreground-secondary tracking-widest uppercase text-sm drop-shadow-md">
          A study of light and structure
        </p>
      </div>
    </section>
  );
}
