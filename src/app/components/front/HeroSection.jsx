'use client'
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import { useCheckout } from "@/app/hooks/useCheckout";

const Hero = () => {
  const {openCheckout} = useCheckout();
  return (
    <section className="relative min-h-screen py-16">
      {/* background image */}
      <Image
        src="/cta-banner-gpt.png"
        alt=""
        fill
        priority
        className="-z-10 object-cover"
      />
      {/* dark gradient so text stays readable over the photo */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-neutral-950 via-neutral-950/70 to-neutral-800/5" />

      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center px-6 lg:px-0">
        <SectionHeader
          title="Claim Your Signature Piece"
          subtitle="Limited Edition Release"
        />

        <p className="mx-auto max-w-md text-lg leading-relaxed text-neutral-400 lg:mx-0 mt-4">
          Crafted with sapphire crystal, stainless steel, and Swiss precision,
          for those who value every second.
        </p>

        {/* Price */}
        <div className="mt-6 flex items-baseline gap-3">
          <span className="text-4xl font-bold text-white">$1,240</span>
          <span className="text-lg text-neutral-500 line-through">$1,550</span>
          <span className="border border-yellow-500/40 bg-yellow-500/10 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-yellow-500">
            Save 20%
          </span>
        </div>

        {/* action buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button 
            className="bg-yellow-500 px-7 py-3 font-semibold uppercase text-neutral-900 transition hover:bg-yellow-400"
            onClick={openCheckout}
          >
            Buy Now
          </button>

          <button className="border border-yellow-500 px-7 py-3 uppercase text-yellow-500 transition hover:bg-yellow-500 hover:text-neutral-900">
            See Details
          </button>
        </div>

        <p className="mt-4 text-xs uppercase tracking-wide text-neutral-500">
          Only 42 pieces remaining · Free worldwide shipping
        </p>
      </div>
    </section>
  );
};

export default Hero;
