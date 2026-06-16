"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Buy", path: "/buy" },
    { name: "Rent", path: "/rent" },
    {name:"Property", path:"/property"},
    { name: "Sell", path: "/sell" },
    { name: "Find Agent", path: "/agent" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#2e5d42] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-[#fafaef] tracking-wide">
          RealEstate
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-[#fafaef] font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="relative group transition"
            >
              {item.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#fafaef] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-4">
          {/* Post Property */}
          <Link
            href="/post-property"
            className="hidden md:block bg-[#fafaef] text-[#2e5d42] px-5 py-2 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow"
          >
            Post Property
          </Link>

          {/* Login */}
          <Link
            href="/login"
            className="flex items-center gap-2 text-[#fafaef] border border-[#fafaef] px-4 py-2 rounded-xl hover:bg-[#fafaef] hover:text-[#2e5d42] transition duration-300"
          >
            <FiLogIn />
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
