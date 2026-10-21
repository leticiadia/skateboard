import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";

import type { AthleteProfileData } from "../types/athlete-profile";
import type { AthleteCategory } from "../types/athlete";

import { Container } from "../../../components/layout/Container";
import { ProfileImage } from "../../../components/ui/ProfileImage";

type AthleteHeroProps = {
  athlete: AthleteProfileData["athlete"];
};

const categoryColors: Record<AthleteCategory, string> = {
  female: "#2ab7ca",
  male: "#ffc857",
  "new-talent": "#ef4444",
};

const TEXT_TRANSITION = {
  duration: 0.6,
  ease: "easeOut" as const,
};

export function AthleteHero({ athlete }: AthleteHeroProps) {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const color = categoryColors[athlete.category];

  const getTransition = (delay = 0) =>
    shouldReduceMotion ? { duration: 0 } : { ...TEXT_TRANSITION, delay };

  return (
    <section aria-labelledby="athlete-name" className="w-full mt-28">
      <Container>
        <div
          className="flex flex-col items-center justify-between gap-8 
          lg:flex-row"
        >
          <div className="flex flex-col gap-6">
            <div>
              <motion.span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color }}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={getTransition()}
              >
                {t("athletes.athlete-title")} |{" "}
                {t(`athletes.category.${athlete.category}`)}
              </motion.span>

              <motion.h1
                id="athlete-name"
                className="mt-2 text-4xl font-bold lg:text-6xl"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={getTransition(0.1)}
              >
                {t(athlete.name)}
              </motion.h1>
            </div>

            <motion.p
              className="max-w-xl text-base leading-7 text-gray-600 lg:text-lg"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.2)}
            >
              {t(athlete.description)}
            </motion.p>
          </div>

          <ProfileImage
            image={athlete.image}
            altText={`Foto do atleta ${t(athlete.name)}`}
            accentColor={color}
          />
        </div>
      </Container>
    </section>
  );
}
