"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const testimonials = [
  {
    name: "Rahul Singh",
    role: "Home Owner",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "Professional service and verified properties. Very trustworthy platform.",
  },
  {
    name: "Amit Sharma",
    role: "Property Buyer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Amazing experience! The process was smooth and I found my dream home بسهولة.",
  },
  {
    name: "Neha Verma",
    role: "Investor",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Secure investment and great support from the team. Highly recommended!",
  },
  {
    name: "Rahul Singh",
    role: "Home Owner",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "Professional service and verified properties. Very trustworthy platform.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const radius = 120; // circle radius

  return (
    <section className="py-10 bg-[#f9fafb]">
      {/* Heading */}
      <div className="flex flex-col items-center overflow-hidden mb-24">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${marcellus.className} text-3xl md:text-5xl mt-6 font-bold text-center text-[#2e5d24]`}
        >
          Testimonials
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

      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Circular Avatars */}
        <div className="relative w-[300px] h-[150px] mx-auto my-18">
          {testimonials.map((item, index) => {
            const angle = (index / testimonials.length) * 2 * Math.PI;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.img
                key={index}
                src={item.image}
                alt={item.name}
                className={`absolute w-18 h-18 rounded-full border-2 ${
                  active === index
                    ? "border-[#2e5d42] scale-110"
                    : "border-[#fafaef]"
                } shadow-lg`}
                animate={{
                  x,
                  y,
                }}
                transition={{ duration: 0.5 }}
                onClick={() => setActive(index)}
              />
            );
          })}
        </div>

        {/* RIGHT: Review Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#fafaef] p-6 md:p-8 rounded-2xl shadow-lg "
        >
          <h3
            className={`${marcellus.className} text-xl font-semibold text-[#2e5d42] mb-2`}
          >
            {testimonials[active].name}
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            {testimonials[active].role}
          </p>

          <p className="text-gray-700 leading-relaxed italic">
            “{testimonials[active].review}”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
