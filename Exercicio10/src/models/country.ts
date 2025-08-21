export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania' | 'Antarctic';

export interface ICountry {
  name: {
    common: string;
    official: string;
  };
  region: Region; 
  capital: string[];
  population: number;
  flags: {
    png: string;
  };
}