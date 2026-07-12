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
      className={`
        rounded-xl border backdrop-blur-md transition-all duration-300 w-full overflow-hidden
        ${
          open
            ? "border-violet-500/30 bg-zinc-900/60 shadow-md shadow-violet-950/5"
            : "border-white/10 bg-zinc-900/30 hover:border-white/20 hover:bg-zinc-900/40"
        }
      `}
    >
      {/* Accordion Action Header Button */}
      <button
        onClick={onToggle}
        className="
          flex w-full items-center justify-between gap-x-4
          p-5 sm:p-6 text-left focus:outline-none group
        "
      >
        <h3 className="text-sm sm:text-base font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-400">
          {question}
        </h3>

        <div className={`
          flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border 
          transition-all duration-300
          ${
            open
              ? "border-violet-500/30 bg-violet-500/10 text-violet-400"
              : "border-white/5 bg-zinc-800/40 text-zinc-400 group-hover:text-zinc-200"
          }
        `}>
          <FaChevronDown
            className={`
              text-[10px] transition-transform duration-300 ease-out
              ${open ? "rotate-180" : ""}
            `}
          />
        </div>
      </button>

      {/* Dynamic Smooth Height Wrapper Panel */}
      <div
        className={`
          grid transition-all duration-300 ease-in-out
          ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"}
        `}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/5 -mt-px">
            <p className="text-sm leading-relaxed text-zinc-400 font-normal mt-4">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}