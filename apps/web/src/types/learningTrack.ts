import type { IconType } from "react-icons";

export interface LearningTrack {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  topics: string[];
}