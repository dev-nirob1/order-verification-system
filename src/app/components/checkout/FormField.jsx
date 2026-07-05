const FormField = ({ label, optional = false, ...inputProps }) => (
  <div>
    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
      {label}
      {optional && <span className="normal-case text-white/30"> (optional)</span>}
    </label>
    <input
      {...inputProps}
      className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500"
    />
  </div>
);

export default FormField;