"use client";

import { useState } from "react";

const FILTERS = ["All", "Processing", "Out for Delivery", "Delivered", "Cancelled"];

const STATUS_STYLES = {
  Processing: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Out for Delivery": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  Delivered: "bg-green-500/10 text-green-400 border-green-500/20",
  Cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
};

const MOCK_ORDERS = [
  {
    id: "ORD-10293",
    date: "Jul 05, 2026",
    status: "Out for Delivery",
    total: 128.5,
    items: [
      { name: "Wireless Headphones", qty: 1, image: "🎧" },
      { name: "USB-C Cable", qty: 2, image: "🔌" },
    ],
  },
  {
    id: "ORD-10201",
    date: "Jun 28, 2026",
    status: "Delivered",
    total: 64.0,
    items: [{ name: "Ceramic Mug Set", qty: 1, image: "☕" }],
  },
  {
    id: "ORD-10088",
    date: "Jun 12, 2026",
    status: "Cancelled",
    total: 42.99,
    items: [{ name: "Phone Case", qty: 1, image: "📱" }],
  },
  {
    id: "ORD-09965",
    date: "May 30, 2026",
    status: "Processing",
    total: 219.0,
    items: [
      { name: "Desk Lamp", qty: 1, image: "💡" },
      { name: "Notebook", qty: 3, image: "📓" },
    ],
  },
];

export default function MyOrders() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredOrders =
    activeFilter === "All"
      ? MOCK_ORDERS
      : MOCK_ORDERS.filter((o) => o.status === activeFilter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">My Orders</h1>
        <p className="mt-2 text-neutral-400">
          {MOCK_ORDERS.length} orders placed so far — track, review, or reorder anytime.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              activeFilter === filter
                ? "border-yellow-500 bg-yellow-500 text-black"
                : "border-white/10 bg-[#111] text-neutral-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Order list */}
      {filteredOrders.length === 0 ? (
        <div className="rounded-lg border border-white/10 bg-[#111] p-10 text-center">
          <p className="text-lg font-medium text-white">No orders here yet</p>
          <p className="mt-1 text-sm text-neutral-400">
            Orders with this status will show up once they're placed.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="group rounded-lg border border-white/10 bg-[#111] p-5 transition hover:border-yellow-500/30"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-semibold text-white">Order #{order.id}</p>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-400">Placed on {order.date}</p>
                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold text-white">${order.total.toFixed(2)}</p>
                  <p className="text-xs text-neutral-500">
                    {order.items.reduce((sum, i) => sum + i.qty, 0)} item(s)
                  </p>
                </div>
              </div>

              {/* Item preview row */}
              <div className="mt-4 flex items-center gap-3 border-t border-white/5 pt-4">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-md border border-white/10 bg-[#0b0b0b] px-3 py-1.5"
                  >
                    <span className="text-lg leading-none">{item.image}</span>
                    <span className="text-sm text-neutral-300">
                      {item.name} <span className="text-neutral-500">×{item.qty}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-end gap-3">
                <button className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-neutral-300 transition hover:border-white/20 hover:text-white">
                  View Details
                </button>
                {order.status !== "Cancelled" && order.status !== "Delivered" && (
                  <button className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-yellow-400">
                    Track Order
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}