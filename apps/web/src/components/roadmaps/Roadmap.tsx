import RoadmapHeader from "./RoadmapHeader";
import RoadmapCard from "./RoadmapCard";
import { LEARNING_TRACKS } from "../../data/learningTracks";

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <RoadmapHeader
          badge="LEARNING TRACKS"
          title="MASTER YOUR TECH CAREER"
          description="Choose your learning path and master industry-ready skills with structured roadmaps."
        />

        <div className="grid gap-8 md:grid-cols-3 xl:grid-cols-4">
          {LEARNING_TRACKS.map((track) => (
            <RoadmapCard
              key={track.id}
              track={track}
            />
          ))}
        </div>

      </div>
    </section>
  );
}