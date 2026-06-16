"use client";

import { motion } from "framer-motion";
import { FaHome, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const features = [
  {
    title: "Verified Properties",
    desc: "All listings are verified to ensure authenticity and transparency.",
    icon: <FaHome />,
  },
  {
    title: "Secure Investment",
    desc: "We provide legal support and safe transactions for buyers.",
    icon: <FaShieldAlt />,
    highlight: true,
  },
  {
    title: "Trusted by Clients",
    desc: "Thousands trust us for buying and selling properties.",
    icon: <FaHandshake />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 bg-[#f9fafb] overflow-hidden">
      {/*  Dotted Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/*  Floating Dashed Line */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 400"
        fill="none"
      >
        <motion.path
          d="M50 200 C150 50, 350 350, 750 200,"
          stroke="#cbd5e1"
          strokeWidth="3"
          strokeDasharray="6 8"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <motion.path
          d="M50 260 C200 80, 420 480, 780 330"
          stroke="#cbd5e1"
          strokeWidth="3"
          strokeDasharray="6 8"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.svg>

      {/*  Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        {/* <h2
          className={`${marcellus.className} text-3xl md:text-5xl font-bold mb-4 text-[#2e5d42]`}
        >
          Why Choose Us?
        </h2> */}

        <div className="flex flex-col items-center overflow-hidden">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${marcellus.className} text-3xl md:text-5xl mt-6 font-bold text-center text-[#2e5d24]`}
          >
            Why Choose Us
          </motion.h2>

          {/* Animated Line */}
          <motion.div
            initial={{ x: -200, width: 0, opacity: 1 }} //  start from LEFT
            whileInView={{ x: 0, width: 120 }} //  move to center & grow
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            // viewport={{ once: true }}
            className="h-[3px] bg-[#2e5d42] mt-4 rounded-full"
          />
        </div>

        <p
          className={`${jost.className} text-gray-600 max-w-2xl mx-auto mb-12 mt-4 text-sm md:text-base`}
        >
          We provide trusted real estate services with verified listings, secure
          transactions, and customer satisfaction.
        </p>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 cursor-grab">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-6 rounded-2xl shadow-lg transition-all duration-300 ${
                item.highlight
                  ? "bg-[#2e5d42] text-white scale-105"
                  : "bg-[#fafaef]"
              }`}
            >
              {/* Icon */}
              <div className="text-3xl mb-4 flex justify-center">
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className={`${marcellus.className} text-lg md:text-xl font-semibold mb-2`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`${jost.className} text-sm opacity-80 leading-relaxed`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
