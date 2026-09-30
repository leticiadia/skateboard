import { SectionMain } from "./sections/SectionMain";
import { SectionAbout } from "./sections/SectionAbout";
import { SectionAthletes } from "./sections/SectionAthletes";
import { SectionPlaylists } from "./sections/SectionPlaylists";
import { SectionChampionships } from "./sections/SectionChampionships";

import { athletes } from "../../features/athletes/data/athletes";

export function Home() {
  return (
    <>
      <SectionMain />
      <SectionAbout />
      <SectionAthletes athletes={athletes} />
      <SectionPlaylists />
      <SectionChampionships />
    </>
  );
}
