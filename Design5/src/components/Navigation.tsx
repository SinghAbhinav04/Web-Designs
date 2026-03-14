"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <div className="container-custom py-8 flex items-center justify-between">
        <div className="text-xl font-heading font-medium tracking-wide">
          STUDIO<span className="opacity-50">©</span>
        </div>
        
        <div className="flex gap-8 text-sm uppercase tracking-widest">
          {["Work", "About", "Contact"].map((item) => (
            <MagneticButton key={item}>
              <a href={`#${item.toLowerCase()}`} className="relative group overflow-hidden">
                <span>{item}</span>
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </a>
            </MagneticButton>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
