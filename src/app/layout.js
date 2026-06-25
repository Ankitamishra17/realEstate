import { Jost, Marcellus } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: ["400"], // Marcellus me mostly 400 hota hai
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata = {
  title: "Real Estate Website",
  description: "Modern real estate platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${marcellus.variable} ${jost.variable}`}>
      <Navbar/>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
      <Footer/>
    </html>
  );
}
