"use client";

import { useRouter } from "next/navigation";
import {
  FiShoppingBag,
  FiAlertCircle,
  FiDollarSign,
} from "react-icons/fi";
import TableContainer from "@/app/components/ui/table/TableContainer";
import TableHeader from "@/app/components/ui/table/TableHeader";
import TableRow from "@/app/components/ui/table/TableRow";
import TableData from "@/app/components/ui/table/TableData";
import useDrawer from "@/app/hooks/useDrawer";

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

const gridCols = "grid-cols-6";

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

const Dashboard = () => {
  const router = useRouter();
  const { openDrawer } = useDrawer();

  const processingOrders = orders.filter(
    (order) => order.deliveryStatus === "Order Received"
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="mt-1 text-neutral-400">
          Welcome back. Here&apos;s today&apos;s overview.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="border border-white/10 bg-[#111] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-400">{item.title}</p>
                  <h2 className="mt-2 text-3xl font-bold text-white">
                    {item.value}
                  </h2>
                  <p className="mt-1 text-xs text-neutral-500">
                    {item.subtitle}
                  </p>
                </div>
                <div className="bg-yellow-500/10 p-3 text-yellow-500">
                  <Icon size={22} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders (Processing) */}
      <div className="border border-white/10 bg-[#111] p-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-semibold text-white">Recent Orders</h3>
          <button
            onClick={() => router.push("/admin/orders")}
            className="text-sm text-yellow-500"
          >
            View All
          </button>
        </div>

        <TableContainer>
          <TableHeader gridCols={gridCols}>
            <div>Order ID</div>
            <div>Customer</div>
            <div>Phone</div>
            <div>Verification</div>
            <div>Status</div>
            <div className="text-right">Action</div>
          </TableHeader>

          {processingOrders.map((order) => (
            <TableRow key={order.id} gridCols={gridCols}>
              <TableData label="Order ID">
                <span className="font-medium">{order.id}</span>
              </TableData>

              <TableData label="Customer">
                <span className="text-[#F5F5F5]/80">{order.customer}</span>
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

              <TableData label="Status">
                <span
                  className={`inline-flex items-center px-2.5 py-1 text-xs font-medium ${
                    order.orderStatus === "Approved"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : order.orderStatus === "Pending"
                      ? "bg-yellow-500/10 text-yellow-400"
                      : "bg-rose-500/10 text-rose-400"
                  }`}
                >
                  {order.orderStatus}
                </span>
              </TableData>

              <TableData label="Action" align="right">
                <button
                  onClick={() => openDrawer("order", order)}
                  className="border border-white/15 px-3 py-1.5 text-xs font-medium text-[#F5F5F5]/80 transition hover:bg-white/10"
                >
                  View
                </button>
              </TableData>
            </TableRow>
          ))}

          {processingOrders.length === 0 && (
            <div className="py-10 text-center text-sm text-[#F5F5F5]/40">
              No orders currently processing.
            </div>
          )}
        </TableContainer>
      </div>
    </div>
  );
};

export default Dashboard;