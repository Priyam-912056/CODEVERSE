import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Entertainment from "../pages/Entertainment";
import LearningTrackPage from "../pages/LearningTrackPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/entertainment" element={<Entertainment />} />
      <Route
        path="/learning/:trackId"
        element={<LearningTrackPage />}
      />
    </Routes>
  );
}