import { HiOutlineSparkles } from "react-icons/hi2";
import { GiClockwork } from "react-icons/gi";
import { FaCogs } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import SectionHeader from "../common/SectionHeader";

const FeaturesSection = () => {
  const features = [
    {
      title: "Scratch-Resistant Sapphire",
      description:
        "Protected by double-domed, anti-reflective sapphire crystal. Diamond-like hardness guarantees clarity under any extreme condition.",
      span: "lg:col-span-2",
      icon: <HiOutlineSparkles />,
    },
    {
      title: "Swiss Caliber",
      description:
        "Self-winding mechanism with 25 jewels for lifelong timing reliability.",
      span: "",
      icon: <GiClockwork />,
    },
    {
      title: "Grade 5 Steel",
      description:
        "Forged casing designed to withstand heavy impact and resist corrosion.",
      span: "",
      icon: <FaCogs />,
    },
    {
      title: "Super-LumiNova® Hands",
      description:
        "Luminescent elements on hands and indexes provide unmatched visibility in low-light environments, framed with 18k gold bezels.",
      span: "lg:col-span-2",
      icon: <MdOutlineVisibility />,
    },
  ];

  return (
    <section id="features" className="bg-[#0b0b0b] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader 
          subtitle="Precision Engineering" 
          title="Built Without Compromise" 
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className={`group border border-white/10 bg-white/5 p-10 min-h-[280px] flex flex-col justify-end backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/30 hover:bg-white/10 ${item.span}`}
            >
              {/* Icon */}
              <div className="mb-8 flex h-[50px] w-[50px] items-center justify-center border border-yellow-500/10 bg-yellow-500/5 text-2xl text-yellow-500 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-semibold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-7 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;