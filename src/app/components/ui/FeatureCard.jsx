const FeatureCard = ({ feature }) => {
  return (
    <div className="group p-8 border border-white/10 bg-(--background) flex flex-col gap-4 min-h-55">
      <div className="flex h-12.5 w-12.5 items-center justify-center border border-yellow-500/10 bg-yellow-500/5 text-2xl text-yellow-500 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black">
        {feature.icon}
      </div>

      {/* Title */}
      <h5 className="text-xl font-semibold text-white">{feature.title}</h5>
      {/* Description */}
      <p className="leading-7 text-gray-400">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
