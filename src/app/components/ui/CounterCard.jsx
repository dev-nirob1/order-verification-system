const CounterCard = ({data}) => {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-3 px-6 py-8 border border-white/10 bg-(--foreground)">
            <h3 className="text-4xl font-bold text-white">{data.number}</h3>
            <h4 className="text-lg font-semibold text-yellow-500 capitalize">{data.label}</h4>
            <p className="text-neutral-400">{data.description}</p>
        </div>
    );
};

export default CounterCard;