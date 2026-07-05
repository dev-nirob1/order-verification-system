const SpecsTable = ({spec, index}) => {
  return (
      <div
        key={spec.label}
        className="group grid grid-cols-2 items-center gap-4 border-b border-white/5 py-6 transition-colors duration-300 hover:border-yellow-500/30 text-gray-300"
      >
        <div>
          <span className="mr-2 text-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-base font-medium tracking-wide transition-colors duration-300 group-hover:text-yellow-500">
            {spec.label}
          </span>
        </div>
        <div className="font-semibold text-right">
          {spec.value}
        </div>
      </div>
  );
};

export default SpecsTable;
