import type { Athlete } from "../type";
import type { AthleteProfileData } from "../profile.types";
import type { Championships } from "../../championships/types";
import type { Event } from "../../events/types";

import { getAthleteAchievements } from "./getAthleteAchievements";
import { getAthleteCurrentData } from "./getAthleteCurrentData";
import { getAthleteStats } from "./getAthleteStats";

export function getAthleteProfileData(
  athlete: Athlete,
  athletes: Athlete[],
  championships: Championships[],
  events: Event[],
): AthleteProfileData {
  const stats = getAthleteStats(athlete, athletes);

  const achievements = getAthleteAchievements(athlete, athletes, championships);

  const current = getAthleteCurrentData(
    athlete,
    athletes,
    championships,
    events,
  );

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
