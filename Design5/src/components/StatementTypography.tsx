"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function StatementTypography() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !textRef.current) return;

    gsap.fromTo(imageRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );

    gsap.fromTo(textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-16 container-custom relative flex flex-col md:flex-row items-center justify-between gap-16 min-h-[80vh]">
      
      {/* Large elegant image on the left */}
      <div 
        ref={imageRef}
        className="w-full md:w-1/2 min-h-[400px] md:h-[600px] relative overflow-hidden rounded-sm group cursor-pointer"
      >
        <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-1000 group-hover:bg-transparent" />
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
          alt="Studio Essence"
          className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 text-sm tracking-widest uppercase text-white drop-shadow-md">
          01 // STUDIO REFLECTIONS
        </div>
      </div>
      
      {/* Text on the right */}
      <div ref={textRef} className="w-full md:w-5/12 text-xl md:text-2xl text-foreground-secondary font-light leading-relaxed">
        <p>
          We believe that interaction is the core of modern digital experiences. 
          Through precise motion design and strong typography, we build interfaces 
          that feel alive, premium, and unforgettable.
        </p>
      </div>
    </section>
  );
}
