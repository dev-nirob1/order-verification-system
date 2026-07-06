"use client";
import { usePathname } from "next/navigation";
import {
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi";
import SidebarItem from "./SidebarItem";
import Link from "next/link";

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: FiGrid },
    { href: "/dashboard/orders", label: "Orders", icon: FiShoppingBag },
    { href: "/dashboard/customers", label: "Customers", icon: FiUsers },
    { href: "/dashboard/settings", label: "Settings", icon: FiSettings },
  ];

  return (
    <>
      {/* overlaping  */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-[#0B0B0B] border-r border-white/10 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
          <Link
            href={"/"}
            className="text-xl font-bold tracking-[4px] text-white"
          >
            AUREX<span className="text-yellow-500">.</span>
          </Link>

          {/* close button  */}
          <button onClick={onClose} className="text-white lg:hidden">
            <FiX size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 p-3">
          {navItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={pathname === item.href}
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full border-t border-white/10 p-3">
          <button className="flex w-full items-center gap-3 px-3 py-2 text-red-400 hover:bg-red-500/10">
            <FiLogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
