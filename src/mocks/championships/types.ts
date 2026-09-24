import type { BackgroundColor } from "../../pages/Championships/components/ChampionshipSection";
import type { Event } from "../events/types";

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
