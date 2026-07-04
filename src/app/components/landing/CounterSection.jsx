const CounterSection = () => {
  const metrics = [
    {
      number: "72h",
      label: "Power Reserve",
      description:
        "Continuous automatic power driven by Swiss movement.",
    },
    {
      number: "300m",
      label: "Water Depth",
      description:
        "Deep-sea resistance engineered for professional diving.",
    },
    {
      number: "28,800",
      label: "VPH Frequency",
      description:
        "High-frequency mechanical oscillations for extreme precision.",
    },
  ];

  return (
    <section id="specs" className="relative z-10 bg-[#0b0b0b] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/30 hover:bg-white/10"
            >
              <h2 className="mb-3 text-5xl font-bold tracking-tight text-white">
                {metric.number}
              </h2>

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-yellow-500">
                {metric.label}
              </h3>

              <p className="text-sm leading-7 text-gray-400">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;