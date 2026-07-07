const NumberInput = ({ setStep }) => {
  return (
    <>
      <div className="mb-4">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-gray-300">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="01XXXXXXXXX"
          className="w-full border border-white/15 text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500"
          required
        />
      </div>

      <button
        onClick={() => setStep(2)}
        className="mt-3 w-full cursor-pointer bg-yellow-500 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-yellow-400"
      >
        Continue to Payment
      </button>
    </>
  );
};

export default NumberInput;
