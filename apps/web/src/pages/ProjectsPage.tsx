import { useState } from "react";
import { projects } from "../data/projects";
import ProjectGrid from "../components/projects/Cards/ProjectsGrid";
import Hero from "../components/projects/Hero/Hero";
import SearchBar from "../components/projects/Search/SearchBar";
import CategoryFilter from "../components/projects/Filter/CategoryFilter";
import EmptyState from "../components/projects/Emptystate/EmptyState";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Filter Logic
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || project.category === category;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top Layout Section */}
      <Hero />
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />

      {/* Dynamic Content Area */}
      <div className="container mx-auto px-4 py-8">
        {filteredProjects.length === 0 ? (
          <EmptyState 
            title="Products Not Found" 
            description="Try adjusting your search or category filters." 
          />
        ) : (
          <ProjectGrid projects={filteredProjects} />
        )}
      </div>
    </main>
  );
}