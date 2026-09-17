import type { BackgroundColor } from "../../pages/Championships/components/ChampionshipSection";

export type UpcomingEvent = {
  id: number;
  title: string;
  date: string;
  location: string;
};

export type ChampionshipEvents = {
  championshipSlug: string;
  events: UpcomingEvent[];
};

export type ChampionshipStage = {
  id: string;
  number: number;
  name: string;
  location: string;
  date: string;
};

export type ChampionshipSeason = {
  year: number;
  stages: ChampionshipStage[];
};

export interface Championships {
  id: number;
  title: string;
  subtitle: string;
  about: string[];
  description: string;
  abbreviation: string;
  imageThumbnail: string;
  imageSection: string;
  slug: string;
  backgroundColor: BackgroundColor;
  seasons: ChampionshipSeason[];
}
