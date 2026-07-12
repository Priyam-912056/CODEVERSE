import CTAButtons from "./CTAButtons";
import CTAContent from "./CTAContent";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div
        className="
          overflow-hidden
          rounded-4xl
          border
          border-violet-500/20
          bg-linear-to-br
          from-violet-500/10
          via-white/5
          to-violet-900/10
          p-12
          backdrop-blur-xl
        "
      >
        <CTAContent />

        <CTAButtons />
      </div>
    </section>
  );
}