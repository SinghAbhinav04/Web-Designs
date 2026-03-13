import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import ProductShowcase from "@/components/ProductShowcase";
import SpecsSection from "@/components/SpecsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-14 text-foreground">
      <Navbar />
      <Hero />
      
      <FeatureSection 
         title="Performance"
         subtitle="Scary fast."
         description="The most advanced chips ever built for a personal computer. Up to 80% faster CPU performance. A monster GPU for pro workflows."
         imageSrc="/images/aura_pro_performance_1773420024665.png"
         imageAlt="Glowing futuristic silicon microchip"
      />
      
      <FeatureSection 
         title="Display"
         subtitle="Liquid Retina XDR."
         description="The best display ever in a laptop features Extreme Dynamic Range, incredible contrast ratio, and true-to-life colors. Nothing else comes close."
         reversed={true}
         imageSrc="/images/aura_pro_display_1773420154736.png"
         imageAlt="Edge-to-edge glossy laptop screen with vibrant colors"
      />
      
      <ProductShowcase />
      
      <SpecsSection />
      
      <CTASection />
      
      <Footer />
    </main>
  );
}
