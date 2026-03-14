"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = ["CREATIVITY", "IS", "OUR", "LANGUAGE"];

export default function TypographyStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stroke-word").forEach((word, i) => {
        gsap.fromTo(
          word,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power4.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: word,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center min-h-screen"
      style={{ padding: "var(--spacing-section) 2rem" }}
    >
      <div className="text-center">
        {words.map((word, index) => (
          <div key={index} className="overflow-hidden">
            <h2
              className="stroke-word text-stroke text-[clamp(48px,12vw,160px)] font-bold leading-[0.9] tracking-tighter"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {word}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
