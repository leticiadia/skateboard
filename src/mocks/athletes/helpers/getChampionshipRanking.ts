import { getPointsByPlacement } from "../../championships/scoring";
import type { Athlete, AthleteStageResult } from "../type";

export interface ChampionshipRankingEntry {
  athlete: Athlete;
  position: number;
  points: number;
  results: AthleteStageResult[];
}

export function getChampionshipRanking(
  athletes: Athlete[],
  championshipSlug: string,
  season: number,
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

      const wins = results.filter((result) => result.placement === 1).length;

      const seconds = results.filter((result) => result.placement === 2).length;

      const thirds = results.filter((result) => result.placement === 3).length;

      const latestResult = results.at(-1);

      return {
        athlete,
        position: 0,
        points,
        results,
        wins,
        seconds,
        thirds,
        latestPlacement: latestResult?.placement ?? Infinity,
      };
    })
    .filter((entry) => entry.points > 0)
    .sort((a, b) => {
      if (a.points !== b.points) {
        return b.points - a.points;
      }

      if (a.wins !== b.wins) {
        return b.wins - a.wins;
      }

      if (a.seconds !== b.seconds) {
        return b.seconds - a.seconds;
      }

      if (a.thirds !== b.thirds) {
        return b.thirds - a.thirds;
      }

      return a.latestPlacement - b.latestPlacement;
    });

  return ranking.map((entry, index) => ({
    athlete: entry.athlete,
    position: index + 1,
    points: entry.points,
    results: entry.results,
  }));
}
