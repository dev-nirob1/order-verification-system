'use client';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiUser, FiBell, FiLogOut } from "react-icons/fi";

const Topbar = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 bg-[#0B0B0B] px-6">
      <div className="flex items-center gap-4">
        <HiOutlineMenuAlt3 size={24} className="text-white lg:hidden" />
        <h1 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <FiBell size={18} className="text-neutral-400" />
        <div className="flex h-10 items-center border border-white/10 px-4 bg-white/5 text-sm font-medium text-white">
          <FiUser size={16} className="mr-2 text-yellow-500" />
          <span>Admin</span>
        </div>
        <FiLogOut size={18} className="text-red-400" />
      </div>
    </header>
  );
};

export default Topbar;