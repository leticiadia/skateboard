import type { Athlete } from "../type";
import type { Championships } from "../../championships/types";
import type { AthleteAchievement, AthleteAchievements } from "../profile.types";

export function getAthleteAchievements(
  athlete: Athlete,
  championships: Championships[],
): AthleteAchievements {
  const titles = athlete.championships
    .filter(({ placement }) => placement === 1)
    .map((achievement) => {
      const championship = championships.find(
        ({ slug }) => slug === achievement.championshipSlug,
      );

      if (!championship) {
        return null;
      }

      return {
        championship,
        year: achievement.year,
        placement: achievement.placement,
      };
    })
    .filter(
      (achievement): achievement is AthleteAchievement => achievement !== null,
    );

  return {
    titles,
    awards: athlete.awards,
  };
}
