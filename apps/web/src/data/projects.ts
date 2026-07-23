import { 
  SiReact, SiTypescript, SiTailwindcss, SiRedux, SiNextdotjs, 
  SiGraphql, SiNodedotjs, SiExpress, SiRedis, SiPostgresql, 
  SiDocker, SiPython, SiFastapi, SiMongodb, SiPrisma, 
  SiSocketdotio, SiTensorflow, SiFirebase 
} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import type { Project } from "../types/projects"; // Assuming your interface is exported from types.ts

export const projects: Project[] = [
  {
    id: "frontend-adv-01",
    slug: "high-frequency-trading-terminal",
    title: "High-Frequency Trading Terminal Storefront",
    description: "Architect an ultra-low-latency financial dashboard capable of rendering tens of thousands of concurrent data points via micro-frontends, custom Web Workers, and specialized canvas rendering layers.",
    category: "Frontend",
    difficulty: "Advanced",
    duration: "1 Month",
    thumbnail: "/projects/trading-terminal.png",
    featured: true,
    technologies: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "GraphQL", icon: SiGraphql }
    ],
    features: [
      "OffscreenCanvas Multi-threaded Chart Rendering",
      "Web Workers Data Ingestion and Normalization Pipeline",
      "Custom Data Grid with Virtual Scroll and Cell-Level Re-renders",
      "Bi-directional Streaming Subscriptions via GraphQL WebSockets",
      "Monorepo Micro-Frontend Shell Integration Topology",
      "Advanced Order-Book Depth Visualization Module"
    ],
    github: "",
    live: ""
  },
  {
    id: "frontend-adv-02",
    slug: "real-time-collaborative-audio-digital-workstation",
    title: "Real-time Collaborative Audio Digital Workstation",
    description: "Develop a browser-based multi-track audio engineering suite leveraging the Web Audio API, synchronized CRDT state management, and assembly-level performance optimization.",
    category: "Frontend",
    difficulty: "Advanced",
    duration: "1 Month",
    thumbnail: "/projects/audio-daw.png",
    featured: true,
    technologies: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: FaHtml5 }
    ],
    features: [
      "Web Audio API Node Synthesis Graphs",
      "Conflict-free Replicated Data Types (CRDT) Session Sync",
      "Low-latency Multitrack Audio Waves Rendering Engine",
      "Dynamic Custom Audio Worklet Processors Implementation",
      "Predictive UI Operations and Optimistic State Updates",
      "Automated Multi-track Linear Mixer Component Grid"
    ],
    github: "",
    live: ""
  },
  {
    id: "frontend-adv-03",
    slug: "zero-knowledge-cryptographic-multi-wallet-ui",
    title: "Zero-Knowledge Cryptographic Multi-Wallet UI",
    description: "Design a high-security decentralized digital asset platform featuring local browser-based cryptographic compilation, hardware key integrations, and complex state management.",
    category: "Frontend",
    difficulty: "Advanced",
    duration: "2 Weeks",
    thumbnail: "/projects/crypto-wallet.png",
    featured: false,
    technologies: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux Toolkit", icon: SiRedux }
    ],
    features: [
      "Client-side Zero-Knowledge Proof Circuit Execution",
      "Hardware Wallet Ledger/Trezor WebHID Integrations",
      "Strict Local Storage State Obfuscation Protocols",
      "Asynchronous Gas Cost Multi-variant Calculator Engine",
      "Hierarchical Deterministic Key Tree Dynamic Visualizer",
      "Automated Session Memory Clear Sandbox Context"
    ],
    github: "",
    live: ""
  },
  {
    id: "backend-adv-01",
    slug: "distributed-multi-region-consensus-key-value-store",
    title: "Distributed Multi-Region Consensus Key-Value Store",
    description: "Engineer an ACID-compliant distributed transactional key-value data engine from scratch, featuring dynamic leader election protocols, continuous WAL replication, and cluster orchestration.",
    category: "Backend",
    difficulty: "Advanced",
    duration: "1 Month",
    thumbnail: "/projects/consensus-kv.png",
    featured: true,
    technologies: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Redis", icon: SiRedis },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: SiDocker }
    ],
    features: [
      "Custom Raft Consensus Protocol Implementation",
      "Write-Ahead Logging (WAL) System for Crash Recovery",
      "Distributed Two-Phase Commit Transaction Manager",
      "Gossip Protocol-based Cluster Membership Discovery",
      "Log LSM-Tree Storage Engine with Compaction Background Tasks",
      "Highly Optimized Custom TCP Wire Protocol Server"
    ],
    github: "",
    live: ""
  },
  {
    id: "backend-adv-02",
    slug: "real-time-dynamic-api-gateway-reverse-proxy",
    title: "Real-time Dynamic API Gateway & Reverse Proxy",
    description: "Construct a highly performant, distributed api gateway featuring programmatic dynamic routing, token-bucket throttling, and real-time JWT token validation clusters.",
    category: "Backend",
    difficulty: "Advanced",
    duration: "2 Weeks",
    thumbnail: "/projects/api-gateway.png",
    featured: false,
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Redis", icon: SiRedis },
      { name: "Docker", icon: SiDocker }
    ],
    features: [
      "Dynamic Hot-Reloading Configuration Route Registry",
      "Distributed Token Bucket Global Rate Limiting Layer",
      "Asymmetric Cryptographic Signature JWT Validation Cache",
      "Circuit Breaker Structural Design Integration Engine",
      "Streaming Response Buffer Pipeline Instrumentation",
      "Comprehensive OpenTelemetry Distributed Trace Generation"
    ],
    github: "",
    live: ""
  },
  {
    id: "fullstack-adv-01",
    slug: "serverless-edge-deployment-cloud-compute-engine",
    title: "Serverless Edge Deployment & Cloud Compute Engine",
    description: "Develop an elastic cloud infrastructure engine allowing developers to package, build, and deploy serverless isolated code containers to multi-region instances instantly.",
    category: "Full Stack",
    difficulty: "Advanced",
    duration: "1 Month",
    thumbnail: "/projects/cloud-compute.png",
    featured: true,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: SiDocker }
    ],
    features: [
      "Automated Micro-Container Lifecycle Isolation Sandbox",
      "Global Anycast Edge Multi-Region Router Dynamic Routing",
      "Real-time Distributed Build Pipe Logs Streaming Server",
      "Resource Execution Quota Controller and Throttle System",
      "Comprehensive Operational Compute Resource Metrics Tracking",
      "Multi-tenant Cryptographic Environmental Storage Isolation"
    ],
    github: "",
    live: ""
  },
  {
    id: "fullstack-adv-02",
    slug: "enterprise-multi-tenant-erp-suite",
    title: "Enterprise Multi-Tenant ERP Suite",
    description: "Architect a scalable enterprise logistics resource planning framework utilizing strict row-level multitenancy, dynamic schema migration, and complex operational pipelines.",
    category: "Full Stack",
    difficulty: "Advanced",
    duration: "1 Month",
    thumbnail: "/projects/enterprise-erp.png",
    featured: true,
    technologies: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql }
    ],
    features: [
      "Database-Level Dynamic Row-Level Security Enforcements",
      "Custom Flexible Dynamic Fields JSON Database Mappings",
      "Two-Factor Authentication Security Provisioning Infrastructure",
      "Transactional Double-Entry General Ledger Balance Engine",
      "Asynchronous Batch Invoicing Generation Worker Queues",
      "Extensive Enterprise Audit Action Ledger Trailing"
    ],
    github: "",
    live: ""
  },
  {
    id: "fullstack-adv-03",
    slug: "distributed-video-streaming-transcoder-operations-hub",
    title: "Distributed Video Streaming Transcoder Operations Hub",
    description: "Construct an automated, high-throughput ingestion platform that chunks, compresses, transcodes, and prepares massive raw video uploads for multi-bitrate HLS streaming.",
    category: "Full Stack",
    difficulty: "Advanced",
    duration: "2 Weeks",
    thumbnail: "/projects/video-transcoder.png",
    featured: false,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Docker", icon: SiDocker }
    ],
    features: [
      "Parallel Chunked File Ingestion Pipeline Processing",
      "Distributed Workers Video Slicing Transcoding Tasks",
      "Automated Dynamic HLS/DASH Manifest Profile Generators",
      "Adaptive Multi-bitrate Storage Allocation Optimizations",
      "Real-time Audio Video Ingestion Percentage Update Tracks",
      "Secure Encrypted Digital Rights Access Signers"
    ],
    github: "",
    live: ""
  },
  {
    id: "fullstack-adv-04",
    slug: "collaborative-real-time-document-ide-engine",
    title: "Collaborative Real-time Document IDE Engine",
    description: "Develop a feature-rich developer workspace environment containing file directories management, real-time shared multi-user editors, and active terminal virtualization systems.",
    category: "Full Stack",
    difficulty: "Advanced",
    duration: "2 Weeks",
    thumbnail: "/projects/collaborative-ide.png",
    featured: false,
    technologies: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Docker", icon: SiDocker },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ],
    features: [
      "Operational Transformation/CRDT File Collaborative Synced State",
      "Virtual File Trees In-Memory Sync Architectures",
      "Dynamic PTY Linux Remote Terminal Spawn Infrastructure",
      "Debounced File System State Disk Persist Engines",
      "Granular File Access Control Allocation Systems",
      "Active User Presence Matrix Indicator Syncs"
    ],
    github: "",
    live: ""
  },
  {
    id: "ai-adv-01",
    slug: "autonomous-agent-rag-orchestration-engine",
    title: "Autonomous Agent RAG Orchestration Engine",
    description: "Build a highly scalable autonomous intelligence agent runner platform incorporating multi-vector graph databases, dynamic agent context planning, and real-time tooling executions.",
    category: "AI",
    difficulty: "Advanced",
    duration: "1 Month",
    thumbnail: "/projects/agent-orchestrator.png",
    featured: true,
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redis", icon: SiRedis },
      { name: "Docker", icon: SiDocker }
    ],
    features: [
      "Dynamic Graph-based Agent Reasoning Execution Chains",
      "Hierarchical Vector Memory Compaction Search Indices",
      "Dynamic Sandbox Environment Tool Invocation Engines",
      "Asynchronous Long-Running Task Token Queue Control Systems",
      "Multi-Agent Real-time Collaboration Work Orchestrators",
      "Granular LLM API Cost Multi-variant Ceiling Budget Tracking"
    ],
    github: "",
    live: ""
  },
  {
    id: "ai-adv-02",
    slug: "distributed-predictive-telemetry-anomaly-engine",
    title: "Distributed Predictive Telemetry Anomaly Engine",
    description: "Implement a high-performance machine learning model pipeline that processes thousands of streaming infrastructure events per second to flag systemic faults.",
    category: "AI",
    difficulty: "Advanced",
    duration: "2 Weeks",
    thumbnail: "/projects/telemetry-anomaly.png",
    featured: false,
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Redis", icon: SiRedis },
      { name: "Docker", icon: SiDocker }
    ],
    features: [
      "Sliding Window Time-Series Feature Extraction Pipelines",
      "Asynchronous Live Model Inference Workers Queues",
      "Automated Model Training Baseline Pipeline Ingestions",
      "Dynamic Precision Recall Graph Visualization Trackers",
      "Real-time Distributed Event Alert Dispatch System Interacts",
      "Fault Vector Clustering Similarity Target Engine Lookups"
    ],
    github: "",
    live: ""
  },
  {
    id: "mobile-adv-01",
    slug: "offline-first-field-cryptographic-audit-app",
    title: "Offline-First Field Cryptographic Audit App",
    description: "Build a highly secure mobile data collection ecosystem utilizing fully peer-to-peer network syncing capabilities, strict local encryptions, and biometric signature checks.",
    category: "Mobile",
    difficulty: "Advanced",
    duration: "2 Weeks",
    thumbnail: "/projects/audit-mobile.png",
    featured: true,
    technologies: [
      { name: "Firebase", icon: SiFirebase },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Redux Toolkit", icon: SiRedux }
    ],
    features: [
      "Local Database SQLite Row Level AES Encryption Blocks",
      "Peer-to-Peer Mesh Syncing Operational Protocol Handlers",
      "Hardware Enclave Key Cryptographic Signature Builders",
      "Delta Conflict Resolution Vector Storage Engine Syncs",
      "Deep Native Biometric Identity Multi-factor Validations",
      "Background Network Bandwidth Adaptive Synchronizer Monitors"
    ],
    github: "",
    live: ""
  }
];