"use client";

import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    content: "The most comfortable shoes I've ever worn. It honestly feels like walking on clouds. I own three pairs now and refuse to wear anything else.",
    author: "Michael T.",
    verified: true,
  },
  {
    content: "I love that they are made from wool. They regulate temperature perfectly—no socks needed even in winter. Plus, they look great with everything.",
    author: "Sarah J.",
    verified: true,
  },
  {
    content: "Finally, a sustainable brand that doesn't compromise on design or comfort. The Tree Runners are impossibly light and breathable for summer.",
    author: "David L.",
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Don&apos;t Just Take Our Word For It
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
             {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
             ))}
             <span className="ml-2 text-sm font-medium text-foreground-secondary">
               Based on 10,000+ Reviews
             </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15}>
              <div className="h-full rounded-2xl bg-background-soft p-8 text-center flex flex-col justify-between">
                <div>
                   <div className="mb-4 flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                         <svg key={i} className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                         </svg>
                      ))}
                   </div>
                   <p className="text-lg leading-relaxed text-foreground italic mb-6">
                     "{review.content}"
                   </p>
                </div>
                <div>
                   <p className="font-bold text-foreground">{review.author}</p>
                   {review.verified && (
                      <p className="text-sm text-foreground-secondary flex justify-center items-center gap-1 mt-1">
                         <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                         Verified Buyer
                      </p>
                   )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
