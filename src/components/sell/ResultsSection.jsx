"use client";

import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const stats = [
  {
    value: "2.9%",
    title: "Higher Closing Price",
  },
  {
    value: "20%",
    title: "Faster to Contract",
  },
  {
    value: "30%",
    title: "Less Likely to Drop in Price",
  },
];

export default function ResultsSection() {
  return (
    <section className="bg-[#fafaef] text-black py-20 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2
          className={`${marcellus.className} text-3xl md:text-5xl mb-6 text-[#2e5d42]`}
        >
          3-Phased Marketing Delivers Results
        </h2>

        <p className={`${jost.className} text-gray-600 leading-relaxed`}>
          Our data shows that homes marketed before going active are associated
          with stronger outcomes and better performance in the market.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative text-center md:text-left px-6 group"
          >
            {/* Divider Line */}
            <div className="hidden md:block absolute left-0 top-0 h-full w-[1px] bg-[#2e5d42]/20" />

            {/* Value */}
            <h3
              className={`${marcellus.className} text-5xl md:text-6xl mb-4 text-[#2e5d42] group-hover:scale-105 transition`}
            >
              {item.value}
            </h3>

            {/* Title */}
            <p
              className={`${marcellus.className} text-2xl md:text-3xl leading-snug`}
            >
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-16">
        <button
          className={`${jost.className} bg-[#2e5d42] text-white px-8 py-4 rounded-xl cursor-pointer hover:bg-[#244a36] transition`}
        >
          Sell on Your Terms
        </button>
      </div>
    </section>
  );
}
