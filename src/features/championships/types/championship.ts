import type { Event } from "../../../mocks/events/types";
import type { BackgroundColor } from "../components/ChampionshipSection";

export type ChampionshipEvents = {
  championshipSlug: string;
  events: Event[];
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
