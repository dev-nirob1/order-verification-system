"use client";
import { useState } from "react";
import Link from "next/link";
import { FiCheckCircle, FiMapPin, FiUserPlus, FiLock, FiGift, FiTag, FiZap } from "react-icons/fi";

const SuccessPage = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // handle registration submit here
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6">
      <div className="flex flex-col gap-4 items-center text-center max-w-md w-full">
        {/* Animated Check Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500/10 blur-2xl rounded-full scale-150" />
          <div className="relative flex h-16 w-16 items-center justify-center border border-yellow-500/30 bg-yellow-500/5">
            <FiCheckCircle size={25} className="text-yellow-500" />
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

        {!showRegister ? (
          <>
            {/* Offer block */}
            <div className="w-full border border-yellow-500/30 bg-yellow-500/5 p-5 mt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-yellow-500 mb-3">
                Unlock instantly with an account
              </p>
              <div className="flex flex-col gap-2.5 text-left">
                <div className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <FiTag size={15} className="text-yellow-500 shrink-0" />
                  10% off your next order
                </div>
                <div className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <FiZap size={15} className="text-yellow-500 shrink-0" />
                  Real-time order tracking, no re-entering details
                </div>
                <div className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <FiGift size={15} className="text-yellow-500 shrink-0" />
                  Early access to drops & member-only deals
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                type="button"
                onClick={() => setShowRegister(true)}
                className="flex flex-1 items-center justify-center gap-2.5 border border-yellow-500 bg-yellow-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-900 transition-all duration-300 hover:bg-yellow-400 hover:border-yellow-400"
              >
                <FiUserPlus size={16} />
                Register
              </button>

              <Link
                href="/track-order"
                className="flex flex-1 items-center justify-center gap-2.5 border border-yellow-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-yellow-500 transition-all duration-300 hover:border-yellow-500 hover:text-(--foreground) hover:bg-yellow-500"
              >
                <FiMapPin size={16} />
                Track Order
              </Link>
            </div>
          </>
        ) : (
          <form onSubmit={handleRegister} className="flex flex-col gap-3 w-full mt-2">
            <p className="text-xs text-neutral-500 mb-1">
              Just set a password — we'll use your order details for the rest.
            </p>

            <div className="relative">
              <FiLock
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
              />
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                className="w-full bg-transparent border border-white/15 pl-10 pr-4 py-3.5 text-sm text-white placeholder:text-neutral-500 focus:border-yellow-500 outline-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 border border-yellow-500 bg-yellow-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-900 transition-all duration-300 hover:bg-yellow-400 hover:border-yellow-400"
            >
              Unlock My Rewards
            </button>

            <button
              type="button"
              onClick={() => setShowRegister(false)}
              className="text-sm font-medium uppercase tracking-wider text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Maybe later
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default SuccessPage;