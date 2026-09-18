import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeftIcon } from "@phosphor-icons/react";

import type { AthleteCategory } from "../../../mocks/athletes/type";
import { athletes } from "../../../mocks/athletes/athletes";
import { getAthletePodiums } from "../../../mocks/athletes/helpers/getAthletePodiums";

import { AthletePodiumsTable } from "./components/AthletePodiumsTable";
import { Container } from "../../../components/layout/container/Container";
import { Trans, useTranslation } from "react-i18next";

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
          className="max-w-3xl"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color }}
          >
            {t("athlete-podiums.label")}
          </span>

          <h1
            className="mt-4 text-4xl font-bold leading-tight sm:text-5xl 
              lg:text-6xl"
          >
            {t("athlete-podiums.headline")}
          </h1>

          <p
            className="mt-6 max-w-2xl text-base leading-7 text-gray-600 
            lg:text-lg"
          >
            <Trans
              i18nKey="athlete-podiums.description"
              values={{
                athleteName: athlete.name,
              }}
              components={{
                strong: <strong />,
              }}
            />
          </p>
        </motion.div>

        <div className="mt-8">
          <Link
            to={`/atletas/${athlete.slug}`}
            className="group flex items-center gap-2 text-sm font-bold 
              text-zinc-700"
          >
            <ArrowLeftIcon
              size={14}
              className="transition-transform duration-200 
                group-hover:-translate-x-1"
            />

            <span>{t("athlete-podiums.backToProfile")}</span>
          </Link>
        </div>

        <AthletePodiumsTable podiums={podiums} accentColor={color} />
      </Container>
    </section>
  );
}
