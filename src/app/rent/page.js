import Rent from "@/components/Rent";

export const metadata = {
  title: "Rent Property | Avyaya Developer",
  description:
    "Find residential and commercial properties for rent with Avyaya Developer. Explore apartments, villas, office spaces, shops, and rental properties in prime locations across Greater Noida and nearby areas.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RentPage() {
  return (
    <>
      <Rent />
    </>
  );
}
