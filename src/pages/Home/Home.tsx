import { SectionMain } from "./sections/sectionMain";
import { SectionAbout } from "./sections/sectionAbout";
import { SectionAthletes } from "./sections/sectionAthletes";
import { SectionPlaylists } from "./sections/sectionPlaylists";
import { SectionChampionships } from "./sections/sectionChampionships";

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
