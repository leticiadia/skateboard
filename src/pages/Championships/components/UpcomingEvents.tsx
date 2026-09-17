import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { CalendarDotsIcon, MapPinAreaIcon } from "@phosphor-icons/react";

import type { UpcomingEvent } from "../../../mocks/championships/types";

import { formatEventDate } from "../../../utils/formatEventDate";

interface UpcomingEventsProps {
  events: UpcomingEvent[];
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  const { t } = useTranslation();

  return (
    <section className="mt-10">
      <header className="flex flex-col gap-3 sm:gap-4">
        <h2
          className="flex items-center gap-2 text-2xl font-bold text-black 
          sm:text-3xl lg:text-4xl"
        >
          <CalendarDotsIcon
            color="#ffc857"
            className="shrink-0 sm:size-9 lg:size-10"
          />

          <span>
            {t("championship-profile.sections.upcoming-events.title")}
          </span>
        </h2>

        <p className="text-sm text-zinc-600 sm:text-base">
          {t("championship-profile.sections.upcoming-events.subtitle")}
        </p>
      </header>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <article
            key={event.id}
            className="group flex flex-col justify-between rounded-xl border-2
            border-yellow-300 p-4 transition-colors hover:bg-yellow-300 sm:p-5"
          >
            <h3
              className="mb-3 text-base font-semibold text-black 
              transition-colors group-hover:text-black sm:text-lg"
            >
              {t(event.title)}
            </h3>

            <div className="space-y-2 text-sm">
              <div
                className="flex items-center gap-2 font-medium text-black 
                transition-colors group-hover:text-black"
              >
                <CalendarDotsIcon className="size-4 shrink-0" />

                <span>{formatEventDate(t(event.date), i18n.language)}</span>
              </div>

              <div
                className="flex items-center gap-2 text-black 
                transition-colors group-hover:text-black"
              >
                <MapPinAreaIcon className="size-4 shrink-0" />

                <span>{t(event.location)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
