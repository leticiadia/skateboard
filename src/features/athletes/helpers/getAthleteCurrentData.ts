import type { Championships } from "../../championships/types/championship";
import type {
  AthleteCurrentData,
  AthleteCurrentRanking,
} from "../types/athlete-profile";
import type { Athlete } from "../types/athlete";

import { getChampionshipRanking } from "../../championships/helpers/getChampionshipRanking";

export function getAthleteCurrentData(
  athlete: Athlete,
  athletes: Athlete[],
  championships: Championships[],
): AthleteCurrentData {
  const currentSeason = new Date().getFullYear();

  const currentSeasonResults = athlete.results.filter(
    (result) => result.season === currentSeason,
  );

  const championshipSlugs = [
    ...new Set(currentSeasonResults.map((result) => result.championshipSlug)),
  ];

  const rankings = championshipSlugs
    .map((championshipSlug) => {
      const championship = championships.find(
        (championship) => championship.slug === championshipSlug,
      );

      if (!championship) {
        return null;
      }

      const championshipRanking = getChampionshipRanking(
        athletes,
        championshipSlug,
        currentSeason,
      );

      const athleteRanking = championshipRanking.find(
        ({ athlete: rankedAthlete }) => rankedAthlete.id === athlete.id,
      );

      if (!athleteRanking) {
        return null;
      }

      return {
        championship,
        position: athleteRanking.position,
        points: athleteRanking.points,
      };
    })
    .filter((ranking): ranking is AthleteCurrentRanking => ranking !== null);

  return {
    season: currentSeason,
    rankings,
  };
}
