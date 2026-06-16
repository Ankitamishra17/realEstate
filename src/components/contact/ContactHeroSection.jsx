"use client";
import React from "react";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const ContactHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.02] sm:scale-105"
        style={{
          backgroundImage:
            "url('https://cdn6.ep.dynamics.net/s3/rw-propertyimages/d401-H3373421-164542106__1758503081-54260-7020RiverviewCres016.jpg?height=1312&maxheight=2841&maxwidth=2841&quality=90&scale=down&width=1973&format=webp')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className={`${marcellus.className} text-4xl sm:text-6xl font-bold`}>
          Contact Us
        </h1>
        <p className={`${jost.className} mt-2 text-sm sm:text-base opacity-90`}>
          Let’s connect and build your dream home together
        </p>
      </div>

      {/* Sticky Cards */}
      <div className="absolute left-1/2 -bottom-80 transform -translate-x-1/2 w-full px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6"></div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
