import { useState } from "react";
import type {
  Country,
  RegionSelectionProps,
} from "../types/region";

export function useRegionSelection({
  detectedCountry,
  onComplete,
}: RegionSelectionProps) {
  const [selectedCountry, setSelectedCountry] =
    useState<string | null>(null);

  const [accessGranted, setAccessGranted] =
    useState<boolean | null>(null);

  const [error, setError] = useState("");

  const handleSelect = (country: Country) => {
    setSelectedCountry(country.name);
    setError("");
    setAccessGranted(null);
  };

  const handleContinue = () => {
    if (!selectedCountry) {
      setError("Please select your country.");
      return;
    }

    if (selectedCountry === detectedCountry) {
      setAccessGranted(true);
      setError("");

      setTimeout(() => {
        onComplete?.();
      }, 1000);
    } else {
      setAccessGranted(false);
      setError("Wrong region selected.");
    }
  };

  return {
    selectedCountry,
    accessGranted,
    error,
    handleSelect,
    handleContinue,
  };
}