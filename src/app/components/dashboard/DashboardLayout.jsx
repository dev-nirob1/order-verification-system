'use client';
import { useState } from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5] font-sans flex rounded-none">
      {/* Desktop Sidebar (Fixed) */}
      <Sidebar />

      {/* Mobile Drawer Sidebar */}
      <MobileSidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Main Viewport Container */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-[260px]">
        {/* Sticky Topbar */}
        <Topbar onMenuClick={() => setMobileOpen(true)} />

        {/* Content Wrapper */}
        <main className="flex-1 p-6 sm:p-8 md:p-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
