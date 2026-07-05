import React from "react";
import SectionHeader from "../common/SectionHeader";
import GalleryCard from "../ui/GalleryCard";

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

const Gallery = () => {
  return (
    <section className="py-16" id="gallery">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <SectionHeader
          subtitle="Design Architecture"
          title="The Art of Chronometry"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {gallery.map((item) => (
            <GalleryCard key={item.src} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Gallery;