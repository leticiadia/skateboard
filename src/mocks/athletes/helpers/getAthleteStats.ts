import type { Athlete } from "../type";
import type { AthleteStats } from "../profile.types";

export function getAthleteStats(athlete: Athlete): AthleteStats {
  const totalWins = athlete.rankings.reduce(
    (total, ranking) => total + ranking.wins,
    0,
  );

  const totalLosses = athlete.rankings.reduce(
    (total, ranking) => total + ranking.losses,
    0,
  );

  const podiums = athlete.rankings.reduce(
    (total, ranking) => ({
      gold: total.gold + ranking.podiums.gold,
      silver: total.silver + ranking.podiums.silver,
      bronze: total.bronze + ranking.podiums.bronze,
    }),
    {
      gold: 0,
      silver: 0,
      bronze: 0,
    },
  );

  const totalPodiums = podiums.gold + podiums.silver + podiums.bronze;

  const totalChampionships = new Set(
    athlete.championships.map((championship) => championship.championshipSlug),
  ).size;

  const totalAwards = athlete.awards.length;

  return {
    totalWins,
    totalLosses,
    totalChampionships,
    totalAwards,
    podiums: {
      ...podiums,
      total: totalPodiums,
    },
  };
}
