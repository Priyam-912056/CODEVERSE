export default function ResourcesHeader() {
  return (
    <div className="text-left border-b border-white/5 pb-4 mb-6">
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-violet-400 block">
        Learning Resources
      </span>

      <h2 className="mt-1.5 text-xl sm:text-2xl font-extrabold tracking-tight text-white">
        Best Resources To Master Every Phase
      </h2>

      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400 font-normal">
        Official documentation, videos, GitHub repositories, and
        cheat sheets carefully selected for every learning phase.
      </p>
    </div>
  );
}