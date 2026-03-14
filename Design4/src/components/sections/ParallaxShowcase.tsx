"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const showcaseImages = [
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format&fit=crop",
    alt: "Modern architectural structure",
  },
  {
    src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1400&q=80&auto=format&fit=crop",
    alt: "Interior minimal space",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80&auto=format&fit=crop",
    alt: "Cinematic landscape",
  },
];

export default function ParallaxShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".parallax-container").forEach((container) => {
        const img = container.querySelector(".parallax-img") as HTMLElement;
        if (!img) return;

        gsap.fromTo(
          img,
          { y: -80 },
          {
            y: 80,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      // Fade in containers
      gsap.utils.toArray<HTMLElement>(".parallax-container").forEach((container) => {
        gsap.fromTo(
          container,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
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
      style={{ padding: "var(--spacing-section) 2rem" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="space-y-24">
          {showcaseImages.map((image, index) => (
            <div
              key={index}
              className="parallax-container relative overflow-hidden rounded-sm"
              style={{
                height: index === 1 ? "70vh" : "80vh",
                marginLeft: index === 1 ? "15%" : "0",
                marginRight: index === 2 ? "15%" : "0",
              }}
            >
              <div className="parallax-img absolute inset-[-80px] w-full" style={{ height: "calc(100% + 160px)" }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  loading="lazy"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
