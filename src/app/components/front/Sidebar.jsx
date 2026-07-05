'use client';
import { useSidebar } from "../../context/SidebarContext";
import { HiX } from "react-icons/hi";
import OrderForm from "./Order";
import { useEffect, useRef } from "react";

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();
  const sidebarRef = useRef(null);

  // Close sidebar on pressing escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeSidebar();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeSidebar]);

  // Lock body scroll when sidebar is open
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
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar Drawer */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 right-0 z-50 h-screen w-full sm:w-[480px] border-l border-white/10 bg-[#0B0B0B]/95 backdrop-blur-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.8)] transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <h2 className="text-xl font-bold uppercase tracking-[2px] text-white">
              Complete Order
            </h2>
            <button
              onClick={closeSidebar}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-white/5 cursor-pointer"
              aria-label="Close Sidebar"
            >
              <HiX size={20} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <OrderForm isSidebar={true} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
