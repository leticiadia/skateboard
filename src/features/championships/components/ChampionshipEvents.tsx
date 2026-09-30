import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRightIcon,
  CalendarDotsIcon,
  MapPinAreaIcon,
  TicketIcon,
} from "@phosphor-icons/react";

import type { Event } from "../../../mocks/events/types";

import { formatEventDate } from "../../../utils/formatEventDate";

interface ChampionshipEventsProps {
  events: Event[];
}

export function ChampionshipEvents({ events }: ChampionshipEventsProps) {
  const { t, i18n } = useTranslation();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const nextEvent = events
    .filter(
      (event) =>
        new Date(`${event.date}T00:00:00`).getTime() >= today.getTime(),
    )
    .sort(
      (a, b) =>
        new Date(`${a.date}T00:00:00`).getTime() -
        new Date(`${b.date}T00:00:00`).getTime(),
    )[0];

  return (
    <section className="mt-10">
      <header className="flex flex-col gap-2 sm:gap-3">
        <h2
          className="flex items-center gap-2 text-2xl font-black text-black 
          sm:text-3xl lg:text-4xl"
        >
          <CalendarDotsIcon
            className="shrink-0 text-yellow-300 size-7 sm:size-9 lg:size-10"
            weight="fill"
          />
          <span>{t("championship-events.sections.upcoming-events.title")}</span>
        </h2>

        <p className="text-sm text-zinc-600 sm:text-base">
          {t("championship-events.sections.upcoming-events.subtitle")}
        </p>
      </header>

      <div className="mt-5">
        {nextEvent ? (
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
                {t("championship-events.sections.upcoming-events.next-stage")}
              </span>

              <p
                className="mt-2 text-3xl font-black leading-tight sm:text-4xl 
                md:text-3xl"
              >
                {formatEventDate(t(nextEvent.date), i18n.language)}
              </p>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
              <div className="space-y-3">
                <span
                  className="text-xs font-extrabold uppercase tracking-widest 
                text-yellow-300"
                >
                  {t("championship-events.sections.upcoming-events.season", {
                    year: new Date(`${nextEvent.date}T00:00:00`).getFullYear(),
                  })}
                </span>

                <h3 className="text-2xl font-black text-white sm:text-3xl">
                  {t(nextEvent.title)}
                </h3>

                <div
                  className="flex items-center gap-2 text-sm font-medium 
                text-zinc-500 sm:text-base"
                >
                  <MapPinAreaIcon
                    className="size-5 shrink-0 text-yellow-300/60"
                    weight="bold"
                  />
                  <span>{t(nextEvent.location)}</span>
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
                  to={`/campeonatos/${nextEvent.championshipSlug}/eventos/${nextEvent.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-black 
                  text-yellow-300 transition-all 
                  group-hover:translate-x-1 hover:underline"
                >
                  <span>
                    {t(
                      "championship-events.sections.upcoming-events.view-event",
                    )}
                  </span>
                  <ArrowRightIcon className="size-4" weight="bold" />
                </Link>
              </div>
            </div>
          </article>
        ) : (
          <div
            className="rounded-2xl border border-dashed border-gray-300 
            p-8 text-center"
          >
            <p className="text-sm font-medium text-zinc-300">
              {t("championship-events.sections.upcoming-events.empty")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
