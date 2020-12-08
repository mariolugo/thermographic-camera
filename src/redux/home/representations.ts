export type DataRepresentation = {
  ambientTemperture: number;
  exteriorTemperature: number;
  patientTemperature: number;
  risk: string;
  status: number;
  error?: string;
  fetching: boolean;
};

export type ImageRepresentation = {
  image: string;
  status: number;
  error?: string;
  fetching: boolean;
};
