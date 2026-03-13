"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-light opacity-95" />

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-20 -right-20 h-96 w-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)",
            animation: "gradient-shift 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(0,206,201,0.4), transparent 70%)",
            animation: "gradient-shift 15s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to elevate your
            <br />
            digital experience?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/80">
            Join 12,000+ teams building exceptional products. Start your free
            trial today — no credit card required.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="#pricing"
              className="btn-glow group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Demo
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Trust Badge */}
        <AnimatedSection delay={0.6}>
          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              SOC 2 Certified
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              256-bit Encryption
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              99.99% Uptime
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
