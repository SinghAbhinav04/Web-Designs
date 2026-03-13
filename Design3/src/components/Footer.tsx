"use client";

import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

const footerLinks = {
  "Shop and Learn": [
    { label: "Mac", href: "#" },
    { label: "iPad", href: "#" },
    { label: "iPhone", href: "#" },
    { label: "Watch", href: "#" },
  ],
  "Account": [
    { label: "Manage Your ID", href: "#" },
    { label: "Store Account", href: "#" },
    { label: "iCloud.com", href: "#" },
  ],
  "About": [
    { label: "Newsroom", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "Career Opportunities", href: "#" },
    { label: "Investors", href: "#" },
    { label: "Ethics & Compliance", href: "#" },
    { label: "Events", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface px-4 py-8 text-xs text-foreground-secondary md:px-6">
      <div className="mx-auto max-w-5xl">
        
        {/* Footnotes */}
        <AnimatedSection>
          <div className="mb-8 border-b border-border/60 pb-8 text-[11px] leading-relaxed">
            <p className="mb-3">
              * Monthly pricing is available when you select Company Card Monthly Installments as payment type at checkout, and is subject to credit approval and credit limit. Financing terms vary by product.
            </p>
            <p>
              1. Testing conducted by Company in September 2026 using preproduction 16-inch systems with Aura Pro chip, 14-core CPU, 20-core GPU, 36GB RAM, and 512GB SSD.
            </p>
          </div>
        </AnimatedSection>
        
        {/* Links Grid */}
        <AnimatedSection delay={0.1}>
          <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="mb-3 font-semibold text-foreground/80">{category}</h3>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition-colors hover:text-foreground hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Copyright */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col items-center justify-between border-t border-border/60 pt-6 md:flex-row">
            <p className="mb-4 md:mb-0">
              Copyright © 2026 Company Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-[11px] justify-center text-center">
              <Link href="#" className="hover:text-foreground hover:underline">Privacy Policy</Link>
              <span className="opacity-50">|</span>
              <Link href="#" className="hover:text-foreground hover:underline">Terms of Use</Link>
              <span className="opacity-50">|</span>
              <Link href="#" className="hover:text-foreground hover:underline">Sales and Refunds</Link>
              <span className="opacity-50">|</span>
              <Link href="#" className="hover:text-foreground hover:underline">Legal</Link>
              <span className="opacity-50">|</span>
              <Link href="#" className="hover:text-foreground hover:underline">Site Map</Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </footer>
  );
}
