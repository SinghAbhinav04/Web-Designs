"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Newsletter() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
         <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
               Want First Dibs?
            </h2>
            <p className="text-lg text-foreground-secondary mb-10">
               Join our email list and be the first to know about new limited edition colors, materials, product drops, and more.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
               <div className="flex-1 relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-foreground-secondary">
                     <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                     </svg>
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full rounded-none border-b-2 border-border bg-transparent py-3 pl-12 pr-4 text-foreground outline-none transition-colors focus:border-foreground placeholder:text-foreground-secondary/70"
                  />
               </div>
               <motion.button
                 type="submit"
                 className="bg-foreground text-white font-bold py-3 px-8 hover:bg-black transition-colors"
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
               >
                 Sign Up
               </motion.button>
            </form>
            <p className="text-xs text-foreground-secondary mt-6">
               Note: You can opt-out at any time. See our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms</a>.
            </p>
         </AnimatedSection>
      </div>
    </section>
  );
}
