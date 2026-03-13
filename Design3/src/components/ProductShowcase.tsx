"use client";

import AnimatedSection from "./AnimatedSection";

export default function ProductShowcase() {
  return (
    <section className="bg-surface py-40">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <AnimatedSection>
          <h2 className="mb-8 text-[clamp(3rem,6vw,5rem)] font-bold tracking-tight text-foreground leading-none">
            Designed to push boundaries.<br /> And look good doing it.
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <p className="mx-auto mb-20 max-w-3xl text-2xl font-medium text-foreground-secondary leading-relaxed">
            Every curve and corner is meticulously machined. The enclosure is crafted from a single block of aerospace-grade aluminum, making it impossibly thin yet incredibly structurally sound.
          </p>
        </AnimatedSection>

        {/* Massive full-width-ish visual */}
        <AnimatedSection delay={0.3}>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] bg-white shadow-2xl flex items-center justify-center border border-border/20">
             <img 
               src="/images/aura_pro_showcase_1773420216941.png" 
               alt="Top down view of minimalist silver laptop"
               className="h-full w-full object-cover"
             />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
