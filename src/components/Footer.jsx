// "use client";
// import Link from "next/link";
// import { FaFacebookF } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa6";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { FaTwitter } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#2e5d42] text-white pt-16 pb-8 font-[Jost]">
//       {/* Top Grid */}
//       <div className="max-w-7xl mx-auto grid gap-10 px-4 sm:grid-cols-2 md:grid-cols-5">
//         {/* Brand */}
//         <div>
//           <h3 className="text-2xl font-bold mb-3 text-[#2e5d42]">RealEstate</h3>
//           <p className="text-gray-400 text-sm leading-relaxed">
//             Find your dream home easily with trusted listings and verified
//             agents across India.
//           </p>
//         </div>

//         {/* Links */}
//         <div>
//           <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
//           <ul className="space-y-2 text-gray-400 text-sm">
//             {["Buy", "Rent", "Sell", "Contact"].map((item) => (
//               <li
//                 key={item}
//                 className="hover:text-white cursor-pointer transition"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Links */}
//         <div>
//           <h4 className="font-semibold mb-4 text-white">Our Partners</h4>
//           <ul className="space-y-2 text-gray-400 text-sm">
//             {["Buy", "Rent", "Sell", "Contact"].map((item) => (
//               <li
//                 key={item}
//                 className="hover:text-white cursor-pointer transition"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Links */}
//         <div>
//           <h4 className="font-semibold mb-4 text-white">Locations</h4>
//           <ul className="space-y-2 text-gray-400 text-sm">
//             {["Greater Noida", "Delhi", "Mumbai", "Chandigarh"].map((item) => (
//               <li
//                 key={item}
//                 className="hover:text-white cursor-pointer transition"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div className="cursor-pointer ">
//           <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
//           <p className="text-gray-400 text-sm">Delhi, India</p>
//           <p className="text-gray-400 text-sm">
//             {" "}
//             Email - support@greenestate.com
//           </p>
//           <p className="text-gray-400 text-sm">Toll Free - 1800 41 99099</p>
//           <p className="text-gray-400 text-sm">9:30 AM to 6:30 PM (Mon-Sun)</p>
//           <h4 className="font-semibold mb-4 text-white">Contact with us</h4>

//           {/* Social Icons */}
//           <div className="flex gap-3 mt-4">
//             <Link href="#">
//               <FaFacebookF />
//             </Link>
//             <Link href="#">
//               <FaYoutube />
//             </Link>
//             <Link href="#">
//               <AiOutlineInstagram />
//             </Link>
//             <Link href="#">
//               <FaTwitter />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-white/10 mt-10 pt-6 text-center text-white text-sm">
//         © 2026 RealEstate. All rights reserved.
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
import { Marcellus, Jost } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="relative bg-[#2e5d42] text-[#fafaef] font-[Jost] overflow-hidden">
      {/* Slanted Top Shape */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M1200 120L0 16.48V0h1200v120z" fill="#ffffff" />
        </svg>
      </div> */}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pt-18 pb-10 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3
            className={`${marcellus.className} text-3xl font-bold tracking-tight text-white`}
          >
            RealEstate
          </h3>
          <p className="text-gray-300 text-sm mt-3 leading-relaxed max-w-sm">
            Find your dream home easily with trusted listings and verified
            agents across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className={`${marcellus.className} font-semibold mb-4 text-white`}
          >
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["Buy", "Rent", "Sell", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-white transition hover:translate-x-1 inline-block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Partners */}
        <div>
          <h4
            className={`${marcellus.className} font-semibold mb-4 text-white`}
          >
            Our Partners
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["Builders", "Agents", "Banks", "Investors"].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-white transition hover:translate-x-1 inline-block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4
            className={`${marcellus.className} font-semibold mb-4 text-white`}
          >
            Locations
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["Noida", "Delhi", "Mumbai", "Chandigarh"].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-white transition hover:translate-x-1 inline-block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className={`${marcellus.className} font-semibold mb-4 text-white`}
          >
            Contact
          </h4>

          <div className="space-y-2 text-gray-300 text-sm">
            <p>Delhi, India</p>
            <p>support@greenestate.com</p>
            <p>1800 41 99099</p>
            <p>Mon - Sun | 9:30 AM - 6:30 PM</p>
          </div>

          {/* Social */}
          <div className="mt-5">
            <h5
              className={`${marcellus.className} text-sm font-medium mb-3 text-white`}
            >
              Follow Us
            </h5>

            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaYoutube />, link: "#" },
                { icon: <AiOutlineInstagram />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-[#1f3f2d] transition"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 text-center text-gray-400 text-sm">
        © 2026 RealEstate. All rights reserved.
      </div>
    </footer>
  );
}
