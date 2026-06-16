"use client";
import { motion } from "framer-motion";

import { useRef, useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export default function PropertyList() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const properties = [
    {
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
      title: "Luxury Villa",
      price: "50,00,000",
      location: "Delhi",
      description: "Beautiful modern house",
      beds: 3,
      baths: 2,
      agent: "Anirudh Sharma",
    },
    {
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      title: "Modern Apartment",
      price: "30,00,000",
      location: "Mumbai",
      description: "Stylish apartment in city center",
      beds: 2,
      baths: 2,
      agent: "Priya Verma",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Premium House",
      price: "70,00,000",
      location: "Bangalore",
      description: "Spacious modern home",
      beds: 4,
      baths: 3,
      agent: "Rahul Sharma",
    },
    {
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      title: "Luxury Flat",
      price: "40,00,000",
      location: "Noida",
      description: "Comfortable living space",
      beds: 2,
      baths: 2,
      agent: "Neha Gupta",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Premium House",
      price: "70,00,000",
      location: "Bangalore",
      description: "Spacious modern home",
      beds: 4,
      baths: 3,
      agent: "Rahul Sharma",
    },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / 350);
      setActiveIndex(index);
    };

    const el = scrollRef.current;
    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (index) => {
    scrollRef.current.scrollTo({
      left: index * 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#e8f3ee] to-white font-[Jost]">
      {/* Header */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-24 mb-10">
        {/* <h2
          className={`${marcellus.className} text-3xl md:text-5xl ml-74 font-bold text-[#2e5d42] `}
        >
          Our Best Deals
        </h2> */}

        <div className="flex flex-col items-center overflow-hidden">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${marcellus.className} text-3xl md:text-5xl mt-6 ml-96 font-bold text-center text-[#2e5d24]`}
          >
            Our Best Deals
          </motion.h2>

          {/* Animated Line */}
          <motion.div
            initial={{ x: -200, width: 0, opacity: 1 }} //  start from LEFT
            whileInView={{ x: 0, width: 120 }} //  move to center & grow
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            // viewport={{ once: true }}
            className="h-[3px] bg-[#2e5d42] mt-4 ml-96 rounded-full"
          />
        </div>
      </div>
      <div className="flex gap-3 ml-[1100px] mb-4">
        <button
          onClick={scrollLeft}
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-[#2e5d42] hover:text-white transition"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={scrollRight}
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-[#2e5d42] hover:text-white transition"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-14  overflow-x-auto px-4 ml-14 max-w-7xl mx-auto no-scrollbar scroll-smooth snap-x"
      >
        {properties.map((item, i) => (
          <PropertyCard key={i} property={item} />
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {properties.map((_, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full cursor-pointer transition-all ${
              activeIndex === i ? "bg-[#2e5d42] w-6" : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
