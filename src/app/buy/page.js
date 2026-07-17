// About page

import Buy from "@/components/Buy";

export const metadata = {
  title: "Buy Property | Avyaya Developer",
  description:
    "Find your ideal property with Avyaya Developer. Explore ready-to-move homes, luxury apartments, plots, commercial spaces, and investment-friendly projects in Greater Noida.",

  robots: {
    index: true,
    follow: true,
  },
};

export default function BuyPage() {
  return (
    <>
      <Buy />
    </>
  );
}
