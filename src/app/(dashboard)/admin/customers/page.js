"use client";

import TableContainer from "@/app/components/ui/table/TableContainer";
import TableData from "@/app/components/ui/table/TableData";
import TableHeader from "@/app/components/ui/table/TableHeader";
import TableRow from "@/app/components/ui/table/TableRow";
import { useState } from "react";

const customers = [
  {
    id: "CUST-101",
    name: "Hasan Mahmud",
    phone: "01712-345678",
    address: "House 12, Road 4, Dhanmondi, Dhaka",
    totalOrders: 11,
    courierHistory: { delivered: 8, cancelled: 2, returned: 1 },
    notes: "Regular customer, always accepts delivery.",
  },
  {
    id: "CUST-102",
    name: "Farzana Akter",
    phone: "01898-765432",
    address: "Flat 3B, Green Road, Dhaka",
    totalOrders: 8,
    courierHistory: { delivered: 3, cancelled: 3, returned: 2 },
    notes: "",
  },
  {
    id: "CUST-103",
    name: "Rakibul Islam",
    phone: "01611-223344",
    address: "Village: Kashimpur, Gazipur",
    totalOrders: 9,
    courierHistory: { delivered: 1, cancelled: 5, returned: 3 },
    notes: "",
  },
  {
    id: "CUST-104",
    name: "Nusrat Jahan",
    phone: "01922-556677",
    address: "House 45, Sector 7, Uttara, Dhaka",
    totalOrders: 12,
    courierHistory: { delivered: 12, cancelled: 0, returned: 0 },
    notes: "Regular customer, always accepts delivery.",
  },
  {
    id: "CUST-105",
    name: "Tanvir Ahmed",
    phone: "01555-889900",
    address: "Holding 9, Pahartali, Chattogram",
    totalOrders: 9,
    courierHistory: { delivered: 4, cancelled: 4, returned: 1 },
    notes: "",
  },
  {
    id: "CUST-106",
    name: "Mim Sultana",
    phone: "01777-112233",
    address: "House 2, Road 9, Bashundhara, Dhaka",
    totalOrders: 7,
    courierHistory: { delivered: 6, cancelled: 1, returned: 0 },
    notes: "",
  },
];

// Same recommendation logic used on the Orders page, driven purely by
// courier history so there's a single source of truth for trust status.
function getRecommendation(history) {
  const { delivered, cancelled, returned } = history;
  const total = delivered + cancelled + returned;
  if (total === 0) {
    return {
      label: "Needs Verification",
      text: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      dot: "bg-yellow-500",
      note: "No courier history found for this customer yet.",
    };
  }
  const failRate = (cancelled + returned) / total;
  if (failRate <= 0.2) {
    return {
      label: "Trusted",
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      dot: "bg-emerald-400",
      note: "Strong delivery acceptance history. Safe to approve.",
    };
  }
  if (failRate <= 0.5) {
    return {
      label: "Needs Verification",
      text: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      dot: "bg-yellow-500",
      note: "Mixed history. Consider calling to confirm before shipping.",
    };
  }
  return {
    label: "Review Required",
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    dot: "bg-rose-400",
    note: "High cancellation/return rate. Verify carefully before approving.",
  };
}

// Column widths shared between the header row and each data row so
// everything lines up like a real table on md+ screens.
const gridCols = "md:grid-cols-[1fr_1.3fr_1.2fr_1fr_0.7fr_0.8fr]";

// Success rate = delivered / total courier attempts, same inputs as
// getRecommendation so the number and the badge always agree.
function getSuccessRate(history) {
  const { delivered, cancelled, returned } = history;
  const total = delivered + cancelled + returned;
  if (total === 0) return null;
  return Math.round((delivered / total) * 100);
}

function successRateColor(rate) {
  if (rate === null) return "text-[#F5F5F5]/40";
  if (rate >= 80) return "text-emerald-400";
  if (rate >= 50) return "text-yellow-400";
  return "text-rose-400";
}


