import type { Athlete, AthleteStageResult } from "../../athletes/types/athlete";
import { getPointsByPlacement } from "../../championships/data/scoring";

export interface ChampionshipRankingEntry {
  athlete: Athlete;
  position: number;
  points: number;
  results: AthleteStageResult[];
}

interface RankingCalculation {
  athlete: Athlete;
  position: number;
  points: number;
  results: AthleteStageResult[];
  wins: number;
  seconds: number;
  thirds: number;
  latestPlacement: number;
}

export function getChampionshipRanking(
  athletes: Athlete[],
  championshipSlug: string,
  season: number,
): ChampionshipRankingEntry[] {
  const ranking = athletes
    .map((athlete): RankingCalculation => {
      const results = athlete.results.filter(
        (result) =>
          result.championshipSlug === championshipSlug &&
          result.season === season,
      );

      const points = results.reduce(
        (total, result) => total + getPointsByPlacement(result.placement),
        0,
      );

      const { wins, seconds, thirds } = results.reduce(
        (placements, result) => {
          if (result.placement === 1) placements.wins += 1;
          if (result.placement === 2) placements.seconds += 1;
          if (result.placement === 3) placements.thirds += 1;

          return placements;
        },
        { wins: 0, seconds: 0, thirds: 0 },
      );

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
    .sort((rankingEntryA, rankingEntryB) => {
      if (rankingEntryA.points !== rankingEntryB.points) {
        return rankingEntryB.points - rankingEntryA.points;
      }

      if (rankingEntryA.wins !== rankingEntryB.wins) {
        return rankingEntryB.wins - rankingEntryA.wins;
      }

      if (rankingEntryA.seconds !== rankingEntryB.seconds) {
        return rankingEntryB.seconds - rankingEntryA.seconds;
      }

      if (rankingEntryA.thirds !== rankingEntryB.thirds) {
        return rankingEntryB.thirds - rankingEntryA.thirds;
      }

      return rankingEntryA.latestPlacement - rankingEntryB.latestPlacement;
    });

  return ranking.map((entry, index) => ({
    athlete: entry.athlete,
    position: index + 1,
    points: entry.points,
    results: entry.results,
  }));
}
