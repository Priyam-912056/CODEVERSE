import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { projectDetails } from "../data/ProjectDetail";

import EmptyState from "../components/projects/Emptystate/EmptyState";

import Hero from "../components/projects/ProjectDetail/Hero";
import Overview from "../components/projects/ProjectDetail/Overview";
import Features from "../components/projects/ProjectDetail/Features";
import LearningOutcomes from "../components/projects/ProjectDetail/LearningOutcomes";
import Installation from "../components/projects/ProjectDetail/Installation";
import FolderStructure from "../components/projects/ProjectDetail/FolderStructure";
import Resources from "../components/projects/ProjectDetail/Resources";
import RelatedProjects from "../components/projects/ProjectDetail/RelatedProjects";
import ProjectSidebar from "../components/projects/ProjectDetail/ProjectSidebar";
import Breadcrumb from "../components/projects/ProjectDetail/Breadcrumb";

export default function ProjectDetailPage() {
  const { slug } = useParams();

  // Find Project
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <EmptyState
          title="Project Not Found"
          description="The project you're looking for doesn't exist."
        />
      </main>
    );
  }

  // Find Details
  const detail = projectDetails.find((d) => d.id === project.id);

  if (!detail) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <EmptyState
          title="Project Details Missing"
          description="This project's detailed content hasn't been added yet."
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}
      <Breadcrumb title={project.title} />
      <Hero project={project} detail={detail} />

      {/* ================= CONTENT ================= */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14">

          {/* LEFT SIDE */}

          <div>

            <Overview
              project={project}
              detail={detail}
            />

            <Features
              project={project}
            />

            <LearningOutcomes
              detail={detail}
            />

            <Installation
              detail={detail}
            />

            <FolderStructure
              detail={detail}
            />

            <Resources
              detail={detail}
            />

            <RelatedProjects
              currentProject={project}
              projects={projects}
            />

          </div>

          {/* RIGHT SIDE */}

          <ProjectSidebar />

        </div>

      </div>

    </main>
  );
}