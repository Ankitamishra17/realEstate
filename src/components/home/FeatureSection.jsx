"use client";

import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export default function FeatureSection() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const properties = [
    {
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
      price: "₹50,00,000",
      details: "3 Beds • 2 Baths • Delhi",
    },
    {
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      price: "₹75,00,000",
      details: "4 Beds • 3 Baths • Mumbai",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      price: "₹62,00,000",
      details: "3 Beds • 2 Baths • Bangalore",
    },
  ];

  return (
    <>
      {/* === FEATURES ====== */}
      <section className="py-20 ">
        {/* <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${marcellus.className} text-4xl md:text-5xl font-bold mb-12 text-center text-[#2e5d24]`}
        >
          Featured Properties
        </motion.h2> */}
        <div className="flex flex-col items-center overflow-hidden">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${marcellus.className} text-3xl md:text-5xl mt-6 font-bold text-center text-[#2e5d24]`}
          >
            Featured Properties
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid gap-8 px-4 mt-12 max-w-7xl mx-auto sm:grid-cols-2 md:grid-cols-3"
        >
          {properties.map((item, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt="property"
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

                {/* Badge */}
                <span
                  className={`${jost.className} absolute top-3 left-3 bg-[#2e5d42] text-white text-xs px-3 py-1 rounded-full`}
                >
                  Featured
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#2e5d42] drop-shadow-sm">
                  {item.price}
                </h3>

                <p className={`${jost.className} text-gray-600 mt-2 mb-4`}>
                  {item.details}
                </p>

                <button className=" bg-[#2e5d42] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#244a35] hover:shadow-lg hover:scale-105 transition duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
