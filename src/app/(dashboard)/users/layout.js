"use client";

import Sidebar from "@/app/components/dashboard/Sidebar";
import Topbar from "@/app/components/dashboard/Topbar";
import { SidebarProvider } from "@/app/contextProvider/SidebarContext";

export default function UsersLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <SidebarProvider>
        <Sidebar />
        <div className="flex flex-col flex-1 lg:pl-65">
          <Topbar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
}
