import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import CategorySection from "@/components/home/CategorySection";
import AgentSection from "@/components/home/AgentSection";
import Testimonials from "@/components/home/Testimonials";
import PropertyList from "@/components/home/PropertyList";
import WhyChooseUs from "@/components/home/WhyChooseUs";

import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
       <FeatureSection />
      <PropertyList />
      <CategorySection />
      <WhyChooseUs />
      <AgentSection />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
