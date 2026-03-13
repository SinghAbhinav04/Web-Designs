"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for individuals and small projects getting started.",
    features: [
      "Up to 5 projects",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: false,
    gradient: "",
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "For growing teams that need advanced features and support.",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
      "Team collaboration",
      "SSO authentication",
    ],
    cta: "Start Free Trial",
    popular: true,
    gradient: "from-primary to-primary-light",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations that need enterprise-grade solutions.",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Custom analytics",
      "Dedicated support",
      "SLA guarantee",
      "Custom contracts",
      "On-premise option",
      "Advanced security",
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Pricing
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/60">
            No hidden fees, no surprises. Choose the plan that fits your needs
            and scale as you grow.
          </p>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 0.15}>
              <motion.div
                className={`card-lift relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-primary to-primary-light text-white shadow-2xl shadow-primary/20 scale-[1.02] lg:scale-105"
                    : "bg-surface shadow-premium"
                }`}
                whileHover={{
                  boxShadow: plan.popular
                    ? "0 8px 32px rgba(108,92,231,0.35)"
                    : "0 2px 4px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.06), 0 24px 48px rgba(108,92,231,0.08)",
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-primary shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Info */}
                <div className="mb-8">
                  <h3
                    className={`text-lg font-semibold ${
                      plan.popular ? "text-white/90" : "text-foreground/70"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline">
                    <span
                      className={`text-5xl font-extrabold tracking-tight ${
                        plan.popular ? "text-white" : "text-foreground"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={`ml-1 text-base ${
                          plan.popular ? "text-white/70" : "text-foreground/50"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      plan.popular ? "text-white/80" : "text-foreground/60"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg
                        className={`h-5 w-5 flex-shrink-0 ${
                          plan.popular ? "text-white/90" : "text-primary"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-white/90" : "text-foreground/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className={`btn-glow w-full rounded-full py-3.5 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-white text-primary shadow-xl hover:shadow-2xl"
                      : "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
