import type { Championships } from "../../championships/types/championship";
import type { Athlete } from "../types/athlete";
import type {
  AthleteAchievement,
  AthleteAchievements,
} from "../types/athlete-profile";

import { getChampionshipRanking } from "../../championships/helpers/getChampionshipRanking";

export function getAthleteAchievements(
  athlete: Athlete,
  athletes: Athlete[],
  championships: Championships[],
): AthleteAchievements {
  const titles: AthleteAchievement[] = [];

  const uniqueSeasons = new Map<
    string,
    { championshipSlug: string; season: number }
  >();

  athlete.results.forEach((result) => {
    const seasonKey = JSON.stringify([result.championshipSlug, result.season]);

    if (!uniqueSeasons.has(seasonKey)) {
      uniqueSeasons.set(seasonKey, {
        championshipSlug: result.championshipSlug,
        season: result.season,
      });
    }
  });

  for (const { championshipSlug, season } of uniqueSeasons.values()) {
    const ranking = getChampionshipRanking(athletes, championshipSlug, season);

    const athleteRanking = ranking.find(
      ({ athlete: rankedAthlete }) => rankedAthlete.id === athlete.id,
    );

    if (athleteRanking?.position !== 1) {
      continue;
    }

    const championship = championships.find(
      (championship) => championship.slug === championshipSlug,
    );

    if (!championship) {
      continue;
    }

    titles.push({
      championship,
      year: season,
      placement: 1,
    });
  }

  return {
    titles,
    awards: athlete.awards,
  };
}
