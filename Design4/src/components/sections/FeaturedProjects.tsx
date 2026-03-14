"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Horizon Residence",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Aether Gallery",
    category: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Solace Pavilion",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Monolith Tower",
    category: "Art Direction",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop",
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
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
      id="work"
      style={{ padding: "var(--spacing-section) 2rem" }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <span
            className="text-sm uppercase tracking-[0.3em] block mb-6"
            style={{ color: "var(--color-muted)" }}
          >
            Featured Work
          </span>
          <h2
            className="text-[clamp(32px,5vw,48px)] font-medium tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Selected Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card group interactive"
            >
              {/* Image */}
              <div className="img-zoom relative aspect-[4/3] mb-6 rounded-sm overflow-hidden bg-[var(--color-border)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                  unoptimized
                />
              </div>

              {/* Info */}
              <div className="flex items-start justify-between">
                <h3
                  className="text-[28px] font-medium tracking-tight transition-transform duration-500 group-hover:-translate-y-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.title}
                </h3>
                <span
                  className="text-sm uppercase tracking-[0.2em] mt-2"
                  style={{ color: "var(--color-muted)" }}
                >
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
