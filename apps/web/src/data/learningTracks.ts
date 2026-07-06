import type { LearningTrack } from "../types/learningTrack";

// ==========================================
// 1. CORE TRACK & LAYOUT ICONS (FontAwesome)
// ==========================================
import {
  FaLaptopCode,  // Full Stack Dev
  FaCode,        // Programming Fundamentals
  FaBrain,       // AI & Deep Learning
  FaShieldAlt,   // Cyber Security
  FaCloud,       // Cloud & DevOps
  FaSitemap,     // System Design
  FaPaintBrush,  // UI/UX Design
  FaMobileAlt,   // Mobile Dev
  FaRocket,      // Future Tech
  FaDatabase,    // Database Systems
  FaSearch,      // Search & Scan
} from "react-icons/fa";

// ==========================================
// 2. DATA STRUCTURES & NETWORKING (Tabler)
// ==========================================
import { 
  TbBinaryTree,   // Data Structures
  TbMathFunction, // Math & Logic
  TbNetwork       // Networking
} from "react-icons/tb";

// ==========================================
// 3. FULL STACK DEVELOPMENT ICONS (Simple Icons)
// ==========================================
import {
  SiTailwindcss,  // Tailwind CSS
  SiJavascript,   // JavaScript
  SiTypescript,   // TypeScript
  SiReact,        // React
  SiNextdotjs,    // Next.js
  SiRedux,        // Redux
  SiNodedotjs,    // Node.js
  SiExpress,      // Express
  SiPostman,      // Postman
  SiGraphql,      // GraphQL
  SiMongoose,     // Mongoose
  SiPostgresql,   // PostgreSQL
  SiPrisma,       // Prisma
  SiSocketdotio,  // Socket.io
  SiSwagger,      // Swagger
  SiVitest,       // Vitest
} from "react-icons/si";

// ==========================================
// 4. PROGRAMMING FUNDAMENTALS ICONS
// ==========================================
import {
  SiC,            // C Language
  SiCplusplus,    // C++
  SiOpenjdk,      // Java
  SiPython,       // Python
  SiMysql,        // MySQL
  SiGit,          // Git
  SiGithub,       // GitHub
  SiLinux,        // Linux
} from "react-icons/si";

// ==========================================
// 5. ARTIFICIAL INTELLIGENCE ICONS
// ==========================================
import {
  SiNumpy,        // NumPy
  SiPandas,       // Pandas
  SiScikitlearn,  // Scikit-Learn
  SiTensorflow,   // TensorFlow
  SiPytorch,      // PyTorch
  SiSpacy,        // spaCy
  SiHuggingface,  // Hugging Face
  SiOpenid,       // OpenAI
  SiLangchain,    // LangChain
  SiFastapi,      // FastAPI
  SiMlflow,       // MLflow
  SiJupyter,      // Jupyter
} from "react-icons/si";

// ==========================================
// 6. CYBER SECURITY ICONS
// ==========================================
import {
  SiKalilinux,    // Kali Linux
  SiWireshark,    // Wireshark
  SiMetasploit,   // Metasploit
  SiBurpsuite,    // Burp Suite
  SiOwasp,        // OWASP
  SiSnyk,         // Snyk
  SiSplunk,       // Splunk
} from "react-icons/si";

// ==========================================
// 7. CLOUD & DEVOPS ICONS
// ==========================================
import {
 // not available SiAmazonwebservices,  // AWS
 // not available SiMicrosoftazure,     // Azure
  SiGooglecloud,        // Google Cloud
  SiDocker,             // Docker
  SiKubernetes,         // Kubernetes
  SiHelm,               // Helm
  SiJenkins,            // Jenkins
  SiGithubactions,      // GitHub Actions
  SiTerraform,          // Terraform
  SiAnsible,            // Ansible
  SiPrometheus,         // Prometheus
  SiGrafana,            // Grafana
} from "react-icons/si";

