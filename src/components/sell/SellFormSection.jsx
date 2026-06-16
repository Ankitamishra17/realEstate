"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export default function SellFormSection() {
  return (
    <section className="bg-[#fafaef] py-20 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2"
      >
        {/* LEFT IMAGE */}
        <div className="relative h-[300px] md:h-auto">
          <Image
            src="/contact.AVIF"
            alt="Contact"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />

          {/* Optional Overlay for premium look */}
          <div className="absolute inset-0 bg-[#2e5d42]/20" />
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 md:p-14">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${marcellus.className} text-3xl md:text-5xl mb-10 text-[#2e5d42]`}
          >
            Sell With Us
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Floating Inputs */}
            {["Name*", "Email*", "Phone Number*", "Zip Code*"].map(
              (placeholder, index) => (
                <div key={index} className="relative">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    className="peer w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#2e5d42] transition"
                  />
                  <label
                    className={`absolute left-0 top-3 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                    peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#2e5d42]
                    ${jost.className}`}
                  >
                    {placeholder}
                  </label>
                </div>
              ),
            )}

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className={`${jost.className} w-full bg-[#2e5d42] text-white py-4 rounded-xl cursor-pointer tracking-wide hover:bg-[#244a36] transition`}
            >
              Submit
            </motion.button>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 leading-relaxed">
              By submitting this form you agree that we may contact you
              regarding your property inquiry. Terms & Privacy apply.
            </p>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
