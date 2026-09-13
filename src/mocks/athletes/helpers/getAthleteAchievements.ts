import type { Athlete } from "../../../mocks/athletes/type";
import type {
  AthleteAchievement,
  AthleteAchievements,
} from "../../../mocks/athletes/profile.types";
import type { Championships } from "../../../mocks/championships/types";

import { getChampionshipRanking } from "./getChampionshipRanking";

export function getAthleteAchievements(
  athlete: Athlete,
  athletes: Athlete[],
  championships: Championships[],
): AthleteAchievements {
  const titles: AthleteAchievement[] = [];

  const seasons = athlete.results.reduce<
    { championshipSlug: string; season: number }[]
  >((accumulator, result) => {
    const alreadyExists = accumulator.some(
      (item) =>
        item.championshipSlug === result.championshipSlug &&
        item.season === result.season,
    );

    if (!alreadyExists) {
      accumulator.push({
        championshipSlug: result.championshipSlug,
        season: result.season,
      });
    }

    return accumulator;
  }, []);

  seasons.forEach(({ championshipSlug, season }) => {
    const ranking = getChampionshipRanking(athletes, championshipSlug, season);

    const athleteRanking = ranking.find(
      ({ athlete: rankedAthlete }) => rankedAthlete.id === athlete.id,
    );

    if (athleteRanking?.position !== 1) {
      return;
    }

    const championship = championships.find(
      ({ slug }) => slug === championshipSlug,
    );

    if (!championship) {
      return;
    }

    titles.push({
      championship,
      year: season,
      placement: 1,
    });
  });

  return {
    titles,
    awards: athlete.awards,
  };
}
