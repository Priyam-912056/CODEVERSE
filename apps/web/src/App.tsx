import { useState } from "react";
import RegionSelector from "./components/RegionSelector/RegionSelector";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/features/Features";

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
        </>
      ) : (
        <RegionSelector onComplete={handleRegionComplete} detectedCountry={""} />
      )}
    </div>
  );
};

export default App;