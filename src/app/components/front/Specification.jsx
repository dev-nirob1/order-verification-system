import React from "react";
import SectionHeader from "../common/SectionHeader";
import SpecsTable from "../ui/SpecsTable";

const specs = [
  { label: "Case", value: "Stainless Steel" },
  { label: "Glass", value: "Sapphire Crystal" },
  { label: "Diameter", value: "42mm" },
  { label: "Water Resistance", value: "100M" },
  { label: "Strap", value: "Genuine Leather" },
  { label: "Weight", value: "88g" },
];

const Specification = () => {
  return (
    <section className="bg-(--foreground) py-16" id="specs">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">

          {/* left: info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeader
              title="Technical Specifications"
              subtitle="Detailed Metrics"
            />
            <p className="mt-5 text-base leading-relaxed text-neutral-400">
              Every dimension and material is calibrated to provide maximum
              durability, ergonomic comfort on the wrist, and flawless
              timing utility.
            </p>
            <p className="mt-5 text-base leading-relaxed text-neutral-400">
              The case is crafted from premium stainless steel, ensuring
              resistance to corrosion and wear. The sapphire crystal glass is
              scratch-resistant, providing a clear view of the dial while
            </p>
          </div>

          {/* right: spec table */}
          <div className="w-full">
                {specs.map((spec, index) => (
                  <SpecsTable key={index} spec={spec} index={index} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Specification;