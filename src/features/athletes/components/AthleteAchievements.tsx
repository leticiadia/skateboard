import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";

import type { AthleteProfileData } from "../types/athlete-profile";

import { Container } from "../../../components/layout/Container";

type AthleteAchievementsProps = {
  achievements: AthleteProfileData["achievements"];
  accentColor: string;
};

const SCROLL_TRANSITION = {
  duration: 0.6,
  ease: "easeOut" as const,
};

const ITEM_TRANSITION = {
  duration: 0.5,
  ease: "easeOut" as const,
};

const VIEWPORT_OPTIONS = {
  once: true,
  amount: 0.3,
};

export function AthleteAchievements({
  achievements,
  accentColor,
}: AthleteAchievementsProps) {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const sortedTitles = [...achievements.titles].sort(
    (titleA, titleB) => titleB.year - titleA.year,
  );

  const sortedAwards = [...achievements.awards].sort(
    (awardA, awardB) => awardB.year - awardA.year,
  );

  function getScrollTransition(delay = 0) {
    return shouldReduceMotion
      ? { duration: 0 }
      : { ...SCROLL_TRANSITION, delay };
  }

  function getItemTransition(index: number) {
    return shouldReduceMotion
      ? { duration: 0 }
      : { ...ITEM_TRANSITION, delay: index * 0.1 };
  }

  const initialAnimation = shouldReduceMotion ? false : { opacity: 0, y: 25 };

  const visibleAnimation = { opacity: 1, y: 0 };

  return (
    <section className="my-10 w-full">
      <Container>
        <motion.div
          className="max-w-2xl"
          initial={initialAnimation}
          whileInView={visibleAnimation}
          viewport={VIEWPORT_OPTIONS}
          transition={getScrollTransition()}
        >
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: accentColor }}
          >
            {t("athlete-achievements.label")}
          </span>

          <h2
            className="mt-4 text-3xl font-bold leading-tight sm:text-4xl 
            lg:text-5xl"
          >
            {t("athlete-achievements.headline")}
          </h2>
        </motion.div>

        <section className="mt-8" aria-labelledby="athlete-titles-heading">
          <motion.h3
            id="athlete-titles-heading"
            className="text-sm font-bold uppercase tracking-widest"
            initial={initialAnimation}
            whileInView={visibleAnimation}
            viewport={VIEWPORT_OPTIONS}
            transition={getScrollTransition()}
          >
            {t("athlete-achievements.titles")}
          </motion.h3>

          <div className="mt-8 border-t border-gray-200">
            {sortedTitles.length > 0 ? (
              sortedTitles.map((achievement, index) => (
                <motion.div
                  key={`${achievement.championship.slug}-${achievement.year}`}
                  className="flex flex-col gap-4 border-b border-gray-200 py-8 
                  sm:flex-row sm:items-center sm:justify-between"
                  initial={initialAnimation}
                  whileInView={visibleAnimation}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={getItemTransition(index)}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="text-sm font-bold"
                      style={{ color: accentColor }}
                    >
                      {achievement.year}
                    </span>

                    <h4 className="text-xl font-bold sm:text-2xl">
                      {t(achievement.championship.title)}
                    </h4>
                  </div>

                  <span
                    className="w-24 rounded-full px-2 py-1 text-center text-xs 
                    font-bold uppercase tracking-widest text-black"
                    style={{ backgroundColor: accentColor }}
                  >
                    {t("athlete-achievements.champion")}
                  </span>
                </motion.div>
              ))
            ) : (
              <div className="border-b border-gray-200 py-10">
                <p className="max-w-xl text-lg leading-7 text-gray-500">
                  {t("athlete-achievements.noTitles")}
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="mt-8" aria-labelledby="athlete-awards-heading">
          <motion.h3
            id="athlete-awards-heading"
            className="text-sm font-bold uppercase tracking-widest"
            initial={initialAnimation}
            whileInView={visibleAnimation}
            viewport={VIEWPORT_OPTIONS}
            transition={getScrollTransition()}
          >
            {t("athlete-achievements.awards")}
          </motion.h3>

          <div className="mt-8 border-t border-gray-200">
            {sortedAwards.length > 0 ? (
              sortedAwards.map((award, index) => (
                <motion.div
                  key={`${award.name}-${award.year}`}
                  className="flex flex-col items-start gap-4 border-b 
                  border-gray-200 py-8 sm:flex-row sm:items-center"
                  initial={initialAnimation}
                  whileInView={visibleAnimation}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={getItemTransition(index)}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: accentColor }}
                  >
                    {award.year}
                  </span>

                  <h4 className="text-xl font-bold sm:text-2xl">
                    {t(award.name)}
                  </h4>
                </motion.div>
              ))
            ) : (
              <div className="border-b border-gray-200 py-10">
                <p className="max-w-xl text-lg leading-7 text-gray-500">
                  {t("athlete-achievements.noAwards")}
                </p>
              </div>
            )}
          </div>
        </section>
      </Container>
    </section>
  );
}
