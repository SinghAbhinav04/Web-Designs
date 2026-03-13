"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Elevate completely transformed how we approach product design. The speed improvement alone was worth the switch — we shipped 3x faster.",
    author: "Sarah Chen",
    role: "VP of Product, Nexus",
    avatar: "SC",
    gradient: "from-violet-400 to-purple-500",
    rating: 5,
  },
  {
    quote:
      "The attention to detail is incredible. Every interaction feels polished and intentional. Our conversion rate increased by 47% after migrating.",
    author: "Marcus Williams",
    role: "CTO, Aerion",
    avatar: "MW",
    gradient: "from-blue-400 to-indigo-500",
    rating: 5,
  },
  {
    quote:
      "Best tool our design team has ever used. The collaboration features make remote work feel seamless. It's like having everyone in the same room.",
    author: "Elena Rodriguez",
    role: "Design Lead, Forma",
    avatar: "ER",
    gradient: "from-emerald-400 to-teal-500",
    rating: 5,
  },
  {
    quote:
      "We evaluated every platform on the market. Elevate won on performance, design quality, and developer experience. Not even close.",
    author: "James Park",
    role: "Founder, Wavelength",
    avatar: "JP",
    gradient: "from-amber-400 to-orange-500",
    rating: 5,
  },
  {
    quote:
      "The analytics dashboard alone is worth the subscription. We now understand our users at a depth that was impossible before.",
    author: "Priya Sharma",
    role: "Head of Growth, Scale",
    avatar: "PS",
    gradient: "from-rose-400 to-pink-500",
    rating: 5,
  },
  {
    quote:
      "I've never seen a product iterate this fast while maintaining this level of quality. The team behind Elevate truly understands builders.",
    author: "David Kim",
    role: "Engineering Manager, Arc",
    avatar: "DK",
    gradient: "from-cyan-400 to-sky-500",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 bg-surface">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Testimonials
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Loved by <span className="gradient-text">thousands</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/60">
            Join the teams and creators who&apos;ve already made the switch.
          </p>
        </AnimatedSection>

        {/* Testimonial Grid - Masonry Style */}
        <div className="mt-20 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.author}
              delay={index * 0.1}
              className="mb-6 break-inside-avoid"
            >
              <motion.div
                className="card-lift group rounded-2xl bg-white p-8 shadow-premium"
                whileHover={{
                  boxShadow:
                    "0 2px 4px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.06), 0 24px 48px rgba(108,92,231,0.08)",
                }}
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
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

                {/* Quote */}
                <p className="text-base leading-relaxed text-foreground/70">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient} text-sm font-bold text-white`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-foreground/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
