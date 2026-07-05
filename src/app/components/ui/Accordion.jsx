import { FiMinus, FiPlus } from "react-icons/fi";

const Accordion = ({ faq, active, onToggle }) => (
  <div
    className={`overflow-hidden border transition-all duration-300 ${
      active
        ? "border-yellow-500/40 bg-yellow-500/5"
        : "border-white/10 bg-white/3 hover:border-white/20"
    }`}>
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between px-8 py-7 text-left"
    >
      <h5
        className={`text-lg font-semibold transition ${active ? "text-yellow-500" : "text-white"}`}
      >
        {faq.question}
      </h5>
      <div
        className={`text-xl transition ${active ? "rotate-180 text-yellow-500" : "text-gray-500"}`}
      >
        {active ? <FiMinus /> : <FiPlus />}
      </div>
    </button>

    <div
      className={` grid transition-all duration-500 ${active ? "grid-rows-[1.5fr]" : "grid-rows-[0fr]"}`}
    >
      <p className="overflow-hidden px-8 leading-8 text-gray-400">
        {faq.answer}
      </p>
    </div>
  </div>
);
export default Accordion;
