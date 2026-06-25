"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiMenuLine,
  RiCloseLine,
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
  RiArrowRightLine,
  RiUserLine,
} from "react-icons/ri";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Buy", path: "/buy" },
  { name: "Rent", path: "/rent" },
  { name: "Properties", path: "/properties" },
  { name: "Sell", path: "/sell" },
  { name: "Find Agent", path: "/agent" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* Top Info Bar — NOT sticky, scrolls away */}
      <div className="bg-[#0f2645] text-white text-[11px] sm:text-xs hidden md:flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-2 border-b border-[#af7323]/30">
        <div className="flex items-center gap-3 sm:gap-6 min-w-0 overflow-hidden">
          <span className="flex items-center gap-1.5 text-[#af7323] shrink-0">
            <RiPhoneLine className="shrink-0" />
            <span className="text-white whitespace-nowrap">+91 98765 43210</span>
          </span>
          <span className="hidden lg:flex items-center gap-1.5 text-[#af7323] shrink-0">
            <RiMailLine className="shrink-0" />
            <span className="text-white whitespace-nowrap">info@avyayadeveloper.com</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[#af7323] shrink-0">
          <RiMapPinLine className="shrink-0" />
          <span className="text-white whitespace-nowrap">Ghaziabad, Uttar Pradesh</span>
        </div>
      </div>

      {/* Main Navbar — fixed */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg shadow-[#0f2645]/10"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[4.5rem] gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 min-w-0">
              <img
                src="/logo.png"
                alt="Avyaya Developer"
                className="h-11 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden xl:flex items-center gap-0 flex-1 justify-center min-w-0 overflow-hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-2 lg:px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-semibold tracking-wide rounded transition-all duration-200 relative group whitespace-nowrap ${
                    isActive(link.path)
                      ? "text-[#af7323]"
                      : "text-[#0f2645] hover:text-[#af7323]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#af7323] transition-all duration-300 ${
                      isActive(link.path) ? "w-4/5" : "w-0 group-hover:w-4/5"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Buttons (desktop) */}
            <div className="hidden xl:flex items-center gap-2 shrink-0">
              <Link
                href="/login"
                className="flex items-center gap-1.5 border border-[#0f2645]/20 hover:border-[#af7323] text-[#0f2645] hover:text-[#af7323] text-[13px] xl:text-sm font-semibold px-3 xl:px-4 py-2.5 rounded transition-all duration-300 tracking-wide whitespace-nowrap"
              >
                <RiUserLine className="text-base shrink-0" />
                Login
              </Link>
              <Link
                href="/post-property"
                className="group flex items-center gap-2 bg-[#0f2645] hover:bg-[#af7323] text-white text-[13px] xl:text-sm font-semibold px-3.5 xl:px-5 py-2.5 rounded transition-all duration-300 tracking-wide shadow-md whitespace-nowrap"
              >
                Post Property
                <RiArrowRightLine className="text-base shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile/Tablet Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="xl:hidden text-[#0f2645] text-2xl p-2 rounded hover:bg-gray-100 transition shrink-0"
            >
              {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        <div
          className={`xl:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
            menuOpen
              ? "max-h-[calc(100vh-4rem)] py-4 overflow-y-auto"
              : "max-h-0"
          }`}
        >
          <div className="px-4 sm:px-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-sm font-semibold rounded-lg transition ${
                  isActive(link.path)
                    ? "bg-[#0f2645]/5 text-[#af7323]"
                    : "text-[#0f2645] hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-3 flex flex-col sm:flex-row gap-2.5">
              <Link
                href="/post-property"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#0f2645] text-white text-sm font-semibold px-5 py-3 rounded-lg text-center tracking-wide w-full"
              >
                Post Property
                <RiArrowRightLine className="text-base shrink-0" />
              </Link>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 border border-[#0f2645]/20 text-[#0f2645] text-sm font-semibold px-5 py-3 rounded-lg text-center tracking-wide w-full"
              >
                <RiUserLine className="text-base shrink-0" />
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}