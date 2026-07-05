import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCards = ({ item }) => {
  return (
    <div>
      <div className="border border-white/10 bg-(--foreground) p-10">
        {/* Stars */}
        <div className="mb-8 flex gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={16} />
          ))}
        </div>

        {/* Review */}
        <p className="text-lg leading-9 text-gray-400">
          &quot;{item.review}&quot;
        </p>

        {/* User */}
        <div className="mt-10 flex items-center gap-4">
          <Image
            src={item.image}
            alt={item.name}
            width={60}
            height={60}
            className="h-14 w-14 object-cover border border-yellow-500/20"
          />

          <div>
            <h4 className="font-semibold text-white">{item.name}</h4>
            <p className="text-yellow-500">{item.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
