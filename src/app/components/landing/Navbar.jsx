'use client'
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Specs", href: "#specifications-detail" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-white/5 backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? "h-17.5 bg-[#0b0b0b]/85 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "h-20 bg-[#0b0b0b]/60"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold tracking-[4px] text-white"
        >
          AUREX<span className="text-yellow-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-300 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <a
            href="#buy"
            className="hidden border border-yellow-500 px-5 py-2 text-sm font-medium uppercase tracking-wide text-yellow-500 transition-all duration-300 hover:bg-yellow-500 hover:text-black lg:block"
          >
            Pre-Order
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="z-60 text-white lg:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX size={32} /> : <HiOutlineMenuAlt3 size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 h-screen w-full bg-[#0b0b0b]/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          menuOpen ? "right-0" : "-right-full"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium uppercase tracking-[3px] text-gray-300 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#buy"
            onClick={() => setMenuOpen(false)}
            className="mt-6 border border-yellow-500 px-8 py-3 text-sm font-medium uppercase tracking-wider text-yellow-500 transition hover:bg-yellow-500 hover:text-black"
          >
            Pre-Order
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
