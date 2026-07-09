const MyOrderDrawer = ({ order }) => {
  return (
    <>
      {/* Order Information */}
      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40">
          Order Information
        </h3>

        <div className="space-y-3 border border-white/10 p-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-[#F5F5F5]/40">Order ID</span>
            <span className="font-medium text-[#F5F5F5]">
              {order.id}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#F5F5F5]/40">Order Date</span>
            <span className="text-[#F5F5F5]/80">
              {order.date}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#F5F5F5]/40">Total Amount</span>
            <span className="font-medium text-[#F5F5F5]">
              ৳{order.total}
            </span>
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40">
          Shipping Information
        </h3>

        <div className="space-y-1 border border-white/10 p-3 text-sm">
          <p className="font-medium text-[#F5F5F5]">
            {order.shipping.name}
          </p>

          <p className="text-[#F5F5F5]/70">
            {order.shipping.phone}
          </p>

          <p className="text-[#F5F5F5]/40">
            {order.shipping.address}
          </p>
        </div>
      </section>

      {/* Order Status */}
      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40">
          Order Status
        </h3>

        <div className="border border-white/10 p-3">
          <span
            className={`inline-flex px-3 py-1 text-sm font-medium ${
              order.status === "Delivered"
                ? "bg-emerald-500/10 text-emerald-400"
                : order.status === "Processing"
                ? "bg-yellow-500/10 text-yellow-400"
                : order.status === "Cancelled"
                ? "bg-rose-500/10 text-rose-400"
                : "bg-blue-500/10 text-blue-400"
            }`}
          >
            {order.status}
          </span>
        </div>
      </section>

      {/* Note */}
      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40">
          Note
        </h3>

        <div className="border border-white/10 p-3 text-sm text-[#F5F5F5]/60">
          {order.note || "No additional note."}
        </div>
      </section>

      {/* Action */}
      <div className="pt-2">
        <button className="w-full border border-yellow-500 bg-yellow-500 px-4 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-400">
          Track Order
        </button>
      </div>
    </>
  );
};

export default MyOrderDrawer;