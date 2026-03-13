"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Men's Wool Runner",
    description: "Cozy, comfortable everyday sneaker",
    price: "$110",
    image: "/images/wool-runner.png",
    isNew: false,
  },
  {
    id: "2",
    name: "Women's Tree Runner",
    description: "Lightweight, breathable knit shoe",
    price: "$105",
    image: "/images/tree-runner.png",
    isNew: false,
  },
  {
    id: "3",
    name: "Men's Lounger",
    description: "Slip-on comfort for anywhere",
    price: "$100",
    image: "/images/lounger.png",
    isNew: false,
  },
  {
    id: "4",
    name: "Women's Tree Flyer",
    description: "Distance running made sustainable",
    price: "$160",
    image: "/images/runner-navy.png",
    isNew: true,
  },
  {
    id: "5",
    name: "Men's Wool Piper Mizzle",
    description: "Water-repellent classic sneaker",
    price: "$125",
    image: "/images/mizzle.png",
    isNew: true,
  },
  {
    id: "6",
    name: "Women's Wool Lounger",
    description: "Cozy slip-on for cozy days",
    price: "$100",
    image: "/images/lounger.png", // reusing image for demonstration
    isNew: false,
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Favorites
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary max-w-2xl">
              Discover the comfort of natural materials.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
             {/* Simple filter tabs concept */}
             <button className="text-sm font-semibold border-b-2 border-foreground pb-1 text-foreground">Men</button>
             <button className="text-sm font-medium border-b-2 border-transparent pb-1 text-foreground-secondary hover:text-foreground">Women</button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 0.1}>
              <motion.div
                className="group relative flex flex-col bg-background-soft rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Product Image Area */}
                <div className="relative aspect-square w-full bg-white overflow-hidden p-8 flex items-center justify-center border-b border-border/50">
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-10 rounded-full bg-white px-3 py-1 text-xs font-bold text-accent shadow-sm border border-border">
                      NEW
                    </div>
                  )}
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  
                  {/* Quick Add Overlay */}
                  <div className="absolute bottom-4 left-0 w-full px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden sm:block">
                     <button className="w-full bg-white border border-border text-foreground text-sm font-semibold py-3 rounded-full shadow-soft hover:bg-background-soft transition-colors">
                       Quick Add +
                     </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground-secondary mb-4 line-clamp-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                     <p className="text-base font-medium text-foreground">
                        {product.price}
                     </p>
                     
                     {/* Color swatches placeholder */}
                     <div className="flex gap-1.5">
                       <span className="h-3 w-3 rounded-full bg-[#e5e5e5] border border-border"></span>
                       <span className="h-3 w-3 rounded-full bg-[#1a1a1a] border border-border"></span>
                       <span className="h-3 w-3 rounded-full bg-[#2f5d50] border border-border"></span>
                     </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.2} className="mt-16 text-center">
            <a href="#" className="inline-block border-b border-foreground text-sm font-semibold text-foreground pb-1 hover:text-foreground-secondary hover:border-foreground-secondary transition-colors">
              Shop All Shoes
            </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
