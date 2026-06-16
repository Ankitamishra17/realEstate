"use client";

import React from "react";
import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const ContactCtaSection = () => {
  return (
    <section className="w-full py-10 px-5 sm:px-10 lg:px-16 bg-[#fafaef]">
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2
          className={`${marcellus.className} text-5xl font-semibold text-[#2e5d42]`}
        >
          Contact & Visit Us
        </h2>
        <p className={`${jost.className} text-gray-600 text-sm mt-2`}>
          We’re here to help you with property buying, selling, and investment
          guidance.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-[#2e5d42]/10"
        >
          <h2
            className={`${marcellus.className} text-2xl font-semibold text-[#2e5d42] mb-6`}
          >
            Contact Us
          </h2>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#2e5d42]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#2e5d42]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#2e5d42]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#2e5d42]"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="sm:col-span-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#2e5d42]"
            />

            <button
              type="submit"
              className="sm:col-span-2 bg-[#2e5d42] text-white py-3 rounded-md hover:bg-[#244a36] transition font-medium"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* LEFT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-xl min-h-[500px]"
        >
          <img
            src="https://images.pexels.com/photos/5563473/pexels-photo-5563473.jpeg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-end p-6">
            <div className="text-white">
              <h3 className="text-2xl font-semibold">Let’s Connect</h3>
              <p className="text-sm opacity-90">
                Visit our office or drop a message anytime.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
