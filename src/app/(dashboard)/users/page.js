"use client";

import Link from "next/link";
import { FiPackage, FiMapPin } from "react-icons/fi";

const quickLinks = [
  {
    title: "My Orders",
    description: "View all your placed orders and order history.",
    href: "/users/my-orders",
    icon: FiPackage,
  },
  {
    title: "Track Order",
    description: "Check the current status of your shipment.",
    href: "/users/track-order",
    icon: FiMapPin,
  },
];

export default function UsersDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">User Dashboard</h1>
        <p className="mt-2 text-neutral-400">
          Manage your orders and track deliveries from one place.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {quickLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-lg border border-white/10 bg-[#111] p-6 transition hover:border-yellow-500/40 hover:bg-[#151515]"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-yellow-500/10 p-3 text-yellow-500">
                  <Icon size={22} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-1 text-sm text-neutral-400">{item.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
