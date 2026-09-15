import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import type { Athlete } from "../../../mocks/athletes/type";

import { Container } from "../../../components/layout/container/Container";

import { CurrentAthlete } from "./SectionAthletes/CurrentAthlete";
import { AthleteContent } from "./SectionAthletes/AthleteContent";
import { AthleteCarousel } from "./SectionAthletes/AthleteCarousel";

type SectionAthletesProps = {
  athletes: Athlete[];
};

export function SectionAthletes({ athletes }: SectionAthletesProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { t } = useTranslation();

  const displayedAthletes = athletes.slice(0, 4);

  const rotatedAthletes = [
    ...displayedAthletes.slice(currentIndex + 1),
    ...displayedAthletes.slice(0, currentIndex),
  ];

  if (!displayedAthletes.length) return null;

  const currentAthlete = displayedAthletes[currentIndex];

  function handleNextAthlete() {
    setCurrentIndex((prev) =>
      prev === displayedAthletes.length - 1 ? 0 : prev + 1,
    );
  }

  return (
    <section className="w-full mt-10">
      <Container>
        <div
          className="flex flex-col gap-8 lg:flex-row lg:items-center 
          lg:justify-between"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <CurrentAthlete athlete={currentAthlete} />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-4xl font-bold">{t("home.athletes.title")}</h3>

              <p className="text-base font-semibold">
                {t("home.athletes.description.subtitle")}
              </p>
            </div>

            <AthleteCarousel athletes={rotatedAthletes} />

            <AthleteContent onNext={handleNextAthlete} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
