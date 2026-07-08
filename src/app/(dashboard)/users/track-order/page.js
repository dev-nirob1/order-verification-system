"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { key: "received", label: "Order Received" },
  { key: "processing", label: "Processing" },
  { key: "out_for_delivery", label: "Out for Delivery" },
  { key: "delivered", label: "Delivered" },
];

export default function TrackOrder() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // TODO: replace with GET /api/orders/me
    setOrder({
      id: "ORD-10293",
      currentStep: "out_for_delivery", // received | processing | out_for_delivery | delivered
      eta: "Jul 09, 2026",
      timestamps: {
        received: "Jul 05, 10:20 AM",
        processing: "Jul 06, 2:15 PM",
        out_for_delivery: "Jul 07, 8:00 AM",
      },
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Track Order</h1>
        <p className="mt-2 text-neutral-400">Here's the live status of your recent order.</p>
      </div>

      <div className="rounded-lg border border-white/10 bg-[#111] p-6">
        {!order ? (
          <p className="text-sm text-neutral-400">Loading your order status...</p>
        ) : (
          <div className="mt-2 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-yellow-500">Order #{order.id}</p>
              {order.eta && (
                <p className="text-xs text-neutral-400">Estimated: {order.eta}</p>
              )}
            </div>

            <div className="mt-5 flex items-start justify-between">
              {STEPS.map((step, index) => {
                const currentIndex = STEPS.findIndex((s) => s.key === order.currentStep);
                const isDone = index < currentIndex;
                const isCurrent = index === currentIndex;
                const isUpcoming = index > currentIndex;

                return (
                  <div key={step.key} className="flex flex-1 flex-col items-center text-center">
                    <div className="flex w-full items-center">
                      <div
                        className={`h-0.5 flex-1 ${
                          index === 0
                            ? "opacity-0"
                            : index <= currentIndex
                            ? "bg-yellow-500"
                            : "bg-white/10"
                        }`}
                      />
                      <div
                        className={`mx-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                          isDone
                            ? "border-yellow-500 bg-yellow-500"
                            : isCurrent
                            ? "border-yellow-500 bg-[#0b0b0b] animate-pulse"
                            : "border-white/20 bg-[#0b0b0b]"
                        }`}
                      >
                        {isDone && <span className="text-[10px] font-bold text-black">✓</span>}
                      </div>
                      <div
                        className={`h-0.5 flex-1 ${
                          index === STEPS.length - 1
                            ? "opacity-0"
                            : index < currentIndex
                            ? "bg-yellow-500"
                            : "bg-white/10"
                        }`}
                      />
                    </div>

                    <p className={`mt-2 text-xs font-medium ${isUpcoming ? "text-neutral-500" : "text-white"}`}>
                      {step.label}
                    </p>
                    {order.timestamps?.[step.key] && (
                      <p className="mt-1 text-[11px] text-neutral-500">{order.timestamps[step.key]}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}