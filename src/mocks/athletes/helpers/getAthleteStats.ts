import type { Athlete } from "../type";
import type { AthleteStats } from "../profile.types";

import { getChampionshipRanking } from "./getChampionshipRanking";

export function getAthleteStats(
  athlete: Athlete,
  athletes: Athlete[],
): AthleteStats {
  const championships = new Set(
    athlete.results.map((result) => result.championshipSlug),
  );

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

  const totalTitles = seasons.filter(({ championshipSlug, season }) => {
    const ranking = getChampionshipRanking(athletes, championshipSlug, season);

    const athleteRanking = ranking.find(
      ({ athlete: rankedAthlete }) => rankedAthlete.id === athlete.id,
    );

    return athleteRanking?.position === 1;
  }).length;

  const gold = athlete.results.filter(
    (result) => result.placement === 1,
  ).length;

  const silver = athlete.results.filter(
    (result) => result.placement === 2,
  ).length;

  const bronze = athlete.results.filter(
    (result) => result.placement === 3,
  ).length;

  return {
    totalChampionships: championships.size,
    totalTitles,
    totalAwards: athlete.awards.length,
    podiums: {
      gold,
      silver,
      bronze,
      total: gold + silver + bronze,
    },
  };
}
