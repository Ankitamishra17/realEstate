"use client";

import Image from "next/image";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export default function BuyCard({ image, title, location, beds, bath, car }) {
  return (
    <div className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition duration-500"
        />

        <span className="absolute top-4 left-4 bg-yellow-300 text-black text-xs px-3 py-1 tracking-widest">
          AUCTION
        </span>
      </div>

      {/* Content */}
      <div
        className={`
          flex flex-col justify-between flex-1
          p-5 transition-all duration-300
          ${jost.className}
          bg-white text-black
          group-hover:bg-[#2e5d42] group-hover:text-white
        `}
      >
        <div>
          {/* Info */}
          <div className="text-sm mb-2 opacity-80">
            {beds} beds | {bath} bath {car && `| ${car} car`}
          </div>

          {/* Title */}
          <h3 className={`${marcellus.className} text-lg mb-2`}>{title}</h3>

          {/* Location */}
          <p className="text-sm opacity-70">{location}</p>
        </div>

        {/* Bottom line */}
        <div className="mt-4 h-[2px] w-10 bg-[#2e5d42] group-hover:bg-white group-hover:w-16 transition-all duration-300" />
      </div>
    </div>
  );
}
