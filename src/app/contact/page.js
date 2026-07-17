// Contact page

import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us | Avyaya Developer",
  description:
    "Get in touch with Avyaya Developer for property inquiries, site visits, project details, investment opportunities, and expert real estate guidance in Greater Noida.",

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}
