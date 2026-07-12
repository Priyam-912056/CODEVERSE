import CTAButtons from "./CTAButtons";
import CTAContent from "./CTAContent";

export default function CTA() {
  return (
    <section className="relative w-full bg-black py-20 lg:py-28 overflow-hidden">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-35" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-violet-600/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative overflow-hidden
            rounded-3xl border
            border-white/10
            bg-zinc-900/30
            p-8 sm:p-12 lg:p-16
            backdrop-blur-xl
            shadow-xl shadow-black/40
            text-center
          "
        >
          {/* Subtle inside gradient mesh ring overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/[0.03] via-transparent to-purple-500/[0.03] pointer-events-none" />

          <CTAContent />
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}