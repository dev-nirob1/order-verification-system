"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Marcus Vincent",
    role: "Verified Buyer",
    image: "/images/users/user-1.jpg",
    review:
      "The craftsmanship exceeded every expectation. It feels like a watch that will stay with me for decades.",
  },
  {
    id: 2,
    name: "Sophia Lee",
    role: "Verified Buyer",
    image: "/images/users/user-2.jpg",
    review:
      "Elegant, minimal and incredibly premium. I've received compliments almost every day.",
  },
  {
    id: 3,
    name: "David Kim",
    role: "Collector",
    image: "/images/users/user-3.jpg",
    review:
      "The finishing rivals watches that cost twice as much. Beautiful attention to detail.",
  },
  {
    id: 4,
    name: "Oliver James",
    role: "Verified Buyer",
    image: "/images/users/user-4.jpg",
    review:
      "From packaging to build quality, everything screams luxury. Absolutely worth it.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[#0b0b0b] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[4px] text-yellow-500">
            Owner Reviews
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Trusted Testimony
          </h2>

        </div>

        <Swiper
          modules={[ Autoplay]}
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
            <SwiperSlide key={item.id}>
              <div className="border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition duration-300 hover:border-yellow-500/30 hover:bg-white/[0.05]">

                {/* Stars */}

                <div className="mb-8 flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>

                {/* Review */}

                <p className="min-h-[130px] text-lg leading-9 text-gray-300">
                  "{item.review}"
                </p>

                {/* User */}

                <div className="mt-10 flex items-center gap-4">

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="h-14 w-14 object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-white">
                      {item.name}
                    </h4>

                    <p className="text-sm text-yellow-500">
                      {item.role}
                    </p>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}