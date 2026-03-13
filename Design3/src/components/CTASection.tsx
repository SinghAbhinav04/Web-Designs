"use client";

import AnimatedSection from "./AnimatedSection";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-surface py-32 border-t border-border/30">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        
        <AnimatedSection>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-300 shadow-sm border border-white/50 mb-10">
             <svg className="h-10 w-10 text-foreground" viewBox="0 0 24 24" fill="currentColor">
               <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
             </svg>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <h2 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-foreground leading-[1.05]">
            Supercharged for pros.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mx-auto mb-10 max-w-2xl text-[1.5rem] font-medium text-foreground-secondary leading-snug">
            From $1999 or $166.58/mo. for 12 mos.*
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="#" className="btn-primary px-8 py-3 text-base">
              Buy
            </Link>
            <Link href="#" className="btn-link text-[19px] gap-1">
              Watch the film <ChevronRight className="h-4 w-4 stroke-[3]" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
