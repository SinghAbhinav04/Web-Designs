"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background-soft pt-20">
      {/* Background Image Setup (using a placeholder approach for now if the image is missing, but assuming it's there) */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-multiply">
        {/* We use the hero.png image generated earlier */}
        <Image
          src="/images/hero.png"
          alt="Premium sustainable shoes on natural wood"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      
      {/* Soft overlay to ensure text readability if needed, though light theme usually relies on good image contrast.
          Let's add a subtle gradient from the bottom. */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background-soft via-transparent to-transparent opacity-80" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 flex flex-col items-center text-center">
        <AnimatedSection delay={0.1}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex"
          >
             <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                New Arrival
             </span>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Comfort that comes naturally.
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-secondary sm:text-xl">
            Experience the perfect balance of sustainable materials and everyday performance. Crafted for your life, designed for the planet.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="#products"
              className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-full bg-foreground px-8 text-sm font-semibold text-white transition-all hover:bg-black sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Shop Men
            </motion.a>
            <motion.a
              href="#products"
              className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-full bg-white px-8 text-sm font-semibold text-foreground border border-border transition-all hover:border-foreground-secondary sm:w-auto shadow-soft"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Shop Women
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
