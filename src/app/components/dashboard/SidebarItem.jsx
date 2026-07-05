'use client';
import Link from "next/link";

const SidebarItem = ({ href, label, icon: Icon, active, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-4 px-6 py-4 text-sm font-medium tracking-wide transition-colors duration-300 rounded-none cursor-pointer border-l-2 ${
        active
          ? "bg-white/5 text-yellow-500 border-yellow-500"
          : "text-gray-400 hover:text-white hover:bg-white/[0.02] border-transparent"
      }`}
    >
      {Icon && <Icon size={20} className="flex-shrink-0" />}
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;
