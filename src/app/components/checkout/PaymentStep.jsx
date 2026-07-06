"use client";
import { useRouter } from "next/navigation";
import { FiSmartphone, FiTruck } from "react-icons/fi";

const PaymentStep = ({ paymentMethod, setPaymentMethod, setStep }) => {
  const router = useRouter();

//   export const paymentOptions = [
//   {
//     id: "cod",
//     label: "Cash on Delivery",
//     desc: "Pay when your order arrives.",
//     icon: FiTruck,
//   },
//   {
//     id: "bkash",
//     label: "bKash",
//     desc: "Send payment via bKash and confirm below.",
//     icon: FiSmartphone,
//     accent: "#E2136E",
//   },
//   {
//     id: "nagad",
//     label: "Nagad",
//     desc: "Send payment via Nagad and confirm below.",
//     icon: FiSmartphone,
//     accent: "#F7941D",
//   },
// ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-semibold text-white">Payment Method</h2>
        <p className="mt-1.5 text-sm text-neutral-400">Choose how you&apos;d like to pay.</p>
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => {
            setPaymentMethod("cod");
            router.push("/success");
          }}
          className={`flex items-center gap-4 border px-5 py-4 text-left transition-colors duration-300 cursor-pointer ${
            paymentMethod === "cod"
              ? "border-yellow-500/50 bg-yellow-500/6"
              : "border-white/15 bg-white/5 hover:border-white/25"
          }`}
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
            style={{
              borderColor: paymentMethod === "cod" ? "#EAB308" : "rgba(255,255,255,0.15)",
              color: "#EAB308",
            }}
          >
            <FiTruck size={18} />
          </span>
          <span className="flex-1">
            <span className="block text-sm font-semibold text-(--foreground)">Cash on Delivery</span>
          </span>
          <span
            className={`h-4 w-4 shrink-0 rounded-full border-2 transition-colors ${
              paymentMethod === "cod" ? "border-yellow-500 bg-yellow-500" : "border-white/25"
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => setPaymentMethod("bkash")}
          className={`flex items-center gap-4 border px-5 py-4 text-left transition-colors duration-300 cursor-pointer ${
            paymentMethod === "bkash"
              ? "border-yellow-500/50 bg-yellow-500/6"
              : "border-white/15 bg-white/5 hover:border-white/25"
          }`}
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
            style={{
              borderColor: paymentMethod === "bkash" ? "#EAB308" : "rgba(255,255,255,0.15)",
              color: "#EAB308",
            }}
          >
            <FiSmartphone size={18} />
          </span>
          <span className="flex-1">
            <span className="block text-sm font-semibold text-(--foreground)">bKash</span>
          </span>
          <span
            className={`h-4 w-4 shrink-0 rounded-full border-2 transition-colors ${
              paymentMethod === "bkash" ? "border-yellow-500 bg-yellow-500" : "border-white/25"
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => setPaymentMethod("nagad")}
          className={`flex items-center gap-4 border px-5 py-4 text-left transition-colors duration-300 cursor-pointer ${
            paymentMethod === "nagad"
              ? "border-yellow-500/50 bg-yellow-500/6"
              : "border-white/15 bg-white/5 hover:border-white/25"
          }`}
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
            style={{
              borderColor: paymentMethod === "nagad" ? "#EAB308" : "rgba(255,255,255,0.15)",
              color: "#EAB308",
            }}
          >
            <FiSmartphone size={18} />
          </span>
          <span className="flex-1">
            <span className="block text-sm font-semibold text-(--foreground)">Nagad</span>
          </span>
          <span
            className={`h-4 w-4 shrink-0 rounded-full border-2 transition-colors ${
              paymentMethod === "nagad" ? "border-yellow-500 bg-yellow-500" : "border-white/25"
            }`}
          />
        </button>
      </div>

      <div className="mt-2 flex gap-3">
        <button
          onClick={() => setStep(1)}
          className="w-1/3 border border-white/15 py-3.5 text-sm font-semibold text-(--foreground) transition hover:border-white/30 cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={() => {}}
          className="w-2/3 bg-yellow-500 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-yellow-400 cursor-pointer"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PaymentStep;