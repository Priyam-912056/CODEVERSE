import { useState } from "react";
import RegionSelector from "./components/RegionSelector/RegionSelector";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/features/Features";
import Stats from "./components/stats/Stats";
import About from "./components/about/About";
import Roadmap from "./components/roadmaps/Roadmap";

const App = () => {
  const [entered, setEntered] = useState(
    sessionStorage.getItem("region-selected") === "true"
  );

  const handleRegionComplete = () => {
    sessionStorage.setItem("region-selected", "true");
    setEntered(true);
  };

  return (
    <div>
      {entered ? (
        <>
        <Navbar />
        <Hero />
        <Features/>
        <Stats/>
        <About/>
        <Roadmap/>
        </>
      ) : (
        <RegionSelector onComplete={handleRegionComplete} detectedCountry={""} />
      )}
    </div>
  );
};

export default App;