function CustomerDrawer({ customer, onClose }) {
  const recommendation = getRecommendation(customer.courierHistory);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative flex h-full w-full max-w-md flex-col bg-[#0F0F0F] border-l border-white/10 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <h2 className="text-base font-semibold text-[#F5F5F5]">
              {customer.id}
            </h2>
            <p className="text-xs text-[#F5F5F5]/40">Customer history</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#F5F5F5]/40 hover:bg-white/5 hover:text-[#F5F5F5]"
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
            <div className="border border-white/10 p-3 text-sm space-y-1">
              <p className="font-medium text-[#F5F5F5]">{customer.name}</p>
              <p className="text-[#F5F5F5]/70">{customer.phone}</p>
              <p className="text-[#F5F5F5]/40">{customer.address}</p>
            </div>
          </section>

          {/* Orders */}
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40 mb-2">
              Orders
            </h3>
            <div className="border border-white/10 px-3 py-2.5 text-sm text-[#F5F5F5]/80">
              {customer.totalOrders} total orders placed
            </div>
          </section>

          {/* Courier History */}
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40 mb-2">
              Courier History
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-emerald-500/10 px-3 py-2 text-center">
                <p className="text-lg font-semibold text-emerald-400">
                  {customer.courierHistory.delivered}
                </p>
                <p className="text-[11px] text-emerald-400/70">Delivered</p>
              </div>
              <div className="bg-rose-500/10 px-3 py-2 text-center">
                <p className="text-lg font-semibold text-rose-400">
                  {customer.courierHistory.cancelled}
                </p>
                <p className="text-[11px] text-rose-400/70">Cancelled</p>
              </div>
              <div className="bg-yellow-500/10 px-3 py-2 text-center">
                <p className="text-lg font-semibold text-yellow-400">
                  {customer.courierHistory.returned}
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
              className={`border px-3 py-2.5 ${recommendation.bg} ${recommendation.border}`}
            >
              <p
                className={`inline-flex items-center gap-1.5 text-sm font-semibold ${recommendation.text}`}
              >
                <span className={`h-1.5 w-1.5 ${recommendation.dot}`} />
                {recommendation.label}
              </p>
              <p className="mt-0.5 text-xs text-[#F5F5F5]/50">
                {recommendation.note}
              </p>
            </div>
          </section>

          {/* Notes */}
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40 mb-2">
              Notes
            </h3>
            <div className="border border-white/10 px-3 py-2.5 text-sm text-[#F5F5F5]/60">
              {customer.notes || "No notes yet."}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function CustomersPage() {
  const [search, setSearch] = useState("");
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const filteredCustomers = customers.filter((c) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.phone.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q)
    );
  });

  const selectedCustomer =
    customers.find((c) => c.id === selectedCustomerId) || null;

  return (
    <div className="min-h-screen bg-[#0B0B0B] px-4 py-8 sm:px-8 text-[#F5F5F5]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#F5F5F5]">
              Customers
            </h1>
            <p className="mt-1 text-sm text-[#F5F5F5]/40">
              {customers.length} customers · view courier history and trust
              recommendation per customer
            </p>
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, phone, or ID"
            className="w-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-[#F5F5F5] outline-none placeholder:text-[#F5F5F5]/30 focus:ring-2 focus:ring-yellow-500/40 sm:w-72"
          />
        </div>

        <TableContainer>
          <TableHeader>
            <span>Customer ID</span>
            <span>Name</span>
            <span>Phone</span>
            <span>Success Rate</span>
            <span>Orders</span>
            <span className="text-right">Action</span>
          </TableHeader>
          {customers.map((customer, i) => <TableRow key={i}>

            <TableData label="Customer ID">
              {customer.id}
            </TableData>
            <TableData label="Name">
              {customer.name}
            </TableData>
            <TableData label="Phone">
              {customer.phone}
            </TableData>
            <TableData label="Success Rate">
              <span className="text-emerald-500">61%</span>
            </TableData>
            <TableData label="Orders">
              {customer.totalOrders}
            </TableData>
            <TableData label="Action" align="right">
              <button className="border border-white/15 px-3 py-1.5 text-xs font-medium text-[#F5F5F5]/80 transition-colors hover:bg-white/10">View</button>
            </TableData>
          </TableRow>
          )
          }
        </TableContainer>
      </div>

      {selectedCustomer && (
        <CustomerDrawer
          customer={selectedCustomer}
          onClose={() => setSelectedCustomerId(null)}
        />
      )}
    </div>
  );
}