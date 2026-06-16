"use client";

import { FaHome, FaChartBar, FaHandshake } from "react-icons/fa";

function TipSection() {
  const info = [
    {
      icon: <FaHome />,
      heading: "Use High-Quality Photos",
      desc: "High-quality and clear images attract buyers or tenants. Uploading a good photo can increase the chance of your property showing up amongst all the other listings.",
    },
    {
      icon: <FaChartBar />,
      heading: "Write an Informative Description",
      desc: "Don't confuse the buyer between amenities and infrastructure. Ensure a clear description of what you offer along with your property.",
    },
    {
      icon: <FaHandshake />,
      heading: "Premium Listings",
      desc: "With premium listing your property will be amongst top choices and get more visibility.",
    },
    {
      icon: <FaChartBar />,
      heading: "Share Location Information",
      desc: "Provide exact location and nearby amenities. Location is one of the most important factors.",
    },
  ];

  return (
    <section className="py-10">
      {/* Header */}
      <div className="text-center px-4 md:px-56">
        <h1 className="text-2xl md:text-3xl text-[#2e5d42] font-semibold">
          Tips on Selling a Property Online
        </h1>
        <p className="text-sm mt-2 text-gray-600">
          There are multiple listings and sellers but you can still get maximum
          attraction if you follow these tips.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="mt-10 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {info.map((item, i) => (
          <div
            key={i}
            className="flex gap-4 p-5 rounded-xl shadow-md bg-white hover:shadow-lg transition"
          >
            {/* Icon */}
            <div className="text-2xl p-3 bg-[#eeeeee] text-[#2e5d42] rounded-full h-fit">
              {item.icon}
            </div>

            {/* Content */}
            <div>
              <h2 className="text-lg font-semibold text-[#2e5d42]">
                {item.heading}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TipSection;
