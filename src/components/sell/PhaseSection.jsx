"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const phases = [
  {
    id: 1,
    title: "Validate Pricing",
    subtitle: "PHASE 1",
    label: "Compass Private Exclusive",
    desc: "Validate your price with strong buyer demand before going public.",
    image: "/phase1.jpg",
    price: "$5,600,000",
  },
  {
    id: 2,
    title: "Expand Reach With No Risks",
    subtitle: "PHASE 2",
    label: "Compass Coming Soon",
    desc: "Expand visibility and build demand without days on market.",
    image: "/phase2.jpg",
    price: "$5,750,000",
  },
  {
    id: 3,
    title: "Sell Better",
    subtitle: "PHASE 3",
    label: "Public Websites",
    desc: "Launch publicly with strong demand and optimized pricing.",
    image: "/phase3.jpg",
    price: "$5,875,000",
  },
];

export default function PhaseSection() {
  return (
    <section className="bg-[#fafaef] py-16 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className={`${marcellus.className} text-3xl md:text-5xl mb-4`}>
          More Choices, More Flexibility, More Value
        </h2>

        <p
          className={`${jost.className} text-sm tracking-widest text-[#2e5d42] mb-4`}
        >
          WITH THE 3-PHASED MARKETING STRATEGY
        </p>

        <p className={`${jost.className} text-gray-600`}>
          Our structured launch strategy helps maximize exposure, test pricing,
          and create strong demand for your property.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative h-56 w-full">
              <Image
                src={phase.image}
                alt={phase.title}
                fill
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute bottom-0 w-full bg-black/40 text-white text-sm px-4 py-2 flex justify-between">
                <span>{phase.price}</span>
                <span>6 Beds | 7.5 Baths</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-xs tracking-widest text-[#2e5d42] mb-2">
                {phase.subtitle}
              </p>

              <p className={`${jost.className} text-sm text-gray-500 mb-2`}>
                {phase.label}
              </p>

              <h3 className={`${marcellus.className} text-2xl mb-3`}>
                {phase.title}
              </h3>

              <p className={`${jost.className} text-gray-600 text-sm`}>
                {phase.desc}
              </p>

              {/* Accent line */}
              <div className="mt-4 h-[2px] w-10 bg-[#2e5d42]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
