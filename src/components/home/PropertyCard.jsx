"use client";

import Image from "next/image";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { Marcellus, Jost } from "next/font/google";

// const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export default function PropertyCard({ property }) {
  if (!property) return null;

  return (
    <div className="snap-start min-w-[300px] md:min-w-[350px] bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

        {/* Tags */}
        <span
          className={`${jost.className} absolute top-3 left-3 bg-[#2e5d42] text-white text-xs px-3 py-1 rounded-full`}
        >
          Featured
        </span>

        <span
          className={`${jost.className} absolute top-3 right-3 bg-white text-[#2e5d42] text-xs px-3 py-1 rounded-full shadow`}
        >
          Buy
        </span>

        {/* Location */}
        <div
          className={`${jost.className} absolute bottom-2 left-2 text-white text-xs bg-black/50 px-2 py-1 rounded`}
        >
          📍 {property.location}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className={`${jost.className} font-semibold text-lg mb-2 text-gray-800`}
        >
          {property.title}
        </h3>

        <p className={`${jost.className}text-[#2e5d42] font-bold text-xl mb-2`}>
          ₹ {property.price}
        </p>

        <p className={`${jost.className} text-gray-500 text-sm mb-3`}>
          {property.description}
        </p>

        <div className="flex gap-4 text-gray-600 text-sm mb-4">
          <span className="flex gap-2">
            <FaBed />
            {property.beds}
          </span>
          <span className="flex gap-2">
            {" "}
            <FaBath /> {property.baths}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span
            className={`${jost.className} text-sm font-medium text-gray-700`}
          >
            {property.agent}
          </span>

          <button
            className={`${jost.className} bg-[#2e5d42] text-white px-4 py-1.5 rounded-lg text-sm hover:bg-[#244a35] hover:scale-105 transition`}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
