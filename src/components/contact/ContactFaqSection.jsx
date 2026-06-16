"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const faqs = [
  {
    question: "What services do you offer in real estate?",
    answer:
      "We provide property buying, selling, renting, and investment consulting services tailored to your needs.",
  },
  {
    question: "Do you help with home loans?",
    answer:
      "Yes, we assist you in finding the best home loan options with trusted financial partners.",
  },
  {
    question: "How do I schedule a property visit?",
    answer:
      "You can contact us directly or fill out our inquiry form to schedule a visit at your convenience.",
  },
  {
    question: "Are your listings verified?",
    answer:
      "Absolutely. All our listings are verified to ensure transparency and trust, All our listings are verified to ensure transparency and trust.",
  },
];

const ContactFaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#fafaef] py-10 px-5 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <h2
          className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2e5d42] text-center mb-3`}
        >
          Frequently Asked Questions
        </h2>
        <p className=" text-gray-600 text-base  text-center leading-relaxed mb-14">
          “Everything You Need to Know to Make Confident Real Estate Decisions”
        </p>

        <div className="flex flex-col lg:flex-row gap-12 item start">
          {/* FAQ LEFT */}

          <div className="w-full lg:w-1/2 space-y-6">
            {faqs.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div key={index} className="relative mb-8">
                  {/* Question Pill */}
                  <div
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="flex items-center justify-between bg-[#2e5d42]  text-white px-6 py-6 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl rounded-bl-none cursor-pointer shadow-md hover:bg-[#2e5d42] hover:text-white transition duration-300"
                  >
                    <span className="text-sm md:text-base">
                      {item.question}
                    </span>

                    {/* Plus / Minus Icon */}
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#fafaef] text-[#2e5d42]">
                      {isOpen ? "−" : "+"}
                    </div>
                  </div>

                  {/* Answer Bubble */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 10, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#fafaef] text-gray-700 mt-1 p-6 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl rounded-bl-none cursor-pointer shadow-lg relative max-w-xl"
                      >
                        {/* Bubble Tail */}
                        <div className="absolute -top-2 left-10 w-4 h-4 bg-[#2e5d42] rotate-45"></div>

                        <p className="text-sm leading-relaxed">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* IMAGE RIGHT */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl  overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg"
                alt="property"
                className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e5d42]/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFaqSection;
