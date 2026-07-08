const OrdersDrawer = ({ order }) => {
  return (
    <>
      {/* Customer Information */}
      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40 mb-2">
          Customer Information
        </h3>
        <div className="border border-white/10 p-3 text-sm space-y-1">
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
          <div className="bg-emerald-500/10 px-3 py-2 text-center">
            <p className="text-lg font-semibold text-emerald-400">
              {order.courierHistory.delivered}
            </p>
            <p className="text-[11px] text-emerald-400/70">Delivered</p>
          </div>
          <div className="bg-rose-500/10 px-3 py-2 text-center">
            <p className="text-lg font-semibold text-rose-400">
              {order.courierHistory.cancelled}
            </p>
            <p className="text-[11px] text-rose-400/70">Cancelled</p>
          </div>
          <div className="bg-yellow-500/10 px-3 py-2 text-center">
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
        <div className="border px-3 py-2.5">
          <p className="text-sm font-semibold">Recommendation label</p>
          <p className="mt-0.5 text-xs text-[#F5F5F5]/50">
            Recommendation note
          </p>
        </div>
      </section>

      {/* Tracking Timeline */}
      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40 mb-2">
          Tracking Timeline
        </h3>
        <ol className="space-y-3">
          <li className="flex items-center gap-3">
            <span className="flex h-5 w-5 flex-none items-center justify-center text-[10px] bg-white/10 text-[#F5F5F5]/30">
              ✓
            </span>
            <span className="text-sm text-[#F5F5F5]/30">Step label</span>
          </li>
        </ol>
      </section>

      {/* Update Delivery Status */}
      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40 mb-2">
          Update Delivery Status
        </h3>
        <select className="w-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-[#F5F5F5] outline-none focus:ring-2 focus:ring-yellow-500/40">
          <option className="bg-[#0F0F0F]">Delivery step</option>
        </select>
      </section>

      {/* Actions */}
      <div className="pt-2 space-y-2">
        <button className="w-full bg-yellow-500 py-2 text-sm font-semibold text-black hover:bg-yellow-400">
          Save
        </button>
        <div className="flex gap-2">
          <button className="flex-1 border border-emerald-500/30 bg-emerald-500/10 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20">
            Approve
          </button>
          <button className="flex-1 border border-rose-500/30 bg-rose-500/10 py-2 text-sm font-medium text-rose-400 hover:bg-rose-500/20">
            Reject
          </button>
        </div>
      </div>
    </>
  );
};
export default OrdersDrawer;
