"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";

const navLinks = [
  "Aura Pro",
  "Aura Max",
  "Displays",
  "Accessories",
  "Support",
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-center transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 border-b border-border/40 backdrop-blur-md"
          : "bg-background/90"
      }`}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
          aria-label="Home"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-[12px] font-normal tracking-wide text-foreground/80 transition-colors hover:text-foreground"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6 text-foreground/80">
          <button className="transition-colors hover:text-foreground" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <button className="transition-colors hover:text-foreground" aria-label="Shopping Bag">
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
