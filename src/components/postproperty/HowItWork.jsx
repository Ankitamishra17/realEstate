"use client";

import { motion } from "framer-motion";
import { FaHome, FaChartBar, FaHandshake } from "react-icons/fa";
export default function HowItWork() {
  const work = [
    {
      step: "Step 1",
      icon: <FaHome />,
      heading: "Post your Property Ad",
      desc: `After logging in, click on "Post Property" and enter all necessary details about your property such as locality, amenities, and upload photos.`,
    },
    {
      step: "Step 2",
      icon: <FaChartBar />,
      heading: "Access Responses Through Your Dashboard",
      desc: `Monitor responses in your dashboard and get contact details of interested buyers or tenants.`,
    },
    {
      step: "Step 3",
      icon: <FaHandshake />,
      heading: "Connect with Buyers/Tenants",
      desc: `Negotiate directly with potential buyers or tenants without any third party involvement.`,
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-10 bg-white">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-[#2e5d42] font-bold text-3xl md:text-4xl">
          How It Works?
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          RealEstateIndia offers an easy process to list your property quickly
          and efficiently. Whether you want to rent or sell, follow these simple
          steps:
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 mt-12 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {work.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="relative bg-[#fafaef] p-6 md:p-8 border border-gray-200  rounded-tl-none rounded-tr-4xl rounded-br-none rounded-bl-4xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Step Badge */}
            <span className="absolute -top-0.5 -left-0.5 bg-[#2e5d42] text-white text-sm px-4 py-2 rounded-tl-none rounded-tr-none rounded-br-full rounded-bl-none">
              {item.step}
            </span>

            {/* Icon */}

            <div className="text-3xl px-34 mb-6 text-[#2e5d42]">
              {item.icon}
            </div>
            {/* Title */}
            <h2 className="text-lg md:text-xl font-bold text-[#2e5d42] mb-4">
              {item.heading}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
