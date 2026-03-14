import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ParallaxSection from "@/components/ParallaxSection";
import StatementTypography from "@/components/StatementTypography";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Spacer() {
  return <div className="h-[200px]" />;
}

export default function Home() {
  return (
    <main className="relative bg-background">
      <Navigation />
      <Hero />
      <Spacer />
      <FeaturedProjects />
      <Spacer />
      <ParallaxSection />
      <Spacer />
      <StatementTypography />
      <Spacer />
      <Gallery />
      <Spacer />
      <About />
      <Spacer />
      <Contact />
      <Footer />
    </main>
  );
}
