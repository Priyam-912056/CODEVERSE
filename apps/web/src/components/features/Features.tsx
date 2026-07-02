import FeatureCard from "./FeaturesCard";
import FeatureHeader from "./FeatureHeader";
import { FEATURES } from "./data";

export default function Features() {
  return (
    <section className="relative overflow-hidden px-6 py-10 md:5 text-white">
      <div className="relative z-10 mx-auto max-w-7xl">
        <FeatureHeader
          badge="OUR CORE FEATURES"
          title="MASTER CODING WITH AI."
          description="EVERYTHING YOU NEED TO LEARN FASTER, PRACTICE SMARTER AND CRACK TOP TECH INTERVIEWS."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}