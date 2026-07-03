import type { AboutHighlight } from "./types";

interface AboutHighlightsProps {
  highlights: AboutHighlight[];
  className?: string;
}

export default function AboutHighlights({
  highlights,
  className,
}: AboutHighlightsProps) {
  return (
    <div
      className={`mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 ${className ?? ""}`}
    >
      {highlights.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <h3 className="text-lg font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/60">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}