'use client'
const steps = [
  { title: "Order Confirmed", detail: "08 July 2026, 4:10 PM", state: "done" },
  { title: "Out for Delivery", detail: "Your order is on the way.", state: "current" },
  { title: "Delivered", detail: "Not yet delivered", state: "pending" },
];

const TrackOrderPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-[#F5F5F5]">Track Order</h1>
        <p className="mt-1 text-sm text-[#F5F5F5]/40">
          Live status of your current order.
        </p>
      </div>

      {/* Order Summary Bar */}
      <div className="flex flex-col gap-3 border border-white/10 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-[#F5F5F5]/40">Order ID</p>
          <p className="font-medium text-[#F5F5F5]">ORD-10245</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-[#F5F5F5]/40">Expected Delivery</p>
          <p className="font-medium text-[#F5F5F5]">12 July 2026</p>
        </div>
        <span className="inline-flex items-center bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-400">
          Processing
        </span>
      </div>

      {/* Tracking Timeline */}
      <div className="border border-white/10 p-6">
        <h3 className="mb-6 text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40">
          Order Progress
        </h3>

        <div className="relative space-y-8 pl-8">
          <div className="absolute left-1.75 top-1 bottom-1 w-px bg-white/10" />

          {steps.map((step) => (
            <div className="relative" key={step.title}>
              <span
                className={`absolute -left-8 top-0.5 h-3.5 w-3.5 ${
                  step.state === "done"
                    ? "bg-yellow-500"
                    : step.state === "current"
                    ? "border-2 border-yellow-500 bg-black"
                    : "border border-white/20 bg-transparent"
                }`}
              />
              <p
                className={`text-sm font-medium ${
                  step.state === "pending" ? "text-[#F5F5F5]/40" : "text-[#F5F5F5]"
                }`}
              >
                {step.title}
              </p>
              <p
                className={`mt-0.5 text-xs ${
                  step.state === "pending" ? "text-[#F5F5F5]/25" : "text-[#F5F5F5]/40"
                }`}
              >
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Info */}
      <div className="border border-white/10 p-4">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40">
          Delivery Address
        </h3>
        <p className="text-sm font-medium text-[#F5F5F5]">Al Hasan Nirob</p>
        <p className="mt-1 text-sm text-[#F5F5F5]/40">
          House 12, Road 4, Dhanmondi, Dhaka
        </p>
      </div>
    </div>
  );
};

export default TrackOrderPage;