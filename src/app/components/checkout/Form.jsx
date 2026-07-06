'use client'
const DeliveryInfoStep = ({ setStep }) => (
  <div className="flex flex-col gap-5">
    <div>
      <h2 className="text-2xl font-semibold text-white">Delivery Information</h2>
      <p className="mt-1.5 text-sm text-neutral-400">Tell us where to send your Aurex.</p>
    </div>

    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
        Full Name
      </label>
      <input
        type="text"
        name="name"
        placeholder="John Doe"
        className="w-full border border-white/15 px-4 py-3 text-sm text-(--foreground) outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500"
      />
    </div>

    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
        Phone Number
      </label>
      <input
        type="tel"
        name="phone"
        placeholder="01XXXXXXXXX"
        className="w-full border border-white/15 px-4 py-3 text-sm text-(--foreground) outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500"
      />
    </div>

    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
        Address
      </label>
      <input
        type="text"
        name="address"
        placeholder="House, Road, Area, City"
        className="w-full border border-white/15 px-4 py-3 text-sm text-(--foreground) outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500"
      />
    </div>

    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
        Order Note <span className="normal-case text-white/30">(optional)</span>
      </label>
      <textarea
        name="note"
        rows={4}
        placeholder="Delivery instructions, gift note, etc."
        className="w-full resize-none border border-white/15 px-4 py-3 text-sm text-(--foreground) outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500"
      />
    </div>

    <button
      onClick={() => setStep(2)}
      className="mt-3 w-full cursor-pointer bg-yellow-500 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-yellow-400"
    >
      Continue to Payment
    </button>
  </div>
);

export default DeliveryInfoStep;