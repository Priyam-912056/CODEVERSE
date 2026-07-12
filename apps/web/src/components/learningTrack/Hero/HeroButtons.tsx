import { FaArrowRight, FaMapMarkedAlt } from "react-icons/fa";

export default function HeroButtons() {
  // Common styles for both buttons
  const baseButtonStyles = `
    group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 
    rounded-xl px-8 py-4 text-sm font-semibold text-white 
    transition-all duration-300 active:scale-[0.98] tracking-wide
  `;

  // Primary Button specific styles
  const primaryStyles = `
    bg-violet-600 shadow-lg shadow-violet-600/20 
    hover:bg-violet-500 hover:shadow-violet-500/30
  `;

  // Secondary Button specific styles
  const secondaryStyles = `
    border border-white/10 bg-zinc-900/80 backdrop-blur-md 
    hover:border-white/20 hover:bg-zinc-900 hover:text-white text-zinc-200
  `;

  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto">
      {/* Primary Button */}
      <button className={`${baseButtonStyles} ${primaryStyles}`}>
        Start Learning
        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>

      {/* Secondary Button */}
      <button className={`${baseButtonStyles} ${secondaryStyles}`}>
        View Roadmap
        <FaMapMarkedAlt className="text-xs transition-transform duration-300 group-hover:scale-105" />
      </button>
    </div>
  );
}