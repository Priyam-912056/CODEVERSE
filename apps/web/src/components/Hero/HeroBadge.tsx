interface HeroBadgeProps {
  text: string;
}

export default function HeroBadge({ text }: HeroBadgeProps) {
  return (
    <div className="-translate-y-3 md:-translate-y-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-white/70">
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full bg-red-400 animate-pulse"
      />
      <span className="">{text}</span>
    </div>
  );
}
