"use client";
import { HiX } from "react-icons/hi";
import { useCheckout } from "@/app/hooks/useCheckout";
import OrderForm from "./OrdersForm";

const CheckoutSidebar = () => {
  const { isOpen, closeCheckout } = useCheckout();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCheckout}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-full max-w-md bg-(--foreground) shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-yellow-500/20 px-6 py-5 text-white">
          <div>
            <h5 className="text-xl font-semibold">
              Complete Your Order
            </h5>
          </div>

          <button
            onClick={closeCheckout}
            className="rounded-lg p-2 transition"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="h-[calc(100vh-85px)] overflow-y-auto p-6">
          <div className="flex h-full items-center justify-center">
            <OrderForm/>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CheckoutSidebar;
