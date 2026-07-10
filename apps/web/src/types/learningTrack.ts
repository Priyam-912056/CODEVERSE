import type { IconType } from "react-icons";

export interface SkillItem {
  name: string;
  icon: IconType;
}

export interface ProjectItem {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  technologies: SkillItem[];   // ✅
}

export interface TimelinePhase {
  title: string;
  description: string;
  modules: SkillItem[];
  projects: ProjectItem[];      // ✅ lowercase
}

export interface LearningTrack {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  topics: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  overview: string;
  skills: SkillItem[];
  timeline: TimelinePhase[];
}