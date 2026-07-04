'use client'
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Is the watch waterproof?",
    answer:
      "Yes. Aurex is water resistant up to 100 meters (10 ATM), making it suitable for swimming, snorkeling, and everyday wear.",
  },
  {
    question: "Does it include a warranty?",
    answer:
      "Every Aurex timepiece comes with a 5-year international warranty covering manufacturing defects, along with lifetime service support.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "We provide complimentary worldwide express shipping. Most orders arrive within 3–5 business days.",
  },
  {
    question: "Can I return the watch?",
    answer:
      "Absolutely. You have 30 days to return your watch in its original condition for a full refund or exchange.",
  },
  {
    question: "Does it require a battery?",
    answer:
      "No. Aurex uses a Swiss automatic movement powered by the motion of your wrist with a 72-hour power reserve.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-[#0b0b0b] py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.3fr] lg:px-10">
        {/* Left Side */}
        <div className="lg:sticky lg:top-28 h-fit">
          <span className="text-sm uppercase tracking-[4px] text-yellow-500">
            Concierge
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-white">
            Frequently
            <br />
            Asked Questions
          </h2>

          <p className="mt-6 max-w-md text-gray-400 leading-8">
            Everything you need to know before reserving your Aurex
            timepiece. If you still have questions, our concierge team is
            available 24/7.
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <div
                key={index}
                className={`overflow-hidden border transition-all duration-300 ${
                  active
                    ? "border-yellow-500/40 bg-yellow-500/5"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() =>
                    setOpen(active ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >
                  <h3
                    className={`text-lg font-semibold transition ${
                      active ? "text-yellow-500" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`text-xl transition ${
                      active ? "text-yellow-500 rotate-180" : "text-gray-500"
                    }`}
                  >
                    {active ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    active
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-8 leading-8 text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;