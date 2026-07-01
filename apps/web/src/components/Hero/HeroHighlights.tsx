interface HeroHighlightsProps {
  highlights: string[];
  className?: string;
}

export default function HeroHighlights({
  highlights,
  className = "",
}: HeroHighlightsProps) {
  return (
    <div
      className={`mt-10 flex flex-col items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-white/60 sm:flex-row ${className}`}
    >
      {highlights.map((item, index) => (
        <div key={item} className="flex items-center gap-6">
          <span>{item}</span>

          {index !== highlights.length - 1 && (
            <span className="hidden text-white/20 sm:block">•</span>
          )}
        </div>
      ))}
    </div>
  );
}