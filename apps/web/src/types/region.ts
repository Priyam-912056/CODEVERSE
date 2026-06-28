export type Country = {
  name: string;
  code: string;
};

export type RegionSelectionProps = {
  detectedCountry: string;
  onComplete?: () => void;
};