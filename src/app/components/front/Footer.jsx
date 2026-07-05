import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top Grid */}
        <div className="grid gap-14 grid-cols-3 lg:grid-cols-4 lg:gap-20 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="text-2xl font-bold tracking-[4px] text-white"
            >
              AUREX<span className="text-yellow-500">.</span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Redefining luxury through time, Swiss engineering, and absolute precision.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[2px] text-white">
              Navigation
            </h4>

            {[
              { name: "Home", href: "#hero" },
              { name: "Features", href: "#features" },
              { name: "Specifications", href: "#specifications-detail" },
              { name: "Reviews", href: "#reviews" },
              { name: "FAQ", href: "#faq" },
              { name: "Pre-Order", href: "#buy" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-400 transition hover:text-yellow-500"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[2px] text-white">
              Contact
            </h4>

            <p className="text-sm text-gray-400">Geneva, Switzerland</p>
            <p className="text-sm text-gray-400">
              concierge@aurexwatches.com
            </p>
            <p className="text-sm text-gray-400">+41 (0) 22 555 0199</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 lg:flex-row">
          
          <p className="text-center text-xs text-gray-500 lg:text-left">
            © 2026 Aurex Timepieces. All rights reserved. Created for Minimal Luxury.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-gray-400 transition hover:-translate-y-1 hover:text-yellow-500"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="text-gray-400 transition hover:-translate-y-1 hover:text-yellow-500"
            >
              <FaYoutube size={18} />
            </a>

            <a
              href="#"
              className="text-gray-400 transition hover:-translate-y-1 hover:text-yellow-500"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;