"use client";
import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import Accordion from "../ui/Accordion";

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
  const [openIndex, setOpenIndex] = useState(0); // 0 = first item open by default, null = all closed

  const onToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 grid-cols-2 lg:px-0">
        {/* Left Side */}
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Concierge"
          />

          <p className="mt-6 text-base text-gray-400 leading-8">
            Everything you need to know before reserving your Aurex timepiece.
            If you still have questions, our concierge team is available 24/7.
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              faq={faq}
              active={openIndex === index}
              onToggle={() => onToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
