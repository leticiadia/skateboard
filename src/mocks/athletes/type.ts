export type AthleteCategory = "female" | "male" | "new-talent";

export interface AthleteChampionship {
  championshipSlug: string;
  year: number;
  placement?: number;
}

export interface AthleteAward {
  name: string;
  year: number;
  championshipSlug?: string;
}

export interface AthleteRanking {
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
}

export interface AthleteNextEvent {
  championshipSlug: string;
  eventId: number;
}

export interface AthleteGalleryItem {
  image: string;
  championshipSlug?: string;
  year?: number;
  caption?: string;
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
  rankings: AthleteRanking[];

  nextEvent?: AthleteNextEvent;
  gallery: AthleteGalleryItem[];
}
