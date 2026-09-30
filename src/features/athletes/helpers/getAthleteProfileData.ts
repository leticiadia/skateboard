import type { Championships } from "../../championships/types/championship";
import type { Athlete } from "../types/athlete";
import type { AthleteProfileData } from "../types/athlete-profile";

import { getAthleteAchievements } from "./getAthleteAchievements";
import { getAthleteCurrentData } from "./getAthleteCurrentData";
import { getAthleteStats } from "./getAthleteStats";

export function getAthleteProfileData(
  athlete: Athlete,
  athletes: Athlete[],
  championships: Championships[],
): AthleteProfileData {
  const stats = getAthleteStats(athlete, athletes);

  const achievements = getAthleteAchievements(athlete, athletes, championships);

  const current = getAthleteCurrentData(athlete, athletes, championships);

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
