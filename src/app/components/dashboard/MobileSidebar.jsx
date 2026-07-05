'use client';
import { usePathname } from "next/navigation";
import { HiX } from "react-icons/hi";
import { FiGrid, FiShoppingBag, FiUsers, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import SidebarItem from "./SidebarItem";
import { useEffect } from "react";

const MobileSidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const mainNavItems = [
    { href: "/dashboard", label: "Dashboard", icon: FiGrid },
    { href: "/dashboard/orders", label: "Orders", icon: FiShoppingBag },
    { href: "/dashboard/customers", label: "Customers", icon: FiUsers },
  ];

  const secondaryNavItems = [
    { href: "/dashboard/profile", label: "Profile", icon: FiUser },
    { href: "/dashboard/settings", label: "Settings", icon: FiSettings },
  ];

  const handleLogout = () => {
    console.log("Logging out...");
    if (onClose) onClose();
  };

  // Close mobile sidebar on press of escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[260px] bg-[#0B0B0B] border-r border-white/10 flex flex-col justify-between shadow-2xl transition-transform duration-300 rounded-none lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-white/10">
            <span className="text-xl font-bold tracking-[4px] text-white">
              AUREX<span className="text-yellow-500">.</span>
            </span>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center border border-white/10 text-gray-400 hover:text-white transition-colors duration-300 rounded-none cursor-pointer"
              aria-label="Close Sidebar"
            >
              <HiX size={20} />
            </button>
          </div>

          {/* Main Navigation Items */}
          <nav className="mt-6 flex flex-col gap-1">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <SidebarItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  active={isActive}
                  onClick={onClose}
                />
              );
            })}
          </nav>

          {/* Divider */}
          <div className="my-6 px-6">
            <hr className="border-white/10" />
          </div>

          {/* Secondary Navigation Items */}
          <nav className="flex flex-col gap-1">
            {secondaryNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <SidebarItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  active={isActive}
                  onClick={onClose}
                />
              );
            })}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-4 px-6 py-4 text-sm font-medium tracking-wide transition-colors duration-300 rounded-none cursor-pointer border-l-2 border-transparent text-red-400 hover:text-red-300 hover:bg-red-500/5 text-left font-sans"
            >
              <FiLogOut size={20} className="flex-shrink-0" />
              <span>Logout</span>
            </button>
          </nav>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 p-6">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 bg-emerald-500 rounded-none animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
              System Live
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
