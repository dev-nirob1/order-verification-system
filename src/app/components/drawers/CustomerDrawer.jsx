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

const CustomerDrawer=({ customer }) => {
  const recommendation = getRecommendation(customer.courierHistory);
  return (
    <>
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
    </>
  );
}
export default CustomerDrawer;