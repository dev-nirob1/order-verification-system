import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-(--background) text-(--foreground)">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-20 lg:flex-row lg:gap-16 lg:py-28">
        {/* left: copy */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <p className="text-xs font-semibold tracking-[0.3em] text-yellow-500">
            AUREX &middot; CHRONOGRAPH
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Time defines you.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-neutral-400 lg:mx-0">
            Crafted with sapphire crystal, stainless steel, and Swiss
            precision, for those who value every second.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <button className="cursor-pointer bg-yellow-500 px-7 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-yellow-400">
              Buy Now
            </button>

            <a
              href="#features"
              className="text-sm font-semibold text-(--foreground)
              underline decoration-yellow-500 decoration-2 underline-offset-4 transition hover:text-yellow-500"
            >
              Explore features
            </a>
          </div>
        </div>

        {/* right: product image */}
        <div className="w-full lg:w-1/2">
          <Image
            width={500}
            height={500}
            src="/watch_hero.png"
            alt="Aurex chronograph watch"
            className="mx-auto w-full max-w-md rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;