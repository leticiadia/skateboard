import type { Athlete } from "../types/athlete";
import type { AthleteStats } from "../types/athlete-profile";

import { getChampionshipRanking } from "../../championships/helpers/getChampionshipRanking";

export function getAthleteStats(
  athlete: Athlete,
  athletes: Athlete[],
): AthleteStats {
  const championships = new Set(
    athlete.results.map((result) => result.championshipSlug),
  );

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

  const totalTitles = Array.from(uniqueSeasons.values()).filter(
    ({ championshipSlug, season }) => {
      const ranking = getChampionshipRanking(
        athletes,
        championshipSlug,
        season,
      );

      const athleteRanking = ranking.find(
        ({ athlete: rankedAthlete }) => rankedAthlete.id === athlete.id,
      );

      return athleteRanking?.position === 1;
    },
  ).length;

  const podiumCounts = athlete.results.reduce(
    (counts, result) => {
      if (result.placement === 1) {
        counts.gold += 1;
      } else if (result.placement === 2) {
        counts.silver += 1;
      } else if (result.placement === 3) {
        counts.bronze += 1;
      }

      return counts;
    },
    { gold: 0, silver: 0, bronze: 0 },
  );

  return {
    totalChampionships: championships.size,
    totalTitles,
    totalAwards: athlete.awards.length,
    podiums: {
      ...podiumCounts,
      total: podiumCounts.gold + podiumCounts.silver + podiumCounts.bronze,
    },
  };
}
