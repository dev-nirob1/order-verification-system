export default function TrackOrderPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Track Order</h1>
        <p className="mt-2 text-neutral-400">Enter your order ID to view the current shipping status.</p>
      </div>

      <div className="rounded-lg border border-white/10 bg-[#111] p-6">
        <div className="flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Enter order ID"
            className="flex-1 rounded-lg border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
          <button className="rounded-lg bg-yellow-500 px-5 py-3 font-medium text-black">
            Track Now
          </button>
        </div>

        <div className="mt-6 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-neutral-300">
          <p className="font-semibold text-yellow-500">Current Status</p>
          <p className="mt-2">Your order is currently in transit and will arrive soon.</p>
        </div>
      </div>
    </div>
  );
}
