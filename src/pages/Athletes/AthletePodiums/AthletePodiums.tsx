import { Link, useParams } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ArrowLeftIcon } from "@phosphor-icons/react";

import type { AthleteCategory } from "../../../mocks/athletes/type";
import { athletes } from "../../../mocks/athletes/athletes";
import { getAthletePodiums } from "../../../mocks/athletes/helpers/getAthletePodiums";

import { AthletePodiumsTable } from "./components/AthletePodiumsTable";
import { Container } from "../../../components/layout/container/Container";
import { DetailHero } from "../../../components/layout/DetailHero/DetailHero";

const athleteColors: Record<AthleteCategory, string> = {
  female: "#2ab7ca",
  male: "#ffc857",
  "new-talent": "#ef4444",
};

export function AthletePodiums() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const athlete = athletes.find((athlete) => athlete.slug === slug);

  if (!athlete) {
    return <div>{t("athlete-podiums.athleteNotFound")}</div>;
  }

  const color = athleteColors[athlete.category];

  const podiums = getAthletePodiums(athlete);

  return (
    <section className="w-full pt-28 pb-10 lg:pt-28">
      <Container>
        <motion.div
          className="w-full flex flex-col gap-8"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <Link
            to={`/atletas/${athlete.slug}`}
            className="group flex items-center gap-2 text-sm font-bold 
              text-zinc-700 transition-colors hover:text-black"
          >
            <ArrowLeftIcon
              size={14}
              className="transition-transform duration-200 
                group-hover:-translate-x-1"
            />

            <span>{t("athlete-podiums.backToProfile")}</span>
          </Link>

          <DetailHero
            label={t("athlete-podiums.label")}
            title={t("athlete-podiums.headline")}
            description={
              <Trans
                i18nKey="athlete-podiums.description"
                values={{ athleteName: athlete.name }}
                components={{ strong: <strong /> }}
              />
            }
            accentColor={color}
          />
        </motion.div>

        <AthletePodiumsTable podiums={podiums} accentColor={color} />
      </Container>
    </section>
  );
}
