// About page

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactWhyChoose from "@/components/contact/ContactWhyChoose";

import ContactCtaSection from "@/components/contact/ContactCtaSection";
import ContactFaqSection from "@/components/contact/ContactFaqSection";
import ContactMapSection from "@/components/contact/ContactMapSection";

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
      <ContactHeroSection />
      <ContactCtaSection />
      <ContactWhyChoose />
      <ContactMapSection />
      <ContactFaqSection />
      <Footer />
    </>
  );
}
