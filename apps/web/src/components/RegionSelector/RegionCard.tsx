import { motion } from "framer-motion";
import type { Country } from "../../types/region";

type RegionCardProps = {
  country: Country;
  index: number;
  active: boolean;
  isDetected: boolean;
  onSelect: (country: Country) => void;
};

export default function RegionCard({
  country,
  index,
  active,
  onSelect,
  isDetected,
}: RegionCardProps) {
  return (
    <motion.button
      onClick={() => onSelect(country)}
      whileHover={{ y: -1 }} // Hover effect ko thoda subtle kiya
      whileTap={{ scale: 0.99 }}
      className={`w-full rounded-xl border px-4 py-3.5 transition ${
        // Padding px-6 py-6 se kam karke px-4 py-3.5 ki aur rounded-2xl se rounded-xl kiya
        active
          ? "border-violet-500 bg-violet-500/10"
          : "border-white/10 bg-white/3"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {" "}
          {/* Gap 5 se kam karke 4 kiya */}
          <span className="text-[10px] tracking-[0.3em] text-zinc-500">
            {" "}
            {/* Text thoda aur chota kiya */}0{index + 1}
          </span>
          <span className="text-lg sm:text-xl font-light">
            {" "}
            {/* Font size text-xl/2xl se chota karke text-lg/xl kiya */}
            {country.name}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {" "}
          {/* Gap 4 se kam karke 3 kiya */}
          <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            {" "}
            {/* Text size thoda kam kiya */}
            {country.code}
          </span>
          <div
            className={`h-1.5 w-1.5 rounded-full ${
              active
                ? isDetected
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-white/30"
            }`}
          />
        </div>
      </div>
    </motion.button>
  );
}
