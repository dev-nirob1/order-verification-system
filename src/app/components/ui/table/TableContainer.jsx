const TableContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`overflow-hidden border border-white/10 text-gray-400 bg-[#111111] ${className}`}>
      {children}
    </div>
  );
};

export default TableContainer;