import type { Championships } from "../../../mocks/championships/types";
import type {
  AthleteCurrentData,
  AthleteCurrentRanking,
} from "../types/athlete-profile";
import type { Athlete } from "../types/athlete";

import { getChampionshipRanking } from "./getChampionshipRanking";

export function getAthleteCurrentData(
  athlete: Athlete,
  athletes: Athlete[],
  championships: Championships[],
): AthleteCurrentData {
  const currentSeason = new Date().getFullYear();

  const currentResults = athlete.results.filter(
    (result) => result.season === currentSeason,
  );

  const championshipSlugs = [
    ...new Set(currentResults.map((result) => result.championshipSlug)),
  ];

  const rankings = championshipSlugs
    .map((championshipSlug) => {
      const championship = championships.find(
        ({ slug }) => slug === championshipSlug,
      );

      if (!championship) {
        return null;
      }

      const ranking = getChampionshipRanking(
        athletes,
        championshipSlug,
        currentSeason,
      );

      const athleteRanking = ranking.find(
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

  const nextEventData = athlete.nextEvent;

  if (!nextEventData) {
    return {
      season: currentSeason,
      rankings,
    };
  }

  return {
    season: currentSeason,
    rankings,
  };
}
