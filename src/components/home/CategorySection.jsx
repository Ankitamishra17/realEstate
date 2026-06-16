"use client";

import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const cards = [
  {
    id: 1,
    city: "Delhi",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
  },
  {
    id: 2,
    city: "Mumbai",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
  },
  {
    id: 3,
    city: "Jaipur",
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
  },
];

export default function CardAnimation() {
  return (
    <div className="bg-[#fafaef]">
      {/* Heading */}
      {/* <h2
        className={`${marcellus.className} text-3xl md:text-5xl text-center font-bold text-[#2e5d42]`}
      >
        Explore Cities
      </h2> */}

      <div className="flex flex-col items-center overflow-hidden">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${marcellus.className} text-3xl md:text-5xl mt-6 font-bold text-center text-[#2e5d24]`}
        >
          Explore Cities
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

      <div className="flex justify-end -mt-14 items-center h-screen pr-24">
        <div className="relative w-[700px] h-[320px]">
          {/* Main Card  */}
          <motion.div
            initial={false} //  prevent load animation
            className="absolute right-0 w-[250px] h-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5 text-white">
              <h2 className="text-2xl font-bold">India</h2>
              <button className="mt-3 w-fit bg-[#2e5d42] text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-[#2e5d42] cursor-pointer transition">
                Explore
              </button>
            </div>
          </motion.div>

          {/* Animated Cards (Scroll Triggered) */}
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ x: 200 }} // start offscreen right
              whileInView={{
                x: -(285 * (index + 1)), // slide to position
              }}
              // viewport={{ once: true }} // run only once on scroll
              whileHover={{
                y: -12,
                scale: 1.06,
              }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="absolute right-0 w-[250px] h-full rounded-3xl overflow-hidden shadow-xl"
              style={{
                zIndex: 40 - index,
              }}
            >
              <img src={card.img} className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <h2 className={`${jost.className} text-xl font-semibold`}>
                  {card.city}
                </h2>

                <button
                  className={`${jost.className} mt-3 w-fit bg-[#2e5d42] text-white  hover:text-[#2e5d42] cursor-pointer px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition`}
                >
                  More Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
