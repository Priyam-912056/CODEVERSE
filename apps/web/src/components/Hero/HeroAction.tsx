interface HeroActionsProps {
  primaryLabel: string;
  secondaryLabel: string;
  primaryOnClick?: () => void;
  secondaryOnClick?: () => void;
  className?: string;
}

export default function HeroAction({
  primaryLabel,
  secondaryLabel,
  primaryOnClick,
  secondaryOnClick,
  className = "",
}: HeroActionsProps) {
  return (
    <div
      className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row ${className}`}
    >
      <button
        onClick={primaryOnClick}
        className="rounded-full bg-linear-to-r from-violet-500 to-indigo-500 px-8 py-4 text-xs font-semibold tracking-[0.2em] shadow-lg shadow-violet-500/20 transition-transform hover:scale-105"
      >
        {primaryLabel}
      </button>

      <button
        onClick={secondaryOnClick}
        className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-xs font-semibold tracking-[0.2em] text-white/80 transition hover:bg-white/10"
      >
        {secondaryLabel}
      </button>
    </div>
  );
}