"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-20">
      {/* Animated background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(108,92,231,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(108,92,231,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <AnimatedSection delay={0.2}>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm font-medium text-foreground/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Now available — Version 2.0
          </motion.div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.3}>
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block text-foreground">Design that</span>
            <span className="gradient-text">inspires action</span>
          </h1>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection delay={0.5}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/60 sm:text-xl">
            Craft exceptional digital experiences with precision-engineered
            components. Every pixel purposeful, every interaction seamless.
          </p>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection delay={0.7}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="#pricing"
              className="btn-glow group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-light px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building Free
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/10 px-8 py-4 text-base font-semibold text-foreground/80 transition-all hover:border-foreground/20 hover:bg-foreground/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Watch Demo
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Social Proof */}
        <AnimatedSection delay={0.9}>
          <div className="mt-16 flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "from-violet-400 to-purple-500",
                "from-blue-400 to-indigo-500",
                "from-emerald-400 to-teal-500",
                "from-amber-400 to-orange-500",
                "from-rose-400 to-pink-500",
              ].map((gradient, i) => (
                <div
                  key={i}
                  className={`h-10 w-10 rounded-full bg-gradient-to-br ${gradient} ring-3 ring-background flex items-center justify-center text-white text-xs font-bold`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-1 text-sm text-foreground/50">
                Loved by <span className="font-semibold text-foreground/70">12,000+</span> creators & teams
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Hero Visual - Floating Dashboard Preview */}
        <AnimatedSection delay={1.1}>
          <motion.div
            className="mx-auto mt-20 max-w-5xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="glass rounded-2xl p-2 shadow-premium">
              <div className="rounded-xl bg-gradient-to-br from-foreground/[0.03] to-foreground/[0.06] p-8 sm:p-12">
                {/* Mock dashboard */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="h-3 w-3 rounded-full bg-red-400/60"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-400/60"></div>
                  <div className="h-3 w-3 rounded-full bg-emerald-400/60"></div>
                  <div className="ml-4 h-5 w-48 rounded-full bg-foreground/5"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Revenue", value: "$48.2K", change: "+12.5%", color: "from-primary/20 to-primary-light/20" },
                    { label: "Users", value: "2,847", change: "+8.3%", color: "from-accent/20 to-emerald-400/20" },
                    { label: "Conversion", value: "4.82%", change: "+2.1%", color: "from-amber-400/20 to-orange-400/20" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className={`rounded-xl bg-gradient-to-br ${stat.color} p-4 sm:p-6`}
                    >
                      <p className="text-xs text-foreground/50 sm:text-sm">{stat.label}</p>
                      <p className="mt-1 text-lg font-bold text-foreground sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs font-medium text-emerald-600">
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="h-32 rounded-xl bg-foreground/[0.03] sm:h-40"></div>
                  <div className="h-32 rounded-xl bg-foreground/[0.03] sm:h-40"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
