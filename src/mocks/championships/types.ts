import type { BackgroundColor } from "../../pages/Championships/components/ChampionshipSection";

export interface Championships {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  abbreviation: string;
  image: string;
  backgroundColor: BackgroundColor;
}
