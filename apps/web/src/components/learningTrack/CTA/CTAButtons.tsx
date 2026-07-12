import { FaArrowRight, FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CTAButtons() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
      {/* Primary Button */}
      <Link
        to="/projects"
        className="
          inline-flex
          items-center
          gap-3
          rounded-xl
          bg-violet-600
          px-8
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-violet-500
        "
      >
        <FaFolderOpen />
        Explore Projects
      </Link>

      {/* Secondary Button */}
      <Link
        to="/roadmaps"
        className="
          inline-flex
          items-center
          gap-3
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-8
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-violet-500/40
          hover:bg-violet-500/10
        "
      >
        Browse Roadmaps
        <FaArrowRight />
      </Link>
    </div>
  );
}