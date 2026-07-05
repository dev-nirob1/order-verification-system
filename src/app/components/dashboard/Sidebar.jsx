'use client';
import { usePathname } from "next/navigation";
import { FiGrid, FiShoppingBag, FiUsers, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
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
  };

  return (
    <aside className="fixed top-0 left-0 z-30 hidden h-screen w-[260px] flex-col justify-between border-r border-white/10 bg-[#0B0B0B] rounded-none lg:flex">
      <div>
        {/* Brand / Logo */}
        <div className="flex h-16 items-center px-8 border-b border-white/10">
          <span className="text-xl font-bold tracking-[4px] text-white">
            AUREX<span className="text-yellow-500">.</span>
          </span>
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
              />
            );
          })}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-4 text-sm font-medium tracking-wide transition-colors duration-300 rounded-none cursor-pointer border-l-2 border-transparent text-red-400 hover:text-red-300 hover:bg-red-500/5 text-left"
          >
            <FiLogOut size={20} className="flex-shrink-0" />
            <span>Logout</span>
          </button>
        </nav>
      </div>

      {/* Footer / System Status */}
      <div className="border-t border-white/10 p-6">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 bg-emerald-500 rounded-none animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            System Live
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
