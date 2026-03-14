"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format&fit=crop",
    alt: "Architecture detail",
    height: 400,
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80&auto=format&fit=crop",
    alt: "Interior space",
    height: 520,
  },
  {
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80&auto=format&fit=crop",
    alt: "Urban minimal",
    height: 350,
  },
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&auto=format&fit=crop",
    alt: "Exterior view",
    height: 480,
  },
  {
    src: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=800&q=80&auto=format&fit=crop",
    alt: "Landscape view",
    height: 380,
  },
  {
    src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80&auto=format&fit=crop",
    alt: "Interior light",
    height: 440,
  },
];

export default function GalleryGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gallery-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
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
        {/* Section header */}
        <div className="mb-20">
          <span
            className="text-sm uppercase tracking-[0.3em] block mb-6"
            style={{ color: "var(--color-muted)" }}
          >
            Gallery
          </span>
          <h2
            className="text-[clamp(32px,5vw,48px)] font-medium tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Visual Playground
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item img-zoom rounded-sm overflow-hidden interactive"
              style={{ height: image.height }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
