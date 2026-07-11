import { FaChevronDown } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

export default function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: FAQItemProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/3
        backdrop-blur-xl
        transition-all
        duration-300
      "
    >
      {/* Question */}
      <button
        onClick={onToggle}
        className="
          flex
          w-full
          items-center
          justify-between
          p-6
          text-left
        "
      >
        <h3 className="text-lg font-semibold text-white">
          {question}
        </h3>

        <FaChevronDown
          className={`
            text-violet-400
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Answer */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ${open ? "max-h-96 px-6 pb-6" : "max-h-0"}
        `}
      >
        <p className="leading-7 text-zinc-400">
          {answer}
        </p>
      </div>
    </div>
  );
}