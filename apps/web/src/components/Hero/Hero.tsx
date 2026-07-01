import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroHighlights from "./HeroHighlights";
import HeroAction from "./HeroAction";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-200 w-full items-center justify-center px-6 text-white sm:px-10"
    >
      <div className="max-w-5xl text-center">

        <HeroBadge text="AI POWERED DEVELOPER PLATFORM" />

        <HeroTitle
          title="BUILD SKILLS THAT "
          highlight="MATTER"
        />

        <HeroDescription
          description="A MODERN LEARNING PLATFORM WHERE DEVELOPERS PRACTICE REAL INTERVIEW QUESTIONS, IMPROVE SYSTEM DESIGN SKILLS, AND GROW WITH AI-POWERED FEEDBACK — ALL IN ONE PLACE."
        />

        <HeroHighlights
          highlights={[
            "REAL INTERVIEW QUESTIONS",
            "AI FEEDBACK SYSTEM",
            "CAREER GROWTH TRACKING",
          ]}
        />

        <HeroAction
          primaryLabel="START LEARNING"
          secondaryLabel="EXPLORE PLATFORM"
        />

      </div>
    </section>
  );
}