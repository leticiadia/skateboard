import { Link, useParams } from "react-router-dom";
import {
  ArrowLeftIcon,
  CalendarDotsIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@phosphor-icons/react";

import { events } from "../../mocks/events/events";
import { Container } from "../../components/layout/container/Container";
import { EventCard } from "../../components/layout/EventCard/EventCard";
import { championships } from "../../mocks/championships/championships";
import { useTranslation } from "react-i18next";

export function Events() {
  const { slug: championshipSlug } = useParams();
  const { t } = useTranslation();

  const championship = championships.find(
    (championship) => championship.slug === championshipSlug,
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getEventTimestamp = (date: string) =>
    new Date(`${date}T00:00:00`).getTime();

  const championshipEvents = events
    .filter((event) => event.championshipSlug === championshipSlug)
    .sort((a, b) => getEventTimestamp(a.date) - getEventTimestamp(b.date));

  const upcomingEvents = championshipEvents.filter(
    (event) => getEventTimestamp(event.date) >= today.getTime(),
  );

  const completedEvents = championshipEvents
    .filter((event) => getEventTimestamp(event.date) < today.getTime())
    .reverse();

  const nextEvent = upcomingEvents[0];
  const remainingEvents = upcomingEvents.slice(1);

  return (
    <main className="w-full pt-28 pb-16">
      <Container>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            {championship && (
              <Link
                to={`/campeonatos/${championship.slug}`}
                className="group flex w-fit items-center gap-2 text-sm font-bold 
                text-zinc-700"
              >
                <ArrowLeftIcon
                  size={14}
                  className="transition-transform duration-200 
                  group-hover:-translate-x-1"
                />

                <span>Voltar para o campeonato</span>
              </Link>
            )}

            <div>
              {championship && (
                <span
                  className="text-sm font-bold uppercase tracking-widest 
              text-yellow-300"
                >
                  {`Programação do campeonato | ${t(championship.title)}`}
                </span>
              )}

              <h1
                className="mt-4 text-4xl font-black text-black sm:text-5xl 
                lg:text-6xl"
              >
                Programação completa
              </h1>

              <p
                className="mt-4 max-w-2xl text-base leading-7 text-zinc-500
                lg:text-lg"
              >
                Acompanhe o calendário oficial do campeonato, as próximas etapas
                e os resultados anteriores.
              </p>
            </div>
          </div>

          {championshipEvents.length > 0 ? (
            <div className="flex flex-col gap-8">
              {nextEvent && (
                <section
                  className="overflow-hidden rounded-2xl border-2 
                  border-black bg-emerald-400 p-5 sm:p-6"
                >
                  <div className="mb-5 flex items-center gap-2">
                    <ClockIcon size={22} weight="bold" className="text-black" />

                    <span
                      className="text-sm font-black uppercase 
                      tracking-widest text-black"
                    >
                      Próxima etapa
                    </span>
                  </div>

                  <EventCard event={nextEvent} />
                </section>
              )}

              {remainingEvents.length > 0 && (
                <section
                  className="flex flex-col gap-6 border-t 
                  border-gray-200 pt-10"
                >
                  <h2
                    className="flex items-center gap-2 text-2xl font-bold 
                    text-black"
                  >
                    <CalendarDotsIcon
                      size={24}
                      className="text-[var(--color-yellow-300)]"
                      weight="bold"
                    />

                    <span>Etapas Seguintes</span>
                  </h2>

                  <div className="flex flex-col gap-4">
                    {remainingEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </section>
              )}

              {completedEvents.length > 0 && (
                <section
                  className="flex flex-col gap-6 border-t 
                  border-gray-200 pt-10"
                >
                  <div className="flex items-center justify-between">
                    <h2
                      className="flex items-center gap-2 text-2xl font-bold 
                      text-black"
                    >
                      <CheckCircleIcon
                        size={24}
                        className="text-green-600"
                        weight="bold"
                      />

                      <span>Etapas Concluídas</span>
                    </h2>

                    <span className="text-xs font-bold text-zinc-400">
                      {completedEvents.length}{" "}
                      {completedEvents.length === 1
                        ? "etapa finalizada"
                        : "etapas finalizadas"}
                    </span>
                  </div>

                  <div
                    className="flex flex-col gap-4 opacity-70 grayscale-0 
                    transition-opacity hover:opacity-100"
                  >
                    {completedEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </section>
              )}
            </div>
          ) : (
            <p className="py-10 text-zinc-400">
              Não há eventos cadastrados para este campeonato.
            </p>
          )}
        </div>
      </Container>
    </main>
  );
}
