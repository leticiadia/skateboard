import { useState } from "react";
import { CalendarBlankIcon, CaretDownIcon } from "@phosphor-icons/react";

import type { Athlete } from "../../../mocks/athletes/type";
import {
  getAvailableSeasons,
  getChampionshipRanking,
} from "../utils/globalRanking";

interface GlobalRankingProps {
  athletes: Athlete[];
  championshipSlug: string;
  title?: string;
  subtitle?: string;
  seasonYear?: number;
  limit?: number;
}

export function GlobalRanking({
  athletes,
  championshipSlug,
  seasonYear = 2026,
  limit,
}: GlobalRankingProps) {
  const availableSeasons = getAvailableSeasons(
    athletes,
    championshipSlug,
    seasonYear,
  );

  const [selectedSeason, setSelectedSeason] = useState<number>(
    availableSeasons.includes(seasonYear) ? seasonYear : availableSeasons[0],
  );

  const displayedRanking = getChampionshipRanking(
    athletes,
    championshipSlug,
    selectedSeason,
    limit,
  );

  return (
    <section className="w-full">
      <div
        className="overflow-hidden rounded-2xl border-2 border-zinc-900 
        bg-zinc-950"
      >
        <header
          className="flex flex-col gap-4 border-b-2 border-zinc-900
          bg-zinc-900/90 p-5 sm:flex-row sm:items-center sm:justify-between 
          sm:p-6"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-3 w-3 shrink-0 rounded-full bg-emerald-400 
              animate-pulse"
            />

            <span
              className="text-xs font-black uppercase tracking-widest 
              text-zinc-400"
            >
              Temporada exibida:
            </span>

            <span
              className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 
              py-1 font-mono text-sm font-black text-white"
            >
              {selectedSeason}
            </span>
          </div>

          <div className="relative flex items-center">
            <CalendarBlankIcon
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 h-4 w-4 
              text-zinc-400"
            />

            <label htmlFor="global-ranking-season" className="sr-only">
              Selecionar temporada
            </label>

            <select
              id="global-ranking-season"
              value={selectedSeason}
              onChange={(event) =>
                setSelectedSeason(Number(event.target.value))
              }
              className="w-full appearance-none rounded-xl border-2 
              border-zinc-800 bg-zinc-950 py-2 pl-10 pr-10 text-xs 
              font-bold uppercase tracking-wider text-zinc-200 transition-colors
              hover:border-zinc-700 focus:outline-none focus:ring-2 
              focus:ring-white sm:w-auto"
            >
              {availableSeasons.map((season) => (
                <option key={season} value={season}>
                  Temporada {season}
                </option>
              ))}
            </select>

            <CaretDownIcon
              aria-hidden="true"
              className="pointer-events-none absolute right-3 h-4 w-4 
              text-zinc-400"
            />
          </div>
        </header>

        <div className="max-w-full overflow-x-auto">
          <table
            className="w-full min-w-[700px] text-left text-sm"
            aria-label={`Ranking do campeonato - temporada ${selectedSeason}`}
          >
            <thead
              className="border-b-2 border-zinc-900 bg-zinc-800 text-xs 
              uppercase tracking-wider text-white"
            >
              <tr>
                <th scope="col" className="px-6 py-4 text-center">
                  Posição
                </th>

                <th scope="col" className="px-6 py-4">
                  Atleta
                </th>

                <th scope="col" className="px-6 py-4 text-center">
                  Pontos
                </th>

                <th scope="col" className="px-6 py-4 text-center">
                  V / D
                </th>

                <th scope="col" className="px-6 py-4 text-center">
                  Pódios ({selectedSeason})
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-400 bg-zinc-100">
              {displayedRanking.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center font-medium text-zinc-500"
                  >
                    Nenhum dado encontrado para a temporada {selectedSeason}.
                  </td>
                </tr>
              ) : (
                displayedRanking.map(({ athlete, ranking }) => (
                  <tr
                    key={athlete.id}
                    className="transition-colors hover:bg-zinc-200"
                  >
                    <td className="px-6 py-4 text-center font-bold">
                      {ranking.position === 1 && (
                        <span
                          className="inline-flex items-center gap-1 rounded-md
                          border border-zinc-700 bg-zinc-900 px-2 py-1 text-sm 
                          font-bold text-amber-400"
                        >
                          🥇 1º
                        </span>
                      )}

                      {ranking.position === 2 && (
                        <span
                          className="inline-flex items-center gap-1 rounded-md
                          border border-zinc-700 bg-zinc-900 px-2 py-1 
                          text-sm font-bold text-zinc-300"
                        >
                          🥈 2º
                        </span>
                      )}

                      {ranking.position === 3 && (
                        <span
                          className="inline-flex items-center gap-1 rounded-md 
                          border border-zinc-700 bg-zinc-900 px-2 py-1 text-sm 
                          font-bold text-amber-600"
                        >
                          🥉 3º
                        </span>
                      )}

                      {ranking.position > 3 && (
                        <span className="font-mono text-base text-zinc-500">
                          {ranking.position}º
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={athlete.image}
                          alt={`Foto de ${athlete.name}`}
                          className="size-10 shrink-0 rounded-full border-2 
                          border-zinc-800 object-cover"
                        />

                        <span className="text-sm font-bold text-black">
                          {athlete.name}
                        </span>
                      </div>
                    </td>

                    <td
                      className="px-6 py-4 text-center text-sm font-mono 
                      font-black text-black"
                    >
                      {ranking.points.toLocaleString()}{" "}
                      <span className="text-xs font-bold text-zinc-500">
                        PTS
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <div
                        className="inline-flex items-center gap-1 rounded-md
                        border border-zinc-700 bg-zinc-900 px-2.5 py-1 font-mono 
                        text-xs font-bold"
                      >
                        <span className="text-green-400">{ranking.wins}W</span>

                        <span className="text-zinc-500">/</span>

                        <span className="text-rose-400">{ranking.losses}L</span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <div
                        className="flex items-center justify-center gap-1.5 
                        font-mono text-xs font-bold"
                      >
                        <span
                          className="rounded-md border border-zinc-700 
                          bg-zinc-900 px-2 py-1 text-amber-400"
                        >
                          🥇 {ranking.podiums.gold}
                        </span>

                        <span
                          className="rounded-md border border-zinc-700
                          bg-zinc-900 px-2 py-1 text-zinc-300"
                        >
                          🥈 {ranking.podiums.silver}
                        </span>

                        <span
                          className="rounded-md border border-zinc-700 
                          bg-zinc-900 px-2 py-1 text-amber-600"
                        >
                          🥉 {ranking.podiums.bronze}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
