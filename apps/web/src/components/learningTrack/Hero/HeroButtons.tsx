import { FaArrowRight, FaMapMarkedAlt } from "react-icons/fa";

export default function HeroButtons() {
  // Common styles for both buttons
  const baseButtonStyles = `
    group flex items-center justify-center gap-3 
    rounded-2xl px-8 py-4 font-semibold text-white 
    transition-all duration-300 active:scale-95
  `;

  // Primary Button specific styles
  const primaryStyles = `
    bg-gradient-to-r from-violet-600 to-purple-600 
    shadow-[0_0_30px_rgba(139,92,246,0.35)] 
    hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]
  `;

  // Secondary Button specific styles
  const secondaryStyles = `
    border border-white/10 bg-white/[0.03] backdrop-blur-xl 
    hover:border-violet-500/40 hover:bg-violet-500/10
  `;

  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
      {/* Primary Button */}
      <button className={`${baseButtonStyles} ${primaryStyles}`}>
        Start Learning
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      {/* Secondary Button */}
      <button className={`${baseButtonStyles} ${secondaryStyles}`}>
        View Roadmap
        <FaMapMarkedAlt className="transition-transform duration-300 group-hover:rotate-6" />
      </button>
    </div>
  );
}