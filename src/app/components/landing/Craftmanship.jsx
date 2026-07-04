import Image from "next/image";
import { FaCircle } from "react-icons/fa";

const bullets = [
  {
    title: "Tested in 5 Positions",
    description:
      "Calibrated for gravity offsets in everyday active positions.",
  },
  {
    title: "Double-Barrel Power",
    description:
      "Ensuring constant torque and regular energy distribution.",
  },
];

const Craftsmanship = () => {
  return (
    <section className="bg-[#0b0b0b] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Image */}
        <div className="group overflow-hidden border border-white/10">
          <div className="h-[350px] overflow-hidden lg:h-[500px]">
            <Image
              src="/watch_details.png"
              alt="Swiss watch craftsmanship"
              width={800}
              height={1000}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-sm uppercase tracking-[4px] text-yellow-500">
            Handcrafted Legacy
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Caliber of the Elite
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Every Aurex Chronograph is individually assembled by master
            watchmakers in Geneva. Each timepiece undergoes more than 240
            hours of meticulous calibration, shock-resistance tuning, and
            waterproof testing before leaving the workshop.
          </p>

          <div className="mt-10 space-y-8">
            {bullets.map((item) => (
              <div key={item.title} className="flex gap-5">
                <FaCircle
                  size={8}
                  className="mt-2 shrink-0 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
                />

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

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