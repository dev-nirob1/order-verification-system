const TableRow = ({
  children,
  gridCols = "md:grid-cols-[1fr_1.3fr_1.2fr_1fr_0.7fr_0.8fr]",
  className = "",
}) => {
  return (
    <div
      className={`grid gap-3 border-b border-white/5 px-4 py-4 transition-colors hover:bg-white/3 md:grid ${gridCols} md:items-center md:gap-4 md:py-3 ${className}`}
    >
      {children}
    </div>
  );
};

export default TableRow;