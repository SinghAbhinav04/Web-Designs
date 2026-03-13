"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

export default function Sustainability() {
  return (
    <section id="sustainability" className="relative py-32 bg-[#2f5d50] text-white overflow-hidden">
      {/* Background visual element */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <AnimatedSection>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#a8cdb6] mb-4">
                Our Commitment
              </h2>
              <h3 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Light on your feet. Lighter on the planet.
              </h3>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-lg leading-relaxed text-[#e0ece5] mb-8">
                The fashion industry is responsible for 10% of global carbon emissions. We&apos;re doing things differently. By measuring every emission, reducing what we can, and offsetting the rest, we maintain a 100% carbon-neutral footprint.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white font-bold">
                    1
                  </div>
                  <div>
                     <h4 className="font-semibold text-lg">Measure everything</h4>
                     <p className="text-[#a8cdb6] mt-1">We track the carbon footprint of every product to the gram.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white font-bold">
                    2
                  </div>
                  <div>
                     <h4 className="font-semibold text-lg">Reduce naturally</h4>
                     <p className="text-[#a8cdb6] mt-1">Using regenerative agriculture and renewable materials to lower emissions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white font-bold">
                    3
                  </div>
                  <div>
                     <h4 className="font-semibold text-lg">Offset the rest</h4>
                     <p className="text-[#a8cdb6] mt-1">Investing in high-quality projects to neutralize our remaining impact.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 border-b-2 border-white pb-1 font-semibold hover:text-[#a8cdb6] hover:border-[#a8cdb6] transition-colors"
                  whileHover={{ x: 4 }}
                >
                  Read Our Impact Report
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </AnimatedSection>
          </div>

          {/* Image/Visual Content */}
          <AnimatedSection delay={0.4} className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#1f3f36] shadow-2xl">
              {/* Simulated Image */}
              <div className="absolute inset-0 flex items-center justify-center text-[#a8cdb6]/30 px-12 text-center text-xl font-medium border border-white/10 m-4 rounded-xl">
                 [Sustainability Imagery: e.g. close-up of natural wool fibers or a lush forest]
              </div>
              
              {/* Carbon Footprint Badge */}
              <motion.div 
                 className="absolute bottom-8 right-8 bg-white text-foreground p-6 rounded-xl shadow-2xl"
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.8, duration: 0.5 }}
              >
                  <p className="text-xs uppercase tracking-widest font-semibold text-foreground-secondary mb-1">Carbon Footprint</p>
                  <p className="text-4xl font-extrabold text-accent">5.0 <span className="text-lg font-medium text-foreground-secondary">kg CO₂e</span></p>
                  <p className="text-xs text-foreground-secondary mt-2 border-t border-border pt-2">Zero after offsets</p>
              </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
