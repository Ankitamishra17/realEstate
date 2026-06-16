"use client";

import React from "react";
import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const features = [
  {
    title: "Trusted Expertise",
    desc: "Years of industry experience ensuring reliable and informed property decisions.",
  },
  {
    title: "Premium Listings",
    desc: "Carefully curated properties in prime locations for maximum value.",
  },
  {
    title: "Client First Approach",
    desc: "We focus on your needs to deliver personalized real estate solutions.",
  },
  {
    title: "Transparent Process",
    desc: "Clear communication and honest dealings at every stage.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const ContactWhyChoose = () => {
  return (
    <section className="w-full bg-[#2e5d42] py-20 t-6 sm:px-8 lg:px-16 text-[#fafaef]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <h4
            className={`${marcellus.className} text-sm tracking-[0.3em] uppercase text-[#fafaef]/70 mb-3`}
          >
            Why Choose Us
          </h4>

          <h2
            className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl  leading-tight`}
          >
            Experience Excellence in Every Deal
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative  p-6 rounded-2xl overflow-hidden backdrop-blur-lg bg-[#fafaef]/5 hover:bg-[#fafaef]/10 transition duration-300"
            >
              {/* Number */}
              <span className="text-4xl font-bold text-[#fafaef]/20 group-hover:text-[#fafaef]/40 transition">
                {`0${index + 1}`}
              </span>

              {/* Title */}
              <h3
                className={`${marcellus.className} mt-4 text-lg font-semibold text-[#fafaef]`}
              >
                {itemData.title}
              </h3>

              {/* Description */}
              <p
                className={`${jost.className} mt-2 text-sm text-[#fafaef]/70 leading-relaxed`}
              >
                {itemData.desc}
              </p>

              {/* Hover Line Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-[#fafaef] rounded-b-2xl group-hover:w-full transition-all duration-400"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactWhyChoose;
