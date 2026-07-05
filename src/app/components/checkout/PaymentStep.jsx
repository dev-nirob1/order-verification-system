import { paymentOptions } from "./paymentOptions";
import PaymentOptionButton from "./PaymentOptionButton";
import FormField from "./FormField";

const PaymentStep = ({ paymentMethod, onSelectMethod, onBack, onPlaceOrder }) => {
  const needsManualPayment = paymentMethod === "bkash" || paymentMethod === "nagad";

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Payment Method</h2>
        <p className="mt-1.5 text-sm text-neutral-400">Choose how you'd like to pay.</p>
      </div>

      <div className="flex flex-col gap-3">
        {paymentOptions.map((option) => (
          <PaymentOptionButton
            key={option.id}
            option={option}
            isActive={paymentMethod === option.id}
            onSelect={() => onSelectMethod(option.id)}
          />
        ))}
      </div>

      {needsManualPayment && (
        <div className="flex flex-col gap-4 rounded-md border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs leading-relaxed text-neutral-400">
            Send the total amount to{" "}
            <span className="font-semibold text-yellow-500">01700-000000</span>{" "}
            ({paymentMethod === "bkash" ? "bKash" : "Nagad"} Personal), then enter your number and
            the transaction ID below.
          </p>

          <FormField
            label={`Your ${paymentMethod === "bkash" ? "bKash" : "Nagad"} Number`}
            type="tel"
            placeholder="01XXXXXXXXX"
          />
          <FormField label="Transaction ID" type="text" placeholder="e.g. 8N7A6XXXXX" />
        </div>
      )}

      <div className="mt-2 flex gap-3">
        <button
          onClick={onBack}
          className="w-1/3 rounded-md border border-white/15 py-3.5 text-sm font-semibold text-[var(--foreground)] transition hover:border-white/30 cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={onPlaceOrder}
          className="w-2/3 rounded-md bg-yellow-500 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PaymentStep;