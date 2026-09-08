import type {
  ChampionshipEvents,
  Championships,
} from "../../championships/types";
import type { Athlete } from "../type";
import type {
  AthleteCurrentData,
  AthleteCurrentRanking,
} from "../profile.types";

export function getAthleteCurrentData(
  athlete: Athlete,
  championships: Championships[],
  upcomingEvents: ChampionshipEvents[],
): AthleteCurrentData {
  const currentSeason = new Date().getFullYear();

  const rankings = athlete.rankings
    .filter((ranking) => ranking.season === currentSeason)
    .map((ranking) => {
      const championship = championships.find(
        ({ slug }) => slug === ranking.championshipSlug,
      );

      if (!championship) {
        return null;
      }

      return {
        ...ranking,
        championship,
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

  const championshipEvents = upcomingEvents.find(
    ({ championshipSlug }) =>
      championshipSlug === nextEventData.championshipSlug,
  );

  const nextEvent = championshipEvents?.events.find(
    ({ id }) => id === nextEventData.eventId,
  );

  return {
    season: currentSeason,
    rankings,
    nextEvent,
    nextEventChampionship,
  };
}
