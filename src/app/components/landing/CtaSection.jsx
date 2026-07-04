'use client'
import SectionHeader from "../common/SectionHeader";

export default function CtaSection() {
  return (
    <section
      className="relative w-full bg-(--background) bg-cover bg-no-repeat bg-right px-6 py-24 lg:py-32"
      style={{ backgroundImage: "url('/cta-banner-gpt.png')" }}
      id="buy"
    >
      {/* left-to-right dark overlay so text stays readable over the image */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,11,11,0.95) 0%, rgba(11,11,11,0.75) 35%, rgba(11,11,11,0.15) 65%, rgba(11,11,11,0) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-xl">
            <SectionHeader title="Claim Your Signature Piece" subtitle="Limited Edition Release" />

          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-neutral-400">
            Aurex is released in limited series of 500 units per batch.
            Reserve your Swiss-made chronograph today and receive a
            premium leather display case and 5-year international
            warranty.
          </p>

          <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
            <div className="flex flex-col items-start">
              <span className="font-mono text-lg text-white/30 line-through">
                $3,200
              </span>
              <span className="flex items-center gap-3 font-mono text-3xl font-bold text-(--foreground) sm:text-4xl">
                $2,450
                {/* <span className=" bg-yellow-500 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-900">
                  Launch Offer
                </span> */}
              </span>
            </div>

            <button
              onClick={() => {}}
              className="bg-yellow-500 px-6 py-3 text-base font-semibold text-neutral-900 transition hover:bg-yellow-400"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}