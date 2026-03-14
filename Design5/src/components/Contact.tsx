"use client";

import MagneticButton from "./MagneticButton";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;
    
    gsap.fromTo(textRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-16 min-h-[70vh] flex flex-col items-center justify-center text-center container-custom">
      <h2 ref={textRef} className="text-5xl md:text-7xl lg:text-[100px] leading-none mb-16 tracking-tighter">
        LET'S BUILD <br />
        <span className="text-foreground-secondary italic font-light tracking-normal">SOMETHING EXTRAORDINARY.</span>
      </h2>
      
      <MagneticButton className="px-12 py-6 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-500 overflow-hidden group">
        <span className="relative z-10 flex items-center gap-3 text-sm uppercase tracking-widest font-medium">
          Start a Project
          <div className="w-2 h-2 rounded-full bg-accent group-hover:bg-black transition-colors duration-300" />
        </span>
      </MagneticButton>
    </section>
  );
}
