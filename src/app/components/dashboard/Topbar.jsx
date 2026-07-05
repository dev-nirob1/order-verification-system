'use client';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiUser, FiBell, FiLogOut } from "react-icons/fi";

const Topbar = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-white/10 bg-[#0B0B0B]/80 px-6 backdrop-blur-md rounded-none">
      {/* Left side: Hamburger for mobile menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center border border-white/10 text-white hover:bg-white/5 transition-colors duration-300 rounded-none cursor-pointer lg:hidden"
          aria-label="Open Navigation Menu"
        >
          <HiOutlineMenuAlt3 size={24} />
        </button>
        <h1 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
          Dashboard
        </h1>
      </div>

      {/* Right side: Notifications & User Profile */}
      <div className="flex items-center gap-3">
        <button
          className="flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors duration-300 rounded-none cursor-pointer"
          aria-label="View Notifications"
        >
          <FiBell size={18} />
        </button>

        {/* Profile Details (Flat design) */}
        <div className="flex h-10 items-center border border-white/10 px-4 bg-white/5 text-sm font-medium text-white rounded-none">
          <FiUser size={16} className="mr-2 text-yellow-500" />
          <span className="hidden sm:inline">Admin</span>
        </div>

        {/* Logout */}
        <button
          className="flex h-10 w-10 items-center justify-center border border-white/10 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors duration-300 rounded-none cursor-pointer"
          aria-label="Logout"
        >
          <FiLogOut size={18} />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
