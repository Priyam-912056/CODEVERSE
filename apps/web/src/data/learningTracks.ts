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
    ],
    timeline: [
      {
        title: "Frontend Fundamentals",
        description: "Learn the building blocks of every website before moving to frameworks.",
        modules: [
          { name: "HTML5 & CSS3 Advanced", icon: SiTailwindcss },
          { name: "JavaScript (ES6+)", icon: SiJavascript },
          { name: "TypeScript", icon: SiTypescript }
        ],
        projects: [
          {
            title: "Responsive Portfolio Website",
            description: "Build your personal portfolio using HTML, CSS and JavaScript.",
            difficulty: "Beginner",
            duration: "3 Days",
            technologies: [
              { name: "HTML5 & CSS3 Advanced", icon: SiTailwindcss },
              { name: "JavaScript (ES6+)", icon: SiJavascript }
            ]
          },
          {
            title: "Modern Landing Page",
            description: "Create a responsive landing page with animations and clean layouts.",
            difficulty: "Beginner",
            duration: "2 Days",
            technologies: [
              { name: "HTML5 & CSS3 Advanced", icon: SiTailwindcss },
              { name: "JavaScript (ES6+)", icon: SiJavascript }
            ]
          }
        ]
      },
      {
        title: "Advanced Frontend Frameworks",
        description: "Master modern frontend development with React ecosystem.",
        modules: [
          { name: "React.js (Hooks & Context)", icon: SiReact },
          { name: "Next.js (App Router)", icon: SiNextdotjs },
          { name: "Redux Toolkit / Zustand", icon: SiRedux },
          { name: "Tailwind CSS & Shadcn/ui", icon: SiTailwindcss }
        ],
        projects: [
          {
            title: "Movie Search Application",
            description: "Build a movie search platform using external APIs and React.",
            difficulty: "Intermediate",
            duration: "5 Days",
            technologies: [
              { name: "React.js (Hooks & Context)", icon: SiReact },
              { name: "Tailwind CSS & Shadcn/ui", icon: SiTailwindcss }
            ]
          },
          {
            title: "Task Management Dashboard",
            description: "Create a productivity dashboard with state management.",
            difficulty: "Intermediate",
            duration: "1 Week",
            technologies: [
              { name: "React.js (Hooks & Context)", icon: SiReact },
              { name: "Redux Toolkit / Zustand", icon: SiRedux }
            ]
          }
        ]
      },
      {
        title: "Backend Architecture & APIs",
        description: "Build robust servers, handle data management and API layers.",
        modules: [
          { name: "Node.js Runtime", icon: SiNodedotjs },
          { name: "Express.js Framework", icon: SiExpress },
          { name: "RESTful API Design", icon: SiPostman },
          { name: "GraphQL APIs", icon: SiGraphql }
        ],
        projects: [
          {
            title: "Authentication REST API",
            description: "Implement secure JWT authentication with Express.",
            difficulty: "Intermediate",
            duration: "1 Week",
            technologies: [
              { name: "Node.js Runtime", icon: SiNodedotjs },
              { name: "Express.js Framework", icon: SiExpress },
              { name: "RESTful API Design", icon: SiPostman }
            ]
          },
          {
            title: "Blog Management API",
            description: "Develop CRUD APIs with authentication and validation.",
            difficulty: "Intermediate",
            duration: "1 Week",
            technologies: [
              { name: "Node.js Runtime", icon: SiNodedotjs },
              { name: "Express.js Framework", icon: SiExpress },
              { name: "GraphQL APIs", icon: SiGraphql }
            ]
          }
        ]
      },
      {
        title: "Databases, Real-time & Testing",
        description: "Connect persistent storage engines and finalize the engineering stack.",
        modules: [
          { name: "MongoDB & Mongoose", icon: SiMongoose },
          { name: "PostgreSQL Architecture", icon: SiPostgresql },
          { name: "Prisma ORM", icon: SiPrisma },
          { name: "Socket.io (Real-time)", icon: SiSocketdotio },
          { name: "Swagger API Docs", icon: SiSwagger },
          { name: "Jest & Vitest Unit Testing", icon: SiVitest }
        ],
        projects: [
          {
            title: "E-Commerce Microservices Platform",
            description: "Build a distributed commerce platform with PostgreSQL, Prisma and Socket.io.",
            difficulty: "Advanced",
            duration: "4 Weeks",
            technologies: [
              { name: "Next.js (App Router)", icon: SiNextdotjs },
              { name: "Node.js Runtime", icon: SiNodedotjs },
              { name: "PostgreSQL Architecture", icon: SiPostgresql },
              { name: "Prisma ORM", icon: SiPrisma },
              { name: "Socket.io (Real-time)", icon: SiSocketdotio },
              { name: "TypeScript", icon: SiTypescript }
            ]
          },
          {
            title: "Real-Time Collaborative Workspace",
            description: "Build a collaborative workspace with real-time synchronization.",
            difficulty: "Advanced",
            duration: "3 Weeks",
            technologies: [
              { name: "React.js (Hooks & Context)", icon: SiReact },
              { name: "Express.js Framework", icon: SiExpress },
              { name: "MongoDB & Mongoose", icon: SiMongoose },
              { name: "Tailwind CSS & Shadcn/ui", icon: SiTailwindcss },
              { name: "Socket.io (Real-time)", icon: SiSocketdotio },
              { name: "Redux Toolkit / Zustand", icon: SiRedux }
            ]
          }
        ]
      }
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
    ],
    timeline: [
      {
        title: "Core Languages Foundations",
        description: "Get hands-on experience with fundamental programming syntaxes.",
        modules: [
          { name: "C Language", icon: SiC },
          { name: "C++ Programming", icon: SiCplusplus },
          { name: "Java Standard Edition", icon: SiOpenjdk },
          { name: "Python Automation", icon: SiPython }
        ],
        projects: [
          {
            title: "Student Management System",
            description: "Create a CLI system using structural layouts, file storage, and core programming pointers.",
            difficulty: "Beginner",
            duration: "1 Week",
            technologies: [
              { name: "C Language", icon: SiC },
              { name: "C++ Programming", icon: SiCplusplus }
            ]
          },
          {
            title: "Automated File-System Management Tool",
            description: "Programmed a robust command-line interface tool in Python that structuralizes messy directories, builds historical text logs, and handles continuous updates.",
            difficulty: "Beginner",
            duration: "2 Weeks",
            technologies: [
              { name: "Python Automation", icon: SiPython },
              { name: "Linux Bash Commands", icon: SiLinux },
              { name: "Object-Oriented Design (OOP)", icon: SiOpenjdk },
              { name: "Git Version Control", icon: SiGit }
            ]
          }
        ]
      },
      {
        title: "Data Structures & Notation",
        description: "Organize memory structures efficiently to process complex schemas.",
        modules: [
          { name: "Linear DS (Arrays & Lists)", icon: TbBinaryTree },
          { name: "Stacks & Queues", icon: TbBinaryTree },
          { name: "Non-Linear DS (Trees & Graphs)", icon: TbBinaryTree },
          { name: "Asymptotic Notation (Big O)", icon: TbMathFunction }
        ],
        projects: [
          {
            title: "Custom Memory-Managed Database Indexer",
            description: "Developed a structural content indexer in C++ using B-Trees and custom file-handling systems to sort large records with minimal time complexity.",
            difficulty: "Intermediate",
            duration: "3 Weeks",
            technologies: [
              { name: "C++ Programming", icon: SiCplusplus },
              { name: "Linear DS (Arrays & Lists)", icon: TbBinaryTree },
              { name: "Linux Bash Commands", icon: SiLinux },
              { name: "Git Version Control", icon: SiGit }
            ]
          }
        ]
      },
      {
        title: "Algorithms & Logic Building",
        description: "Formulate systematic execution branches using classic computational patterns.",
        modules: [
          { name: "Recursion & Backtracking", icon: TbMathFunction },
          { name: "Sorting & Searching Algos", icon: FaCode },
          { name: "Dynamic Programming", icon: FaCode },
          { name: "Object-Oriented Design (OOP)", icon: SiOpenjdk }
        ],
        projects: [
          {
            title: "Pathfinding Visualizer Core",
            description: "Implement BFS/DFS graphs and tracking routes logic onto mock structures with exact asymptotic complexities calculations.",
            difficulty: "Intermediate",
            duration: "2 Weeks",
            technologies: [
              { name: "Java Standard Edition", icon: SiOpenjdk },
              { name: "Non-Linear DS (Trees & Graphs)", icon: TbBinaryTree },
              { name: "Asymptotic Notation (Big O)", icon: TbMathFunction }
            ]
          }
        ]
      },
      {
        title: "Data Persistence & Version Control",
        description: "Store record schemas safely and track source iterations.",
        modules: [
          { name: "Relational DBMS (MySQL)", icon: SiMysql },
          { name: "SQL Queries & Joins", icon: FaDatabase },
          { name: "Git Version Control", icon: SiGit },
          { name: "GitHub Collaboration", icon: SiGithub },
          { name: "Linux Bash Commands", icon: SiLinux }
        ],
        projects: [
          {
            title: "E-Commerce Inventory Schema Designer",
            description: "Map fully normalized multi-table database structures with nested constraints and write transactional raw queries.",
            difficulty: "Intermediate",
            duration: "1 Week",
            technologies: [
              { name: "Relational DBMS (MySQL)", icon: SiMysql },
              { name: "SQL Queries & Joins", icon: FaDatabase },
              { name: "Git Version Control", icon: SiGit }
            ]
          }
        ]
      }
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
    ],
    timeline: [
      {
        title: "Data Science Prerequisites",
        description: "Master dataset manipulation tools inside computational workbooks.",
        modules: [
          { name: "Advanced Python for AI", icon: SiPython },
          { name: "NumPy Data Manipulation", icon: SiNumpy },
          { name: "Pandas DataFrames", icon: SiPandas },
          { name: "Jupyter Environments", icon: SiJupyter }
        ],
        projects: [
          {
            title: "Automated Data Analytics Dashboard",
            description: "Process extensive messy matrices, remove custom outliers and assemble visual analytics summary reports automatically.",
            difficulty: "Intermediate",
            duration: "1 Week",
            technologies: [
              { name: "Advanced Python for AI", icon: SiPython },
              { name: "NumPy Data Manipulation", icon: SiNumpy },
              { name: "Pandas DataFrames", icon: SiPandas },
              { name: "Jupyter Environments", icon: SiJupyter }
            ]
          }
        ]
      },
      {
        title: "Classical Machine Learning",
        description: "Build algorithmic predictions from tabular datasets.",
        modules: [
          { name: "Scikit-Learn Classifiers", icon: SiScikitlearn },
          { name: "MLflow Pipeline Tracking", icon: SiMlflow }
        ],
        projects: [
          {
            title: "Predictive Housing Valuation Pipeline",
            description: "Structure complex continuous variables models, manage metrics workflows, and record target evaluation states.",
            difficulty: "Intermediate",
            duration: "2 Weeks",
            technologies: [
              { name: "Scikit-Learn Classifiers", icon: SiScikitlearn },
              { name: "MLflow Pipeline Tracking", icon: SiMlflow },
              { name: "Pandas DataFrames", icon: SiPandas }
            ]
          }
        ]
      },
      {
        title: "Deep Learning & Neural Networks",
        description: "Construct advanced mathematical multi-layered cognitive topologies.",
        modules: [
          { name: "TensorFlow & Keras", icon: SiTensorflow },
          { name: "PyTorch Framework", icon: SiPytorch },
          { name: "Artificial Neural Networks", icon: FaBrain },
          { name: "Convolutional Networks (CNN)", icon: FaBrain }
        ],
        projects: [
          {
            title: "Visual Product Segmentation Engine",
            description: "Trained a convolutional deep learning architecture to segment imagery layers, managing full metrics pipelines and dataset adjustments smoothly.",
            difficulty: "Advanced",
            duration: "3 Weeks",
            technologies: [
              { name: "Advanced Python for AI", icon: SiPython },
              { name: "PyTorch Framework", icon: SiPytorch },
              { name: "TensorFlow & Keras", icon: SiTensorflow },
              { name: "NumPy Data Manipulation", icon: SiNumpy },
              { name: "Pandas DataFrames", icon: SiPandas },
              { name: "MLflow Pipeline Tracking", icon: SiMlflow }
            ]
          }
        ]
      },
      {
        title: "NLP & Generative AI Agents",
        description: "Deploy large language model structures and context workflows.",
        modules: [
          { name: "Natural Language Processing", icon: SiSpacy },
          { name: "Hugging Face Transformers", icon: SiHuggingface },
          { name: "OpenAI GPT API Engines", icon: SiOpenid },
          { name: "LangChain Orchestration", icon: SiLangchain },
          { name: "Vector Databases (Pinecone/Milvus)", icon: SiFastapi }
        ],
        projects: [
          {
            title: "Context-Aware Enterprise RAG Agent",
            description: "Developed an intelligent multi-document processing agent using semantic vector searching and automated memory handling orchestration workflows.",
            difficulty: "Advanced",
            duration: "4 Weeks",
            technologies: [
              { name: "Advanced Python for AI", icon: SiPython },
              { name: "LangChain Orchestration", icon: SiLangchain },
              { name: "OpenAI GPT API Engines", icon: SiOpenid },
              { name: "Vector Databases (Pinecone/Milvus)", icon: SiFastapi },
              { name: "Jupyter Environments", icon: SiJupyter }
            ]
          }
        ]
      }
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
    overview: "Understand the mindset of a hacker to safeguard modern infrastructure. Learn defensive networking, implement secure code standards, perform vulnerability assessment, and trace digital signatures after breaches.",
    skills: [
      { name: "Enterprise Linux Admin", icon: SiLinux },
      { name: "TCP/IP Networking Protocols", icon: TbNetwork },
      { name: "Kali Linux Tooling", icon: SiKalilinux },
      { name: "Wireshark Packet Analysis", icon: SiWireshark },
      { name: "Nmap Network Scanning", icon: FaSearch },
      { name: "Metasploit Exploitation", icon: SiMetasploit },
      { name: "Burp Suite Web Proxy", icon: SiBurpsuite },
      { name: "OWASP Top 10 Vulnerabilities", icon: SiOwasp },
      { name: "Static Application Security (SAST)", icon: SiSnyk },
      { name: "Dynamic Security (DAST)", icon: SiSnyk },
      { name: "Penetration Testing Architecture", icon: FaShieldAlt },
      { name: "Asymmetric & Symmetric Crypto", icon: FaShieldAlt },
      { name: "Splunk SIEM Auditing", icon: SiSplunk },
      { name: "Digital Forensics & Incident Response", icon: FaShieldAlt }
    ],
    timeline: [
      {
        title: "Infrastructure & Network Defense",
        description: "Audit secure operating setups and trace standard interface requests.",
        modules: [
          { name: "Enterprise Linux Admin", icon: SiLinux },
          { name: "TCP/IP Networking Protocols", icon: TbNetwork },
          { name: "Wireshark Packet Analysis", icon: SiWireshark },
          { name: "Nmap Network Scanning", icon: FaSearch }
        ],
        projects: [
          {
            title: "Enterprise Network Traffic Incident Monitor",
            description: "Implemented a deep pipeline utilizing SIEM rulesets to audit TCP packet sequences, capture anomalies, and initiate active threat containment strategies.",
            difficulty: "Intermediate",
            duration: "3 Weeks",
            technologies: [
              { name: "TCP/IP Networking Protocols", icon: TbNetwork },
              { name: "Wireshark Packet Analysis", icon: SiWireshark },
              { name: "Splunk SIEM Auditing", icon: SiSplunk },
              { name: "Nmap Network Scanning", icon: FaSearch }
            ]
          }
        ]
      },
      {
        title: "Offensive Penetration Testing",
        description: "Utilize elite tactical frameworks to pinpoint target loopholes.",
        modules: [
          { name: "Kali Linux Tooling", icon: SiKalilinux },
          { name: "Metasploit Exploitation", icon: SiMetasploit },
          { name: "Burp Suite Web Proxy", icon: SiBurpsuite },
          { name: "Penetration Testing Architecture", icon: FaShieldAlt }
        ],
        projects: [
          {
            title: "Network Node Breach Assessment",
            description: "Map out targets networks, find outdated setups using Metasploit payloads, and write custom exploitation execution writeups safely.",
            difficulty: "Advanced",
            duration: "2 Weeks",
            technologies: [
              { name: "Kali Linux Tooling", icon: SiKalilinux },
              { name: "Metasploit Exploitation", icon: SiMetasploit },
              { name: "Nmap Network Scanning", icon: FaSearch }
            ]
          }
        ]
      },
      {
        title: "Application Security Standards",
        description: "Incorporate strict guardrails against runtime file injections.",
        modules: [
          { name: "OWASP Top 10 Vulnerabilities", icon: SiOwasp },
          { name: "Static Application Security (SAST)", icon: SiSnyk },
          { name: "Dynamic Security (DAST)", icon: SiSnyk },
          { name: "Asymmetric & Symmetric Crypto", icon: FaShieldAlt }
        ],
        projects: [
          {
            title: "Automated DevSecOps Vulnerability Scanner",
            description: "Constructed an automated security scanner script targeting OWASP top vulnerabilities, applying source static controls, and generating structured reports.",
            difficulty: "Intermediate",
            duration: "3 Weeks",
            technologies: [
              { name: "Kali Linux Tooling", icon: SiKalilinux },
              { name: "Burp Suite Web Proxy", icon: SiBurpsuite },
              { name: "OWASP Top 10 Vulnerabilities", icon: SiOwasp },
              { name: "Static Application Security (SAST)", icon: SiSnyk },
              { name: "Enterprise Linux Admin", icon: SiLinux }
            ]
          }
        ]
      },
      {
        title: "Threat Auditing & Forensics",
        description: "Perform enterprise breach analytics and isolate log threats.",
        modules: [
          { name: "Splunk SIEM Auditing", icon: SiSplunk },
          { name: "Digital Forensics & Incident Response", icon: FaShieldAlt }
        ],
        projects: [
          {
            title: "Post-Breach Volatility Memory Analyzer",
            description: "Isolate storage log dumps after structural system failures to track unauthorized malicious bash access tokens and file injection paths.",
            difficulty: "Advanced",
            duration: "2 Weeks",
            technologies: [
              { name: "Splunk SIEM Auditing", icon: SiSplunk },
              { name: "Digital Forensics & Incident Response", icon: FaShieldAlt },
              { name: "Enterprise Linux Admin", icon: SiLinux }
            ]
          }
        ]
      }
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
    ],
    timeline: [
      {
        title: "Cloud Provider Architectures",
        description: "Provision operational virtual servers across modern web hyperscalers.",
        modules: [
          { name: "Linux Shell Scripting", icon: FaCode },
          { name: "AWS (EC2, S3, RDS, IAM)", icon: FaAws },
          { name: "Microsoft Azure Solutions", icon: FaMicrosoft },
          { name: "Google Cloud Engine", icon: SiGooglecloud }
        ],
        projects: [
          {
            title: "Multi-Cloud Hybrid Network Infrastructure",
            description: "Set up secure VPC peering, automated bash cron back-ups, and structural multi-tier host routing schemas.",
            difficulty: "Intermediate",
            duration: "2 Weeks",
            technologies: [
              { name: "Linux Shell Scripting", icon: FaCode },
              { name: "AWS (EC2, S3, RDS, IAM)", icon: FaAws },
              { name: "Microsoft Azure Solutions", icon: FaMicrosoft }
            ]
          }
        ]
      },
      {
        title: "Containerization & Orchestration",
        description: "Isolate micro-environments and coordinate clustering spaces.",
        modules: [
          { name: "Docker Containerization", icon: SiDocker },
          { name: "Kubernetes Cluster Management", icon: SiKubernetes },
          { name: "Helm Package Manager", icon: SiHelm },
          { name: "YAML Multi-container Specs", icon: FaCloud }
        ],
        projects: [
          {
            title: "Multi-Region Highly Available Kubernetes Infrastructure",
            description: "Provisioned global infrastructure using Terraform modules and structured zero-downtime application deployments across orchestrated clustering spaces.",
            difficulty: "Advanced",
            duration: "4 Weeks",
            technologies: [
              { name: "Terraform Infrastructure as Code", icon: SiTerraform },
              { name: "Kubernetes Cluster Management", icon: SiKubernetes },
              { name: "AWS (EC2, S3, RDS, IAM)", icon: FaAws },
              { name: "Helm Package Manager", icon: SiHelm },
              { name: "Docker Containerization", icon: SiDocker },
              { name: "YAML Multi-container Specs", icon: FaCloud }
            ]
          }
        ]
      },
      {
        title: "Continuous Integration & Delivery",
        description: "Design automated test workflows and direct production rollouts.",
        modules: [
          { name: "Jenkins Automation Server", icon: SiJenkins },
          { name: "GitHub Actions Pipelines", icon: SiGithubactions }
        ],
        projects: [
          {
            title: "Automated GitOps CI/CD Deployment Pipeline",
            description: "Designed multi-stage delivery setups with structural testing checks, automated canary rollouts, and real-time dashboard instrumentation loops.",
            difficulty: "Intermediate",
            duration: "3 Weeks",
            technologies: [
              { name: "GitHub Actions Pipelines", icon: SiGithubactions },
              { name: "Jenkins Automation Server", icon: SiJenkins }
            ]
          }
        ]
      },
      {
        title: "Infrastructure as Code & Metrics",
        description: "Define computing nodes programmatically and log dashboard variables.",
        modules: [
          { name: "Terraform Infrastructure as Code", icon: SiTerraform },
          { name: "Ansible Configuration Engine", icon: SiAnsible },
          { name: "Prometheus Monitoring", icon: SiPrometheus },
          { name: "Grafana Visualization Dashboards", icon: SiGrafana }
        ],
        projects: [
          {
            title: "Enterprise Declarative Monitoring Framework",
            description: "Deploy centralized node monitors to scrape runtime cluster parameters and format dynamic alerts systems with Grafana interfaces.",
            difficulty: "Advanced",
            duration: "2 Weeks",
            technologies: [
              { name: "Prometheus Monitoring", icon: SiPrometheus },
              { name: "Grafana Visualization Dashboards", icon: SiGrafana },
              { name: "Ansible Configuration Engine", icon: SiAnsible },
              { name: "Terraform Infrastructure as Code", icon: SiTerraform }
            ]
          }
        ]
      }
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
    ],
    timeline: [
      {
        title: "High Availability Core Scaling",
        description: "Mitigate system bottlenecks using systematic request distribution patterns.",
        modules: [
          { name: "Monolithic to Microservices", icon: FaSitemap },
          { name: "Horizontal vs Vertical Scale", icon: FaSitemap },
          { name: "Nginx Load Balancing Profiles", icon: SiNginx },
          { name: "Distributed Rate Limiters", icon: SiNginx }
        ],
        projects: [
          {
            title: "High-Throughput Global Edge Layer Engine",
            description: "Engineered high availability routing structures utilizing multi-tier cache clusters, synchronized data sharding rules, and rate-limiting rulesets.",
            difficulty: "Advanced",
            duration: "3 Weeks",
            technologies: [
              { name: "Nginx Load Balancing Profiles", icon: SiNginx },
              { name: "Distributed Rate Limiters", icon: SiNginx },
              { name: "Monolithic to Microservices", icon: FaSitemap }
            ]
          }
        ]
      },
      {
        title: "Distributed Data Management",
        description: "Optimize dataset partitions across global transactional nodes.",
        modules: [
          { name: "Database Sharding & Partitioning", icon: SiPostgresql },
          { name: "Master-Slave Replication", icon: SiMysql },
          { name: "CAP & PACELC Theorems", icon: FaSitemap }
        ],
        projects: [
          {
            title: "Sharded Multi-Region Transaction Ledger",
            description: "Map fully distributed storage nodes configured with master-slave clustering scripts to test structural trade-offs under severe CAP network splits.",
            difficulty: "Advanced",
            duration: "2 Weeks",
            technologies: [
              { name: "Database Sharding & Partitioning", icon: SiPostgresql },
              { name: "Master-Slave Replication", icon: SiMysql },
              { name: "CAP & PACELC Theorems", icon: FaSitemap }
            ]
          }
        ]
      },
      {
        title: "Caching & Indexing Infrastructure",
        description: "Accelerate memory response objects via fast cluster storage layers.",
        modules: [
          { name: "Redis Cache Layer Design", icon: SiRedis },
          { name: "CDN Edge Caching Strategies", icon: FaSitemap },
          { name: "Distributed Locking Engines", icon: SiRedis },
          { name: "Elasticsearch Clustering", icon: SiElasticsearch }
        ],
        projects: [
          {
            title: "Distributed Fast-Read Content Cluster",
            description: "Design synchronized CDN policies paired with isolated cluster data locks to handle extreme search lookups without loading backing engines.",
            difficulty: "Advanced",
            duration: "3 Weeks",
            technologies: [
              { name: "Redis Cache Layer Design", icon: SiRedis },
              { name: "Elasticsearch Clustering", icon: SiElasticsearch },
              { name: "Distributed Locking Engines", icon: SiRedis }
            ]
          }
        ]
      },
      {
        title: "Asynchronous Message Streaming",
        description: "Decouple microservices using reliable system data queues.",
        modules: [
          { name: "Apache Kafka Streaming Platforms", icon: SiApachekafka },
          { name: "RabbitMQ Broker Systems", icon: SiRabbitmq },
          { name: "API Gateway Integration Patterns", icon: FaSitemap },
          { name: "Circuit Breakers & Graceful Degradation", icon: FaSitemap }
        ],
        projects: [
          {
            title: "Fault-Tolerant Distributed Message Streaming Hub",
            description: "Architected a scalable enterprise messaging ledger handling millions of sequential requests, balancing partitions safely, and enforcing circuit breaker topologies.",
            difficulty: "Advanced",
            duration: "4 Weeks",
            technologies: [
              { name: "Apache Kafka Streaming Platforms", icon: SiApachekafka },
              { name: "RabbitMQ Broker Systems", icon: SiRabbitmq },
              { name: "Circuit Breakers & Graceful Degradation", icon: FaSitemap },
              { name: "API Gateway Integration Patterns", icon: FaSitemap }
            ]
          }
        ]
      }
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
    ],
    timeline: [
      {
        title: "User Research & Layout Structure",
        description: "Analyze behavioral workflows and categorize content maps.",
        modules: [
          { name: "User Research & Ethnography", icon: FaPaintBrush },
          { name: "Empathy Maps & User Personas", icon: FaPaintBrush },
          { name: "Information Architecture (IA)", icon: FaSitemap }
        ],
        projects: [
          {
            title: "E-Commerce User Journey Transformation",
            description: "Conducted quantitative behavioral user audits and converted insights into structural wireframe maps, motion transitions, and functional prototypes.",
            difficulty: "Beginner",
            duration: "2 Weeks",
            technologies: [
              { name: "User Research & Ethnography", icon: FaPaintBrush },
              { name: "Empathy Maps & User Personas", icon: FaPaintBrush },
              { name: "Information Architecture (IA)", icon: FaSitemap }
            ]
          }
        ]
      },
      {
        title: "Wireframing & Interface Prototyping",
        description: "Transform conceptual visions into interactive layout canvases.",
        modules: [
          { name: "Low-Fidelity Wireframing", icon: SiFigma },
          { name: "High-Fidelity Figma Layouts", icon: SiFigma },
          { name: "Adobe XD Mockups", icon: FaPenNib },
          { name: "Vector Graphics (Adobe Illustrator)", icon: FaPaintBrush },
          { name: "Interactive Prototyping", icon: SiFigma }
        ],
        projects: [
          {
            title: "FinTech Mobile App Interactive Prototype",
            description: "Map complex workflow screens in Figma incorporating custom vector assets and high fidelity interaction loops.",
            difficulty: "Intermediate",
            duration: "2 Weeks",
            technologies: [
              { name: "High-Fidelity Figma Layouts", icon: SiFigma },
              { name: "Interactive Prototyping", icon: SiFigma },
              { name: "Vector Graphics (Adobe Illustrator)", icon: FaPaintBrush }
            ]
          }
        ]
      },
      {
        title: "Design Systems & Component Styling",
        description: "Establish scalable typography rules and uniform CSS variables.",
        modules: [
          { name: "Scalable Design Systems", icon: SiStorybook },
          { name: "Typography, Grids & Color Science", icon: FaPaintBrush },
          { name: "Responsive Component Web Layouts", icon: SiTailwindcss }
        ],
        projects: [
          {
            title: "Enterprise SaaS Visual Design System",
            description: "Designed a centralized, token-based structural workspace containing fluid layout behaviors, complex typography scales, and modular elements.",
            difficulty: "Intermediate",
            duration: "3 Weeks",
            technologies: [
              { name: "Scalable Design Systems", icon: SiStorybook },
              { name: "Typography, Grids & Color Science", icon: FaPaintBrush },
              { name: "Responsive Component Web Layouts", icon: SiTailwindcss }
            ]
          }
        ]
      },
      {
        title: "Motion & No-Code Integrations",
        description: "Embed advanced web animations and generate isolated live nodes.",
        modules: [
          { name: "Micro-interactions (Framer Motion)", icon: SiFramer },
          { name: "Usability Lab Testing", icon: FaPaintBrush },
          { name: "Webflow No-code Launching", icon: SiWebflow },
          { name: "Blender 3D Asset Integration", icon: SiBlender }
        ],
        projects: [
          {
            title: "3D Animated Creative Agency Showcase",
            description: "Assemble responsive pages inside Webflow containing embedded 3D layers and fluid micro-motion triggers.",
            difficulty: "Advanced",
            duration: "2 Weeks",
            technologies: [
              { name: "Micro-interactions (Framer Motion)", icon: SiFramer },
              { name: "Webflow No-code Launching", icon: SiWebflow },
              { name: "Blender 3D Asset Integration", icon: SiBlender }
            ]
          }
        ]
      }
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
    ], // ✅ Skills array yahan sahi se band ho gaya
    timeline: [ // ✅ timeline lowercase ho gaya aur alag array ban gaya
      {
        title: "Cross-Platform Engines Foundations",
        description: "Implement unified code engines targeting multi-platform runtimes.",
        modules: [
          { name: "Dart OOP Foundations", icon: SiDart },
          { name: "Flutter Cross-Platform Engine", icon: SiFlutter },
          { name: "JavaScript / TypeScript Compiler", icon: SiTypescript },
          { name: "React Native Core Architecture", icon: SiReact }
        ],
        projects: [
          {
            title: "Multi-Platform Social Feeds Application",
            description: "Design responsive social layouts rendering natively across viewports, utilizing asynchronous network workers and strict state boundaries.",
            difficulty: "Intermediate",
            duration: "2 Weeks",
            technologies: [
              { name: "React Native Core Architecture", icon: SiReact },
              { name: "JavaScript / TypeScript Compiler", icon: SiTypescript },
              { name: "Flutter Cross-Platform Engine", icon: SiFlutter }
            ]
          }
        ]
      },
      {
        title: "Native iOS & Android SDKs",
        description: "Write direct low-level modular logic specialized for target systems.",
        modules: [
          { name: "Swift Native SDK", icon: SiSwift },
          { name: "iOS Swift UI Design", icon: SiApple },
          { name: "Kotlin Programming Language", icon: SiKotlin },
          { name: "Android Jetpack Compose", icon: SiAndroid }
        ],
        projects: [
          {
            title: "Native Streaming Multi-Platform Utility",
            description: "Programmed robust native dynamic layout spaces across distinct phone environments, unifying state layers and managing platform deployment consoles.",
            difficulty: "Intermediate",
            duration: "3 Weeks",
            technologies: [
              { name: "Android Jetpack Compose", icon: SiAndroid },
              { name: "iOS Swift UI Design", icon: SiApple },
              { name: "Kotlin Programming Language", icon: SiKotlin },
              { name: "Swift Native SDK", icon: SiSwift }
            ]
          }
        ]
      },
      {
        title: "State Management & Sync Storage",
        description: "Maintain fluid interface updates and cache offline local record structures.",
        modules: [
          { name: "BLoC & Provider State Engines", icon: SiFlutter },
          { name: "Redux Architecture for Mobile", icon: SiRedux },
          { name: "Firebase Backend Native Hub", icon: SiFirebase },
          { name: "SQLite Local Edge DBs", icon: SiSqlite }
        ],
        projects: [
          {
            title: "Offline-First Financial Tracking Application",
            description: "Built a secure personal finance engine utilizing isolated local edge database syncing, global reactive status controls, and granular peripheral security locks.",
            difficulty: "Intermediate",
            duration: "4 Weeks",
            technologies: [
              { name: "Flutter Cross-Platform Engine", icon: SiFlutter },
              { name: "BLoC & Provider State Engines", icon: SiFlutter },
              { name: "SQLite Local Edge DBs", icon: SiSqlite },
              { name: "Dart OOP Foundations", icon: SiDart }
            ]
          }
        ]
      },
      {
        title: "Hardware Access & Store Deployment",
        description: "Tap peripheral components and register app configurations onto consoles.",
        modules: [
          { name: "App Store Connect Pipelines", icon: SiApple },
          { name: "Google Play Console Submissions", icon: SiAndroid },
          { name: "Device Native Hardwares Access", icon: FaMobileAlt }
        ],
        projects: [
          {
            title: "Native Peripheral Security Camera Hub",
            description: "Deploy secure background camera tracking layers and setup app distribution paths onto major marketplace staging links.",
            difficulty: "Advanced",
            duration: "2 Weeks",
            technologies: [
              { name: "Device Native Hardwares Access", icon: FaMobileAlt },
              { name: "Google Play Console Submissions", icon: SiAndroid },
              { name: "App Store Connect Pipelines", icon: SiApple }
            ]
          }
        ]
      }
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
    ], // ✅ Skills array perfectly closed
    timeline: [
      {
        title: "Cross-Platform Engines Foundations",
        description: "Implement unified code engines targeting multi-platform runtimes.",
        modules: [
          { name: "Dart OOP Foundations", icon: SiDart },
          { name: "Flutter Cross-Platform Engine", icon: SiFlutter },
          { name: "JavaScript / TypeScript Compiler", icon: SiTypescript },
          { name: "React Native Core Architecture", icon: SiReact }
        ],
        projects: [
          {
            title: "Multi-Platform Social Feeds Application",
            description: "Design responsive social layouts rendering natively across viewports, utilizing asynchronous network workers and strict state boundaries.",
            difficulty: "Intermediate",
            duration: "2 Weeks",
            technologies: [
              { name: "React Native Core Architecture", icon: SiReact },
              { name: "JavaScript / TypeScript Compiler", icon: SiTypescript },
              { name: "Flutter Cross-Platform Engine", icon: SiFlutter }
            ]
          }
        ]
      },
      {
        title: "Native iOS & Android SDKs",
        description: "Write direct low-level modular logic specialized for target systems.",
        modules: [
          { name: "Swift Native SDK", icon: SiSwift },
          { name: "iOS Swift UI Design", icon: SiApple },
          { name: "Kotlin Programming Language", icon: SiKotlin },
          { name: "Android Jetpack Compose", icon: SiAndroid }
        ],
        projects: [
          {
            title: "Native Streaming Multi-Platform Utility",
            description: "Programmed robust native dynamic layout spaces across distinct phone environments, unifying state layers and managing platform deployment consoles.",
            difficulty: "Intermediate",
            duration: "3 Weeks",
            technologies: [
              { name: "Android Jetpack Compose", icon: SiAndroid },
              { name: "iOS Swift UI Design", icon: SiApple },
              { name: "Kotlin Programming Language", icon: SiKotlin },
              { name: "Swift Native SDK", icon: SiSwift }
            ]
          }
        ]
      },
      {
        title: "State Management & Sync Storage",
        description: "Maintain fluid interface updates and cache offline local record structures.",
        modules: [
          { name: "BLoC & Provider State Engines", icon: SiFlutter },
          { name: "Redux Architecture for Mobile", icon: SiRedux },
          { name: "Firebase Backend Native Hub", icon: SiFirebase },
          { name: "SQLite Local Edge DBs", icon: SiSqlite }
        ],
        projects: [
          {
            title: "Offline-First Financial Tracking Application",
            description: "Built a secure personal finance engine utilizing isolated local edge database syncing, global reactive status controls, and granular peripheral security locks.",
            difficulty: "Intermediate",
            duration: "4 Weeks",
            technologies: [
              { name: "Flutter Cross-Platform Engine", icon: SiFlutter },
              { name: "BLoC & Provider State Engines", icon: SiFlutter },
              { name: "SQLite Local Edge DBs", icon: SiSqlite },
              { name: "Dart OOP Foundations", icon: SiDart }
            ]
          }
        ]
      },
      {
        title: "Hardware Access & Store Deployment",
        description: "Tap peripheral components and register app configurations onto consoles.",
        modules: [
          { name: "App Store Connect Pipelines", icon: SiApple },
          { name: "Google Play Console Submissions", icon: SiAndroid },
          { name: "Device Native Hardwares Access", icon: FaMobileAlt }
        ],
        projects: [
          {
            title: "Native Peripheral Security Camera Hub",
            description: "Deploy secure background camera tracking layers and setup app distribution paths onto major marketplace staging links.",
            difficulty: "Advanced",
            duration: "2 Weeks",
            technologies: [
              { name: "Device Native Hardwares Access", icon: FaMobileAlt },
              { name: "Google Play Console Submissions", icon: SiAndroid },
              { name: "App Store Connect Pipelines", icon: SiApple }
            ]
          }
        ]
      }
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
    ], // ✅ Skills array perfectly closed
    timeline: [
      {
        title: "Decentralized Architecture & Web3",
        description: "Compile immutable runtime rules across system ledger nodes.",
        modules: [
          { name: "Decentralized Public Ledgers", icon: FaRocket },
          { name: "Rust Systems Programming", icon: SiRust },
          { name: "Solidity Smart Contract Syntax", icon: SiSolidity },
          { name: "Go Language Blockchain Dev", icon: SiGo },
          { name: "Web3.js Client Interfaces", icon: SiWeb3Dotjs },
          { name: "Ethers.js Connectivity Layers", icon: SiWeb3Dotjs }
        ],
        projects: [
          {
            title: "Decentralized Automated Liquidity Smart Protocol",
            description: "Compiled strict multi-contract logic configurations utilizing low-level memory handling routines, secure state execution, and custom client interaction nodes.",
            difficulty: "Advanced",
            duration: "4 Weeks",
            technologies: [
              { name: "Solidity Smart Contract Syntax", icon: SiSolidity },
              { name: "Rust Systems Programming", icon: SiRust },
              { name: "Web3.js Client Interfaces", icon: SiWeb3Dotjs },
              { name: "Decentralized Public Ledgers", icon: FaRocket }
            ]
          }
        ]
      },
      {
        title: "3D Spatial & Simulation Engines",
        description: "Construct virtual interactive modules and environment scripts.",
        modules: [
          { name: "Unity 3D Runtime Simulation", icon: SiUnity },
          { name: "C# Scripting for Virtual Spatial", icon: SiUnity }
        ],
        projects: [
          {
            title: "Interactive Spatial Environment Simulation",
            description: "Develop a 3D simulated sandbox using strict state machines and custom object physics tracking modules inside virtual dimensions.",
            difficulty: "Advanced",
            duration: "3 Weeks",
            technologies: [
              { name: "Unity 3D Runtime Simulation", icon: SiUnity },
              { name: "C# Scripting for Virtual Spatial", icon: SiUnity }
            ]
          }
        ]
      },
      {
        title: "IoT Systems & Firmware Engineering",
        description: "Wire microcontrollers to handle streaming analog sensor streams.",
        modules: [
          { name: "IoT Gateway Architectures", icon: SiArduino },
          { name: "Arduino Firmware IDE Integration", icon: SiArduino },
          { name: "Raspberry Pi Microprocessor Boards", icon: SiRaspberrypi },
          { name: "Embedded C Logic", icon: SiC }
        ],
        projects: [
          {
            title: "Autonomous Mesh Hardware Ecosystem",
            description: "Engineered firmware processing algorithms linking analog hardware arrays with central communication gates to process operational sensor signals.",
            difficulty: "Advanced",
            duration: "4 Weeks",
            technologies: [
              { name: "Arduino Firmware IDE Integration", icon: SiArduino },
              { name: "Raspberry Pi Microprocessor Boards", icon: SiRaspberrypi },
              { name: "IoT Gateway Architectures", icon: SiArduino },
              { name: "Embedded C Logic", icon: SiC }
            ]
          }
        ]
      },
      {
        title: "Quantum Computing Foundations",
        description: "Test probability operations on state circuit matrices.",
        modules: [
          { name: "Quantum Computing Principles", icon: FaRocket },
          { name: "Qiskit Circuit Simulation", icon: SiPython }
        ],
        projects: [
          {
            title: "Quantum Superposition Circuit Simulator",
            description: "Formulate probability matrix calculations and build isolated state execution structures using script simulations.",
            difficulty: "Advanced",
            duration: "2 Weeks",
            technologies: [
              { name: "Quantum Computing Principles", icon: FaRocket },
              { name: "Qiskit Circuit Simulation", icon: SiPython }
            ]
          }
        ]
      }
    ]
  }
];