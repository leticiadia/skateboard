import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeftIcon } from "@phosphor-icons/react";

import { athletes } from "../../mocks/athletes/athletes";
import { championships } from "../../mocks/championships/championships";

import { Container } from "../../components/layout/container/Container";
import { DetailHero } from "../../components/layout/DetailHero/DetailHero";
import { GlobalRanking } from "./components/GlobalRanking";
import type { BackgroundColor } from "./components/ChampionshipSection";

const colorClasses = {
  zinc300: "#e4e4e7",
  emerald400: "#2ab7ca",
  yellow300: "#ffc857",
} satisfies Record<BackgroundColor, string>;

export function ChampionshipRanking() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const championship = championships.find(
    (championship) => championship.slug === slug,
  );

  if (!championship) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <p className="text-center text-xl font-medium">
          {t("championship-ranking.championshipNotFound")}
        </p>
      </main>
    );
  }

  const championshipTitle = t(championship.title);
  const accentColor = colorClasses[championship.backgroundColor];

  return (
    <main className="w-full pt-28 pb-16">
      <Container>
        <div className="flex flex-col gap-10">
          <div>
            <Link
              to={`/campeonatos/${championship.slug}`}
              className="group inline-flex items-center gap-2 text-sm font-bold 
              text-zinc-700 transition-colors hover:text-black"
            >
              <ArrowLeftIcon
                size={14}
                weight="bold"
                className="transition-transform duration-200 
                group-hover:-translate-x-1"
              />

              <span>{t("championship-ranking.backToChampionship")}</span>
            </Link>
          </div>

          <div>
            <DetailHero
              label={t("championship-ranking.ranking")}
              title={championshipTitle}
              description={t("championship-ranking.subtitle")}
              accentColor={accentColor}
            />

            <div className="border-b border-zinc-200"></div>
          </div>

          <section aria-labelledby="ranking-section-title">
            <GlobalRanking
              athletes={athletes}
              championshipSlug={championship.slug}
              title={t("championship-ranking.complete")}
              subtitle={t("championship-ranking.season")}
            />
          </section>
        </div>
      </Container>
    </main>
  );
}
