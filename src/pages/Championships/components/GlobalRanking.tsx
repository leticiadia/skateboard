import { TrophyIcon } from "@phosphor-icons/react";

import type { Athlete } from "../../../mocks/athletes/type";

interface GlobalRankingProps {
  athletes: Athlete[];
  championshipSlug: string;
  title?: string;
  subtitle?: string;
  seasonYear?: number;
}

type AthleteRanking = NonNullable<Athlete["rankings"][number]>;

interface RankingEntry {
  athlete: Athlete;
  ranking: AthleteRanking;
}

interface RankingEntryWithOptionalRanking {
  athlete: Athlete;
  ranking: AthleteRanking | undefined;
}

export function GlobalRanking({
  athletes,
  championshipSlug,
  title = "Global Ranking",
  subtitle = "Top 5 atletas e retrospecto da temporada atual",
  seasonYear = 2026,
}: GlobalRankingProps) {
  const ranking: RankingEntry[] = athletes
    .map((athlete): RankingEntryWithOptionalRanking => {
      const athleteRanking = athlete.rankings.find(
        (ranking) =>
          ranking.championshipSlug === championshipSlug &&
          ranking.season === seasonYear,
      );

      return {
        athlete,
        ranking: athleteRanking,
      };
    })
    .filter((rankingEntry): rankingEntry is RankingEntry =>
      Boolean(rankingEntry.ranking),
    )
    .sort(
      (firstEntry, secondEntry) =>
        firstEntry.ranking.position - secondEntry.ranking.position,
    )
    .slice(0, 5);

  return (
    <section className="mt-8">
      <header className="flex flex-col gap-3 sm:gap-4">
        <h2
          className="flex items-center gap-2 text-2xl font-bold text-black
          sm:text-3xl lg:text-4xl"
        >
          <TrophyIcon
            size={32}
            className="shrink-0 sm:size-9 lg:size-10"
            color="#101828"
          />

          <span>{title}</span>
        </h2>

        <p className="text-sm text-zinc-600 sm:text-base">{subtitle}</p>
      </header>

      <div
        className="mt-4 max-w-full overflow-x-auto rounded-xl border 
        border-zinc-900 bg-zinc-100"
      >
        <table
          className="w-full min-w-[700px] text-left text-sm"
          aria-label={`${title} - temporada ${seasonYear}`}
        >
          <thead
            className="
              border-b border-zinc-800
              bg-zinc-900
              text-xs uppercase
              tracking-wider text-zinc-400
            "
          >
            <tr>
              <th scope="col" className="px-3 py-3 text-center sm:px-4 sm:py-4">
                Posição
              </th>

              <th scope="col" className="px-3 py-3 sm:px-4 sm:py-4">
                Atleta
              </th>

              <th scope="col" className="px-3 py-3 text-center sm:px-4 sm:py-4">
                Pontos
              </th>

              <th scope="col" className="px-3 py-3 text-center sm:px-4 sm:py-4">
                V / D
              </th>

              <th scope="col" className="px-3 py-3 text-center sm:px-4 sm:py-4">
                Pódios ({seasonYear})
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-800/60">
            {ranking.map(({ athlete, ranking }) => (
              <tr
                key={athlete.id}
                className="transition-colors hover:bg-zinc-500/40"
              >
                <td className="px-3 py-3 text-center font-bold sm:px-4 sm:py-4">
                  {ranking.position === 1 && (
                    <span className="text-base text-yellow-600">🥇 1º</span>
                  )}

                  {ranking.position === 2 && (
                    <span className="text-base text-zinc-600">🥈 2º</span>
                  )}

                  {ranking.position === 3 && (
                    <span className="text-base text-amber-700">🥉 3º</span>
                  )}

                  {ranking.position > 3 && (
                    <span className="text-zinc-500">{ranking.position}º</span>
                  )}
                </td>

                <td className="px-3 py-3 sm:px-4 sm:py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={athlete.image}
                      alt={`Foto de ${athlete.name}`}
                      className="
                        size-10 shrink-0
                        rounded-full border-2
                        border-black-700
                        object-cover
                      "
                    />

                    <span className="font-semibold text-black">
                      {athlete.name}
                    </span>
                  </div>
                </td>

                <td
                  className="px-3 py-3 text-center font-bold text-black 
                  sm:px-4 sm:py-4"
                >
                  {ranking.points.toLocaleString()} pts
                </td>

                <td
                  className="px-3 py-3 text-center text-zinc-800 sm:px-4 
                  sm:py-4"
                >
                  <span className="font-medium text-green-600">
                    {ranking.wins}W
                  </span>

                  {" / "}

                  <span className="font-medium text-rose-400">
                    {ranking.losses}L
                  </span>
                </td>

                <td className="px-3 py-3 text-center sm:px-4 sm:py-4">
                  <div className="flex items-center justify-center gap-2">
                    <span
                      className="rounded-md border border-yellow-600/80 
                      bg-yellow-600/60 px-2 py-1 text-sm font-semibold
                      text-yellow-700"
                    >
                      🥇 {ranking.podiums.gold}
                    </span>

                    <span
                      className="rounded-md border border-zinc-600/20 
                      bg-zinc-600/20 px-2 py-1 text-sm font-semibold 
                      text-zinc-500"
                    >
                      🥈 {ranking.podiums.silver}
                    </span>

                    <span
                      className="rounded-md border border-amber-800/20
                      bg-amber-800/20 px-2 py-1 text-sm font-semibold 
                      text-amber-600"
                    >
                      🥉 {ranking.podiums.bronze}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
