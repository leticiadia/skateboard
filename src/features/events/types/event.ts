export type Event = {
  id: number;
  slug: string;
  championshipSlug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  participantAthleteSlugs: string[];
};
