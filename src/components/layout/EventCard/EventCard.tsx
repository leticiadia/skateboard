import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRightIcon,
  ClockIcon,
  MapPinAreaIcon,
  TicketIcon,
} from "@phosphor-icons/react";

import type { Event } from "../../../mocks/events/types";
import { championships } from "../../../mocks/championships/championships";

import { formatEventDate } from "../../../utils/formatEventDate";

export interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const { t, i18n } = useTranslation();

  const championship = championships.find(
    (championship) => championship.slug === event.championshipSlug,
  );

  const formattedDate = formatEventDate(t(event.date), i18n.language);

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl border 
      border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 
      to-zinc-950 shadow-lg transition-all duration-300 
      hover:-translate-y-1 hover:shadow-xl md:flex-row"
    >
      <div
        className="flex shrink-0 flex-col justify-center bg-yellow-300 
        p-6 text-black md:w-56 md:p-8"
      >
        <span
          className="flex items-center gap-1.5 text-xs font-black 
          uppercase tracking-widest opacity-80"
        >
          <TicketIcon size={16} weight="bold" />
          {t("event-card.official-stage")}
        </span>

        <p
          className="mt-2 text-3xl font-black leading-tight sm:text-4xl 
          md:text-3xl"
        >
          {formattedDate}
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
        <div className="space-y-3">
          {championship && (
            <span
              className="text-xs font-extrabold uppercase tracking-widest 
              text-yellow-300"
            >
              {t(championship.title)}
            </span>
          )}

          <h3 className="text-2xl font-black text-white sm:text-3xl">
            {t(event.title)}
          </h3>

          <div
            className="flex flex-col gap-2 text-sm font-medium text-zinc-500 
            sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2 sm:text-base"
          >
            <span className="flex items-center gap-2">
              <MapPinAreaIcon
                className="size-5 shrink-0 text-yellow-300/60"
                weight="bold"
              />
              {event.location}
            </span>

            {event.time && (
              <span className="flex items-center gap-2">
                <ClockIcon
                  className="size-5 shrink-0 text-yellow-300/60"
                  weight="bold"
                />
                {event.time}
              </span>
            )}
          </div>
        </div>

        <div
          className="mt-6 flex items-center justify-between border-t 
          border-zinc-300/20 pt-4"
        >
          <span className="text-xs font-bold text-zinc-500">
            {t(
              "championship-events.sections.upcoming-events.event-location-time",
            )}
          </span>

          <Link
            to={`/campeonatos/${event.championshipSlug}/eventos/${event.slug}`}
            className="inline-flex items-center gap-2 text-sm font-black 
            text-yellow-300 transition-all 
            group-hover:translate-x-1 hover:underline"
          >
            <span>
              {t("championship-events.sections.upcoming-events.view-event")}
            </span>
            <ArrowRightIcon className="size-4" weight="bold" />
          </Link>
        </div>
      </div>
    </article>
  );
}
