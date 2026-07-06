"use client";
import { HiX } from "react-icons/hi";
import { useCheckout } from "@/app/hooks/useCheckout";
import CheckoutProcess from "./CheckoutProcess";

const CheckoutSidebar = () => {
  const { isOpen, closeCheckout } = useCheckout();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCheckout}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-full max-w-md bg-[#0c0b0a] shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h5 className="font-serif text-lg text-gray-300">
            Your Order
          </h5>

          <button
            onClick={closeCheckout}
            aria-label="Close"
            className="rounded-md p-2 text-gray-300 transition hover:bg-white/5 hover:text-[#C9A66B]"
          >
            <HiX className="h-5 w-5" />
          </button>
        </div>

        {/* Content with form and payment options */}
        <div className="h-[calc(100vh-65px)] overflow-y-auto px-6 py-6 text-[#ECE7DC]">
          
        <CheckoutProcess/>
        </div>
      </aside>
    </>
  );
};

export default CheckoutSidebar;