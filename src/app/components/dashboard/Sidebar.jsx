"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiX,
  FiTruck,
} from "react-icons/fi";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
import { useSidebar } from "@/app/hooks/useSidebar";

const adminNavItems = [
  { href: "/admin", label: "Dashboard", icon: FiGrid },
  { href: "/admin/orders", label: "Orders", icon: FiShoppingBag },
  { href: "/admin/customers", label: "Customers", icon: FiUsers },
  { href: "/admin/settings", label: "Settings", icon: FiSettings },
];

const userNavItems = [
  { href: "/users", label: "Overview", icon: FiGrid },
  { href: "/users/my-orders", label: "My Orders", icon: FiShoppingBag },
  { href: "/users/track-order", label: "Track Order", icon: FiTruck },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { isSidebarOpen, closeSidebar } = useSidebar();

  const [activeTab, setActiveTab] = useState(
    pathname.startsWith("/admin") ? "admin" : "user"
  );

  const navItems = activeTab === "admin" ? adminNavItems : userNavItems;

  return (
    <>
      {/* overlaping  */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-[#0B0B0B] border-r border-white/10 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
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
          <button onClick={closeSidebar} className="text-white lg:hidden">
            <FiX size={22} />
          </button>
        </div>

        {/* Dev Tab Switcher */}
        <div className="flex gap-1 p-3">
          <button
            onClick={() => setActiveTab("user")}
            className={`flex-1 py-2 text-xs font-medium transition ${
              activeTab === "user"
                ? "bg-yellow-500 text-black"
                : "border border-white/10 text-[#F5F5F5]/60 hover:bg-white/5"
            }`}
          >
            User
          </button>
          <button
            onClick={() => setActiveTab("admin")}
            className={`flex-1 py-2 text-xs font-medium transition ${
              activeTab === "admin"
                ? "bg-yellow-500 text-black"
                : "border border-white/10 text-[#F5F5F5]/60 hover:bg-white/5"
            }`}
          >
            Admin
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 p-3 pt-0">
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