"use client";

import AnimatedSection from "./AnimatedSection";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  reversed?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export default function FeatureSection({
  title,
  subtitle,
  description,
  reversed = false,
  imageSrc,
  imageAlt,
}: FeatureSectionProps) {
  return (
    <section className="border-t border-border/30 bg-background py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`flex flex-col items-center gap-16 lg:flex-row ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <AnimatedSection>
              <h3 className="mb-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {title}
              </h3>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h4 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-foreground">
                {subtitle}
              </h4>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl font-medium leading-relaxed text-foreground-secondary">
                {description}
              </p>
            </AnimatedSection>
          </div>

          {/* Feature Visual */}
          <div className="w-full lg:w-1/2">
            <AnimatedSection delay={0.3} className="h-full w-full">
              <div className="aspect-[4/3] w-full rounded-2xl bg-surface border border-border/40 shadow-sm overflow-hidden flex items-center justify-center text-center">
                 {imageSrc ? (
                   <img 
                     src={imageSrc} 
                     alt={imageAlt || title} 
                     className="h-full w-full object-cover"
                   />
                 ) : (
                   <span className="text-foreground-secondary/40 font-medium tracking-wider uppercase text-sm p-6">[ Product Feature Image ]</span>
                 )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
