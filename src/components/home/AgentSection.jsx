"use client";

import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export default function AgentSection() {
  const agents = [
    {
      name: "Anirudh Sharma",
      experience: "5 Years Experience",
    },
    {
      name: "Priya Verma",
      experience: "4 Years Experience",
    },
    {
      name: "Amit Singh",
      experience: "6 Years Experience",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#e8f3ee] to-white font-[Jost]">
      {/* Heading */}
      <div className="flex flex-col items-center overflow-hidden">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${marcellus.className} text-3xl md:text-5xl mt-6 font-bold text-center text-[#2e5d24]`}
        >
          Top Agents
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

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="  max-w-7xl mt-14 mx-auto grid gap-8 px-4 sm:grid-cols-2 md:grid-cols-3"
      >
        {agents.map((agent, i) => {
          const firstLetter = agent.name.charAt(0).toUpperCase();

          return (
            <motion.div
              key={i}
              variants={item}
              className="group relative bg-[#fafaef] backdrop-blur-lg border border-gray-200 p-8 rounded-3xl text-center shadow-sm hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-[#2e5d42]/10 opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Avatar with Initial */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="w-full h-full rounded-full flex items-center justify-center text-5xl font-bold text-[#2e5d42] bg-white border-4 border-[#2e5d42]  group-hover:border-[#2e5d42] transition duration-300">
                    {firstLetter}
                  </div>

                  {/* Ring effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#2e5d42] opacity-0 group-hover:opacity-100 scale-110 transition duration-300"></div>
                </div>

                {/* Name */}
                <h3
                  className={`${jost.className} font-semibold text-lg text-gray-800 group-hover:text-[#2e5d42] transition`}
                >
                  {agent.name}
                </h3>

                {/* Experience */}
                <p
                  className={`${jost.className} text-gray-500 text-sm mt-1 mb-4`}
                >
                  {agent.experience}
                </p>

                {/* Button */}
                <button
                  className={`${jost.className} bg-[#2e5d42] cursor-pointer text-white px-6 py-2 rounded-xl font-medium hover:bg-[#244a35] hover:shadow-lg hover:scale-105 transition duration-300`}
                >
                  Contact
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
