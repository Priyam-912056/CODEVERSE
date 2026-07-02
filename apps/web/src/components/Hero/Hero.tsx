import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroHighlights from "./HeroHighlights";
import HeroAction from "./HeroAction";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-150 w-full items-center justify-center p-10  text-white sm:px-10"
    >
      <div className="max-w-5xl text-center pt-16">
        <HeroBadge text="AI-Powered Developer Platform" />

        <HeroTitle title="Build Skills That " highlight="Matter" />

        <HeroDescription description="Master development with AI, real projects, and interview practice — all in one platform." />

        <HeroHighlights
          highlights={["Real Projects", "AI Mentor", "Interview Ready"]}
        />

        <HeroAction
          primaryLabel="Start Learning"
          secondaryLabel="Explore Platform"
        />
      </div>
    </section>
  );
}