const CustomerDrawer = ({ customer }) => {
  return (
    <>
      {/* Customer Information */}
      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40">
          Customer Information
        </h3>

        <div className="space-y-1 border border-white/10 p-3 text-sm">
          <p className="font-medium text-[#F5F5F5]">{customer.name}</p>
          <p className="text-[#F5F5F5]/70">{customer.phone}</p>
          <p className="text-[#F5F5F5]/40">{customer.address}</p>
        </div>
      </section>

      {/* Orders */}
      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40">
          Orders
        </h3>

        <div className="border border-white/10 px-3 py-2.5 text-sm text-[#F5F5F5]/80">
          {customer.totalOrders} total orders placed
        </div>
      </section>

      {/* Courier History */}
      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40">
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
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40">
          Recommendation
        </h3>

        <div className="border border-emerald-500/30 bg-emerald-500/10 px-3 py-2.5">
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400">
            <span className="h-1.5 w-1.5 bg-emerald-400" />
            Trusted
          </p>

          <p className="mt-1 text-xs text-[#F5F5F5]/50">
            Strong delivery acceptance history. Safe to approve.
          </p>
        </div>
      </section>

      {/* Notes */}
      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/40">
          Notes
        </h3>

        <div className="border border-white/10 px-3 py-2.5 text-sm text-[#F5F5F5]/60">
          {customer.notes || "No notes yet."}
        </div>
      </section>
    </>
  );
};

export default CustomerDrawer;