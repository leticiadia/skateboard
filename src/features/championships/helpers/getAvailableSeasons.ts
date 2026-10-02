import type { Athlete, AthleteStageResult } from "../../athletes/types/athlete";

export interface ChampionshipRanking {
  position: number;
  points: number;
  results: AthleteStageResult[];
}

export interface ChampionshipRankingEntry {
  athlete: Athlete;
  ranking: ChampionshipRanking;
}

export function getAvailableSeasons(
  athletes: Athlete[],
  championshipSlug: string,
): number[] {
  const seasons = athletes.flatMap((athlete) =>
    athlete.results
      .filter((result) => result.championshipSlug === championshipSlug)
      .map((result) => result.season),
  );

  return [...new Set(seasons)].sort((a, b) => b - a);
}