// ==========================================
// 8. SYSTEM DESIGN ICONS
// ==========================================
import {
  SiNginx,         // Nginx
  SiRedis,         // Redis
  SiApachekafka,   // Kafka
  SiRabbitmq,      // RabbitMQ
  SiElasticsearch, // Elasticsearch
} from "react-icons/si";

// ==========================================
// 9. UI / UX ENGINEERING ICONS
// ==========================================
import {
  SiFigma,            // Figma
 // not available SiAdobexd,          // Adobe XD
 // not available SiAdobeillustrator, // Illustrator
  SiFramer,           // Framer
  SiStorybook,        // Storybook
  SiWebflow,          // Webflow
  SiBlender,          // Blender
} from "react-icons/si";

import {
  FaPenNib,
  FaAws,
  FaMicrosoft,
} from "react-icons/fa";

// ==========================================
// 10. MOBILE DEVELOPMENT ICONS
// ==========================================
import {
  SiDart,      // Dart
  SiFlutter,   // Flutter
  SiSwift,     // Swift
  SiApple,     // Apple
  SiKotlin,    // Kotlin
  SiAndroid,   // Android
  SiSqlite,    // SQLite
  SiFirebase,  // Firebase
} from "react-icons/si";

// ==========================================
// 11. FUTURE TECHNOLOGIES ICONS
// ==========================================
import {
  SiRust,        // Rust
  SiSolidity,    // Solidity
  SiGo,          // Go Language
  SiWeb3Dotjs,   // Web3.js
  SiUnity,       // Unity
  SiArduino,     // Arduino
  SiRaspberrypi, // Raspberry Pi
} from "react-icons/si";


