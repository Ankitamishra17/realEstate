"use client";

import React from "react";
import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const AboutHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden overflow-x-hidden bg-[#2e5d42]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.02] sm:scale-105"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/64cd0df1806781d956403b26/650da7d1c934ef1761117bdb_sidenav-masterpieces-desktop.webp')",
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-48 sm:py-20 min-h-screen flex items-center overflow-x-hidden">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex justify-start">
          <div className="backdrop-blur-2xl  border border-[#fafaef]/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_rgba(46,93,66,0.4)] max-w-xl">
            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`${jost.className} text-xs tracking-[0.3em] text-[#fafaef]/70 uppercase mb-3 block`}
            >
              Loyal Experts
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl font-serif text-[#2e5d42] leading-[1.1]`}
            >
              Regional <br className="hidden sm:block" /> Specialists
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`${jost.className} mt-5 text-[#fafaef]/80 text-sm leading-relaxed`}
            >
              When it comes to real estate, trust us to guide you every step of
              the way with expertise that ensures a smooth, premium and
              stress-free experience.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex gap-3"
            >
              <button
                className={`${jost.className} text-[#fafaef] bg-[#2e5d42] px-5 py-2.5 rounded-md text-sm hover:scale-105 transition`}
              >
                Explore Properties
              </button>

              <button
                className={`${jost.className} border border-[#fafaef]/60 text-[#fafaef] px-5 py-2.5 rounded-md text-sm hover:bg-[#fafaef]/10 transition`}
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>

        {/* RIGHT FLOATING CARD */}
        <div className="hidden lg:flex w-1/2 justify-end">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="backdrop-blur-xl  border border-[#fafaef]/20 rounded-2xl p-6 w-80 text-[#fafaef] shadow-2xl"
          >
            <p className={`${jost.className} text-sm leading-relaxed`}>
              We specialize in premium properties across prime locations,
              delivering tailored solutions for buyers, sellers and investors.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
