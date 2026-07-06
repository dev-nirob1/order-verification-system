"use client";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiUser, FiLogOut } from "react-icons/fi";
import { useSidebar } from "@/app/hooks/useSidebar";

const Topbar = () => {
  const { openSidebar } = useSidebar();
  console.log(openSidebar)

  return (
    <header className="flex w-full h-16 items-center justify-between border-b border-white/10 bg-[#0B0B0B] px-6">
      <div className="flex items-center gap-4">
        {/* hamburger  */}
        <button onClick={openSidebar}>
          <HiOutlineMenuAlt3 size={24} className="text-white lg:hidden" />
        </button>
        <h5 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
          Dashboard
        </h5>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-10 items-center border border-white/10 px-4 bg-white/5 text-sm font-medium text-white">
          <FiUser size={16} className="mr-2 text-yellow-500" />
          <span>Admin</span>
        </div>

        {/* logout button  */}
        <button>
          <FiLogOut size={18} className="text-red-400" />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