export const LEARNING_TRACKS: LearningTrack[] = [
  {
    id: "full-stack-development",
    title: "FULL STACK DEVELOPMENT",
    description: "Build modern web applications from frontend to deployment.",
    icon: FaLaptopCode,
    topics: ["Frontend Engineering", "Backend Architecture", "REST & GraphQL APIs", "Deployment & Scaling"],
    level: "Intermediate",
    duration: "6 Months",
    lessons: 52,
    projects: 14,
    overview: "Master both client-side and server-side development. You will learn to design interactive user interfaces, build robust APIs, manage databases, and deploy application architectures to production cloud servers.",
    skills: [
      { name: "HTML5 & CSS3 Advanced", icon: SiTailwindcss },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js (Hooks & Context)", icon: SiReact },
      { name: "Next.js (App Router)", icon: SiNextdotjs },
      { name: "Redux Toolkit / Zustand", icon: SiRedux },
      { name: "Tailwind CSS & Shadcn/ui", icon: SiTailwindcss },
      { name: "Node.js Runtime", icon: SiNodedotjs },
      { name: "Express.js Framework", icon: SiExpress },
      { name: "RESTful API Design", icon: SiPostman },
      { name: "GraphQL APIs", icon: SiGraphql },
      { name: "MongoDB & Mongoose", icon: SiMongoose },
      { name: "PostgreSQL Architecture", icon: SiPostgresql },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "Socket.io (Real-time)", icon: SiSocketdotio },
      { name: "Swagger API Docs", icon: SiSwagger },
      { name: "Jest & Vitest Unit Testing", icon: SiVitest }
    ]
  },
  {
    id: "programming-fundamentals",
    title: "PROGRAMMING FUNDAMENTALS",
    description: "Master core computer science concepts and problem solving.",
    icon: FaCode,
    topics: ["Data Structures", "Algorithms", "Object Oriented Programming", "Database Systems"],
    level: "Beginner",
    duration: "4 Months",
    lessons: 40,
    projects: 8,
    overview: "The ultimate launching pad for absolute beginners. Dive deep into computer science theory, focus heavily on problem-solving math, write clean OOP code, and build optimized algorithms from scratch.",
    skills: [
      { name: "C Language", icon: SiC },
      { name: "C++ Programming", icon: SiCplusplus },
      { name: "Java Standard Edition", icon: SiOpenjdk },
      { name: "Python Automation", icon: SiPython },
      { name: "Linear DS (Arrays & Lists)", icon: TbBinaryTree },
      { name: "Stacks & Queues", icon: TbBinaryTree },
      { name: "Non-Linear DS (Trees & Graphs)", icon: TbBinaryTree },
      { name: "Recursion & Backtracking", icon: TbMathFunction },
      { name: "Sorting & Searching Algos", icon: FaCode },
      { name: "Dynamic Programming", icon: FaCode },
      { name: "Asymptotic Notation (Big O)", icon: TbMathFunction },
      { name: "Object-Oriented Design (OOP)", icon: SiOpenjdk },
      { name: "Relational DBMS (MySQL)", icon: SiMysql },
      { name: "SQL Queries & Joins", icon: FaDatabase },
      { name: "Git Version Control", icon: SiGit },
      { name: "GitHub Collaboration", icon: SiGithub },
      { name: "Linux Bash Commands", icon: SiLinux }
    ]
  },
  {
    id: "artificial-intelligence",
    title: "ARTIFICIAL INTELLIGENCE",
    description: "Learn modern AI technologies and intelligent systems.",
    icon: FaBrain,
    topics: ["Machine Learning", "Generative AI", "LLM Applications", "Deep Learning"],
    level: "Advanced",
    duration: "7 Months",
    lessons: 60,
    projects: 10,
    overview: "Step into the future by building smart, automated systems. Move from classic regression datasets to neural networks, prompt engineering, fine-tuning large language models, and deploying custom Generative AI agents.",
    skills: [
      { name: "Advanced Python for AI", icon: SiPython },
      { name: "NumPy Data Manipulation", icon: SiNumpy },
      { name: "Pandas DataFrames", icon: SiPandas },
      { name: "Scikit-Learn Classifiers", icon: SiScikitlearn },
      { name: "TensorFlow & Keras", icon: SiTensorflow },
      { name: "PyTorch Framework", icon: SiPytorch },
      { name: "Artificial Neural Networks", icon: FaBrain },
      { name: "Convolutional Networks (CNN)", icon: FaBrain },
      { name: "Natural Language Processing", icon: SiSpacy },
      { name: "Hugging Face Transformers", icon: SiHuggingface },
      { name: "OpenAI GPT API Engines", icon: SiOpenid },
      { name: "LangChain Orchestration", icon: SiLangchain },
      { name: "Vector Databases (Pinecone/Milvus)", icon: SiFastapi },
      { name: "MLflow Pipeline Tracking", icon: SiMlflow },
      { name: "Jupyter Environments", icon: SiJupyter }
    ]
  },
  {
    id: "cyber-security",
    title: "CYBER SECURITY",
    description: "Protect systems, networks and applications from attacks.",
    icon: FaShieldAlt,
    topics: ["Ethical Hacking", "Application Security", "Network Defense", "Digital Forensics"],
    level: "Intermediate",
    duration: "5 Months",
    lessons: 45,
    projects: 6,
    overview: "Understand the mindset of a hacker to safeguard modern infrastructure. Learn defensive networking, implement secure code standards, perform vulnerability assessment, and trace digital signatures after breaches.",
    skills: [
      { name: "Enterprise Linux Admin", icon: SiLinux },
      { name: "TCP/IP Networking Protocols", icon: TbNetwork },
      { name: "Kali Linux Tooling", icon: SiKalilinux },
      { name: "Wireshark Packet Analysis", icon: SiWireshark },
      { name: "Nmap Network Scanning", icon: FaSearch  },
      { name: "Metasploit Exploitation", icon: SiMetasploit },
      { name: "Burp Suite Web Proxy", icon: SiBurpsuite },
      { name: "OWASP Top 10 Vulnerabilities", icon: SiOwasp },
      { name: "Static Application Security (SAST)", icon: SiSnyk },
      { name: "Dynamic Security (DAST)", icon: SiSnyk },
      { name: "Penetration Testing Architecture", icon: FaShieldAlt },
      { name: "Asymmetric & Symmetric Crypto", icon: FaShieldAlt },
      { name: "Splunk SIEM Auditing", icon: SiSplunk },
      { name: "Digital Forensics & Incident Response", icon: FaShieldAlt }
    ]
  },
  {
    id: "cloud-devops",
    title: "CLOUD & DEVOPS",
    description: "Deploy, automate and scale applications in the cloud.",
    icon: FaCloud,
    topics: ["AWS & Azure", "Docker", "Kubernetes", "CI / CD Pipelines"],
    level: "Intermediate",
    duration: "5 Months",
    lessons: 48,
    projects: 9,
    overview: "Bridge the gap between development and operations teams. Automate application testing, configure cloud services for zero-downtime releases, scale infrastructure through code, and manage orchestration clusters.",
    skills: [
      { name: "Linux Shell Scripting", icon: FaCode },
      { name: "AWS (EC2, S3, RDS, IAM)", icon: FaAws },
      { name: "Microsoft Azure Solutions", icon: FaMicrosoft },
      { name: "Google Cloud Engine", icon: SiGooglecloud },
      { name: "Docker Containerization", icon: SiDocker },
      { name: "Kubernetes Cluster Management", icon: SiKubernetes },
      { name: "Helm Package Manager", icon: SiHelm },
      { name: "Jenkins Automation Server", icon: SiJenkins },
      { name: "GitHub Actions Pipelines", icon: SiGithubactions },
      { name: "Terraform Infrastructure as Code", icon: SiTerraform },
      { name: "Ansible Configuration Engine", icon: SiAnsible },
      { name: "Prometheus Monitoring", icon: SiPrometheus },
      { name: "Grafana Visualization Dashboards", icon: SiGrafana },
      { name: "YAML Multi-container Specs", icon: FaCloud }
    ]
  },
  {
    id: "system-design",
    title: "SYSTEM DESIGN",
    description: "Design scalable and reliable software architectures.",
    icon: FaSitemap,
    topics: ["Scalable Systems", "Microservices", "Caching", "Load Balancing"],
    level: "Advanced",
    duration: "3 Months",
    lessons: 30,
    projects: 5,
    overview: "Learn how tech giants build enterprise platforms serving millions of users. Deep dive into horizontal scaling bottlenecks, asynchronous message queues, distributed consensus, and fault-tolerant microservice blueprints.",
    skills: [
      { name: "Monolithic to Microservices", icon: FaSitemap },
      { name: "Horizontal vs Vertical Scale", icon: FaSitemap },
      { name: "Nginx Load Balancing Profiles", icon: SiNginx },
      { name: "Database Sharding & Partitioning", icon: SiPostgresql },
      { name: "Master-Slave Replication", icon: SiMysql },
      { name: "Redis Cache Layer Design", icon: SiRedis },
      { name: "CDN Edge Caching Strategies", icon: FaSitemap },
      { name: "Apache Kafka Streaming Platforms", icon: SiApachekafka },
      { name: "RabbitMQ Broker Systems", icon: SiRabbitmq },
      { name: "API Gateway Integration Patterns", icon: FaSitemap },
      { name: "CAP & PACELC Theorems", icon: FaSitemap },
      { name: "Distributed Locking Engines", icon: SiRedis },
      { name: "Elasticsearch Clustering", icon: SiElasticsearch },
      { name: "Distributed Rate Limiters", icon: SiNginx },
      { name: "Circuit Breakers & Graceful Degradation", icon: FaSitemap }
    ]
  },
  {
    id: "ui-ux-engineering",
    title: "UI / UX ENGINEERING",
    description: "Create beautiful and user-friendly digital experiences.",
    icon: FaPaintBrush,
    topics: ["UI Design", "UX Research", "Design Systems", "Figma"],
    level: "Beginner",
    duration: "3 Months",
    lessons: 35,
    projects: 12,
    overview: "Master the intersection of visual art and technical design. Transition user psychology and data research into responsive mockups, design consistent visual libraries, and construct component design systems.",
    skills: [
      { name: "User Research & Ethnography", icon: FaPaintBrush },
      { name: "Empathy Maps & User Personas", icon: FaPaintBrush },
      { name: "Information Architecture (IA)", icon: FaSitemap },
      { name: "Low-Fidelity Wireframing", icon: SiFigma },
      { name: "High-Fidelity Figma Layouts", icon: SiFigma },
      { name: "Adobe XD Mockups", icon: FaPenNib },
      { name: "Vector Graphics (Adobe Illustrator)", icon: FaPaintBrush },
      { name: "Interactive Prototyping", icon: SiFigma },
      { name: "Micro-interactions (Framer Motion)", icon: SiFramer },
      { name: "Scalable Design Systems", icon: SiStorybook },
      { name: "Typography, Grids & Color Science", icon: FaPaintBrush },
      { name: "Responsive Component Web Layouts", icon: SiTailwindcss },
      { name: "Usability Lab Testing", icon: FaPaintBrush },
      { name: "Webflow No-code Launching", icon: SiWebflow },
      { name: "Blender 3D Asset Integration", icon: SiBlender }
    ]
  },
  {
    id: "mobile-development",
    title: "MOBILE DEVELOPMENT",
    description: "Develop high-performance Android and iOS applications.",
    icon: FaMobileAlt,
    topics: ["Flutter", "React Native", "Android", "iOS"],
    level: "Intermediate",
    duration: "6 Months",
    lessons: 50,
    projects: 11,
    overview: "Build mobile-first software that works natively everywhere. Craft rich fluid animations, connect offline-first device synchronization, and navigate App Store & Play Store publishing pipelines.",
    skills: [
      { name: "Dart OOP Foundations", icon: SiDart },
      { name: "Flutter Cross-Platform Engine", icon: SiFlutter },
      { name: "JavaScript / TypeScript Compiler", icon: SiTypescript },
      { name: "React Native Core Architecture", icon: SiReact },
      { name: "Swift Native SDK", icon: SiSwift },
      { name: "iOS Swift UI Design", icon: SiApple },
      { name: "Kotlin Programming Language", icon: SiKotlin },
      { name: "Android Jetpack Compose", icon: SiAndroid },
      { name: "BLoC & Provider State Engines", icon: SiFlutter },
      { name: "Redux Architecture for Mobile", icon: SiRedux },
      { name: "Firebase Backend Native Hub", icon: SiFirebase },
      { name: "SQLite Local Edge DBs", icon: SiSqlite },
      { name: "App Store Connect Pipelines", icon: SiApple },
      { name: "Google Play Console Submissions", icon: SiAndroid },
      { name: "Device Native Hardwares Access", icon: FaMobileAlt }
    ]
  },
  {
    id: "future-technologies",
    title: "FUTURE TECHNOLOGIES",
    description: "Explore next-generation technologies shaping the future.",
    icon: FaRocket,
    topics: ["Blockchain", "AR / VR", "Quantum Computing", "Robotics & IoT"],
    level: "Advanced",
    duration: "8 Months",
    lessons: 65,
    projects: 7,
    overview: "Gain an elite edge by learning experimental frontier innovations. Program immutable decentralization ledger contracts, interface physical hardware streams via IoT, and venture into spatial engine development.",
    skills: [
      { name: "Decentralized Public Ledgers", icon: FaRocket },
      { name: "Rust Systems Programming", icon: SiRust },
      { name: "Solidity Smart Contract Syntax", icon: SiSolidity },
      { name: "Go Language Blockchain Dev", icon: SiGo },
      { name: "Web3.js Client Interfaces", icon: SiWeb3Dotjs },
      { name: "Ethers.js Connectivity Layers", icon: SiWeb3Dotjs },
      { name: "Unity 3D Runtime Simulation", icon: SiUnity },
      { name: "C# Scripting for Virtual Spatial", icon: SiUnity },
      { name: "IoT Gateway Architectures", icon: SiArduino },
      { name: "Arduino Firmware IDE Integration", icon: SiArduino },
      { name: "Raspberry Pi Microprocessor Boards", icon: SiRaspberrypi },
      { name: "Embedded C Logic", icon: SiC },
      { name: "Quantum Computing Principles", icon: FaRocket },
      { name: "Qiskit Circuit Simulation", icon: SiPython }
    ]
  }
];