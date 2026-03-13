"use client";

import AnimatedSection from "./AnimatedSection";

const specs = [
  {
    category: "Display",
    details: [
      "Liquid Retina XDR display",
      "16.2-inch (diagonal) display",
      "3456-by-2234 native resolution",
      "Up to 1000 nits sustained testing",
    ],
  },
  {
    category: "Chip",
    details: [
      "A18 Pro chip",
      "12-core CPU with 6 performance cores",
      "18-core GPU",
      "16-core Neural Engine",
    ],
  },
  {
    category: "Memory",
    details: [
      "18GB unified memory",
      "Configurable up to 36GB or 96GB",
      "400GB/s memory bandwidth",
    ],
  },
  {
    category: "Battery and Power",
    details: [
      "Up to 22 hours video playback",
      "Up to 15 hours wireless web",
      "100-watt-hour lithium-polymer",
      "Fast-charge capable",
    ],
  },
];

export default function SpecsSection() {
  return (
    <section className="bg-background py-32 border-t border-border/30">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        
        <AnimatedSection>
          <div className="mb-20 text-center">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-foreground">
              Technical Specifications
            </h2>
          </div>
        </AnimatedSection>

        <div className="divide-y divide-border/40 border-t border-border/40">
          {specs.map((item, idx) => (
            <AnimatedSection key={item.category} delay={0.1}>
              <div className="flex flex-col py-10 sm:flex-row sm:gap-16">
                <div className="mb-4 sm:mb-0 sm:w-1/3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {item.category}
                  </h3>
                </div>
                <div className="sm:w-2/3">
                  <ul className="space-y-4">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-[19px] font-medium text-foreground-secondary">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.2} className="mt-16 text-center">
           <a href="#" className="btn-link">
             View all specifications &gt;
           </a>
        </AnimatedSection>
        
      </div>
    </section>
  );
}
