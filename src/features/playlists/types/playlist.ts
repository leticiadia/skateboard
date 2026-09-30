import type { BackgroundColor } from "../components/PlaylistCard";

export type Playlist = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  image: string;
  backgroundColor: BackgroundColor;
};
