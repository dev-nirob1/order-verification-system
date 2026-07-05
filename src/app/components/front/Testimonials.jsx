"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "../common/SectionHeader";
import TestimonialCards from "../ui/TestimonialCards";

const testimonials = [
  {
    id: 1,
    name: "Marcus Vincent",
    role: "Verified Buyer",
    image: "/profile.jpg",
    review:
      "The craftsmanship exceeded every expectation. It feels like a watch that will stay with me for decades.",
  },
  {
    id: 2,
    name: "Sophia Lee",
    role: "Verified Buyer",
    image: "/profile.jpg",
    review:
      "Elegant, minimal and incredibly premium. I've received compliments almost every day.",
  },
  {
    id: 3,
    name: "David Kim",
    role: "Collector",
    image: "/profile.jpg",
    review:
      "The finishing rivals watches that cost twice as much. Beautiful attention to detail.",
  },
  {
    id: 4,
    name: "Oliver James",
    role: "Verified Buyer",
    image: "/profile.jpg",
    review:
      "From packaging to build quality, everything screams luxury. Absolutely worth it.",
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        {/* Heading */}
        <SectionHeader
          title="What Our Customers Say"
          subtitle="our satisfied customers"
        />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 4500,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="mt-12">
              <TestimonialCards item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonials;
