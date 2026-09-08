import { useParams } from "react-router-dom";

import { athletes } from "../../../mocks/athletes/athletes";
import { championships } from "../../../mocks/championships/championships";
import { upcomingEvents } from "../../../mocks/championships/upcoming-events";
import type { AthleteCategory } from "../../../mocks/athletes/type";

import { getAthleteProfileData } from "../../../mocks/athletes/helpers/getAthleteProfileData";

import { AthleteHero } from "./components/ AthleteHero";
import { AthleteStats } from "./components/AthleteStats";
import { AthleteAchievements } from "./components/AthleteAchievements";
import { AthleteCurrent } from "./components/AthleteCurrent";
import { AthleteGallery } from "./components/AthleteGallery";

const categoryColors: Record<AthleteCategory, string> = {
  female: "#2ab7ca",
  male: "#ffc857",
  "new-talent": "#ef4444",
};

export function AthleteProfile() {
  const { slug } = useParams();

  const athlete = athletes.find((athlete) => athlete.slug === slug);

  if (!athlete) {
    return <div>Atleta não encontrado.</div>;
  }

  const profile = getAthleteProfileData(athlete, championships, upcomingEvents);

  const color = categoryColors[athlete.category];

  return (
    <main>
      <AthleteHero athlete={profile.athlete} />

      <AthleteStats
        stats={profile.stats}
        athleteSlug={athlete.slug}
        accentColor={color}
      />

      <AthleteAchievements
        achievements={profile.achievements}
        accentColor={color}
      />

      <AthleteCurrent current={profile.current} accentColor={color} />

      <AthleteGallery gallery={profile.gallery} accentColor={color} />
    </main>
  );
}
