import { SectionAbout } from "./sections/sectionAbout";
import { SectionAthletes } from "./sections/sectionAthletes";
import { SectionMain } from "./sections/sectionMain";

import { athletes } from "./mocks/athletes";

export function Home() {
  return (
    <>
      <SectionMain />
      <SectionAbout />
      <SectionAthletes athletes={athletes} />
    </>
  );
}
