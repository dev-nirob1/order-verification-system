"use client";

import useDrawer from "@/app/hooks/useDrawer";
import CustomerDrawer from "./CustomerDrawer";
import OrdersDrawer from "./OrdersDrawer";
import MyOrderDrawer from "./MyOrderDrawer";

const Drawer =()=> {
  const { drawer, closeDrawer } = useDrawer();

  if (!drawer.type) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={closeDrawer} />

      {/* panel */}
      <div className="relative flex h-full w-full max-w-md flex-col bg-[#0F0F0F] border-l border-white/10 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <h2 className="text-base font-semibold text-[#F5F5F5]">
              {drawer.type === "customer" && "Customer history"}
              {drawer.type === "order" && "Order history"}
            </h2>
          </div>
          <button
            onClick={closeDrawer}
            className="p-1.5 text-[#F5F5F5]/40 hover:bg-white/5 hover:text-[#F5F5F5]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
          {drawer.type === "customer" && (
            <CustomerDrawer customer={drawer.data} />
          )}
          {drawer.type === "order" && <OrdersDrawer order={drawer.data} />}
          {drawer.type === "my-order" && <MyOrderDrawer order={drawer.data} />}
        </div>
      </div>
    </div>
  );
}
export default Drawer;