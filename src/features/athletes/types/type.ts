export type AthleteCategory = "female" | "male" | "new-talent";

export interface AthleteStageResult {
  championshipSlug: string;
  season: number;
  stageId: string;
  placement: number;
}

export interface AthleteAward {
  name: string;
  year: number;
  championshipSlug?: string;
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
  results: AthleteStageResult[];
  awards: AthleteAward[];
  nextEvent?: AthleteNextEvent;
  gallery: AthleteGalleryItem[];
}
