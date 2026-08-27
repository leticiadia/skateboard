import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { Container } from "../../components/layout/container/Container";
import { PageHero } from "../../components/layout/PageHero/PageHero";

import { athletes } from "../../mocks/athletes/athletes";
import { championships } from "../../mocks/championships/championships";
import { upcomingEvents } from "../../mocks/championships/upcoming-events";

import { ChampionshipRegistration } from "./components/ChampionshipRegistration";
import { GlobalRanking } from "./components/GlobalRanking";
import { UpcomingEvents } from "./components/UpcomingEvents";

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

        <GlobalRanking
          athletes={athletes}
          championshipSlug={championship.slug}
        />

        {championshipEvents && (
          <UpcomingEvents events={championshipEvents.events} />
        )}

        <ChampionshipRegistration championshipTitle={t(championship.title)} />
      </Container>
    </>
  );
}
