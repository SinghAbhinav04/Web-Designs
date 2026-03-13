"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center pt-32 pb-20 text-center overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 relative z-10 w-full">
        
        {/* Pre-heading Label */}
        <AnimatedSection>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#bf4800]">
            New Release
          </p>
        </AnimatedSection>

        {/* Massive Headline */}
        <AnimatedSection delay={0.1}>
          <h1 className="mb-6 text-[clamp(3.5rem,8vw,6.5rem)] font-bold tracking-tight text-foreground leading-[1.05]">
            Aura Pro<br />
            <span className="bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent">
              Mind-blowing.
            </span>
          </h1>
        </AnimatedSection>
        
        {/* Sub-headline */}
        <AnimatedSection delay={0.2}>
          <p className="mx-auto mb-10 max-w-2xl text-[clamp(1.25rem,3vw,1.75rem)] font-medium text-foreground-secondary leading-snug">
            The most advanced technical leap we&apos;ve ever made. Brilliant display, astonishing performance, and battery life that defies logic.
          </p>
        </AnimatedSection>

        {/* Calm Apple-Style CTAs */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="#" className="btn-primary px-8 py-3 text-base">
              Buy
            </Link>
            <Link href="#" className="btn-link text-[19px] gap-1">
              Learn more <ChevronRight className="h-4 w-4 stroke-[3]" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Hero Product Visual (Placeholder mimicking a sleek laptop/monitor) */}
        <AnimatedSection delay={0.5} className="mt-24 w-full max-w-5xl">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="relative aspect-video w-full rounded-t-3xl border-t border-x border-border/50 bg-gradient-to-b from-surface to-background shadow-[0_-10px_40px_rgba(0,0,0,0.03)] overflow-hidden flex items-center justify-center"
          >
            <img
              src="/images/aura_pro_hero_1773419889769.png"
              alt="Aura Pro sleek floating laptop"
              className="absolute inset-0 h-full w-full object-cover rounded-t-xl"
            />
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  );
}
