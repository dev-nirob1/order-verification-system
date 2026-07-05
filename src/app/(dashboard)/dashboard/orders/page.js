"use client";

import { useEffect, useState } from "react";

const initialOrders = [
  {
    id: "ORD-101",
    customer: "Hasan Mahmud",
    phone: "01712-345678",
    address: "House 12, Road 4, Dhanmondi, Dhaka",
    verification: "trusted",
    orderStatus: "approved",
    deliveryStatus: "shipped",
    courierHistory: { delivered: 8, cancelled: 2, returned: 1 },
    notes: "",
  },
  {
    id: "ORD-102",
    customer: "Farzana Akter",
    phone: "01898-765432",
    address: "Flat 3B, Green Road, Dhaka",
    verification: "needs_verification",
    orderStatus: "pending",
    deliveryStatus: "order_received",
    courierHistory: { delivered: 3, cancelled: 3, returned: 2 },
    notes: "",
  },
  {
    id: "ORD-103",
    customer: "Rakibul Islam",
    phone: "01611-223344",
    address: "Village: Kashimpur, Gazipur",
    verification: "review_required",
    orderStatus: "pending",
    deliveryStatus: "order_received",
    courierHistory: { delivered: 1, cancelled: 5, returned: 3 },
    notes: "",
  },
  {
    id: "ORD-104",
    customer: "Nusrat Jahan",
    phone: "01922-556677",
    address: "House 45, Sector 7, Uttara, Dhaka",
    verification: "trusted",
    orderStatus: "approved",
    deliveryStatus: "delivered",
    courierHistory: { delivered: 12, cancelled: 0, returned: 0 },
    notes: "Regular customer, always accepts delivery.",
  },
  {
    id: "ORD-105",
    customer: "Tanvir Ahmed",
    phone: "01555-889900",
    address: "Holding 9, Pahartali, Chattogram",
    verification: "needs_verification",
    orderStatus: "rejected",
    deliveryStatus: "order_received",
    courierHistory: { delivered: 4, cancelled: 4, returned: 1 },
    notes: "",
  },
  {
    id: "ORD-106",
    customer: "Mim Sultana",
    phone: "01777-112233",
    address: "House 2, Road 9, Bashundhara, Dhaka",
    verification: "trusted",
    orderStatus: "cancelled",
    deliveryStatus: "order_received",
    courierHistory: { delivered: 6, cancelled: 1, returned: 0 },
    notes: "",
  },
];

const tabs = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
  { value: "cancelled", label: "Cancelled" },
];

