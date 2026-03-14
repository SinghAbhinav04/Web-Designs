"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

interface Project {
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "LUMINA",
    category: "E-Commerce Experience",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2560&auto=format&fit=crop",
  },
  {
    title: "AETHER",
    category: "Architecture Portfolio",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2560&auto=format&fit=crop",
  },
  {
    title: "NEXUS",
    category: "Corporate Identity",
    image: "/images/nexus.png",
  }
];

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    projectRefs.current.forEach((project, i) => {
      if (!project) return;
      
      gsap.fromTo(project, 
        { 
          opacity: 0, 
          y: 100 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={containerRef} className="py-16 container-custom relative z-10 bg-background">
      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <div 
            key={index}
            ref={(el) => { projectRefs.current[index] = el; }}
            className="group relative cursor-pointer"
          >
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full scale-[1.02] group-hover:scale-[1.08] transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] saturate-0 group-hover:saturate-50 contrast-125"
              />
            </div>
            
            <div className="mt-8 flex justify-between items-end">
              <div className="overflow-hidden">
                <h2 className="text-4xl md:text-5xl lg:text-6xl group-hover:text-accent transition-colors duration-500 translate-y-0 relative">
                  {project.title}
                </h2>
              </div>
              <p className="text-sm tracking-widest uppercase text-foreground-secondary">
                {project.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
