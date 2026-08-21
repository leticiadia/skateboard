export type AthleteCategory = "female" | "male" | "new-talent";

export interface AthleteChampionship {
  name: string;
  year: number;
  placement?: number;
}

export interface AthleteAward {
  name: string;
  year: number;
  championship?: string;
}

export interface Athlete {
  id: string;
  name: string;
  slug: string;
  category: AthleteCategory;
  image: string;
  description: string;
  championships: AthleteChampionship[];
  awards: AthleteAward[];
}
