import React from "react";
import { FiCheck } from "react-icons/fi";

const steps = [
  { id: 1, label: "Information" },
  { id: 2, label: "Payment" },
];

const StepIndicator = ({ step, isSidebar = false }) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${isSidebar ? "mb-8" : "mb-12"}`}>
      {steps.map((s, i) => (
        <React.Fragment key={s.id}>
          <div className="flex flex-col items-center gap-2">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-300 ${
                step === s.id
                  ? "border-yellow-500 bg-yellow-500 text-neutral-900"
                  : step > s.id
                  ? "border-yellow-500 bg-transparent text-yellow-500"
                  : "border-white/15 text-white/40"
              }`}
            >
              {step > s.id ? <FiCheck size={16} /> : s.id}
            </div>
            <span
              className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${
                step === s.id ? "text-yellow-500" : "text-white/40"
              }`}
            >
              {s.label}
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
  );
};

export default StepIndicator;