"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const galleryImages = [
  "/images/gallery_1.png",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  "/images/gallery_3.png",
  "/images/gallery_4.png"
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const items = containerRef.current.querySelectorAll('.gallery-item');
    
    gsap.fromTo(items,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-16 container-custom relative bg-background-secondary rounded-3xl mx-4 lg:mx-8 px-8 lg:px-16">
      <div className="mb-20 flex justify-between items-end">
        <h2 className="text-4xl md:text-5xl tracking-tight">VISUAL DIARY</h2>
        <p className="text-sm tracking-widest uppercase text-foreground-secondary">Curated selections</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {galleryImages.map((src, idx) => (
          <div 
            key={idx} 
            className={`gallery-item relative overflow-hidden group rounded-sm ${idx % 2 === 1 ? 'md:mt-32' : ''}`}
          >
            <div className="aspect-[4/5] relative overflow-hidden bg-black">
              <img 
                src={src} 
                alt="Architecture excerpt" 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000" />
            </div>
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 text-sm tracking-widest uppercase">
              ARCHIVE // {String(idx + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
