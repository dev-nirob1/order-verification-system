"use client";

import {
  FiShoppingBag,
  FiAlertCircle,
  FiDollarSign,
  FiArrowRight,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Orders",
    value: "1,280",
    subtitle: "All Orders",
    icon: FiShoppingBag,
  },
  {
    title: "Pending Review",
    value: "18",
    subtitle: "Needs Approval",
    icon: FiAlertCircle,
  },
  {
    title: "Revenue",
    value: "৳2,45,000",
    subtitle: "Total Sales",
    icon: FiDollarSign,
  },
];

const reviewOrders = [
  {
    id: "#ORD-1024",
    customer: "Hasan",
    phone: "017XXXXXXXX",
    status: "Trusted",
  },
  {
    id: "#ORD-1025",
    customer: "Rahim",
    phone: "018XXXXXXXX",
    status: "Review",
  },
  {
    id: "#ORD-1026",
    customer: "Karim",
    phone: "019XXXXXXXX",
    status: "High Risk",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-neutral-400">
          Welcome back. Here&apos;s today&apos;s overview.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-[#111] p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-400">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-white">
                    {item.value}
                  </h2>

                  <p className="mt-1 text-xs text-neutral-500">
                    {item.subtitle}
                  </p>
                </div>

                <div className="rounded-lg bg-yellow-500/10 p-3 text-yellow-500">
                  <Icon size={22} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <div className="rounded-xl border border-white/10 bg-[#111] p-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-semibold text-white">
            Recent Orders
          </h3>

          <button className="text-sm text-yellow-500">
            View All
          </button>
        </div>

        <div className="text-neutral-400">
          Your latest orders will appear here...
        </div>
      </div>
    </div>
  );
}