import StatsHeader from "./StatsHeader";
import StatsCard from "./StatCard";
import { STATS } from "./data";

export default function Stats() {
  return (
    <section className="px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <StatsHeader
          badge="OUR IMPACT"
          title="NUMBERS THAT SPEAK"
          description="HELPING DEVELOPERS LEARN, BUILD AND SUCCEED EVERY SINGLE DAY."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 ">
          {STATS.map((stat) => (
            <StatsCard
              key={stat.label}
              stat={stat}
            />
          ))}
        </div>
      </div>
    </section>
  );
}