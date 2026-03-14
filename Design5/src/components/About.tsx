"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-16 container-custom">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <h2 className="text-4xl lg:text-5xl leading-tight">
            REDEFINING <br/> THE STANDARD.
          </h2>
        </div>
        <div className="md:col-span-7 flex flex-col gap-8 text-xl text-foreground-secondary font-light leading-relaxed">
          <p>
            We are an independent digital studio focused on creating web experiences that transcend typical templates. We blend cinematic motion, editorial typography, and minimalist layouts.
          </p>
          <p>
            Our philosophy is simple: cut the noise, amplify the signal. Every line of code, every transition, and every pixel is meticulously crafted to ensure the final product feels undeniably premium.
          </p>
        </div>
      </div>
    </section>
  );
}
