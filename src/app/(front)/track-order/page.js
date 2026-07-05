'use client';
import { useState } from "react";
import { FiSearch, FiPackage, FiCheckCircle, FiTruck, FiMapPin, FiClock, FiAlertCircle } from "react-icons/fi";

const orderStatuses = [
  {
    id: "placed",
    label: "Order Placed",
    description: "Your order has been received and confirmed.",
    icon: FiCheckCircle,
    time: "Jul 5, 2026 — 10:32 AM",
  },
  {
    id: "verified",
    label: "Order Verified",
    description: "Our team has verified your order details.",
    icon: FiAlertCircle,
    time: "Jul 5, 2026 — 11:00 AM",
  },
  {
    id: "processing",
    label: "Processing",
    description: "Your order is being packed and prepared.",
    icon: FiPackage,
    time: "Jul 5, 2026 — 12:15 PM",
  },
  {
    id: "shipped",
    label: "Shipped",
    description: "Your package is on its way to you.",
    icon: FiTruck,
    time: null,
  },
  {
    id: "delivered",
    label: "Delivered",
    description: "Your order has been delivered. Enjoy!",
    icon: FiMapPin,
    time: null,
  },
];

// Simulated result for demo
const mockOrder = {
  id: "ORD-20260705-001",
  product: "AUREX Pro Watch",
  customer: "John Doe",
  currentStep: 2, // 0-indexed — currently at "Processing"
  estimatedDelivery: "Jul 8 – Jul 10, 2026",
};

const TrackOrderPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTrack = () => {
    setError("");
    setOrderData(null);
    if (!inputValue.trim()) {
      setError("Please enter your Order ID.");
      return;
    }
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      if (inputValue.trim().toUpperCase() === mockOrder.id.toUpperCase()) {
        setOrderData(mockOrder);
      } else {
        setError("Order not found. Please check your Order ID and try again.");
      }
      setLoading(false);
    }, 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleTrack();
  };

  return (
    <section className="min-h-screen w-full bg-[#0B0B0B] px-6 py-24">
      <div className="mx-auto max-w-xl w-full">

        {/* Page Header */}
        <div className="mb-10 text-center">
          <div className="relative inline-flex mb-6">
            <div className="absolute inset-0 bg-yellow-500/10 blur-2xl scale-150" />
            <div className="relative flex h-16 w-16 items-center justify-center border border-yellow-500/30 bg-yellow-500/5">
              <FiTruck size={28} className="text-yellow-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-[3px] text-white mb-2">
            Track Order
          </h1>
          <p className="text-sm text-neutral-400">
            Enter your Order ID to view real-time shipment updates.
          </p>
        </div>

        {/* Search Input */}
        <div className="flex gap-0 mb-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g. ORD-20260705-001"
            className={`flex-1 border bg-white/5 px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500 rounded-none ${
              error ? "border-red-500/60" : "border-white/15"
            }`}
          />
          <button
            onClick={handleTrack}
            disabled={loading}
            className="flex items-center gap-2 border border-yellow-500 bg-yellow-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-900 transition-all duration-300 hover:bg-yellow-400 hover:border-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed rounded-none cursor-pointer"
          >
            {loading ? (
              <span className="h-4 w-4 border-2 border-neutral-900/40 border-t-neutral-900 rounded-full animate-spin inline-block" />
            ) : (
              <FiSearch size={16} />
            )}
            {loading ? "Searching..." : "Track"}
          </button>
        </div>

        {/* Demo hint */}
        <p className="text-[11px] text-neutral-600 uppercase tracking-widest mb-10">
          Demo ID: <span className="text-yellow-500/60">ORD-20260705-001</span>
        </p>

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-3 border border-red-500/20 bg-red-500/5 px-5 py-4 text-sm text-red-400 mb-8">
            <FiAlertCircle size={16} className="flex-shrink-0" />
            {error}
          </div>
        )}

        {/* Order Result Panel */}
        {orderData && (
          <div className="flex flex-col gap-0 border border-white/10 bg-white/[0.02]">

            {/* Order Summary Header */}
            <div className="px-6 py-5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-semibold">
                  Order ID
                </p>
                <p className="text-sm font-bold text-white tracking-wider">
                  {orderData.id}
                </p>
              </div>
              <div className="sm:text-right">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-semibold">
                  Product
                </p>
                <p className="text-sm font-semibold text-yellow-500">
                  {orderData.product}
                </p>
              </div>
            </div>

            <div className="px-6 py-5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-semibold">
                  Customer
                </p>
                <p className="text-sm text-white">{orderData.customer}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-semibold">
                  Est. Delivery
                </p>
                <p className="text-sm text-emerald-400 flex items-center gap-1.5 sm:justify-end">
                  <FiClock size={13} />
                  {orderData.estimatedDelivery}
                </p>
              </div>
            </div>

            {/* Status Timeline */}
            <div className="px-6 py-6 flex flex-col gap-0">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-5 font-semibold">
                Order Status
              </p>

              {orderStatuses.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = index <= orderData.currentStep;
                const isCurrent = index === orderData.currentStep;
                const isLast = index === orderStatuses.length - 1;

                return (
                  <div key={step.id} className="flex gap-4">
                    {/* Icon + connector line */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center border transition-colors duration-300 ${
                          isCurrent
                            ? "border-yellow-500 bg-yellow-500/10 text-yellow-500"
                            : isCompleted
                            ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
                            : "border-white/10 bg-white/5 text-white/20"
                        }`}
                      >
                        <Icon size={15} />
                      </div>
                      {!isLast && (
                        <div
                          className={`w-[1px] flex-1 my-1 min-h-[24px] transition-colors duration-300 ${
                            isCompleted && index < orderData.currentStep
                              ? "bg-emerald-500/30"
                              : "bg-white/10"
                          }`}
                        />
                      )}
                    </div>

                    {/* Text content */}
                    <div className={`pb-6 ${isLast ? "pb-0" : ""}`}>
                      <p
                        className={`text-sm font-semibold tracking-wide leading-tight ${
                          isCurrent
                            ? "text-yellow-500"
                            : isCompleted
                            ? "text-white"
                            : "text-white/25"
                        }`}
                      >
                        {step.label}
                        {isCurrent && (
                          <span className="ml-2 text-[10px] uppercase tracking-widest font-bold text-yellow-500/70">
                            ← Current
                          </span>
                        )}
                      </p>
                      <p
                        className={`text-xs mt-0.5 ${
                          isCompleted ? "text-neutral-400" : "text-white/20"
                        }`}
                      >
                        {step.description}
                      </p>
                      {step.time && isCompleted && (
                        <p className="text-[11px] text-neutral-600 mt-1 uppercase tracking-wider">
                          {step.time}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Branding Footer */}
        <p className="mt-10 text-center text-[11px] uppercase tracking-widest text-neutral-600">
          AUREX<span className="text-yellow-500">.</span> — Order Tracking
        </p>

      </div>
    </section>
  );
};

export default TrackOrderPage;