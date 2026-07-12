import { FaArrowRight, FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CTAButtons() {
  // Common interactive layouts styles 
  const baseLinkStyles = `
    group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 
    rounded-xl px-8 py-4 text-sm font-semibold text-white 
    transition-all duration-300 active:scale-[0.98] tracking-wide
  `;

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto">
      {/* Primary Button */}
      <Link
        to="/projects"
        className={`
          ${baseLinkStyles}
          bg-violet-600 shadow-lg shadow-violet-600/20 
          hover:bg-violet-500 hover:shadow-violet-500/30
        `}
      >
        <FaFolderOpen className="text-xs text-violet-200 transition-transform duration-300 group-hover:scale-110" />
        <span>Explore Projects</span>
      </Link>

      {/* Secondary Button */}
      <Link
        to="/roadmaps"
        className={`
          ${baseLinkStyles}
          border border-white/10 bg-zinc-800/40 backdrop-blur-md 
          hover:border-white/20 hover:bg-zinc-800 text-zinc-200 hover:text-white
        `}
      >
        <span>Browse Roadmaps</span>
        <FaArrowRight className="text-[10px] text-zinc-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
      </Link>
    </div>
  );
}