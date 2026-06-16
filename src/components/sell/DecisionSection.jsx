"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export default function DecisionSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src="/sell-bg.jpg"
        alt="Interior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-6 text-white"
      >
        {/* Heading */}
        <h1
          className={`${marcellus.className} text-3xl md:text-5xl lg:text-6xl leading-tight mb-6`}
        >
          You Decide How Your Home Is Sold
        </h1>

        {/* Paragraph */}
        <p
          className={`${jost.className} text-sm md:text-lg text-gray-200 leading-relaxed`}
        >
          At Compass, we believe selling your home should feel as personal and
          considered as the home itself. Our 3-Phased Marketing Strategy offers
          distinct pathways that align with your goals, timing, and vision.
        </p>

        {/* Divider */}
        <div className="my-8 h-[1px] w-full bg-white/40" />

        {/* Bottom Text */}
        <p className={`${jost.className} text-sm md:text-base text-gray-300`}>
          To help you make the most informed decision, we’ve outlined all
          available options in our disclosure form:
        </p>

        {/* CTA */}
        <div className="mt-6">
          <button className="group inline-flex items-center gap-2 text-white text-sm tracking-wide border-b border-white pb-1 hover:text-[#2e5d42] transition">
            3-Phased Marketing Strategy Disclosure Form
            <span className="group-hover:translate-x-2 transition">→</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
