import { useState } from "react";
import RegionSelector from "./components/RegionSelector/RegionSelector";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

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
        </>
      ) : (
        <RegionSelector onComplete={handleRegionComplete} detectedCountry={""} />
      )}
    </div>
  );
};

export default App;