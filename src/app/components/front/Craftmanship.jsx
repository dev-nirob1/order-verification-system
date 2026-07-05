import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";

const bullets = [
  {
    title: "Tested in 5 Positions",
    description: "Calibrated for gravity offsets in everyday active positions.",
  },
  {
    title: "Double-Barrel Power",
    description: "Ensuring constant torque and regular energy distribution.",
  },
  {
    title: "Shock-Resistant",
    description: "Designed to withstand the rigors of daily wear and active lifestyles.",
  },
];

const Craftsmanship = () => {
  return (
    <section className="bg-(--foreground) py-16">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 px-6 lg:px-0">
        {/* Image */}
        <div className="max-h-auto">
          <Image
            src="/watch_details.png"
            alt="Swiss watch craftsmanship"
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <SectionHeader
            title="Caliber of the Elite"
            subtitle="Precision Engineering"
          />
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Every Aurex Chronograph is individually assembled by master
            watchmakers in Geneva. Each timepiece undergoes more than 240 hours
            of meticulous calibration, shock-resistance tuning, and waterproof
            testing before leaving the workshop.
          </p>

          <div className="mt-6 space-y-8">
            {bullets.map((item) => (
              <div key={item.title} className="flex gap-5">
                <FaCircle
                  size={8}
                  className="mt-2 shrink-0 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
                />

                <div>
                  <h5 className="text-lg font-semibold text-white">
                    {item.title}
                  </h5>

                  <p className="mt-2 leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
