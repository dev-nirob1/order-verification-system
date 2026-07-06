import { FiCheck } from "react-icons/fi";

const labels = ["Information", "Payment"];

const StepIndicator = ({ step, isSidebar = false }) => (
  <div
    className={`flex items-center justify-center gap-4 ${isSidebar ? "mb-8" : "mb-12"}`}
  >
    {labels.map((label, i) => {
      const s = i + 1;
      const active = step === s;
      const done = step > s;

      return (
        <div key={s} className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-300 ${
                active
                  ? "border-yellow-500 bg-yellow-500 text-neutral-900"
                  : done
                    ? "border-yellow-500 text-yellow-500"
                    : "border-white/15 text-white/40"
              }`}
            >
              {done ? <FiCheck size={16} /> : s}
            </div>
            <span
              className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${
                active ? "text-yellow-500" : "text-white/40"
              }`}
            >
              {label}
            </span>
          </div>

          {i === 0 && (
            <div
              className={`mb-5 h-px w-16 transition-colors duration-300 ${step > 1 ? "bg-yellow-500" : "bg-white/15"}`}
            />
          )}
        </div>
      );
    })}
  </div>
);

export default StepIndicator;
