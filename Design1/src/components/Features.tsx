"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Lightning Performance",
    description:
      "Optimized for speed with sub-100ms response times. Your users experience instant interactions that feel native.",
    gradient: "from-amber-400 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Intelligent Design",
    description:
      "AI-powered suggestions that understand your workflow. Smart defaults that adapt to how you work.",
    gradient: "from-primary to-primary-light",
    bgGradient: "from-violet-50 to-purple-50",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified with end-to-end encryption. Your data is protected at every layer of the stack.",
    gradient: "from-emerald-400 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.421 48.421 0 01-4.185-.407c-.547-.082-1.108.04-1.485.457a1.376 1.376 0 00.254 2.04 48.163 48.163 0 006.116 3.517l.228.112a2.064 2.064 0 001.958 0l.228-.112a48.162 48.162 0 006.116-3.517 1.376 1.376 0 00.254-2.04c-.377-.417-.938-.54-1.485-.457a48.453 48.453 0 01-4.185.407v0a.64.64 0 01-.657-.643v0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: "Seamless Integrations",
    description:
      "Connect with 200+ tools your team already uses. From Slack to Figma, everything works together.",
    gradient: "from-blue-400 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Advanced Analytics",
    description:
      "Deep insights into every metric that matters. Real-time dashboards with customizable reports.",
    gradient: "from-rose-400 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Team Collaboration",
    description:
      "Real-time editing, commenting, and version history. Built for teams that move fast together.",
    gradient: "from-cyan-400 to-sky-500",
    bgGradient: "from-cyan-50 to-sky-50",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Features
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to{" "}
            <span className="gradient-text">scale</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/60">
            Powerful features designed to help you build, ship, and grow faster
            than ever before.
          </p>
        </AnimatedSection>

        {/* Feature Grid */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <motion.div
                className="card-lift group relative rounded-2xl bg-surface p-8 shadow-premium cursor-pointer"
                whileHover={{
                  boxShadow:
                    "0 2px 4px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.06), 0 24px 48px rgba(108,92,231,0.08)",
                }}
              >
                {/* Icon */}
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/60">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">
                  Learn more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.bgGradient} opacity-0 transition-opacity group-hover:opacity-40`}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
