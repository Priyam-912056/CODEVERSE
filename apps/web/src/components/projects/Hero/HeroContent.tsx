import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HeroContent() {
  return (
    <div className="max-w-3xl">
      {/* Badge */}
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-violet-500/30
          bg-violet-500/10
          px-3.5
          py-1.5
          text-xs
          font-semibold
          tracking-wider
          text-violet-300
          uppercase
        "
      >
        <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
        Project Library
      </div>

      {/* Heading */}
      <h1
        className="
          mt-6
          text-4xl
          font-extrabold
          tracking-tight
          leading-none
          text-white
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
      >
        Build Real <br />
        <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
          Industry Projects
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          mt-6
          max-w-xl
          text-base
          leading-relaxed
          text-zinc-400
          sm:text-lg
        "
      >
        Master production-ready engineering. Practice with curated real-world 
        projects designed to elevate your development skills to enterprise standards.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/roadmaps"
          className="
            group
            flex
            items-center
            gap-2
            rounded-xl
            bg-violet-600
            px-6
            py-3.5
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-violet-600/20
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-violet-500
            hover:shadow-violet-500/30
          "
        >
          Start Building
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <Link
          to="/projects"
          className="
            group
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-zinc-800
            bg-zinc-900/50
            px-6
            py-3.5
            text-sm
            font-semibold
            text-zinc-300
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-violet-500/30
            hover:bg-zinc-900
            hover:text-white
          "
        >
          Browse Projects
          <FaGithub className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-white" />
        </Link>
      </div>
    </div>
  );
}