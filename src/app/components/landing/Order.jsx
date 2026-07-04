'use client';
import React, { useState } from "react";
import { FiCheck, FiTruck, FiSmartphone } from "react-icons/fi";

const OrderForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });
  const [errors, setErrors] = useState({});

  const [paymentMethod, setPaymentMethod] = useState("");
  const [bkashNumber, setBkashNumber] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9+\s-]{10,14}$/.test(form.phone.trim()))
      newErrors.phone = "Enter a valid phone number";
    if (!form.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateStep1()) setStep(2);
  };

  const handlePlaceOrder = () => {
    const order = {
      ...form,
      paymentMethod,
      ...(paymentMethod !== "cod" && { bkashNumber, transactionId }),
    };
    console.log("Order submitted:", order);
    // hook up your submit logic / API call here
  };

  const paymentOptions = [
    {
      id: "cod",
      label: "Cash on Delivery",
      desc: "Pay when your order arrives.",
      icon: FiTruck,
    },
    {
      id: "bkash",
      label: "bKash",
      desc: "Send payment via bKash and confirm below.",
      icon: FiSmartphone,
      accent: "#E2136E",
    },
    {
      id: "nagad",
      label: "Nagad",
      desc: "Send payment via Nagad and confirm below.",
      icon: FiSmartphone,
      accent: "#F7941D",
    },
  ];

  const needsManualPayment = paymentMethod === "bkash" || paymentMethod === "nagad";
  const canPlaceOrder =
    paymentMethod === "cod" ||
    (needsManualPayment && bkashNumber.trim() && transactionId.trim());

  return (
    <section className="w-full bg-[var(--background)] py-24">
      <div className="mx-auto max-w-xl px-6">
        {/* step indicator */}
        <div className="mb-12 flex items-center justify-center gap-4">
          {[1, 2].map((s, i) => (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-300 ${
                    step === s
                      ? "border-yellow-500 bg-yellow-500 text-neutral-900"
                      : step > s
                      ? "border-yellow-500 bg-transparent text-yellow-500"
                      : "border-white/15 text-white/40"
                  }`}
                >
                  {step > s ? <FiCheck size={16} /> : s}
                </div>
                <span
                  className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${
                    step === s ? "text-yellow-500" : "text-white/40"
                  }`}
                >
                  {s === 1 ? "Information" : "Payment"}
                </span>
              </div>
              {i === 0 && (
                <div
                  className={`mb-5 h-[1px] w-16 transition-colors duration-300 ${
                    step > 1 ? "bg-yellow-500" : "bg-white/15"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10">
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                  Delivery Information
                </h2>
                <p className="mt-1.5 text-sm text-neutral-400">
                  Tell us where to send your Aurex.
                </p>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full rounded-md border bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500 ${
                    errors.name ? "border-red-500/60" : "border-white/15"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="01XXXXXXXXX"
                  className={`w-full rounded-md border bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500 ${
                    errors.phone ? "border-red-500/60" : "border-white/15"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="House, Road, Area, City"
                  className={`w-full rounded-md border bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500 ${
                    errors.address ? "border-red-500/60" : "border-white/15"
                  }`}
                />
                {errors.address && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.address}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  Order Note{" "}
                  <span className="normal-case text-white/30">(optional)</span>
                </label>
                <textarea
                  name="note"
                  value={form.note}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Delivery instructions, gift note, etc."
                  className="w-full resize-none rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500"
                />
              </div>

              <button
                onClick={handleContinue}
                className="mt-3 w-full rounded-md bg-yellow-500 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-yellow-400"
              >
                Continue to Payment
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                  Payment Method
                </h2>
                <p className="mt-1.5 text-sm text-neutral-400">
                  Choose how you'd like to pay.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {paymentOptions.map((option) => {
                  const Icon = option.icon;
                  const isActive = paymentMethod === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setPaymentMethod(option.id)}
                      className={`flex items-center gap-4 rounded-md border px-5 py-4 text-left transition-colors duration-300 ${
                        isActive
                          ? "border-yellow-500/50 bg-yellow-500/[0.06]"
                          : "border-white/15 bg-white/5 hover:border-white/25"
                      }`}
                    >
                      <span
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border"
                        style={{
                          borderColor: isActive
                            ? option.accent || "#EAB308"
                            : "rgba(255,255,255,0.15)",
                          color: option.accent || "#EAB308",
                        }}
                      >
                        <Icon size={18} />
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-semibold text-[var(--foreground)]">
                          {option.label}
                        </span>
                        <span className="block text-xs text-neutral-400">
                          {option.desc}
                        </span>
                      </span>
                      <span
                        className={`h-4 w-4 flex-shrink-0 rounded-full border-2 transition-colors ${
                          isActive
                            ? "border-yellow-500 bg-yellow-500"
                            : "border-white/25"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {needsManualPayment && (
                <div className="flex flex-col gap-4 rounded-md border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs leading-relaxed text-neutral-400">
                    Send the total amount to{" "}
                    <span className="font-semibold text-yellow-500">
                      01700-000000
                    </span>{" "}
                    ({paymentMethod === "bkash" ? "bKash" : "Nagad"} Personal),
                    then enter your number and the transaction ID below.
                  </p>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                      Your {paymentMethod === "bkash" ? "bKash" : "Nagad"} Number
                    </label>
                    <input
                      type="tel"
                      value={bkashNumber}
                      onChange={(e) => setBkashNumber(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                      Transaction ID
                    </label>
                    <input
                      type="text"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      placeholder="e.g. 8N7A6XXXXX"
                      className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500"
                    />
                  </div>
                </div>
              )}

              <div className="mt-2 flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/3 rounded-md border border-white/15 py-3.5 text-sm font-semibold text-[var(--foreground)] transition hover:border-white/30"
                >
                  Back
                </button>
                <button
                  onClick={handlePlaceOrder}
                  disabled={!canPlaceOrder}
                  className="w-2/3 rounded-md bg-yellow-500 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderForm;