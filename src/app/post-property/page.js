// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import PropertyForm from "@/components/postproperty/PropertyForm";
import HowItWork from "@/components/postproperty/HowItWork";
import TipsSection from "@/components/postproperty/TipsSection";
import RecentlyPost from "@/components/postproperty/RecentlyPost";

export default function PostPropertyPage() {
  return (
    <>
      {/* <Navbar /> */}
      <PropertyForm />
      <HowItWork />
      <TipsSection />
      <RecentlyPost/>
      {/* <Footer /> */}
    </>
  );
}
