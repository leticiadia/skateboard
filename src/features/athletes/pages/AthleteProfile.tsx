import { useParams } from "react-router-dom";

import type { AthleteCategory } from "../types/type";

import { athletes } from "../data/athletes";
import { championships } from "../../../mocks/championships/championships";

import { AthleteHero } from "../components/ AthleteHero";
import { AthleteGallery } from "../components/AthleteGallery";
import { AthleteStats } from "../components/AthleteStats";
import { AthleteCurrent } from "../components/AthleteCurrent";
import { AthleteAchievements } from "../components/AthleteAchievements";

import { getAthleteProfileData } from "../helpers/getAthleteProfileData";

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

  const profile = getAthleteProfileData(athlete, athletes, championships);

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

      <AthleteCurrent
        athlete={athlete}
        current={profile.current}
        accentColor={color}
      />

      <AthleteGallery gallery={profile.gallery} accentColor={color} />
    </main>
  );
}
