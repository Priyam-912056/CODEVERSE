import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  children: ReactNode;
  className?: string;
}

const Button = ({
  to = "/",
  children,
  className = "",
}: ButtonProps) => {
  return (
    <Link
      to={to}
      className={`
        group relative inline-flex items-center justify-center
        overflow-hidden rounded-full border border-green-500/30
        bg-white/5 px-6 py-2 text-xs font-semibold uppercase 
        tracking-[0.2em] text-green-400 backdrop-blur-md
        transition-all duration-300 hover:-translate-y-0.5
        hover:border-green-400/60 hover:text-green-300
        hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]
        ${className}
      `}
    >
      {/* Glow Effect */}
      <span
        className="
          absolute inset-0
          bg-linear-to-r
          from-transparent
          via-green-500/20
          to-transparent
          -translate-x-full
          group-hover:translate-x-full
          transition-transform
          duration-1000
        "
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Link>
  );
};

export default Button;