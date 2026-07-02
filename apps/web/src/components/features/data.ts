import type { Feature } from "./types";
import {
  Brain,
  Code2,
  Binary,
  NotebookPen,
  Award,
  BookOpen,
  ChartColumn,
  Rocket,
} from "lucide-react";

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "AI Interview Prep",
    description:
      "Practice adaptive mock interviews with real-time AI feedback, tailored for top-tier product companies.",
    icon: Brain,
  },
  {
    id: 2,
    title: "Live Code Practice",
    description:
      "Write, execute, and optimize code instantly with built-in compilers and smart AI debugging.",
    icon: Code2,
  },
  {
    id: 3,
    title: "DSA Mastery",
    description:
      "Master core data structures and algorithms with premium curated problems and step-by-step AI solutions.",
    icon: Binary,
  },
  {
    id: 4,
    title: "Smart Notes",
    description:
      "Access structured, high-yield theory and coding concept breakdowns designed for rapid revision.",
    icon: NotebookPen,
  },
  {
    id: 5,
    title: "Verified Certifications",
    description:
      "Earn shareable certificates upon completing assessment milestones, coding tracks, and DSA challenges.",
    icon: Award,
  },
  {
    id: 6,
    title: "Structured Learning Paths",
    description:
      "Follow comprehensive roadmaps for Frontend, Backend, and System Design with guided AI assistance.",
    icon: BookOpen,
  },
  {
    id: 7,
    title: "Performance Analytics",
    description:
      "Monitor your coding streaks, solve rates, and skill gaps through an advanced analytical dashboard.",
    icon: ChartColumn,
  },
  {
    id: 8,
    title: "Production Projects",
    description:
      "Build industry-grade portfolio projects with architectural guidance and modern development workflows.",
    icon: Rocket,
  },
];