import { athletes } from "../../mocks/athletes/athletes";

import { SectionMain } from "./sections/sectionMain";
import { SectionAbout } from "./sections/sectionAbout";
import { SectionAthletes } from "./sections/sectionAthletes";
import { SectionPlaylists } from "./sections/sectionPlaylists";
import { SectionChampionships } from "./sections/sectionChampionships";

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
