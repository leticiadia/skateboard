import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { TrophyIcon } from "@phosphor-icons/react";

import { Container } from "../../components/layout/container/Container";
import { PageHero } from "../../components/layout/PageHero/PageHero";

import { athletes } from "../../mocks/athletes/athletes";
import { championships } from "../../mocks/championships/championships";
import { events } from "../../mocks/events/events";

import { ChampionshipRegistration } from "./components/ChampionshipRegistration";
import { GlobalRanking } from "./components/GlobalRanking";
import { ChampionshipEvents } from "./components/ChampionshipEvents";
import { ButtonLink } from "../../components/ui/ButtonLink/ButtonLink";

export function ChampionshipProfile() {
  const { slug } = useParams();

  const { t } = useTranslation();

  const championship = championships.find(
    (championship) => championship.slug === slug,
  );

  const championshipEvents = events.filter(
    (event) => event.championshipSlug === slug,
  );

  const upcomingChampionshipEvents = championshipEvents.slice(0, 2);

  if (!championship) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-medium text-zinc-400">
          {t("championship-profile.not-found")}
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
            {t("championship-profile.sections.about.title")}
          </h2>

          {championship.about.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-zinc-600"
            >
              {t(paragraph)}
            </p>
          ))}
        </section>

        <section className="flex flex-col gap-8 mt-8">
          <div className="flex flex-col gap-4">
            <header className="flex flex-col gap-3 sm:gap-4">
              <h2
                className="flex items-center gap-2 text-2xl font-bold 
                text-black sm:text-3xl lg:text-4xl bg-y"
              >
                <TrophyIcon
                  color="#ffc857"
                  className="shrink-0 sm:size-9 lg:size-10"
                />

                <span>
                  {t("championship-profile.sections.global-ranking.title")}
                </span>
              </h2>

              <p className="text-sm text-zinc-600 sm:text-base">
                {t("championship-profile.sections.global-ranking.subtitle")}
              </p>
            </header>

            <GlobalRanking
              athletes={athletes}
              championshipSlug={championship.slug}
              limit={5}
            />
          </div>

          <ButtonLink
            title={t("championship-profile.sections.global-ranking.view-full")}
            href={`/campeonatos/${championship.slug}/ranking`}
            variant="outline"
            size="large"
          />
        </section>

        <section>
          {championshipEvents && (
            <div className="flex flex-col gap-8">
              <ChampionshipEvents events={upcomingChampionshipEvents} />

              <ButtonLink
                title={t(
                  "championship-profile.sections.upcoming-events.view-full",
                )}
                href={`/campeonatos/${championship.slug}/eventos`}
                variant="outline"
                size="large"
              />
            </div>
          )}
        </section>

        <ChampionshipRegistration championshipTitle={t(championship.title)} />
      </Container>
    </>
  );
}
