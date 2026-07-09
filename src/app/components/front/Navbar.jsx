"use client";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import { useCheckout } from "@/app/hooks/useCheckout";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openCheckout } = useCheckout();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Track Order", href: "/track-order" },
    { name: "Dashboard", href: "/admin" },
    { name: "Login", href: "/login" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 backdrop-blur-xl transition-all duration-500">
      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-6 py-5 lg:px-0">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-[4px] text-white">
          AUREX<span className="text-yellow-500">.</span>
        </Link>

        {/* Navigation Links */}
        <nav
          className={`fixed top-0 right-0 z-40 flex h-screen w-[70vw] flex-col items-center justify-center gap-6 bg-gray-900/95 py-4 transition-transform duration-300
          lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:justify-start lg:bg-transparent lg:py-0
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 text-gray-200 hover:text-yellow-500 transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div>
          <button
            onClick={openCheckout}
            className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 px-5 py-2"
          >
            BUY NOW
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="z-50 text-3xl text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
