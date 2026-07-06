import React from "react";
import SectionHeader from "../common/SectionHeader";
import SpecsTable from "../ui/SpecsTable";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

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
};
export default Specification;
