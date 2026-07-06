"use client";
import { useCheckout } from "@/app/hooks/useCheckout";
import Image from "next/image";
import React from "react";

const CtaSection = () => {
  const { openCheckout } = useCheckout();
  return (
    <section className="relative overflow-hidden bg-(--foreground) px-6 lg:px-0 py-16">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Left: copy */}
        <div>
          <h1 className="mb-6 font-serif text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-gray-300">
            Own the moment
            <br />
            <span className="text-yellow-500">you&apos;ve earned.</span>
          </h1>

          <p className="mx-auto mb-4 text-base leading-relaxed text-gray-300">
            Hand-finished in steel and gold, built on a movement tuned to the
            second. Every case is numbered. Every order is limited.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-4xl font-bold text-white">$1,240</span>
            <span className="text-lg text-neutral-500 line-through">
              $1,550
            </span>
            <span className="border border-yellow-500/40 bg-yellow-500/10 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-yellow-500">
              Save 20%
            </span>
          </div>
          <div className="my-6 flex flex-col gap-4 sm:flex-row">
            <button
              className="bg-yellow-500 px-7 py-3 font-semibold uppercase text-neutral-900 transition hover:bg-yellow-400"
              onClick={openCheckout}
            >
              Buy Now
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 border-t border-white/10 pt-6 md:justify-start">
            {[
              "Sapphire crystal",
              "100m water resistant",
              "5-year warranty",
            ].map((label) => (
              <span key={label} className="flex items-baseline gap-2 font-mono">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C9A66B]" />
                <span className="text-xs uppercase tracking-wide text-[#B8B1A2]">
                  {label}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Right: visual */}
        <div className="relative flex h-105 items-center justify-center md:h-140">
          <div className="absolute h-75 w-75 rounded-full bg-[radial-gradient(circle,rgba(201,166,107,0.28)_0%,rgba(201,166,107,0)_70%)] blur-sm md:105 md:w-105" />

          <svg
            className="absolute h-100 w-100 animate-[spin_90s_linear_infinite] motion-reduce:animate-none md:h-140 md:w-140"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            {Array.from({ length: 60 }).map((_, i) => {
              const angle = (i * 6 * Math.PI) / 180;
              const isMajor = i % 5 === 0;
              const outer = 98;
              const inner = isMajor ? 88 : 93;
              const x1 = 100 + outer * Math.sin(angle);
              const y1 = 100 - outer * Math.cos(angle);
              const x2 = 100 + inner * Math.sin(angle);
              const y2 = 100 - inner * Math.cos(angle);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isMajor ? "#C9A66B" : "rgba(201,166,107,0.35)"}
                  strokeWidth={isMajor ? 1.6 : 0.8}
                />
              );
            })}
          </svg>

          <Image
            height={400}
            width={400}
            src="/cta.png"
            alt="Chronograph watch, gold and steel case on black leather strap"
            className="relative z-10 w-[88%] max-w-115 drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]"
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
