import type { IconType } from "react-icons";

export interface TechItem {
  name: string;
  icon: IconType;
}

export interface Project {
  id: string;
  title: string;
  description: string;

  category:
    | "Frontend"
    | "Backend"
    | "Full Stack"
    | "AI"
    | "Mobile";

  difficulty:
    | "Beginner"
    | "Intermediate"
    | "Advanced";

  duration: string;

  thumbnail: string;

  technologies: TechItem[];

  features: string[];

  github?: string;

  live?: string;

  featured: boolean;
}