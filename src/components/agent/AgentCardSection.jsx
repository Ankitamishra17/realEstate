

"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

// Static Data
const users = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit.sharma@email.com",
    phone: "+91 9876543210",
    desc: "Senior sales agent with 5+ years of experience in client handling and closing deals efficiently.",
  },
  {
    id: 2,
    name: "Neha Verma",
    email: "neha.verma@email.com",
    phone: "+91 9123456780",
    desc: "Customer support specialist focused on delivering high-quality service and client satisfaction.",
  },
  {
    id: 3,
    name: "Rohit Singh",
    email: "rohit.singh@email.com",
    phone: "+91 9988776655",
    desc: "Expert in field operations and logistics management with strong leadership skills.",
  },
  {
    id: 4,
    name: "Priya Mehta",
    email: "priya.mehta@email.com",
    phone: "+91 9090909090",
    desc: "Creative strategist with experience in marketing campaigns and digital outreach.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaef] px-4 sm:px-8 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1
          className={`${marcellus.className} text-3xl sm:text-4xl text-[#2e5d42]`}
        >
          Our Agents
        </h1>
        <p className={`${jost.className} text-gray-600 mt-2`}>
          Meet our professional team
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 
            shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Section */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-full 
              bg-[#2e5d42] text-white text-xl font-semibold"
              >
                {user.name.charAt(0)}
              </div>

              {/* Info */}
              <div>
                <h2
                  className={`${jost.className} text-lg font-semibold text-gray-800`}
                >
                  {user.name}
                </h2>

                <p className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                  <FaEnvelope className="text-[#2e5d42]" />
                  {user.email}
                </p>

                <p className="text-xs text-gray-500 flex items-center gap-2">
                  <FaPhone className="text-[#2e5d42]" />
                  {user.phone}
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              className={`${jost.className} text-gray-600 text-sm mt-4 leading-relaxed`}
            >
              {user.desc}
            </p>

            {/* Button */}
            <button
              className="mt-6 w-full bg-[#2e5d42] text-white py-2 rounded-lg 
            text-sm hover:bg-[#244a35] transition"
            >
              View Profile
            </button>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
