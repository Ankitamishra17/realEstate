// About page

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutMission from "@/components/about/AboutMission";
import AboutOurPurpose from "@/components/about/AboutOurPurpose";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import AboutHeroSection from "@/components/about/AboutHeroSection";
// export const metadata = {
//   title: "About Us | Crown Ink Tattoo Studio, Greater Noida",
//   description:
//     "Learn about Crown Ink Tattoo Studio in Greater Noida – our expert tattoo artists, custom designs, and commitment to quality, hygiene, and creativity. Discover why we are a leading tattoo studio in the region.",

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <AboutWhoWeAre />
      <AboutMission />
      <AboutWhyChoose />
      <AboutOurPurpose />
      <Footer />
    </>
  );
}
