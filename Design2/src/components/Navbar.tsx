"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Shop", href: "#products" },
  { label: "Our Story", href: "#sustainability" },
  { label: "Materials", href: "#features" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold tracking-tight text-foreground lg:text-2xl"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            stride
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground-secondary transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#"
              className="text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground"
            >
              Account
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Cart (0)
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={
                  isMobileOpen
                    ? { rotate: 45, y: 6 }
                    : { rotate: 0, y: 0 }
                }
                className="block h-[1.5px] w-5 bg-foreground"
              />
              <motion.span
                animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[1.5px] w-5 bg-foreground"
              />
              <motion.span
                animate={
                  isMobileOpen
                    ? { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0 }
                }
                className="block h-[1.5px] w-5 bg-foreground"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={
            isMobileOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden md:hidden"
        >
          <div className="flex flex-col gap-1 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground-secondary transition-colors hover:bg-background-soft hover:text-foreground"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex gap-4 border-t border-border pt-4">
              <a href="#" className="text-sm font-medium text-foreground-secondary">
                Account
              </a>
              <a href="#" className="text-sm font-medium text-foreground-secondary">
                Cart (0)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
