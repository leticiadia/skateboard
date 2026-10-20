import type { Athlete } from "../types/athlete";
import type { Event } from "../../events/types/event";

import { events } from "../../events/data/events";

export function getAthleteNextEvent(athlete: Athlete): Event | undefined {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getEventTimestamp = (event: Event): number =>
    new Date(`${event.date}T00:00:00`).getTime();

  return events
    .filter((event) => {
      const isAthleteParticipant = event.participantAthleteSlugs.includes(
        athlete.slug,
      );

      const isTodayOrUpcoming = getEventTimestamp(event) >= today.getTime();

      return isAthleteParticipant && isTodayOrUpcoming;
    })
    .sort(
      (firstEvent, secondEvent) =>
        getEventTimestamp(firstEvent) - getEventTimestamp(secondEvent),
    )[0];
}
