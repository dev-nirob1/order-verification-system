import CounterCard from "../ui/CounterCard";

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
    <section id="specs" className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <CounterCard key={index} data={metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;