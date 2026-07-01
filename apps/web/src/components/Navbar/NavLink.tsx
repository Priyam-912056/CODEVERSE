import { NAV_LINKS } from "./data.ts";
import type { NavId } from "./types";

type NavLinksProps = {
  onNavigate: (id: NavId) => void;
};

export default function NavLinks({ onNavigate }: NavLinksProps) {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {NAV_LINKS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onNavigate(id)}
          className="
            relative text-sm font-medium uppercase tracking-[0.2em] text-zinc-400 
            transition-all duration-300 hover:text-white
            after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white 
            after:transition-all after:duration-300 hover:after:w-full
          "
        >
          {label}
        </button>
      ))}
    </nav>
  );
}