const PaymentOptionButton = ({ option, isActive, onSelect }) => {
  const Icon = option.icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex items-center gap-4 rounded-md border px-5 py-4 text-left transition-colors duration-300 cursor-pointer ${
        isActive
          ? "border-yellow-500/50 bg-yellow-500/[0.06]"
          : "border-white/15 bg-white/5 hover:border-white/25"
      }`}
    >
      <span
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border"
        style={{
          borderColor: isActive ? option.accent || "#EAB308" : "rgba(255,255,255,0.15)",
          color: option.accent || "#EAB308",
        }}
      >
        <Icon size={18} />
      </span>
      <span className="flex-1">
        <span className="block text-sm font-semibold text-[var(--foreground)]">
          {option.label}
        </span>
        <span className="block text-xs text-neutral-400">{option.desc}</span>
      </span>
      <span
        className={`h-4 w-4 flex-shrink-0 rounded-full border-2 transition-colors ${
          isActive ? "border-yellow-500 bg-yellow-500" : "border-white/25"
        }`}
      />
    </button>
  );
};

export default PaymentOptionButton;