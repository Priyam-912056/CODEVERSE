export default function CTAContent() {
  return (
    <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
      {/* Premium Pill Badge Overlay */}
      <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-md">
        What's Next?
      </span>

      {/* Main Responsive Header Block */}
      <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl max-w-2xl leading-[1.15] sm:leading-[1.1]">
        Build. Practice. <br className="hidden sm:inline" /> Get Job Ready.
      </h2>

      {/* Narrative Sub Description Paragraph */}
      <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-400 font-normal tracking-wide">
        Continue your learning journey by building industry-level projects 
        or explore another roadmap to expand your skills architecture.
      </p>
    </div>
  );
}