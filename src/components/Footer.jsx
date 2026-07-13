"use client";

import Link from "next/link";
import {
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
  RiFacebookFill,
  RiInstagramLine,
  RiYoutubeLine,
  RiTwitterXLine,
  RiWhatsappLine,
  RiArrowRightSLine,
  RiHome4Line,
  RiBuildingLine,
  RiShieldCheckLine,
} from "react-icons/ri";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Properties", path: "/properties" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const propertyTypes = [
  "Luxury Apartments",
  "Premium Villas",
  "Commercial Spaces",
  "Plots & Land",
  "Affordable Housing",
  "Penthouses",
];

const socialLinks = [
  {
    icon: <RiFacebookFill />,
    href: "https://www.facebook.com/share/1PfHxWvUja/",
    label: "Facebook",
    color: "text-[#1877F2]",
  },
  {
    icon: <RiInstagramLine />,
    href: "https://www.instagram.com/avyayadeveloper?igsh=MTByeTV3bW1za203dA==",
    label: "Instagram",
    color: "text-[#E4405F]",
  },
  {
    icon: <RiYoutubeLine />,
    href: "https://youtube.com/@avyayadeveloper?si=cBUOCNZS7QAL84bl",
    label: "YouTube",
    color: "text-[#FF0000]",
  },
  {
    icon: <RiWhatsappLine />,
    href: "https://wa.me/917004397655",
    label: "WhatsApp",
    color: "text-[#25D366]",
  },
];

const stats = [
  { icon: <RiHome4Line />, value: "200+", label: "Projects Delivered" },
  { icon: <RiBuildingLine />, value: "600+", label: "Happy Families" },
  { icon: <RiShieldCheckLine />, value: "5+", label: "Years of Trust" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2645] text-white">
      {/* Stats Strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-[#af7323] text-2xl">{s.icon}</span>
              <span className="text-3xl font-bold text-white">{s.value}</span>
              <span className="text-sm text-gray-400 tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="sm:col-span-2 xl:col-span-1">
          <div className="flex justify-center sm:justify-start">
            <Link href="/">
              <img
                src="/logo1.png"
                alt="Avyaya Developer"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </Link>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 mt-4 max-w-sm">
            Avyaya Developer — building landmark residences and commercial
            spaces with integrity, design excellence, and a commitment to every
            family's dream.
          </p>
          <div className="flex gap-3 flex-wrap">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="
        w-11 h-11
        rounded-full
        bg-white
        flex items-center justify-center
        shadow-md
        hover:scale-110
        hover:shadow-lg
        transition-all duration-300
      "
              >
                <span className={`${s.color} text-[22px]`}>{s.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="min-w-0">
          <h4 className="text-white font-bold text-base mb-6 flex items-center gap-2 after:flex-1 after:h-px after:bg-[#af7323]/40 after:ml-2">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#af7323] text-sm transition-colors group"
                >
                  <RiArrowRightSLine className="text-[#af7323] group-hover:translate-x-1 transition-transform text-base shrink-0" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Property Types */}
        <div className="min-w-0">
          <h4 className="text-white font-bold text-base mb-6 flex items-center gap-2 after:flex-1 after:h-px after:bg-[#af7323]/40 after:ml-2">
            Our Properties
          </h4>
          <ul className="space-y-3">
            {propertyTypes.map((type) => (
              <li key={type}>
                <Link
                  href="/properties"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#af7323] text-sm transition-colors group"
                >
                  <RiArrowRightSLine className="text-[#af7323] group-hover:translate-x-1 transition-transform text-base shrink-0" />
                  {type}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="sm:col-span-2 xl:col-span-1 min-w-0">
          <h4 className="text-white font-bold text-base mb-6 flex items-center gap-2 after:flex-1 after:h-px after:bg-[#af7323]/40 after:ml-2">
            Contact Us
          </h4>
          <ul className="space-y-5">
            <li className="flex gap-3">
              <RiMapPinLine className="text-[#af7323] text-xl shrink-0 mt-0.5" />
              <span className="text-gray-400 text-sm leading-relaxed">
                Office Number 1529, 15th Floor Galaxy Diamond Plaza, Sector 4
                Greater Noida,
                <br />
                Uttar Pradesh - 201009
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <RiPhoneLine className="text-[#af7323] text-xl shrink-0" />
              <a
                href="tel:+917004397655"
                className="text-gray-400 text-sm hover:text-[#af7323] transition"
              >
                +91 7004397655
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <RiMailLine className="text-[#af7323] text-xl shrink-0" />
              <a
                href="mailto:info@avyayadeveloper.com"
                className="text-gray-400 text-sm hover:text-[#af7323] transition break-all"
              >
                info@avyayadeveloper.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Avyaya Developer. All rights reserved.
          </p>
          <p>Developed By Debox Techology</p>
        </div>
      </div>
    </footer>
  );
}
