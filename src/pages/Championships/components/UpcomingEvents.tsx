import { CalendarDotsIcon, MapPinAreaIcon } from "@phosphor-icons/react";

import type { UpcomingEvent } from "../../../mocks/championships/types";

interface UpcomingEventsProps {
  events: UpcomingEvent[];
  title?: string;
  subtitle?: string;
}

const eventDateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

function formatEventDate(date: string) {
  return eventDateFormatter.format(new Date(`${date}T00:00:00`));
}

export function UpcomingEvents({
  events,
  title = "Próximos Eventos",
  subtitle = "Fique por dentro das datas e etapas confirmadas",
}: UpcomingEventsProps) {
  return (
    <section className="mt-10">
      <header className="flex flex-col gap-3 sm:gap-4">
        <h2
          className="flex items-center gap-2 text-2xl font-bold text-black 
          sm:text-3xl lg:text-4xl"
        >
          <CalendarDotsIcon
            size={32}
            className="shrink-0 sm:size-9 lg:size-10"
          />

          <span>{title}</span>
        </h2>

        <p className="text-sm text-zinc-600 sm:text-base">{subtitle}</p>
      </header>

      <div
        className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 
        lg:mt-8 lg:grid-cols-3"
      >
        {events.map((event) => (
          <article
            key={event.id}
            className="group flex flex-col justify-between rounded-xl border-2
            border-black-700 p-4 transition-colors hover:bg-black-700 sm:p-5"
          >
            <h3
              className="mb-3 text-base font-semibold text-black 
              transition-colors group-hover:text-white sm:text-lg"
            >
              {event.title}
            </h3>

            <div className="space-y-2 text-sm">
              <div
                className="flex items-center gap-2 font-medium text-black 
                transition-colors group-hover:text-white"
              >
                <CalendarDotsIcon
                  className="size-4 shrink-0 transition-colors 
                  group-hover:text-white"
                />

                <span>{formatEventDate(event.date)}</span>
              </div>

              <div
                className="flex items-center gap-2 text-black 
                transition-colors group-hover:text-white"
              >
                <MapPinAreaIcon
                  className="size-4 shrink-0 transition-colors 
                  group-hover:text-white"
                />

                <span>{event.location}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
