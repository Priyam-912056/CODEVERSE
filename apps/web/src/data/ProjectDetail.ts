// 1. Interfaces for project details page structure
export interface Resource {
  title: string;
  url: string;
}

export interface FolderNode {
  name: string;
  type: "file" | "folder";
  children?: FolderNode[];
}

export interface ProjectDetail {
  id: string; // Original project ki ID se match (connect) karne ke liye
  date: string; // Project completion ya publish date
  overview: string;
  learningOutcomes: string[];
  screenshots: string[];
  resources: Resource[];
  installation: string[];
  folderStructure: FolderNode[];
  github: string; // Missing field 1
  live: string;   // Missing field 2
}

// 2. Alag data array sirf project details ke liye
export const projectDetails: ProjectDetail[] = [
  {
    id: "frontend-adv-01", 
    date: "July 2026",
    overview: "This project replicates institutional-grade trading interfaces where milliseconds matter. It serves as an ultimate test of frontend performance optimization, dealing with rapid state mutations, garbage collection management, and complex data synchronization between the main thread and background workers.",
    learningOutcomes: [
      "Mastered off-loading heavy computational tasks to Web Workers to maintain 60FPS.",
      "Implemented zero-allocation data structures to minimize garbage collection pauses.",
      "Designed a robust micro-frontend architecture using Webpack Module Federation.",
      "Optimized DOM rendering using windowing/virtualization techniques for endless scrolling."
    ],
    screenshots: [
      "/screenshots/trading-terminal-main.png",
      "/screenshots/trading-terminal-depth-chart.png",
      "/screenshots/trading-terminal-mobile.png"
    ],
    resources: [
      { title: "HTML5 Canvas Optimization Guide", url: "https://developer.mozilla.org" },
      { title: "GraphQL Subscriptions Best Practices", url: "https://www.apollographql.com" }
    ],
    installation: [
      "git clone https://github.com/yourusername/high-frequency-trading-terminal.git",
      "cd high-frequency-trading-terminal",
      "npm install",
      "npm run dev"
    ],
    folderStructure: [
      {
        name: "src",
        type: "folder",
        children: [
          { 
            name: "components", 
            type: "folder", 
            children: [
              { name: "OrderBook.tsx", type: "file" }, 
              { name: "CanvasChart.tsx", type: "file" }
            ] 
          },
          { 
            name: "workers", 
            type: "folder", 
            children: [
              { name: "dataStream.worker.ts", type: "file" }
            ] 
          },
          { 
            name: "hooks", 
            type: "folder", 
            children: [
              { name: "useWebSocket.ts", type: "file" }
            ] 
          },
          { name: "App.tsx", type: "file" },
          { name: "main.tsx", type: "file" }
        ]
      },
      { name: "package.json", type: "file" },
      { name: "tsconfig.json", type: "file" }
    ],
    github: "https://github.com/yourusername/high-frequency-trading-terminal", // Added
    live: "https://trading-terminal-demo.vercel.app" // Added
  }
];