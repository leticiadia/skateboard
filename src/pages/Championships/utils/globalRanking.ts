import type { Athlete } from "../../../mocks/athletes/type";

export type AthleteRanking = NonNullable<Athlete["rankings"][number]>;

export interface RankingEntry {
  athlete: Athlete;
  ranking: AthleteRanking;
}

export function getAvailableSeasons(
  athletes: Athlete[],
  championshipSlug: string,
  defaultSeason = 2026,
): number[] {
  const seasonsSet = new Set<number>();

  athletes.forEach((athlete) => {
    athlete.rankings.forEach((r) => {
      if (r.championshipSlug === championshipSlug) {
        seasonsSet.add(r.season);
      }
    });
  });

  const seasons = Array.from(seasonsSet).sort((a, b) => b - a);
  return seasons.length > 0 ? seasons : [defaultSeason];
}

export function getChampionshipRanking(
  athletes: Athlete[],
  championshipSlug: string,
  season: number,
  limit?: number,
): RankingEntry[] {
  const ranking = athletes
    .map((athlete) => {
      const athleteRanking = athlete.rankings.find(
        (r) => r.championshipSlug === championshipSlug && r.season === season,
      );

      return {
        athlete,
        ranking: athleteRanking,
      };
    })
    .filter((entry): entry is RankingEntry => Boolean(entry.ranking))
    .sort((a, b) => a.ranking.position - b.ranking.position);

  return limit ? ranking.slice(0, limit) : ranking;
}
