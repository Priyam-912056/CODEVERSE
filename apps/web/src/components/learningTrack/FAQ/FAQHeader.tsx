export default function FAQHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
      {/* Premium Pill Badge */}
      <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-md">
        Frequently Asked Questions
      </span>

      {/* Main Heading Area */}
      <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Got Questions?
      </h2>

      {/* Subtitle / Paragraph description */}
      <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-400 font-normal">
        Find answers to the most common questions about this
        learning roadmap and your personalized learning journey.
      </p>
    </div>
  );
}