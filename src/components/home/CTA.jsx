"use client";
import React from "react";
import { motion } from "framer-motion";

import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export default function CTA() {
  return (
    <section className="w-full py-16 bg-[#fafaef] ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 gap-12 items-center">
          {/* LEFT SIDE (CTA CONTENT) */}
          <div className="space-y-6">
            {/* Tag */}
            <span
              className={`${marcellus.className}text-[#2e5d42] uppercase tracking-widest text-sm font-semibold`}
            >
              Find Your Dream Home
            </span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`${marcellus.className} text-4xl md:text-5xl font-bold text-[#2e5d42] leading-tight`}
            >
              Discover Perfect Property <br />
              For Your Lifestyle
            </motion.h2>

            {/* Description */}
            <p className={`${jost.className}text-[#6b7280] text-lg max-w-lg`}>
              Browse verified listings, connect with trusted agents, and make
              smart real estate decisions with confidence.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${jost.className} bg-[#2e5d42] text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-[#254c36] transition`}
              >
                Browse Properties
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${jost.className} border border-[#2e5d42] text-[#2e5d42] px-6 py-3 rounded-xl font-medium hover:bg-[#2e5d42] hover:text-white transition`}
              >
                Post Property
              </motion.button>
            </div>

            {/* Stats / Trust */}
            <div className="flex gap-8 pt-6 text-sm text-[#2e5d42]">
              <div className={`${jost.className}`}>
                <h4 className="text-xl font-bold">10K+</h4>
                <p className="text-[#888]">Properties</p>
              </div>

              <div className={`${jost.className}`}>
                <h4 className="text-xl font-bold">5K+</h4>
                <p className="text-[#888]">Happy Clients</p>
              </div>

              <div className={`${jost.className}`}>
                <h4 className="text-xl font-bold">500+</h4>
                <p className="text-[#888]">Agents</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (UNCHANGED IMAGE) */}
          <div className="relative flex justify-center">
            <div className="absolute w-[90%] h-[90%] bg-[#2e5d42] rounded-tr-[90px] rounded-bl-[80px] top-6 right-4"></div>

            <div className="relative overflow-hidden rounded-tr-[90px] rounded-bl-[90px] shadow-xl w-full max-w-md">
              <img
                src="https://plus.unsplash.com/premium_photo-1683126005035-4b5f2b5c0ed1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                // "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
                alt="real estate"
                className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
