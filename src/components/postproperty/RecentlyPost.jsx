"use client";

import { useEffect, useState } from "react";

const properties = [
  {
    name: "Prathvi Raj",
    text: "posted a Residential Plot for Sale in Agra Road, Jaipur",
    date: "25 Apr 2026",
  },
  {
    name: "Adarsh Singh",
    text: "posted a Independent House for Sale in Naini, Prayagraj",
    date: "25 Apr 2026",
  },
  {
    name: "Janardhan Sahoo",
    text: "posted a Warehouse/Godown for Sale",
    date: "25 Apr 2026",
  },
];

export default function AutoScrollCarousel() {
  const [index, setIndex] = useState(0);
// scolling
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % properties.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden">
      <h2 className="text-2xl text-[#2e5d42] font-semibold text-center mb-6">
        Recently Posted Properties
      </h2>

      <div className="relative h-40">
        {properties.map((item, i) => (
          <div
            key={i}
            className={`absolute w-full transition-all duration-700 ease-in-out ${
              i === index
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">{item.text}</p>
              <p className="text-sm text-gray-400 mt-2">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 mb-8 gap-2">
        {properties.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-[#2e5d42]" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
