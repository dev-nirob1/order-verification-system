const SectionHeader = ({ subtitle, title }) => {
  return (
    <div>
      <span className="text-sm uppercase tracking-[4px] text-yellow-500">
        {subtitle}
      </span>

      <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
