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

export type AthleteRanking = {
  championshipSlug: string;
  season: number;
  position: number;
  points: number;
  wins: number;
  losses: number;
  podiums: {
    gold: number;
    silver: number;
    bronze: number;
  };
};

export interface Athlete {
  id: string;
  name: string;
  slug: string;
  category: AthleteCategory;
  image: string;
  description: string;
  championships: AthleteChampionship[];
  awards: AthleteAward[];
  rankings: AthleteRanking[];
}
