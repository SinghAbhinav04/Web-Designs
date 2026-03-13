"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const materials = [
  {
    name: "ZQRX Wool",
    desc: "Ethically sourced Merino wool that's incredibly soft, temperature-regulating, and regeneratively farmed.",
    icon: "🐑",
  },
  {
    name: "Tree Fiber",
    desc: "Light, breezy TENCEL™ Lyocell sourced from South African eucalyptus tree farms.",
    icon: "🌳",
  },
  {
    name: "SweetFoam®",
    desc: "Our revolutionary shoe sole made from Brazilian sugarcane, the world's first carbon negative green EVA.",
    icon: "🎋",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Mother Nature Knows Best
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground-secondary">
            Instead of relying on synthetic plastics, we turn to the world around us to create materials that are infinitely better for you and the planet.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {materials.map((material, idx) => (
            <AnimatedSection key={material.name} delay={idx * 0.15}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-soft text-3xl">
                  {material.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {material.name}
                </h3>
                <p className="text-foreground-secondary leading-relaxed">
                  {material.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