const verificationConfig = {
  trusted: {
    label: "Trusted",
    dot: "bg-emerald-400",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  needs_verification: {
    label: "Needs Verification",
    dot: "bg-yellow-500",
    text: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  review_required: {
    label: "Review Required",
    dot: "bg-rose-400",
    text: "text-rose-400",
    bg: "bg-rose-500/10",
  },
};

const deliveryConfig = {
  order_received: {
    label: "Order Received",
    text: "text-[#F5F5F5]/70",
    bg: "bg-white/5",
  },
  packed: { label: "Packed", text: "text-indigo-300", bg: "bg-indigo-500/10" },
  shipped: { label: "Shipped", text: "text-blue-300", bg: "bg-blue-500/10" },
  out_for_delivery: {
    label: "Out for Delivery",
    text: "text-purple-300",
    bg: "bg-purple-500/10",
  },
  delivered: {
    label: "Delivered",
    text: "text-emerald-300",
    bg: "bg-emerald-500/10",
  },
};

const orderStatusOptions = [
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
  { value: "cancelled", label: "Cancelled" },
];

const orderStatusSelectStyle = {
  pending:
    "border-yellow-500/40 text-yellow-400 bg-yellow-500/10 focus:ring-yellow-500/40",
  approved:
    "border-emerald-500/40 text-emerald-400 bg-emerald-500/10 focus:ring-emerald-500/40",
  rejected:
    "border-rose-500/40 text-rose-400 bg-rose-500/10 focus:ring-rose-500/40",
  cancelled: "border-white/20 text-[#F5F5F5]/60 bg-white/5 focus:ring-white/20",
};

const deliverySteps = [
  { value: "order_received", label: "Order Received" },
  { value: "packed", label: "Packed" },
  { value: "shipped", label: "Shipped" },
  { value: "out_for_delivery", label: "Out for Delivery" },
  { value: "delivered", label: "Delivered" },
];

function getRecommendation(history) {
  const { delivered, cancelled, returned } = history;
  const total = delivered + cancelled + returned;
  if (total === 0) {
    return {
      label: "Needs Verification",
      text: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      note: "No courier history found for this customer yet.",
    };
  }
  const failRate = (cancelled + returned) / total;
  if (failRate <= 0.2) {
    return {
      label: "Trusted Customer",
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      note: "Strong delivery acceptance history. Safe to approve.",
    };
  }
  if (failRate <= 0.5) {
    return {
      label: "Needs Verification",
      text: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      note: "Mixed history. Consider calling to confirm before shipping.",
    };
  }
  return {
    label: "Review Required",
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    note: "High cancellation/return rate. Verify carefully before approving.",
  };
}

function VerificationBadge({ status }) {
  const c = verificationConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${c.bg} ${c.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}

function DeliveryBadge({ status }) {
  const c = deliveryConfig[status];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${c.bg} ${c.text}`}
    >
      {c.label}
    </span>
  );
}

function OrderDrawer({ order, onClose, onUpdateDeliveryStatus, onDecision }) {
  const [draftDelivery, setDraftDelivery] = useState(order.deliveryStatus);
  const recommendation = getRecommendation(order.courierHistory);
  const currentStepIndex = deliverySteps.findIndex(
    (s) => s.value === order.deliveryStatus,
  );

  function handleSave() {
    onUpdateDeliveryStatus(order.id, draftDelivery);
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative flex h-full w-full max-w-md flex-col bg-[#0F0F0F] border-l border-white/10 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <h2 className="text-base font-semibold text-[#F5F5F5]">
              {order.id}
            </h2>
            <p className="text-xs text-[#F5F5F5]/40">Order details</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-[#F5F5F5]/40 hover:bg-white/5 hover:text-[#F5F5F5]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
          {/* Customer Information */}
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40 mb-2">
              Customer Information
            </h3>
            <div className="rounded-lg border border-white/10 p-3 text-sm space-y-1">
              <p className="font-medium text-[#F5F5F5]">{order.customer}</p>
              <p className="text-[#F5F5F5]/70">{order.phone}</p>
              <p className="text-[#F5F5F5]/40">{order.address}</p>
            </div>
          </section>

          {/* Courier History */}
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40 mb-2">
              Courier History
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-emerald-500/10 px-3 py-2 text-center">
                <p className="text-lg font-semibold text-emerald-400">
                  {order.courierHistory.delivered}
                </p>
                <p className="text-[11px] text-emerald-400/70">Delivered</p>
              </div>
              <div className="rounded-lg bg-rose-500/10 px-3 py-2 text-center">
                <p className="text-lg font-semibold text-rose-400">
                  {order.courierHistory.cancelled}
                </p>
                <p className="text-[11px] text-rose-400/70">Cancelled</p>
              </div>
              <div className="rounded-lg bg-yellow-500/10 px-3 py-2 text-center">
                <p className="text-lg font-semibold text-yellow-400">
                  {order.courierHistory.returned}
                </p>
                <p className="text-[11px] text-yellow-400/70">Returned</p>
              </div>
            </div>
          </section>

          {/* Recommendation */}
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40 mb-2">
              Recommendation
            </h3>
            <div
              className={`rounded-lg border px-3 py-2.5 ${recommendation.bg} ${recommendation.border}`}
            >
              <p className={`text-sm font-semibold ${recommendation.text}`}>
                {recommendation.label}
              </p>
              <p className="mt-0.5 text-xs text-[#F5F5F5]/50">
                {recommendation.note}
              </p>
            </div>
          </section>

          {/* Tracking Timeline */}
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40 mb-2">
              Tracking Timeline
            </h3>
            <ol className="space-y-3">
              {deliverySteps.map((step, i) => {
                const done = i <= currentStepIndex;
                return (
                  <li key={step.value} className="flex items-center gap-3">
                    <span
                      className={`flex h-5 w-5 flex-none items-center justify-center rounded-full text-[10px] ${
                        done
                          ? "bg-yellow-500 text-black"
                          : "bg-white/10 text-[#F5F5F5]/30"
                      }`}
                    >
                      {done ? "✓" : ""}
                    </span>
                    <span
                      className={`text-sm ${done ? "text-[#F5F5F5]" : "text-[#F5F5F5]/30"}`}
                    >
                      {step.label}
                    </span>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* Update Delivery Status */}
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40 mb-2">
              Update Delivery Status
            </h3>
            <select
              value={draftDelivery}
              onChange={(e) => setDraftDelivery(e.target.value)}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-[#F5F5F5] outline-none focus:ring-2 focus:ring-yellow-500/40"
            >
              {deliverySteps.map((step) => (
                <option
                  key={step.value}
                  value={step.value}
                  className="bg-[#0F0F0F]"
                >
                  {step.label}
                </option>
              ))}
            </select>
          </section>
        </div>

        <div className="border-t border-white/10 px-5 py-4 space-y-2">
          <button
            onClick={handleSave}
            className="w-full rounded-lg bg-yellow-500 py-2 text-sm font-semibold text-black hover:bg-yellow-400"
          >
            Save
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => onDecision(order.id, "approved")}
              className="flex-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20"
            >
              Approve
            </button>
            <button
              onClick={() => onDecision(order.id, "rejected")}
              className="flex-1 rounded-lg border border-rose-500/30 bg-rose-500/10 py-2 text-sm font-medium text-rose-400 hover:bg-rose-500/20"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function getStatusFromUrl() {
  if (typeof window === "undefined") return "all";
  const params = new URLSearchParams(window.location.search);
  return params.get("status") || "all";
}

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  // Read ?status= from the URL once mounted, and keep in sync with back/forward navigation.
  useEffect(() => {
    setActiveTab(getStatusFromUrl());
    function handlePopState() {
      setActiveTab(getStatusFromUrl());
    }
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const selectedOrder = orders.find((o) => o.id === selectedOrderId) || null;
  const filteredOrders =
    activeTab === "all"
      ? orders
      : orders.filter((o) => o.orderStatus === activeTab);

  function goToTab(value) {
    const params = new URLSearchParams(window.location.search);
    if (value === "all") {
      params.delete("status");
    } else {
      params.set("status", value);
    }
    const query = params.toString();
    const newUrl = `${window.location.pathname}${query ? `?${query}` : ""}`;
    window.history.pushState({}, "", newUrl);
    setActiveTab(value);
  }

  function updateOrderStatus(id, status) {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, orderStatus: status } : o)),
    );
  }

  function updateDeliveryStatus(id, status) {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, deliveryStatus: status } : o)),
    );
  }

  function handleDecision(id, status) {
    updateOrderStatus(id, status);
    setSelectedOrderId(null);
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] px-4 py-8 sm:px-8 text-[#F5F5F5]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-[#F5F5F5]">Orders</h1>
          <p className="mt-1 text-sm text-[#F5F5F5]/40">
            {orders.length} orders · verification runs automatically on new
            orders
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-4 flex gap-1 border-b border-white/10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => goToTab(tab.value)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-yellow-400"
                    : "text-[#F5F5F5]/40 hover:text-[#F5F5F5]/70"
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-yellow-500" />
                )}
              </button>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111111]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wide text-[#F5F5F5]/40">
                  <th className="px-4 py-3 font-medium">Order ID</th>
                  <th className="px-4 py-3 font-medium">Customer</th>
                  <th className="px-4 py-3 font-medium">Phone</th>
                  <th className="px-4 py-3 font-medium">Verification</th>
                  <th className="px-4 py-3 font-medium">Order Status</th>
                  <th className="px-4 py-3 font-medium">Delivery Status</th>
                  <th className="px-4 py-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-white/[0.03]">
                    <td className="px-4 py-3 font-medium text-[#F5F5F5]">
                      {order.id}
                    </td>
                    <td className="px-4 py-3 text-[#F5F5F5]/80">
                      {order.customer}
                    </td>
                    <td className="px-4 py-3 text-[#F5F5F5]/40">
                      {order.phone}
                    </td>
                    <td className="px-4 py-3">
                      <VerificationBadge status={order.verification} />
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={order.orderStatus}
                        onChange={(e) =>
                          updateOrderStatus(order.id, e.target.value)
                        }
                        className={`rounded-md border px-2 py-1.5 text-xs font-medium outline-none focus:ring-2 ${orderStatusSelectStyle[order.orderStatus]}`}
                      >
                        {orderStatusOptions.map((opt) => (
                          <option
                            key={opt.value}
                            value={opt.value}
                            className="bg-[#111111]"
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <DeliveryBadge status={order.deliveryStatus} />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => setSelectedOrderId(order.id)}
                        className="rounded-md border border-white/15 px-3 py-1.5 text-xs font-medium text-[#F5F5F5]/80 transition-colors hover:bg-white/10"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredOrders.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-10 text-center text-sm text-[#F5F5F5]/30"
                    >
                      No orders in this tab.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedOrder && (
        <OrderDrawer
          order={selectedOrder}
          onClose={() => setSelectedOrderId(null)}
          onUpdateDeliveryStatus={updateDeliveryStatus}
          onDecision={handleDecision}
        />
      )}
    </div>
  );
}
