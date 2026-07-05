'use client';
import { useState } from "react";
import StepIndicator from "./StepIndicator";
import DeliveryInfoStep from "./DeliveryInfoStep";
import PaymentStep from "./PaymentStep";

const OrderForm = ({ isSidebar = false }) => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");

  const formContent = (
    <div
      className={
        isSidebar
          ? "flex flex-col gap-5"
          : "rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10"
      }
    >
      {step === 1 && <DeliveryInfoStep onContinue={() => setStep(2)} />}
      {step === 2 && (
        <PaymentStep
          paymentMethod={paymentMethod}
          onSelectMethod={setPaymentMethod}
          onBack={() => setStep(1)}
          onPlaceOrder={() => {}}
        />
      )}
    </div>
  );

  if (isSidebar) {
    return (
      <div className="w-full">
        <StepIndicator step={step} isSidebar />
        {formContent}
      </div>
    );
  }

  return (
    <section className="w-full bg-[var(--background)] py-24">
      <div className="mx-auto max-w-xl px-6">
        <StepIndicator step={step} />
        {formContent}
      </div>
    </section>
  );
};

export default OrderForm;