import { FaSearch, FaTimes } from "react-icons/fa";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6">
      <div
        className="
          group
          relative
          flex
          items-center
          overflow-hidden
          rounded-2xl
          border
          border-zinc-800/50
          bg-zinc-950/40
          backdrop-blur-md
          transition-all
          duration-300
          focus-within:border-violet-500/40
          focus-within:bg-zinc-950/60
          focus-within:shadow-lg
          focus-within:shadow-violet-500/5
        "
      >
        {/* Search Icon */}
        <FaSearch
          className="
            absolute
            left-5
            text-zinc-500
            transition-colors
            duration-300
            group-focus-within:text-violet-400
          "
        />

        {/* Input Field */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search projects by tech stack, difficulty..."
          className="
            h-14
            w-full
            bg-transparent
            pl-12
            pr-20
            text-sm
            text-white
            placeholder:text-zinc-500
            outline-none
            sm:text-base
          "
        />

        {/* Action Elements (Clear Button / Shortcut Hint) */}
        <div className="absolute right-4 flex items-center gap-2">
          {search ? (
            <button
              onClick={() => setSearch("")}
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-lg
                text-zinc-400
                transition-colors
                hover:bg-zinc-800
                hover:text-white
              "
              title="Clear search"
            >
              <FaTimes className="text-xs" />
            </button>
          ) : (
            <kbd
              className="
                hidden
                pointer-events-none
                select-none
                items-center
                gap-1
                rounded
                border
                border-zinc-800
                bg-zinc-900/50
                px-1.5
                font-mono
                text-[10px]
                font-medium
                text-zinc-500
                sm:flex
              "
            >
              <span>⌘</span>K
            </kbd>
          )}
        </div>
      </div>
    </section>
  );
}