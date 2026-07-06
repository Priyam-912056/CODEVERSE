import { useState } from "react";
import RegionSelector from "./components/RegionSelector/RegionSelector";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const [entered, setEntered] = useState(
    sessionStorage.getItem("region-selected") === "true"
  );

  const handleRegionComplete = () => {
    sessionStorage.setItem("region-selected", "true");
    setEntered(true);
  };

  return (
    <>
      {entered ? (
        <AppRoutes />
      ) : (
        <RegionSelector
          onComplete={handleRegionComplete}
          detectedCountry=""
        />
      )}
    </>
  );
}