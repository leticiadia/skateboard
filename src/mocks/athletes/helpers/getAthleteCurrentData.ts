import type { Championships } from "../../championships/types";
import type { Athlete } from "../type";
import type {
  AthleteCurrentData,
  AthleteCurrentRanking,
} from "../profile.types";

import { getChampionshipRanking } from "./getChampionshipRanking";
import type { Event } from "../../events/types";

export function getAthleteCurrentData(
  athlete: Athlete,
  athletes: Athlete[],
  championships: Championships[],
  events: Event[],
): AthleteCurrentData {
  const currentSeason = new Date().getFullYear();

  const currentResults = athlete.results.filter(
    (result) => result.season === currentSeason,
  );

  const championshipSlugs = [
    ...new Set(currentResults.map((result) => result.championshipSlug)),
  ];

  const rankings = championshipSlugs
    .map((championshipSlug) => {
      const championship = championships.find(
        ({ slug }) => slug === championshipSlug,
      );

      if (!championship) {
        return null;
      }

      const ranking = getChampionshipRanking(
        athletes,
        championshipSlug,
        currentSeason,
      );

      const athleteRanking = ranking.find(
        ({ athlete: rankedAthlete }) => rankedAthlete.id === athlete.id,
      );

      if (!athleteRanking) {
        return null;
      }

      return {
        championship,
        position: athleteRanking.position,
        points: athleteRanking.points,
      };
    })
    .filter((ranking): ranking is AthleteCurrentRanking => ranking !== null);

  const nextEventData = athlete.nextEvent;

  if (!nextEventData) {
    return {
      season: currentSeason,
      rankings,
    };
  }

  const nextEventChampionship = championships.find(
    ({ slug }) => slug === nextEventData.championshipSlug,
  );

  const nextEvent = events.find(
    (event) =>
      event.championshipSlug === athlete.nextEvent?.championshipSlug &&
      event.id === athlete.nextEvent?.eventId,
  );

  return {
    season: currentSeason,
    rankings,
    nextEvent,
    nextEventChampionship,
  };
}
