"use client";

import { useState } from "react";
import useDrawer from "@/app/hooks/useDrawer";
import TableContainer from "@/app/components/ui/table/TableContainer";
import TableHeader from "@/app/components/ui/table/TableHeader";
import TableRow from "@/app/components/ui/table/TableRow";
import TableData from "@/app/components/ui/table/TableData";

const customers = [
  {
    id: "CUST-101",
    name: "Hasan Mahmud",
    phone: "01712-345678",
    address: "House 12, Road 4, Dhanmondi, Dhaka",
    totalOrders: 12,
    courierHistory: {
      delivered: 10,
      cancelled: 1,
      returned: 1,
    },
    notes: "Regular customer. Always receives parcels.",
  },
  {
    id: "CUST-102",
    name: "Farzana Akter",
    phone: "01898-765432",
    address: "Green Road, Dhaka",
    totalOrders: 8,
    courierHistory: {
      delivered: 4,
      cancelled: 2,
      returned: 2,
    },
    notes: "",
  },
  {
    id: "CUST-103",
    name: "Rakibul Islam",
    phone: "01611-223344",
    address: "Gazipur, Dhaka",
    totalOrders: 5,
    courierHistory: {
      delivered: 2,
      cancelled: 2,
      returned: 1,
    },
    notes: "Requested evening delivery.",
  },
  {
    id: "CUST-104",
    name: "Nusrat Jahan",
    phone: "01922-556677",
    address: "Uttara, Dhaka",
    totalOrders: 16,
    courierHistory: {
      delivered: 16,
      cancelled: 0,
      returned: 0,
    },
    notes: "VIP customer.",
  },
  {
    id: "CUST-105",
    name: "Tanvir Ahmed",
    phone: "01555-889900",
    address: "Chattogram",
    totalOrders: 7,
    courierHistory: {
      delivered: 3,
      cancelled: 3,
      returned: 1,
    },
    notes: "",
  },
];

const gridCols = "md:grid-cols-[1fr_1.4fr_1.2fr_1fr_0.7fr_0.8fr]";

const CustomersPage = () => {
  const { openDrawer } = useDrawer();

  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((customer) => {
    const q = search.toLowerCase();

    return (
      customer.id.toLowerCase().includes(q) ||
      customer.name.toLowerCase().includes(q) ||
      customer.phone.includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-[#0B0B0B] px-4 py-8 text-[#F5F5F5] sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold">Customers</h1>
            <p className="mt-1 text-sm text-[#F5F5F5]/40">
              {filteredCustomers.length} customers
            </p>
          </div>

          <input
            type="text"
            placeholder="Search by name, phone or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-[#F5F5F5]/30 focus:ring-2 focus:ring-yellow-500/40 sm:w-72"
          />
        </div>

        {/* Table */}
        <TableContainer>
          <TableHeader gridCols={gridCols}>
            <div>Customer ID</div>
            <div>Name</div>
            <div>Phone</div>
            <div>Success Rate</div>
            <div>Orders</div>
            <div className="text-right">Action</div>
          </TableHeader>

          {filteredCustomers.map((customer) => {
            const history = customer.courierHistory;

            const total =
              history.delivered +
              history.cancelled +
              history.returned;

            const successRate =
              total === 0
                ? 0
                : Math.round((history.delivered / total) * 100);

            return (
              <TableRow key={customer.id} gridCols={gridCols}>
                <TableData label="Customer ID">
                  <span className="font-medium">{customer.id}</span>
                </TableData>

                <TableData label="Name">
                  <span className="text-[#F5F5F5]/80">
                    {customer.name}
                  </span>
                </TableData>

                <TableData label="Phone">
                  <span className="text-[#F5F5F5]/40">
                    {customer.phone}
                  </span>
                </TableData>

                <TableData label="Success Rate">
                  <span
                    className={`font-medium ${
                      successRate >= 80
                        ? "text-emerald-400"
                        : successRate >= 50
                        ? "text-yellow-400"
                        : "text-rose-400"
                    }`}
                  >
                    {successRate}%
                  </span>
                </TableData>

                <TableData label="Orders">
                  <span>{customer.totalOrders}</span>
                </TableData>

                <TableData label="Action" align="right">
                  <button
                    onClick={() => openDrawer("customer", customer)}
                    className="border border-white/15 px-3 py-1.5 text-xs font-medium text-[#F5F5F5]/80 transition hover:bg-white/10"
                  >
                    View
                  </button>
                </TableData>
              </TableRow>
            );
          })}
        </TableContainer>
      </div>
    </div>
  );
};

export default CustomersPage;