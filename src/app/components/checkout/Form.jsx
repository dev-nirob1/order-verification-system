'use client'

const Form = () => (
  <div className="flex flex-col gap-3">
    <div>
      <h5 className="text-xl font-semibold text-white">Delivery Information</h5>
    </div>

    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-gray-300">
        Full Name
      </label>
      <input
        type="text"
        name="name"
        placeholder="John Doe"
        className="w-full border border-white/15 px-4 py-2 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500"
      />
    </div>

    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-gray-300">
        Address
      </label>
      <input
        type="text"
        name="address"
        placeholder="House, Road, Area, City"
        className="w-full border border-white/15 px-4 py-2 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500"
      />
    </div>

    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-gray-300">
        Order Note <span className="normal-case text-white/30">(optional)</span>
      </label>
      <textarea
        name="note"
        rows={2}
        placeholder="Delivery instructions, gift note, etc."
        className="w-full resize-none border border-white/15 px-4 py-2 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500"
      />
    </div>
  </div>
);

export default Form;