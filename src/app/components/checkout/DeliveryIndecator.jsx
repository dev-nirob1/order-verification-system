import FormField from "./FormField";

const DeliveryInfoStep = ({ onContinue }) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">
          Delivery Information
        </h2>
        <p className="mt-1.5 text-sm text-neutral-400">
          Tell us where to send your Aurex.
        </p>
      </div>

      <FormField label="Full Name" type="text" name="name" placeholder="John Doe" />
      <FormField label="Phone Number" type="tel" name="phone" placeholder="01XXXXXXXXX" />
      <FormField label="Address" type="text" name="address" placeholder="House, Road, Area, City" />

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
          Order Note <span className="normal-case text-white/30">(optional)</span>
        </label>
        <textarea
          name="note"
          rows={4}
          placeholder="Delivery instructions, gift note, etc."
          className="w-full resize-none rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500"
        />
      </div>

      <button
        onClick={onContinue}
        className="mt-3 w-full rounded-md bg-yellow-500 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-yellow-400 cursor-pointer"
      >
        Continue to Payment
      </button>
    </div>
  );
};

export default DeliveryInfoStep;