import type { Athlete } from "../type";
import type {
  ChampionshipEvents,
  Championships,
} from "../../championships/types";
import type { AthleteProfileData } from "../profile.types";

import { getAthleteAchievements } from "./getAthleteAchievements";
import { getAthleteCurrentData } from "./getAthleteCurrentData";
import { getAthleteStats } from "./getAthleteStats";

export function getAthleteProfileData(
  athlete: Athlete,
  championships: Championships[],
  upcomingEvents: ChampionshipEvents[],
): AthleteProfileData {
  const stats = getAthleteStats(athlete);

  const achievements = getAthleteAchievements(athlete, championships);

  const current = getAthleteCurrentData(athlete, championships, upcomingEvents);

  return {
    athlete: {
      name: athlete.name,
      description: athlete.description,
      image: athlete.image,
      category: athlete.category,
    },
    stats,
    achievements,
    current,
    gallery: athlete.gallery,
  };
}
