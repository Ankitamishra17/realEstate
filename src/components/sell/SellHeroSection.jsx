"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export default function SellHeroSection() {
  return (
    <section className="relative w-full h-[85vh] md:h-[95vh] flex items-center overflow-hidden">
      {/* 🔥 Background Image */}
      <Image
        src="/sell-hero.AVIF"
        alt="Sell Home"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105"
      />

      {/* 🔥 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* 🔥 Content Container */}
      <div className="relative z-10 w-full px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-white"
        >
          <h1
            className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight`}
          >
            Your Home.
            <br />
            Your Choice.
          </h1>

          <p
            className={`${jost.className} mt-6 text-base text-gray-200 leading-relaxed`}
          >
            Protect and maximize the value of your home with a modern,
            data-driven real estate strategy tailored to you.
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${jost.className} mt-8 bg-[#2e5d42] text-white px-7 py-3 rounded-xl cursor-pointer text-sm tracking-wide hover:bg-[#244a36] transition`}
          >
            Sell with Us →
          </motion.button>
        </motion.div>

        {/*  RIGHT GLASS CARD  */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="relative w-full md:w-[520px] md:h-[340px] rounded-3xl overflow-hidden"
        >
         
        </motion.div>
      </div>
    </section>
  );
}
