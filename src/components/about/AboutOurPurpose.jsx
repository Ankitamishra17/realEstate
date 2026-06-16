"use client";

import React from "react";
import { motion } from "framer-motion";
import { img } from "framer-motion/client";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const AboutOurPurpose = () => {
  const sections = [
    {
      title: "Elevating Living Standards",
      desc: "We design spaces that combine elegance, comfort, and modern living to create truly exceptional homes.",
      img: "https://images.pexels.com/photos/8134816/pexels-photo-8134816.jpeg",
    },
    {
      title: "Trust & Transparency",
      desc: "Our commitment is to provide honest guidance and seamless property experiences you can rely on.",
      //   img: "https://images.pexels.com/photos/5563473/pexels-photo-5563473.jpeg",
      img: "https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg",
    },
    {
      title: "Sustainable Communities",
      desc: "We build eco-friendly environments that enhance quality of life and promote a greener future.",
      img: "https://images.pexels.com/photos/29334668/pexels-photo-29334668.png",
    },
  ];

  return (
    <section className="w-full bg-[#FAFAEF] py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* ===== TOP HEADING ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2
          className={`${marcellus.className} text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2E5D42] leading-tight`}
        >
          Our Purpose
        </h2>

        <div className="w-20 h-[2px] bg-[#2E5D42] mx-auto mt-4 rounded-full"></div>

        <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
          We go beyond building spaces — we craft meaningful living experiences
          that blend comfort, trust, and long-term value for modern lifestyles.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-20">
        {sections.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row ${
                isReverse ? "lg:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[260px] sm:h-[350px] lg:h-[420px] object-cover transition duration-500"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: isReverse ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-4"
              >
                {/* Title */}
                <h3
                  className={`${marcellus.className} text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2E5D42] leading-snug`}
                >
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="w-16 h-[2px] bg-[#2E5D42] mt-3 mx-auto lg:mx-0 rounded-full"></div>

                {/* Description */}
                <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {item.desc}
                </p>

                {/* Bullet Points */}
                <ul className="mt-5 space-y-3 max-w-lg mx-auto lg:mx-0 text-left">
                  <li className="flex items-start gap-3 text-gray-500 text-xs sm:text-sm">
                    <span className="w-2 h-2 mt-2 bg-[#2E5D42] rounded-md"></span>
                    Premium locations with excellent connectivity and future
                    growth potential
                  </li>
                  <li className="flex items-start gap-3 text-gray-500 text-xs sm:text-sm">
                    <span className="w-2 h-2 mt-2 bg-[#2E5D42] rounded-full"></span>
                    Thoughtfully designed layouts focused on comfort and modern
                    lifestyle
                  </li>
                  <li className="flex items-start gap-3 text-gray-500 text-xs sm:text-sm">
                    <span className="w-2 h-2 mt-2 bg-[#2E5D42] rounded-md"></span>
                    High-quality construction ensuring durability and long-term
                    value
                  </li>
                </ul>

                {/* Button */}
                <div className="mt-6 flex justify-center lg:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-[#2E5D42] text-white rounded-md text-sm hover:bg-[#244a35] transition"
                  >
                    Explore More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutOurPurpose;
