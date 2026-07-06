import OverviewHeader from "./OverviewHeader"
import type { LearningTrack } from "../../../types/learningTrack"
import SkillsGrid from "./SkillsGrid"

interface OverviewProps {
    track: LearningTrack
}

export default function Overview({track}: OverviewProps) {
    return (
        <div className="mx-auto max-w-7xl px-6">
            <OverviewHeader track={track} />
            <SkillsGrid track={track} />
        </div>
    )
}