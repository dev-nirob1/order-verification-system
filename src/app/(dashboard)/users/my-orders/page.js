"use client";

import TableContainer from "@/app/components/ui/table/TableContainer";
import TableData from "@/app/components/ui/table/TableData";
import TableHeader from "@/app/components/ui/table/TableHeader";
import TableRow from "@/app/components/ui/table/TableRow";

const orders = [
  {
    id: "ORD-10245",
    total: 1999,
    date: "08 July 2026",
    paymentStatus: "COD",
    status: "Delivered",
  },
  {
    id: "ORD-10246",
    total: 1999,
    date: "09 July 2026",
    paymentStatus: "Paid",
    status: "Confirmed",
  },
  {
    id: "ORD-10247",
    total: 1999,
    date: "10 July 2026",
    paymentStatus: "COD",
    status: "Proccessing",
  },
];

const gridCols =
  "md:grid-cols-[1fr_1fr_1.2fr_1fr_1fr_0.8fr]";


const MyOrdersPage = () => {

  const handleView = (id) => {
    console.log(id);
    // open modal or navigate details page
  };


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
      </div>


      {/* Table */}
      <TableContainer>

        <TableHeader gridCols={gridCols}>
          <div>Order ID</div>
          <div>Total</div>
          <div>Order Date</div>
          <div>Payment</div>
          <div>Status</div>
          <div className="text-right">
            Action
          </div>
        </TableHeader>


        {orders.map((order) => (
          <TableRow
            key={order.id}
            gridCols={gridCols}
          >

            {/* Order ID */}
            <TableData label="Order ID">
              <span className="font-medium text-[#F5F5F5]">
                {order.id}
              </span>
            </TableData>


            {/* Total */}
            <TableData label="Total">
              <span className="text-[#F5F5F5]/80">
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
              <span className="text-xs font-medium text-[#F5F5F5]/80">
                {order.paymentStatus}
              </span>
            </TableData>


            {/* Status */}
            <TableData label="Status">
              <span
                className={`
                  text-xs font-medium
                  ${
                    order.status === "Delivered"
                      ? "text-green-400"
                      : order.status === "Processing"
                      ? "text-yellow-400"
                      : "text-blue-400"
                  }
                `}
              >
                {order.status}
              </span>
            </TableData>


            {/* Action */}
            <TableData label="Action" align="right">

              <button
                onClick={() => handleView(order.id)}
                className="
                  border border-white/15
                  px-3 py-1.5
                  text-xs font-medium
                  text-[#F5F5F5]/80
                  transition-colors
                  hover:bg-white/10
                "
              >
                View
              </button>

            </TableData>


          </TableRow>
        ))}


        {orders.length === 0 && (
          <div
            className="
              px-4 py-10
              text-center
              text-sm
              text-[#F5F5F5]/30
            "
          >
            You haven&apos;t placed any orders yet.
          </div>
        )}


      </TableContainer>

    </div>
  );
};


export default MyOrdersPage;