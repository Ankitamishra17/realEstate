"use client";

import Image from "next/image";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
});

const jost = Jost({
  subsets: ["latin"],
});

export default function PropertyForm() {
  return (
    <section className="flex">
      {/* left side */}
      <div>
        <h1 className="text-md md:xl text-[#2e5d42]">
          Sell or Rent Your Property Online for FREE!
        </h1>
        <p className="rounded-full bg-[#fafaef]">Advertise for FREE</p>
      </div>
      <div>
        <p>Let's get you started</p>
        <input placeholder="title price" />
        <input placeholder="Listing-type" />
        <input placeholder="property-type" />
        <input placeholder="status" />
        <input placeholder="property specification" />
        <select>
          <option value="" disabled hidden>
            Type
          </option>
          <option className="hover:bg-[#2e5d42] " value="buy">
            Bed
          </option>
          <option value="rent">Bathroom</option>
        </select>
        <input placeholder="description"/>
        title price ,listing type property type, status property
        specification...bet baathroom,description, name ,email ,mobile .no,
      </div>
    </section>
  );
}
