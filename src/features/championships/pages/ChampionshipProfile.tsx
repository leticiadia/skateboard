import { TrophyIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { athletes } from "../../athletes/data/athletes";
import { events } from "../../events/data/events";
import { championships } from "../data/championships";

import { Container } from "../../../components/layout/Container";
import { ButtonLink } from "../../../components/ui/ButtonLink";
import { PageHero } from "../../../components/ui/PageHero/PageHero";

import { ChampionshipEvents } from "../components/ChampionshipEvents";
import { ChampionshipRegistration } from "../components/ChampionshipRegistration";
import { GlobalRanking } from "../components/GlobalRanking";

export function ChampionshipProfile() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const championship = championships.find(
    (championshipData) => championshipData.slug === slug,
  );

  if (!championship) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-medium text-zinc-400">
          {t("championship-profile.not-found")}
        </p>
      </main>
    );
  }

  const championshipTitle = t(championship.title);

  const championshipEvents = events.filter(
    (championshipEvent) =>
      championshipEvent.championshipSlug === championship.slug,
  );

  const championshipProfileSections = [
    {
      title: "championship-profile.sections.about.title",
      id: "about-championship",
    },
  ];

  return (
    <>
      <PageHero
        title={championshipTitle}
        subtitle={t(championship.subtitle)}
        backgroundImage={championship.imageThumbnail}
        size="full"
      />

      <Container>
        <section
          aria-labelledby={championshipProfileSections[0].id}
          className="mt-8 flex flex-col gap-4"
        >
          <h2
            id={championshipProfileSections[0].id}
            className="text-4xl font-bold text-black"
          >
            {t(championshipProfileSections[0].title)}
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

        <section className="mt-8 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <header className="flex flex-col gap-3 sm:gap-4">
              <h2
                className="flex items-center gap-2 bg-y text-2xl font-bold 
              text-black sm:text-3xl lg:text-4xl"
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

        {championshipEvents.length > 0 && (
          <section className="flex flex-col gap-8">
            <ChampionshipEvents events={championshipEvents} />

            <ButtonLink
              title={t(
                "championship-profile.sections.upcoming-events.view-full",
              )}
              href={`/campeonatos/${championship.slug}/eventos`}
              variant="outline"
              size="large"
            />
          </section>
        )}

        <ChampionshipRegistration championshipTitle={championshipTitle} />
      </Container>
    </>
  );
}
