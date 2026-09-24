import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeftIcon } from "@phosphor-icons/react";

import { events } from "../../mocks/events/events";
import { athletes } from "../../mocks/athletes/athletes";
import { championships } from "../../mocks/championships/championships";

import { Container } from "../../components/layout/container/Container";

import { formatEventDate } from "../../utils/formatEventDate";

export function EventProfile() {
  const { slug, eventSlug } = useParams();
  const { t, i18n } = useTranslation();

  const event = events.find(
    (event) => event.slug === eventSlug && event.championshipSlug === slug,
  );

  if (!event) {
    return <div>Evento não encontrado.</div>;
  }

  const championship = championships.find(
    (championship) => championship.slug === event.championshipSlug,
  );

  const participants = athletes.filter((athlete) =>
    event.participantAthleteSlugs.includes(athlete.slug),
  );

  return (
    <main className="w-full pt-28 pb-10">
      <Container>
        <div className="flex flex-col gap-10">
          <div>
            <Link
              to={`/campeonatos/${event.championshipSlug}/eventos`}
              className="group flex items-center gap-2 text-sm font-bold 
              text-zinc-700"
            >
              <ArrowLeftIcon
                size={14}
                className="transition-transform duration-200 
                group-hover:-translate-x-1"
              />

              <span>Voltar para a programação</span>
            </Link>
          </div>

          <header className="max-w-3xl">
            {championship && (
              <span
                className="text-sm font-bold uppercase tracking-widest 
              text-yellow-500"
              >
                {t(championship.title)}
              </span>
            )}

            <h1
              className="mt-4 text-4xl font-bold leading-tight sm:text-5xl 
              lg:text-6xl"
            >
              {event.title}
            </h1>

            <p
              className="mt-6 max-w-2xl text-base leading-7 text-gray-600
              lg:text-lg"
            >
              {event.description}
            </p>
          </header>

          <section
            className="grid gap-4 border-y border-gray-200 py-8 
            sm:grid-cols-3"
          >
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest 
              text-gray-400"
              >
                Data
              </span>

              <p className="mt-2 text-lg font-bold">
                {formatEventDate(event.date, i18n.language)}
              </p>
            </div>

            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest 
              text-gray-400"
              >
                Horário
              </span>

              <p className="mt-2 text-lg font-bold">{event.time}</p>
            </div>

            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest 
              text-gray-400"
              >
                Local
              </span>

              <p className="mt-2 text-lg font-bold">{event.location}</p>
            </div>
          </section>

          <section>
            <header>
              <span
                className="text-sm font-bold uppercase tracking-widest 
              text-yellow-500"
              >
                Participantes
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Atletas inscritos
              </h2>
            </header>

            {participants.length > 0 ? (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {participants.map((athlete) => (
                  <Link
                    key={athlete.id}
                    to={`/atletas/${athlete.slug}`}
                    className="group flex items-center gap-4 rounded-xl border-2 
                    border-zinc-200 p-4 transition-colors 
                    hover:border-yellow-300"
                  >
                    <img
                      src={athlete.image}
                      alt={`Foto de ${athlete.name}`}
                      className="size-16 shrink-0 rounded-full object-cover"
                    />

                    <div>
                      <h3
                        className="font-bold transition-colors 
                      group-hover:text-yellow-600"
                      >
                        {athlete.name}
                      </h3>

                      <span
                        className="mt-1 block text-xs font-bold uppercase 
                        tracking-widest text-gray-400"
                      >
                        Ver perfil
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p
                className="mt-8 border-y border-gray-200 py-10 
              text-gray-500"
              >
                Nenhum participante registrado para este evento.
              </p>
            )}
          </section>
        </div>
      </Container>
    </main>
  );
}
