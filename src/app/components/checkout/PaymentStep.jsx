"use client";
import { useRouter } from "next/navigation";
import { FiSmartphone, FiTruck } from "react-icons/fi";
import Form from "./Form";

const paymentOptions = [
  {
    id: "cod",
    label: "Cash on Delivery",
    icon: FiTruck,
  },
  {
    id: "bkash",
    label: "bKash",
    icon: FiSmartphone,
  },
  {
    id: "nagad",
    label: "Nagad",
    icon: FiSmartphone,
  },
];

const PaymentStep = ({ paymentMethod, setPaymentMethod, setStep }) => {
  const router = useRouter();

  const handleSubmit = () => {
    if (paymentMethod === "cod") {
      router.push("/success");
    }
    // Static for now
  };

  return (
    <div className="flex flex-col gap-4">
      <Form />
      <div>
        <h5 className="text-xl font-semibold text-white">Payment Method</h5>
      </div>

      <div className="flex flex-col gap-3">
        {paymentOptions.map((option) => {
          const Icon = option.icon;
          const active = paymentMethod === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setPaymentMethod(option.id)}
              className={`flex items-center gap-4 border p-3 text-left transition-colors duration-300 cursor-pointer ${
                active
                  ? "border-yellow-500/50 bg-yellow-500/6"
                  : "border-white/15 bg-white/5 hover:border-white/25"
              }`}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                style={{
                  borderColor: active
                    ? "#EAB308"
                    : "rgba(255,255,255,0.15)",
                  color: "#EAB308",
                }}
              >
                <Icon size={18} />
              </span>

              <span className="flex-1">
                <span className="block text-sm font-semibold text-gray-300">
                  {option.label}
                </span>
              </span>

              <span
                className={`h-4 w-4 shrink-0 rounded-full border-2 transition-colors ${
                  active
                    ? "border-yellow-500 bg-yellow-500"
                    : "border-white/25"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="mt-2 flex gap-3">
        <button
          onClick={() => setStep(1)}
          className="w-1/3 border border-yellow-500 py-3.5 text-sm font-semibold text-yellow-500 transition hover:bg-yellow-500 hover:text-(--foreground)"
        >
          Back
        </button>

        <button
          onClick={handleSubmit}
          disabled={!paymentMethod}
          className="w-2/3 bg-yellow-500 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-yellow-400disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {paymentMethod === "cod" ? "Place Order" : "Payment"}
        </button>
      </div>
    </div>
  );
};

export default PaymentStep;