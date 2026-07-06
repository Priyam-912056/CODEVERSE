import type { IconType } from "react-icons";

// 1. Pehle ek alag se SkillItem interface banayein jo name aur icon dono ko handle kare
export interface SkillItem {
  name: string;
  icon: IconType; // Isse har ek skill ka individual icon properly type-safe ho jayega
}

// 2. Ab main LearningTrack interface me skills ke type ko `SkillItem[]` kar dein
export interface LearningTrack {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  topics: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  projects: number;
  overview: string;
  skills: SkillItem[]; // Shabaash! Ab yeh aapke detailed data ko bina kisi error ke accept karega
}