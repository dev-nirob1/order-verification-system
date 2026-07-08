"use client";

import TableContainer from "@/app/components/ui/table/TableContainer";
import TableData from "@/app/components/ui/table/TableData";
import TableHeader from "@/app/components/ui/table/TableHeader";
import TableRow from "@/app/components/ui/table/TableRow";
import useDrawer from "@/app/hooks/useDrawer";

const orders = [
  {
    id: "ORD-101",
    customer: "Hasan Mahmud",
    phone: "01712-345678",
    address: "House 12, Road 4, Dhanmondi, Dhaka",
    verification: "Trusted",
    orderStatus: "Approved",
    deliveryStatus: "Shipped",
    courierHistory: { delivered: 8, cancelled: 2, returned: 1 },
    notes: "",
  },
  {
    id: "ORD-102",
    customer: "Farzana Akter",
    phone: "01898-765432",
    address: "Flat 3B, Green Road, Dhaka",
    verification: "Needs Verification",
    orderStatus: "Pending",
    deliveryStatus: "Order Received",
    courierHistory: { delivered: 3, cancelled: 3, returned: 2 },
    notes: "",
  },
  {
    id: "ORD-103",
    customer: "Rakibul Islam",
    phone: "01611-223344",
    address: "Village: Kashimpur, Gazipur",
    verification: "Review Required",
    orderStatus: "Pending",
    deliveryStatus: "Order Received",
    courierHistory: { delivered: 1, cancelled: 5, returned: 3 },
    notes: "",
  },
  {
    id: "ORD-104",
    customer: "Nusrat Jahan",
    phone: "01922-556677",
    address: "House 45, Sector 7, Uttara, Dhaka",
    verification: "Trusted",
    orderStatus: "Approved",
    deliveryStatus: "Delivered",
    courierHistory: { delivered: 12, cancelled: 0, returned: 0 },
    notes: "Regular customer, always accepts delivery.",
  },
  {
    id: "ORD-105",
    customer: "Tanvir Ahmed",
    phone: "01555-889900",
    address: "Holding 9, Pahartali, Chattogram",
    verification: "Needs Verification",
    orderStatus: "Rejected",
    deliveryStatus: "Order Received",
    courierHistory: { delivered: 4, cancelled: 4, returned: 1 },
    notes: "",
  },
];

const tabs = ["All", "Pending", "Approved", "Rejected", "Cancelled"];
const deliverySteps = ["Order Received", "Packed", "Shipped", "Out for Delivery", "Delivered"];
const gridCols = "md:grid-cols-[1fr_1.3fr_1.2fr_1.2fr_1.2fr_0.8fr]";

export default function OrdersPage() {
  const { openDrawer } = useDrawer();

  return (
    <div className="min-h-screen bg-[#0B0B0B] px-4 py-8 sm:px-8 text-[#F5F5F5]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-[#F5F5F5]">Orders</h1>
          <p className="mt-1 text-sm text-[#F5F5F5]/40">
            {orders.length} orders
          </p>
        </div>

        {/* Tabs (static, non-clickable for now) */}
        <div className="mb-4 flex flex-wrap gap-1 border-b border-white/10">
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className={`relative px-4 py-2 text-sm font-medium ${
                i === 0 ? "text-yellow-400" : "text-[#F5F5F5]/40"
              }`}
            >
              {tab}
              {i === 0 && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-yellow-500" />
              )}
            </span>
          ))}
        </div>

        <div className="overflow-hidden border border-white/10 bg-[#111111]">
          <div className="overflow-x-auto">
            <TableContainer>
              <TableHeader gridCols={gridCols}>
                <div>Order ID</div>
                <div>Customer</div>
                <div>Phone</div>
                <div>Verification</div>
                <div>Delivery Status</div>
                <div className="text-right">Action</div>
              </TableHeader>

              {orders.map((order) => (
                <TableRow key={order.id} gridCols={gridCols}>
                  <TableData label="Order ID">
                    <span className="font-medium text-[#F5F5F5]">
                      {order.id}
                    </span>
                  </TableData>

                  <TableData label="Customer">
                    <span className="text-[#F5F5F5]/80">
                      {order.customer}
                    </span>
                  </TableData>

                  <TableData label="Phone">
                    <span className="text-[#F5F5F5]/40">{order.phone}</span>
                  </TableData>

                  <TableData label="Verification">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium ${
                        order.verification === "Trusted"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : order.verification === "Needs Verification"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-rose-500/10 text-rose-400"
                      }`}
                    >
                      {order.verification}
                    </span>
                  </TableData>

                  <TableData label="Delivery Status">
                    <select
                      defaultValue={order.deliveryStatus}
                      className="border border-white/15 bg-white/5 px-2 py-1.5 text-xs font-medium text-[#F5F5F5]/80 outline-none focus:ring-2 focus:ring-yellow-500/40"
                    >
                      {deliverySteps.map((step) => (
                        <option key={step} value={step} className="bg-[#111111]">
                          {step}
                        </option>
                      ))}
                    </select>
                  </TableData>

                  <TableData label="Action" align="right">
                    <button
                      onClick={() => openDrawer("order", order)}
                      className="border border-white/15 px-3 py-1.5 text-xs font-medium text-[#F5F5F5]/80 transition-colors hover:bg-white/10"
                    >
                      View
                    </button>
                  </TableData>
                </TableRow>
              ))}
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}