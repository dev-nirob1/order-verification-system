import Image from "next/image";
import React from "react";
import { FiPlus } from "react-icons/fi";

export const gallery = [
  {
    src: "/gallery-1.png",
    alt: "Aurex dial face close-up",
    title: "Aurex Gold Signature",
    desc: "Our signature dark watch face with contrasting 18-karat gold sub-dials and crown detailing.",
  },
  {
    src: "/gallery-2.png",
    alt: "Chronograph sub-dials close-up",
    title: "Micro-Engineering",
    desc: "A macro look at the chronograph sub-dials, hand-finished to micrometer-level precision.",
  },
  {
    src: "/gallery-3.png",
    alt: "Crown and pushers close-up",
    title: "Crown & Pushers",
    desc: "Precision-milled crown and pushers finished in brushed steel with gold accents.",
  },
  {
    src: "/gallery-4.png",
    alt: "Leather strap texture, left side",
    title: "Genuine Leather Craft",
    desc: "Hand-stitched, alligator-embossed leather strap for lasting comfort.",
  },
  {
    src: "/gallery-5.png",
    alt: "Leather strap texture, right side",
    title: "Detail Stitching",
    desc: "Every seam finished by hand for durability that ages well.",
  },
  {
    src: "/gallery-6.png",
    alt: "Case and bezel profile",
    title: "Sculpted Case",
    desc: "The case profile, sculpted for a refined silhouette on the wrist.",
  },
];

export default function Gallery() {
  return (
    <section className="w-full bg-(--background) py-24" id="gallery">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Design Architecture
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-(--foreground) sm:text-4xl">
            The Art of Chronometry
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-square overflow-hidden border border-white/10"
            >
              <Image
              width={400}
              height={400}
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* hover dim */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/55" />

              {/* plus icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500/40 bg-black/40 text-yellow-500 backdrop-blur-sm">
                  <FiPlus size={24} />
                </span>
              </div>

              {/* gradient + caption */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,11,0.92)] via-[rgba(11,11,11,0.2)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-(--foreground)">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-neutral-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}