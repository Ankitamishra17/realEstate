"use client";

import Image from "next/image";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
});

const jost = Jost({
  subsets: ["latin"],
});

export default function BuyHeroSection() {
  return (
    <section className="relative w-full h-[90vh] md:h-[105vh] flex items-center justify-center overflow-hidden">
      {/*  Background Image (Correct Way) */}
      <Image
        src="/buy-hero.AVIF"
        alt="Buy Hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/*  Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/*  Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1
          className={`${marcellus.className} text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight`}
        >
          Find your next home or investment
        </h1>

        <button
          className={`${jost.className} mt-8 bg-[#2e5d42] hover:bg-[#244a36] text-white px-7 py-3 text-sm md:text-base tracking-wider transition rounded-xl cursor-pointer`}
        >
          Explore Properties
        </button>
      </div>
    </section>
  );
}
