import Link from "next/link";
import { FiCheckCircle, FiMapPin, FiLogIn } from "react-icons/fi";

const SuccessPage = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6">
      <div className="flex flex-col gap-4 items-center text-center max-w-md w-full">
        {/* Animated Check Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500/10 blur-2xl rounded-full scale-150" />
          <div className="relative flex h-24 w-24 items-center justify-center border border-yellow-500/30 bg-yellow-500/5">
            <FiCheckCircle size={44} className="text-yellow-500" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold uppercase tracking-[3px] text-white">
          Order Placed!
        </h1>

        {/* Message */}
        <p className="text-sm text-neutral-400 leading-relaxed">
          Thank you for your purchase. Your order has been received and is now
          being processed by our team.
        </p>


        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Link
            href="/track-order"
            className="flex flex-1 items-center justify-center gap-2.5 border border-yellow-500 bg-yellow-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-900 transition-all duration-300 hover:bg-yellow-400 hover:border-yellow-400"
          >
            <FiMapPin size={16} />
            Track Order
          </Link>

          <Link
            href="/login"
            className="flex flex-1 items-center justify-center gap-2.5 border border-white/15 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-300 transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/5"
          >
            <FiLogIn size={16} />
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
