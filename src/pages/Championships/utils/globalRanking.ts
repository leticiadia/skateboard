import type { Athlete, AthleteStageResult } from "../../../mocks/athletes/type";
import { getPointsByPlacement } from "../../../mocks/championships/scoring";

export interface ChampionshipRanking {
  position: number;
  points: number;
  results: AthleteStageResult[];
}

export interface ChampionshipRankingEntry {
  athlete: Athlete;
  ranking: ChampionshipRanking;
}
export function getChampionshipRanking(
  athletes: Athlete[],
  championshipSlug: string,
  season: number,
  limit?: number,
): ChampionshipRankingEntry[] {
  const ranking = athletes
    .map((athlete) => {
      const results = athlete.results.filter(
        (result) =>
          result.championshipSlug === championshipSlug &&
          result.season === season,
      );

      const points = results.reduce(
        (total, result) => total + getPointsByPlacement(result.placement),
        0,
      );

      return {
        athlete,
        ranking: {
          position: 0,
          points,
          results,
        },
      };
    })
    .filter((entry) => entry.ranking.points > 0)
    .sort((a, b) => b.ranking.points - a.ranking.points);

  const ranked = ranking.map((entry, index) => ({
    ...entry,
    ranking: {
      ...entry.ranking,
      position: index + 1,
    },
  }));

  return limit ? ranked.slice(0, limit) : ranked;
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
