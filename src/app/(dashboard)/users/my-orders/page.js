'use client'
import TableContainer from "@/app/components/ui/table/TableContainer";
import TableData from "@/app/components/ui/table/TableData";
import TableHeader from "@/app/components/ui/table/TableHeader";
import TableRow from "@/app/components/ui/table/TableRow";
import useDrawer from "@/app/hooks/useDrawer";

const gridCols = "grid-cols-6";

const orders = [
  {
    id: "ORD-10245",
    total: 1999,
    date: "08 July 2026",
    paymentStatus: "Paid",
    status: "Processing",
    shipping: {
      name: "Al Hasan Nirob",
      phone: "017xxxxxxxx",
      address: "House 12, Road 4, Dhanmondi, Dhaka",
    },
    note: "Please keep your phone available during delivery.",
  },
];

const MyOrdersPage = () => {
  const { openDrawer } = useDrawer();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-[#F5F5F5]">
          My Orders
        </h1>

        <p className="mt-1 text-sm text-[#F5F5F5]/40">
          View your order history and current order status.
        </p>

        <p className="mt-2 text-sm text-[#F5F5F5]/25">
          {orders.length} total orders
        </p>
      </div>

      {/* Table */}
      <TableContainer>
        <TableHeader gridCols={gridCols}>
          <div>Order ID</div>
          <div>Total</div>
          <div>Order Date</div>
          <div>Payment</div>
          <div>Status</div>
          <div className="text-right">Action</div>
        </TableHeader>

        {orders.map((order) => (
          <TableRow key={order.id} gridCols={gridCols}>
            {/* Order ID */}
            <TableData label="Order ID">
              <span className="font-medium text-[#F5F5F5]">
                {order.id}
              </span>
            </TableData>

            {/* Total */}
            <TableData label="Total">
              <span className="font-medium text-[#F5F5F5]">
                ৳{order.total}
              </span>
            </TableData>

            {/* Date */}
            <TableData label="Order Date">
              <span className="text-[#F5F5F5]/60">
                {order.date}
              </span>
            </TableData>

            {/* Payment */}
            <TableData label="Payment">
              <span
                className={`inline-flex items-center px-2.5 py-1 text-xs font-medium ${
                  order.paymentStatus === "Paid"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-yellow-500/10 text-yellow-400"
                }`}
              >
                {order.paymentStatus}
              </span>
            </TableData>

            {/* Status */}
            <TableData label="Status">
              <span
                className={`inline-flex items-center px-2.5 py-1 text-xs font-medium ${
                  order.status === "Delivered"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : order.status === "Processing"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : order.status === "Confirmed"
                    ? "bg-blue-500/10 text-blue-400"
                    : order.status === "Shipped"
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "bg-rose-500/10 text-rose-400"
                }`}
              >
                {order.status}
              </span>
            </TableData>

            {/* Action */}
            <TableData label="Action" align="right">
              <button
                onClick={() => openDrawer("my-order", order)}
                className="border border-white/15 px-3 py-1.5 text-xs font-medium text-[#F5F5F5]/80 transition-colors hover:bg-white/10"
              >
                Details
              </button>
            </TableData>
          </TableRow>
        ))}

        {orders.length === 0 && (
          <div className="py-14 text-center">
            <div className="mb-3 text-4xl">📦</div>

            <h3 className="text-sm font-medium text-[#F5F5F5]">
              No orders yet
            </h3>

            <p className="mt-1 text-sm text-[#F5F5F5]/40">
              Your orders will appear here after placing one.
            </p>
          </div>
        )}
      </TableContainer>
    </div>
  );
};

export default MyOrdersPage;