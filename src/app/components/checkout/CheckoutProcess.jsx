import React, { useState } from "react";
import StepIndicator from "./StepIndecator";
import Form from "./Form";
import PaymentStep from "./PaymentStep";
import NumberInput from "./NumberInput/NumberInput";

const CheckoutProcess = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(null);
  return (
    <section className="w-full min-h-screen px-4">
      {/* Step Header Area */}
      <StepIndicator step={step} />
     {step===1 && <NumberInput setStep={setStep}/>}
     {step === 2 && <PaymentStep paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} setStep={setStep}/>}
    </section>
  );
};

export default CheckoutProcess;
