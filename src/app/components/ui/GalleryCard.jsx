import Image from "next/image";
import { FiPlus } from "react-icons/fi";

const GalleryCard = ({item}) => {
  return (
    <div className="group relative aspect-square overflow-hidden border border-white/10">
      <Image
        width={400}
        height={400}
        src={item.src}
        alt={item.alt}
        className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />

      {/* overlay: dim + gradient combined, fades in together */}
      <div className="absolute inset-0 bg-linear-to-t from-[rgba(11,11,11,0.92)] via-black/40 to-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* hover content: plus icon + caption fade/slide in together */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/40 bg-black/40 text-yellow-500 backdrop-blur-sm">
          <FiPlus size={24} />
        </button>

        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-300 group-hover:translate-y-0">
          <h5 className="text-lg font-semibold text-white">
            {item.title}
          </h5>
          <p className="mt-1.5 
          leading-relaxed text-neutral-300">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
