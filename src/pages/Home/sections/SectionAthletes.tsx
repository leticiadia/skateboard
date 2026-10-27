import { useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import type { Athlete } from "../../../features/athletes/types/athlete";

import { Container } from "../../../components/layout/Container";

import { AthleteCarousel } from "./SectionAthletes/AthleteCarousel";
import { AthleteContent } from "./SectionAthletes/AthleteContent";
import { CurrentAthlete } from "./SectionAthletes/CurrentAthlete";

type SectionAthletesProps = {
  athletes: Athlete[];
};

const viewportSettings = {
  once: true,
  amount: 0.3,
};

const fadeInFromLeftAnimation = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
};

const fadeInFromBottomAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

export function SectionAthletes({ athletes }: SectionAthletesProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { t } = useTranslation();

  const displayedAthletes = athletes.slice(0, 4);

  const carouselAthletes = [
    ...displayedAthletes.slice(currentIndex + 1),
    ...displayedAthletes.slice(0, currentIndex),
  ];

  if (!displayedAthletes.length) {
    return null;
  }

  const currentAthlete = displayedAthletes[currentIndex];

  function handleNextAthlete() {
    setCurrentIndex((previousIndex) =>
      previousIndex === displayedAthletes.length - 1 ? 0 : previousIndex + 1,
    );
  }

  return (
    <section className="mt-10 w-full">
      <Container>
        <div
          className="flex flex-col gap-8 lg:flex-row lg:items-center 
          lg:justify-between"
        >
          <motion.div
            initial={fadeInFromLeftAnimation.initial}
            whileInView={fadeInFromLeftAnimation.whileInView}
            viewport={viewportSettings}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <CurrentAthlete athlete={currentAthlete} />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={fadeInFromBottomAnimation.initial}
            whileInView={fadeInFromBottomAnimation.whileInView}
            viewport={viewportSettings}
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

            <AthleteCarousel athletes={carouselAthletes} />

            <AthleteContent onNext={handleNextAthlete} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
