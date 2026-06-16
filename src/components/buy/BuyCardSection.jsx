"use client";

import { useState } from "react";
import BuyCard from "@/components/buy/BuyCard";
import { Marcellus, Jost } from "next/font/google";
import { FaMapMarkerAlt, FaHome, FaRupeeSign, FaSearch } from "react-icons/fa";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const properties = [
  {
    id: 1,
    image: "/p1.avif",
    title: "CASHING UP! DISCOUNTED PRICE FOR REPAIRS",
    location: "Auckland Central",
    beds: 1,
    bath: 1,
    price: 150000,
  },
  {
    id: 2,
    image: "/p2.avif",
    title: "MAKE IT YOURS – SOLD AS-IS",
    location: "City Centre",
    beds: 1,
    bath: 1,
    price: 250000,
  },
  {
    id: 3,
    image: "/p3.avif",
    title: "SLICKER, BIGGER AND MORE BANG FOR YOUR BUCK!",
    location: "Hobson Street, Auckland",
    beds: 3,
    bath: 2,
    car: 2,
    price: 800000,
  },
  {
    id: 4,
    image: "/p4.avif",
    title: "MODERN APARTMENT WITH CITY VIEW",
    location: "Downtown",
    beds: 2,
    bath: 2,
    price: 500000,
  },
  {
    id: 5,
    image: "/p5.avif",
    title: "LUXURY LIVING IN PRIME LOCATION",
    location: "Waterfront",
    beds: 3,
    bath: 2,
    car: 1,
    price: 1200000,
  },
  {
    id: 6,
    image: "/p6.avif",
    title: "AFFORDABLE STARTER HOME",
    location: "Suburbs",
    beds: 2,
    bath: 1,
    price: 300000,
  },
];

export default function BuyCardSection() {
  const [beds, setBeds] = useState("");
  const [priceLow, setPriceLow] = useState("");
  const [priceHigh, setPriceHigh] = useState("");

  const filteredProperties = properties.filter((item) => {
    return (
      (!beds || item.beds == beds) &&
      (!priceLow || item.price >= priceLow) &&
      (!priceHigh || item.price <= priceHigh)
    );
  });

  return (
    <section className="bg-[#fafaef] py-16 px-4 md:px-12">
      {/*  Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2
          className={`${marcellus.className} text-3xl md:text-5xl text-[#2e5d42] mb-4`}
        >
          Buy
        </h2>

        <p
          className={`${jost.className} text-gray-600 leading-relaxed text-sm md:text-base`}
        >
          At City Sales we sell leasehold, hotel, remedial and standard freehold
          properties. We make the buying process simple and seamless for you.
        </p>
      </div>

      {/*  Search Bar */}
      <div className="bg-[#fafaef] backdrop-blur-xl p-4 md:p-6 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl  rounded-bl-none shadow-2xl flex flex-col md:flex-row items-center gap-3 w-full max-w-4xl mx-auto border border-white/20 mb-14">
        {/* Beds */}

        <div className="relative w-full md:w-1/4">
          <select
            onChange={(e) => setBeds(e.target.value)}
            className={`${jost.className} w-full pl-10 pr-4 py-3 text-[#2e5d42] rounded-xl border outline-none focus:ring-2 focus:ring-[#2e5d42] bg-[#f]`}
          >
            <option value="">Beds</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3+</option>
          </select>
        </div>

        {/* Max Price */}
        <div className="relative w-full md:w-1/4">
          <select
            onChange={(e) => setPriceHigh(e.target.value)}
            className={`${jost.className} w-full pl-10 pr-4 py-3 text-[#2e5d42] rounded-xl border outline-none focus:ring-2 focus:ring-[#2e5d42] bg-[#f]`}
          >
            {/* <option value="" disabled hidden>
              Type
            </option> */}
            <option value="">Max Price</option>
            <option value="500000">$500k</option>
            <option value="1000000">$1M</option>
            <option value="2000000">$2M+</option>
          </select>
        </div>

        {/* Min Price */}
        <div className="relative w-full md:w-1/4">
          <select
            onChange={(e) => setPriceLow(e.target.value)}
            className={`${jost.className} w-full pl-10 pr-4 py-3 text-[#2e5d42] rounded-xl border outline-none focus:ring-2 focus:ring-[#2e5d42] bg-[#f]`}
          >
            {/* <option value="" disabled hidden>
              Type
            </option> */}
            <option value="">Min Price</option>
            <option value="100000">$100k</option>
            <option value="300000">$300k</option>
            <option value="500000">$500k</option>
          </select>
        </div>

        {/* Button */}
        <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#2e5d42] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#244a35] hover:shadow-xl hover:scale-105 transition duration-300">
          <FaSearch />
          Search
        </button>
      </div>

      {/*  Cards */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((item) => <BuyCard key={item.id} {...item} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No properties found
          </p>
        )}
      </div>
    </section>
  );
}
