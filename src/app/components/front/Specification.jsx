import React from "react";

const specs = [
  { label: "Case", value: "Stainless Steel" },
  { label: "Glass", value: "Sapphire Crystal" },
  { label: "Diameter", value: "42mm" },
  { label: "Water Resistance", value: "100M" },
  { label: "Strap", value: "Genuine Leather" },
  { label: "Weight", value: "88g" },
];

export default function Specification() {
  return (
    <section className="w-full bg-[var(--background)] py-24" id="specifications-detail">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* left: info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
              Detailed Metrics
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-5 max-w-md text-base font-light leading-relaxed text-neutral-400">
              Every dimension and material is calibrated to provide maximum
              durability, ergonomic comfort on the wrist, and flawless
              timing utility.
            </p>

          
          </div>

          {/* right: spec table */}
          <div className="w-full">
            <table className="w-full border-collapse">
              <tbody>
                {specs.map((spec, index) => (
                  <tr key={spec.label} className="group">
                    <td className="border-b border-white/5 py-6 pr-4 transition-colors duration-300 group-hover:border-yellow-500/30">
                      <span className="mr-3 font-mono text-xs text-white/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-medium tracking-wide text-white/50 transition-colors duration-300 group-hover:text-yellow-500">
                        {spec.label}
                      </span>
                    </td>
                    <td className="border-b border-white/5 py-6 text-right text-base font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:border-yellow-500/30">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}