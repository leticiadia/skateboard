import type { Athlete } from "../types/type";
import type { Event } from "../../../mocks/events/types";

import { events } from "../../../mocks/events/events";

export function getAthleteNextEvent(athlete: Athlete): Event | undefined {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return events
    .filter(
      (event) =>
        event.participantAthleteSlugs.includes(athlete.slug) &&
        new Date(`${event.date}T00:00:00`).getTime() >= today.getTime(),
    )
    .sort(
      (a, b) =>
        new Date(`${a.date}T00:00:00`).getTime() -
        new Date(`${b.date}T00:00:00`).getTime(),
    )[0];
}
