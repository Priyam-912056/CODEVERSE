import type { LearningTrack } from "../types/learningTrack";

import {
  FaLaptopCode,
  FaCode,
  FaBrain,
  FaShieldAlt,
  FaCloud,
  FaSitemap,
  FaPaintBrush,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

export const LEARNING_TRACKS: LearningTrack[] = [
  {
    id: "full-stack-development",
    title: "FULL STACK DEVELOPMENT",
    description: "Build modern web applications from frontend to deployment.",
    icon: FaLaptopCode,
    topics: [
      "Frontend Engineering",
      "Backend Architecture",
      "REST & GraphQL APIs",
      "Deployment & Scaling",
    ],
  },

  {
    id: "programming-fundamentals",
    title: "PROGRAMMING FUNDAMENTALS",
    description: "Master core computer science concepts and problem solving.",
    icon: FaCode,
    topics: [
      "Data Structures",
      "Algorithms",
      "Object Oriented Programming",
      "Database Systems",
    ],
  },

  {
    id: "artificial-intelligence",
    title: "ARTIFICIAL INTELLIGENCE",
    description: "Learn modern AI technologies and intelligent systems.",
    icon: FaBrain,
    topics: [
      "Machine Learning",
      "Generative AI",
      "LLM Applications",
      "Deep Learning",
    ],
  },

  {
    id: "cyber-security",
    title: "CYBER SECURITY",
    description: "Protect systems, networks and applications from attacks.",
    icon: FaShieldAlt,
    topics: [
      "Ethical Hacking",
      "Application Security",
      "Network Defense",
      "Digital Forensics",
    ],
  },

  {
    id: "cloud-devops",
    title: "CLOUD & DEVOPS",
    description: "Deploy, automate and scale applications in the cloud.",
    icon: FaCloud,
    topics: [
      "AWS & Azure",
      "Docker",
      "Kubernetes",
      "CI / CD Pipelines",
    ],
  },

  {
    id: "system-design",
    title: "SYSTEM DESIGN",
    description: "Design scalable and reliable software architectures.",
    icon: FaSitemap,
    topics: [
      "Scalable Systems",
      "Microservices",
      "Caching",
      "Load Balancing",
    ],
  },

  {
    id: "ui-ux-engineering",
    title: "UI / UX ENGINEERING",
    description: "Create beautiful and user-friendly digital experiences.",
    icon: FaPaintBrush,
    topics: [
      "UI Design",
      "UX Research",
      "Design Systems",
      "Figma",
    ],
  },

  {
    id: "mobile-development",
    title: "MOBILE DEVELOPMENT",
    description: "Develop high-performance Android and iOS applications.",
    icon: FaMobileAlt,
    topics: [
      "Flutter",
      "React Native",
      "Android",
      "iOS",
    ],
  },

  {
    id: "future-technologies",
    title: "FUTURE TECHNOLOGIES",
    description: "Explore next-generation technologies shaping the future.",
    icon: FaRocket,
    topics: [
      "Blockchain",
      "AR / VR",
      "Quantum Computing",
      "Robotics & IoT",
    ],
  },
];