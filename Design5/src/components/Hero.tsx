"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const words = ["CREATIVE", "DIGITAL", "EXPERIENCES"];

  return (
    <section ref={container} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated abstract background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-accent blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-accent-secondary blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: "12s", animationDelay: "2s" }} />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col items-center mt-20">
        <h1 className="flex flex-col text-center">
          {words.map((word, index) => (
            <span key={index} className="overflow-hidden inline-block leading-[0.85] pb-2">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-8"
        >
          <p className="max-w-md text-center text-foreground-secondary text-lg font-light">
            Crafting immersive digital products with premium motion design and thoughtful typography.
          </p>
          
          <MagneticButton className="px-8 py-4 rounded-full border border-white/20 hover:border-white/60 transition-colors duration-500 overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2 text-sm uppercase tracking-widest">
              Explore Work
              <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
            </span>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
