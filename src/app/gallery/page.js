import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Gallery | Avyaya Developer Projects",
  description:
    "View the gallery of Avyaya Developer projects, including residential communities, commercial developments, modern amenities, architectural designs, and completed property showcases.",

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <Gallery />
    </>
  );
}
