import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { TrophyIcon } from "@phosphor-icons/react";

import { Container } from "../../components/layout/container/Container";
import { PageHero } from "../../components/layout/PageHero/PageHero";

import { athletes } from "../../mocks/athletes/athletes";
import { championships } from "../../mocks/championships/championships";
import { upcomingEvents } from "../../mocks/championships/upcoming-events";

import { ChampionshipRegistration } from "./components/ChampionshipRegistration";
import { GlobalRanking } from "./components/GlobalRanking";
import { UpcomingEvents } from "./components/UpcomingEvents";
import { ButtonLink } from "../../components/ui/ButtonLink/ButtonLink";

export function ChampionshipProfile() {
  const { slug } = useParams();

  const { t } = useTranslation();

  const championship = championships.find(
    (championship) => championship.slug === slug,
  );

  const championshipEvents = upcomingEvents.find(
    (eventGroup) => eventGroup.championshipSlug === slug,
  );

  if (!championship) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-medium text-zinc-400">
          Campeonato não encontrado.
        </p>
      </main>
    );
  }

  return (
    <>
      <PageHero
        title={t(championship.title)}
        subtitle={t(championship.subtitle)}
        backgroundImage={championship.imageThumbnail}
        size="full"
      />

      <Container>
        <section
          aria-labelledby="about-championship"
          className="mt-8 flex flex-col gap-4"
        >
          <h2 id="about-championship" className="text-4xl font-bold text-black">
            Sobre
          </h2>

          <p className="text-base leading-relaxed text-zinc-600">
            {t(championship.description)}
          </p>
        </section>

        <section className="flex flex-col gap-8 mt-8">
          <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-3 sm:gap-4">
              <h2
                className="flex items-center gap-2 text-2xl font-bold 
                text-black sm:text-3xl lg:text-4xl"
              >
                <TrophyIcon
                  size={32}
                  className="shrink-0 sm:size-9 lg:size-10"
                  color="#101828"
                />

                <span>Global Ranking</span>
              </h2>

              <p className="text-sm text-zinc-600 sm:text-base">
                Top 5 atletas e retrospecto da temporada atual
              </p>
            </header>

            <GlobalRanking
              athletes={athletes}
              championshipSlug={championship.slug}
              limit={5}
            />
          </div>

          <ButtonLink
            title="Ver ranking completo"
            href={`/campeonatos/${championship.slug}/ranking`}
            variant="outline"
            size="large"
          />
        </section>

        {championshipEvents && (
          <UpcomingEvents events={championshipEvents.events} />
        )}

        <ChampionshipRegistration championshipTitle={t(championship.title)} />
      </Container>
    </>
  );
}
