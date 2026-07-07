export default function MyOrdersPage() {
  const orders = [
    { id: "ORD-1001", item: "Custom Chair", status: "Delivered", date: "2026-06-18" },
    { id: "ORD-1002", item: "Wooden Table", status: "In Transit", date: "2026-07-01" },
    { id: "ORD-1003", item: "Desk Organizer", status: "Processing", date: "2026-07-05" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">My Orders</h1>
        <p className="mt-2 text-neutral-400">Here is your recent order history.</p>
      </div>

      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#111]">
        <div className="grid grid-cols-4 border-b border-white/10 bg-[#151515] px-4 py-3 text-sm font-medium text-neutral-300">
          <span>Order ID</span>
          <span>Item</span>
          <span>Status</span>
          <span>Date</span>
        </div>

        {orders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-4 border-b border-white/10 px-4 py-4 text-sm text-neutral-300 last:border-b-0"
          >
            <span className="text-white">{order.id}</span>
            <span>{order.item}</span>
            <span>{order.status}</span>
            <span>{order.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
