"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export default function SellBetterSection() {
  return (
    <section className="bg-[#fafaef] py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`${marcellus.className} text-3xl md:text-5xl mb-6`}>
            Sell Better
          </h2>

          <p className="text-xs tracking-widest text-[#2e5d42] mb-4">
            LAUNCH ON PUBLIC WEBSITES
          </p>

          <p className={`${jost.className} text-gray-600 leading-relaxed mb-6`}>
            Backed by a validated pricing strategy and early buyer demand, your
            home is positioned to achieve the best possible price and terms when
            it goes live on public platforms.
          </p>

          {/* CTA */}
          <button
            className={`${jost.className} group inline-flex items-center gap-2 cursor-pointer text-black text-sm tracking-wide border-b border-black pb-1 hover:text-[#2e5d42] hover:border-[#2e5d42] transition`}
          >
            SELL WITH US
            <span className="group-hover:translate-x-2 transition">→</span>
          </button>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background Card */}
          <div className="bg-[#e8e3d9] rounded-2xl p-24 md:p-10">
            {/* Inner Card */}
            <div className="bg-white rounded-xl shadow-lg p-18">
              {/* Top Info */}
              <div className="flex justify-between items-center border-b pb-3 mb-4">
                <div>
                  <h3 className="font-semibold">$5,875,000</h3>
                  <p className="text-xs text-gray-500">
                    6 bed | 7.5 bath | 6,050 sq ft
                  </p>
                </div>
                <div className="text-gray-400 text-lg">☆</div>
              </div>

              {/* Chat 1 */}
              <div className="flex gap-4 mb-4">
                <Image
                  src="/user1.jpg"
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">
                    Multiple offers in, let’s chat!
                  </p>
                  <p className="text-xs text-gray-400">Cheryl, 2 hours ago</p>
                </div>
              </div>

              {/* Chat 2 */}
              <div className="flex gap-4">
                <Image
                  src="/user2.jpg"
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">
                    Excited to review them together!
                  </p>
                  <p className="text-xs text-gray-400">Judy, 1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
