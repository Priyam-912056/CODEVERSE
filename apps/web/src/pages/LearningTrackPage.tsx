import { useParams } from "react-router-dom";
import { LEARNING_TRACKS } from "../data/learningTracks";
import Hero from "../components/learningTrack/Hero/Hero";
import Overview from "../components/learningTrack/Overview/Overview";
import Timeline from "../components/learningTrack/TimeLine/Timeline";

export default function LearningTrackPage() {
  const { trackId } = useParams();

  const track = LEARNING_TRACKS.find(
    (item) => item.id === trackId
  );

  if (!track) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold">
          Learning Track Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero track={track} />
      <Overview track={track} />
      <Timeline track={track} />
    </div>
  );
}