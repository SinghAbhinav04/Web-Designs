"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MagneticButton from "../MagneticButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-line",
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, stagger: 0.15 },
        0.6
      )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2 },
          1.2
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          1.4
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ padding: "var(--spacing-section) 2rem" }}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--color-accent-light)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--color-accent)" }}
        />
      </div>

      {/* Title */}
      <div
        ref={titleRef}
        className="text-center relative z-10"
      >
        <div className="overflow-hidden">
          <h1
            className="hero-line text-[clamp(48px,10vw,100px)] font-medium leading-[0.95] tracking-tighter"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CREATIVE
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className="hero-line text-[clamp(48px,10vw,100px)] font-medium leading-[0.95] tracking-tighter"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            DIGITAL
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className="hero-line text-[clamp(48px,10vw,100px)] font-medium leading-[0.95] tracking-tighter"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            STUDIO
          </h1>
        </div>
      </div>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="mt-12 text-center max-w-lg text-lg opacity-0"
        style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
      >
        We craft meaningful digital experiences through design, technology, and
        storytelling. Every pixel tells a story.
      </p>

      {/* CTA */}
      <div ref={ctaRef} className="mt-12 opacity-0">
        <MagneticButton className="group px-10 py-5 border border-[var(--color-foreground)] rounded-full text-sm font-medium uppercase tracking-widest hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors duration-500 interactive">
          View Work
          <span className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </MagneticButton>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: "var(--color-muted)" }}
        >
          Scroll
        </span>
        <div
          className="w-[1px] h-10 overflow-hidden"
          style={{ background: "var(--color-border)" }}
        >
          <div
            className="w-full h-full animate-pulse"
            style={{ background: "var(--color-foreground)" }}
          />
        </div>
      </div>
    </section>
  );
}
