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
  projects: ProjectItem[];
  resources: ResourceItem[];    // ✅ lowercase
}

export interface ResourceItem {
  title: string;
  type: "Documentation" | "Video" | "GitHub" | "Article" | "Cheat Sheet";
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
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