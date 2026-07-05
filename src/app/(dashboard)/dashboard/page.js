'use client';
import React from "react";
import {
  FiShoppingBag,
  FiClock,
  FiAlertCircle,
  FiPackage,
  FiCheckCircle,
  FiDollarSign,
  FiArrowUpRight,
  FiArrowDownRight,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Orders",
    value: "1,280",
    change: "+12.5%",
    trend: "up",
    timeframe: "vs last month",
    icon: FiShoppingBag,
  },
  {
    title: "Today's Orders",
    value: "42",
    change: "+8.2%",
    trend: "up",
    timeframe: "vs yesterday",
    icon: FiClock,
  },
  {
    title: "Pending Verification",
    value: "18",
    change: "-4.3%",
    trend: "down",
    timeframe: "vs yesterday",
    icon: FiAlertCircle,
  },
  {
    title: "Ready to Ship",
    value: "25",
    change: "+15.0%",
    trend: "up",
    timeframe: "vs last week",
    icon: FiPackage,
  },
  {
    title: "Delivered Orders",
    value: "1,195",
    change: "+93.4%",
    trend: "up",
    timeframe: "all-time rate",
    icon: FiCheckCircle,
  },
  {
    title: "Total Revenue",
    value: "$15,240",
    change: "+18.2%",
    trend: "up",
    timeframe: "vs last month",
    icon: FiDollarSign,
  },
];

const Dashboard = () => {
  // Format current date matching the design
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col gap-8 rounded-none">
      {/* Page Header */}
      <div className="flex flex-col gap-1.5 rounded-none">
        <h2 className="text-2xl font-bold tracking-wider text-white uppercase">
          Overview
        </h2>
        <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
          {currentDate}
        </p>
      </div>

      {/* Grid Layout for Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-none">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isUp = stat.trend === "up";
          const TrendIcon = isUp ? FiArrowUpRight : FiArrowDownRight;

          return (
            <div
              key={index}
              className="flex flex-col justify-between border border-white/10 bg-white/[0.02] p-6 hover:border-yellow-500/30 hover:-translate-y-1 transition-all duration-300 rounded-none group hover:shadow-[0_10px_30px_rgba(234,179,8,0.02)] cursor-pointer"
            >
              {/* Card Top Row */}
              <div className="flex items-start justify-between rounded-none">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold group-hover:text-neutral-300 transition-colors duration-300">
                  {stat.title}
                </span>
                <span className="flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-400 group-hover:border-yellow-500/40 group-hover:text-yellow-500 transition-all duration-300 rounded-none bg-white/5">
                  <Icon size={18} />
                </span>
              </div>

              {/* Card Value */}
              <div className="mt-4 rounded-none">
                <h3 className="text-3xl font-bold tracking-tight text-white font-numbers group-hover:text-yellow-500 transition-colors duration-300">
                  {stat.value}
                </h3>
              </div>

              {/* Card Footer Trend Info */}
              <div className="mt-4 flex items-center gap-2 text-xs rounded-none">
                <span
                  className={`flex items-center gap-0.5 font-semibold px-2 py-0.5 rounded-none ${
                    isUp
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-rose-500/10 text-rose-400"
                  }`}
                >
                  <TrendIcon size={12} />
                  {stat.change}
                </span>
                <span className="text-neutral-400 font-medium">
                  {stat.timeframe}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
