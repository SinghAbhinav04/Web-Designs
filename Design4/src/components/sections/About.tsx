"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-title",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".about-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".about-stats > div",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{ padding: "var(--spacing-section) 2rem" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left: Title */}
          <div>
            <span
              className="text-sm uppercase tracking-[0.3em] block mb-6"
              style={{ color: "var(--color-muted)" }}
            >
              About
            </span>
            <h2
              className="about-title text-[clamp(36px,6vw,64px)] font-medium tracking-tight leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Design is how
              <br />
              we express
              <br />
              <span style={{ color: "var(--color-accent)" }}>meaning.</span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="flex flex-col justify-center">
            <div className="about-text space-y-6">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                We are a collective of designers, developers, and strategists
                who believe in the power of thoughtful design. Our approach
                combines deep research, refined aesthetics, and cutting-edge
                technology to create digital experiences that resonate.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                Every project begins with understanding — understanding the
                brand, the audience, and the story that needs to be told. We
                don&apos;t follow trends; we set them.
              </p>
            </div>

            {/* Stats */}
            <div className="about-stats grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-[var(--color-border)]">
              <div>
                <span
                  className="text-[clamp(28px,4vw,48px)] font-medium block"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  120+
                </span>
                <span
                  className="text-sm uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-muted)" }}
                >
                  Projects
                </span>
              </div>
              <div>
                <span
                  className="text-[clamp(28px,4vw,48px)] font-medium block"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  8+
                </span>
                <span
                  className="text-sm uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-muted)" }}
                >
                  Years
                </span>
              </div>
              <div>
                <span
                  className="text-[clamp(28px,4vw,48px)] font-medium block"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  24
                </span>
                <span
                  className="text-sm uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-muted)" }}
                >
                  Awards
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
