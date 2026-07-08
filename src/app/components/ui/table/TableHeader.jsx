const TableHeader = ({
  children,
  gridCols = "md:grid-cols-[1fr_1.3fr_1.2fr_1fr_0.7fr_0.8fr]",
  className = "",
}) => {
  return (
    <div
      className={`hidden md:grid ${gridCols} border-b border-white/10 bg-white/2 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#F5F5F5]/50 ${className}`}
    >
      {children}
    </div>
  );
};

export default TableHeader;