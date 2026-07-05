import { HiOutlineSparkles } from "react-icons/hi2";
import { GiClockwork } from "react-icons/gi";
import { FaCogs } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import SectionHeader from "../common/SectionHeader";
import FeatureCard from "../ui/FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      title: "Scratch-Resistant Sapphire",
      description:
        "Protected by double-domed, anti-reflective sapphire crystal. Diamond-like hardness guarantees clarity under any extreme condition.",
      icon: <HiOutlineSparkles />,
    },
    {
      title: "Swiss Caliber",
      description:
        "Self-winding mechanism with 25 jewels for lifelong timing reliability.",
      icon: <GiClockwork />,
    },
    {
      title: "Grade 5 Steel",
      description:
        "Forged casing designed to withstand heavy impact and resist corrosion.",
      icon: <FaCogs />,
    },
    {
      title: "Super-LumiNova® Hands",
      description:
        "Luminescent elements on hands and indexes provide unmatched visibility in low-light environments, framed with 18k gold bezels.",
      icon: <MdOutlineVisibility />,
    },
  ];

  return (
    <section id="features" className="py-16 bg-(--foreground)">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <SectionHeader className="mb-12"
          subtitle="Precision Engineering" 
          title="Built Without Compromise" 
        />

        {/* Bento Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="nth-1:lg:col-span-2 nth-4:lg:col-span-2">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;