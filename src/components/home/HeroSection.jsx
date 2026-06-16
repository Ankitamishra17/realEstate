"use client";
import { Marcellus } from "next/font/google";
import { Jost } from "next/font/google";
import { FaMapMarkerAlt, FaHome, FaRupeeSign, FaSearch } from "react-icons/fa";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="h-screen flex items-center justify-center relative font-[Jost]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
          className="w-full h-full  object-cover"
          alt="hero"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative text-center text-[#fafaef] px-4"
      >
        <h2
          className={`${marcellus.className} text-5xl md:text-6xl font-extrabold mb-4 leading-tight`}
        >
          Find Your <span className="text-[#2e5d42] ">Dream Home</span>
        </h2>

        <p className={`${jost.className} mb-8 text-gray-200 text-lg`}>
          Buy, rent, or sell properties easily with trusted agents
        </p>

        <div className="bg-[#fafaef] backdrop-blur-xl p-4 md:p-6 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl  rounded-bl-none shadow-2xl flex flex-col md:flex-row items-center gap-3 w-full max-w-4xl mx-auto border border-white/20">
          {/* Location */}
          <div className="relative w-full md:w-1/3">
            <FaMapMarkerAlt className="absolute top-1/2 left-3 -translate-y-1/2 text-[#2e5d42]" />
            <input
              placeholder="Location"
              className="w-full pl-10 pr-4 py-3 text-[#2e5d42] rounded-xl border outline-none focus:ring-2 focus:ring-[#2e5d42]"
            />
          </div>

          {/* Type */}
          <div className="relative w-full md:w-1/4">
            <FaHome className="absolute top-1/2 left-3 -translate-y-1/2 text-[#2e5d42]" />
            <select
              defaultValue=""
              className={`${jost.className} w-full pl-10 pr-4 py-3 text-[#2e5d42] rounded-xl border outline-none focus:ring-2 focus:ring-[#2e5d42] bg-[#f]`}
            >
              <option value="" disabled hidden>
                Type
              </option>
              <option className="hover:bg-[#2e5d42] " value="buy">
                Buy
              </option>
              <option value="rent">Rent</option>
            </select>
          </div>

          {/* Price */}
          <div className="relative w-full md:w-1/3">
            <FaRupeeSign className="absolute top-1/2 left-3 -translate-y-1/2 text-[#2e5d42]" />
            <input
              placeholder="Price Range"
              className="w-full pl-10 pr-4 py-3 text-[#2e5d42] rounded-xl border outline-none focus:ring-2 focus:ring-[#2e5d42]"
            />
          </div>

          {/* Button */}
          <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#2e5d42] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#244a35] hover:shadow-xl hover:scale-105 transition duration-300">
            <FaSearch />
            Search
          </button>
        </div>
      </motion.div>
    </section>
  );
}
