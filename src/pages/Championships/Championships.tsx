import { useTranslation } from "react-i18next";

import { championships } from "../../mocks/championships/championships";

import { ChampionshipSection } from "./components/ChampionshipSection";
import { PageHero } from "../../components/layout/PageHero/PageHero";

export function Championships() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        title={t("championships.title")}
        subtitle={t("championships.description")}
        backgroundColor="#101828"
      />

      <section className="w-full">
        {championships.map((championship) => (
          <ChampionshipSection
            key={championship.id}
            title={championship.title}
            subtitle={championship.subtitle}
            description={championship.description}
            href={`/campeonatos/${championship.slug}`}
            backgroundColor={championship.backgroundColor}
            image={championship.imageSection}
          />
        ))}
      </section>
    </>
  );
}
