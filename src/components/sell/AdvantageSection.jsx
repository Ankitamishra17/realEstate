"use client";

import Image from "next/image";
import { useState } from "react";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const slides = [
  {
    id: 1,
    image: "/adv1.avif",
    text: "Built to keep you informed before, during, and after your sale.",
  },
  {
    id: 2,
    image: "/adv2.avif",
    text: "Powerful marketing tools to maximize your property value.",
  },
  {
    id: 3,
    image: "/adv3.avif",
    text: "Smart pricing strategy to generate strong demand.",
  },
];

export default function AdvantageSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-[#fafaef] py-32 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className={`${marcellus.className} text-3xl md:text-5xl mb-4`}>
          The Compass Advantage
        </h2>
        <p className={`${jost.className} text-gray-600`}>
          The #1 real estate brokerage working for you
        </p>
      </div>

      {/* Card Stack */}
      <div className="relative max-w-5xl mx-auto h-[400px] md:h-[500px]">
        {slides.map((slide, i) => {
          const position =
            i === index
              ? "z-30 scale-100"
              : i === (index + 1) % slides.length
                ? "z-20 scale-95 translate-y-6"
                : "z-10 scale-90 translate-y-12";

          return (
            <div
              key={slide.id}
              className={`absolute w-full h-full rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${position}`}
            >
              <Image
                src={slide.image}
                alt="slide"
                fill
                sizes="100vw"
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-end px-8 ">
                <h2
                  className={`${marcellus.className} text-white text-3xl md:text-5xl mb-14 max-w-md`}
                >
                  {slide.text}
                </h2>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-10 mt-10 text-4xl font-bold text-[#2e5d42]">
        <button onClick={prev} className="hover:scale-110 transition">
          ←
        </button>
        <button onClick={next} className="hover:scale-110 transition">
          →
        </button>
      </div>
    </section>
  );
}
