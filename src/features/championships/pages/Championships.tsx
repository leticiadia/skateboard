import { useTranslation } from "react-i18next";

import { championships } from "../data/championships";

import { PageHero } from "../../../components/ui/PageHero/PageHero";
import { ChampionshipSection } from "../components/ChampionshipSection";
import { useLocalizedPath } from "../../../app/router/hooks/useLocalizedPath";

export function Championships() {
  const { t } = useTranslation();
  const getLocalizedPath = useLocalizedPath();

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
            href={getLocalizedPath(`/campeonatos/${championship.slug}`)}
            backgroundColor={championship.backgroundColor}
            image={championship.imageSection}
          />
        ))}
      </section>
    </>
  );
}
