'use client';
import Link from "next/link";

const SidebarItem = ({ href, label, icon: Icon, active }) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 px-6 py-4 font-medium tracking-wide transition-colors duration-300 rounded-none cursor-pointer border-l-2 ${
        active
          ? "bg-white/5 text-yellow-500 border-yellow-500"
          : "text-gray-400 hover:text-white hover:bg-white/2 border-transparent"
      }`}
    >
      {Icon && <Icon size={20} className="shrink-0" />}
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;
