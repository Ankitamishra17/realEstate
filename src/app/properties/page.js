import Properties from "@/components/Properties";

export const metadata = {
  title: "Properties | Avyaya Developer",
  description:
    "Browse residential and commercial properties by Avyaya Developer. Explore premium apartments, villas, plots, office spaces, and investment opportunities in Greater Noida and surrounding locations.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PropertyPage() {
  return (
    <>
      <Properties />
    </>
  );
}
