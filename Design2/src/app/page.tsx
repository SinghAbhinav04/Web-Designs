import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import Sustainability from "@/components/Sustainability";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-background">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Features />
      <Sustainability />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
