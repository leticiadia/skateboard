import type { BackgroundColor } from "../../pages/Championships/components/ChampionshipSection";

export type UpcomingEvent = {
  id: number;
  title: string;
  date: string;
  formattedDate: string;
  location: string;
};

export type ChampionshipEvents = {
  championshipSlug: string;
  events: UpcomingEvent[];
};
export interface Championships {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  abbreviation: string;
  imageThumbnail: string;
  imageSection: string;
  slug: string;
  backgroundColor: BackgroundColor;
}
