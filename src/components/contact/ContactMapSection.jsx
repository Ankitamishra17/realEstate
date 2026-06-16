import React from "react";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

const ContactMapSection = () => {
  return (
    <section className="w-full py-16 bg-white ">
      {/* CENTERED HEADING */}
      <div className="max-w-6xl mx-auto px-4 mb-15 mt-6 text-center">
        <h2
          className={`${marcellus.className} text-5xl font-semibold text-[#2e5d42]`}
        >
          Find Us on Map
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Visit our office location in Noida Sector 62 and connect with our real
          estate experts.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-stretch">
        {/* LEFT - MAP */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://maps.google.com/maps?q=Noida%20Sector%2062&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>

        {/* RIGHT - CONTENT */}
        <div className="bg-[#fafaef] rounded-2xl p-8 shadow-lg border border-[#2e5d42]/10 flex flex-col justify-center">
          <h2
            className={`${marcellus.className} text-2xl font-semibold text-[#2e5d42] `}
          >
            Visit Our Office
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We are always available to assist you with property buying, selling,
            and investment guidance. Visit us or connect with our experts today.
          </p>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-[#2e5d42]/10 rounded-md">
                <FaLocationDot />
              </span>
              <p>Sector 62, Noida, Uttar Pradesh, India</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-[#2e5d42]/10 rounded-md">
                <IoCall />
              </span>
              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-[#2e5d42]/10 rounded-md">
                <IoMdMail />
              </span>
              <p>contact@yourrealestate.com</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-6 bg-[#2e5d42] text-white py-2 px-4 rounded-md hover:bg-[#244a36] transition w-fit">
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
