"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "../MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content > *",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".contact-content",
            start: "top 80%",
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
      id="contact"
      className="min-h-[80vh] flex items-center justify-center"
      style={{ padding: "var(--spacing-section) 2rem" }}
    >
      <div className="contact-content text-center max-w-3xl mx-auto">
        <span
          className="text-sm uppercase tracking-[0.3em] block mb-8"
          style={{ color: "var(--color-muted)" }}
        >
          Get in Touch
        </span>

        <h2
          className="text-[clamp(32px,6vw,64px)] font-medium tracking-tight leading-[1.1] mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let&apos;s build something
          <br />
          <span style={{ color: "var(--color-accent)" }}>meaningful</span>{" "}
          together.
        </h2>

        <MagneticButton className="group px-12 py-5 text-sm font-medium uppercase tracking-widest border border-[var(--color-foreground)] rounded-full hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors duration-500 interactive">
          Start a Project
          <span className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </MagneticButton>

        {/* Footer info */}
        <div
          className="mt-32 pt-12 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ color: "var(--color-muted)" }}
        >
          <span className="text-sm">© 2026 Studio. All rights reserved.</span>
          <div className="flex items-center gap-8">
            <a href="#" className="link-hover text-sm interactive">
              Instagram
            </a>
            <a href="#" className="link-hover text-sm interactive">
              Behance
            </a>
            <a href="#" className="link-hover text-sm interactive">
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
