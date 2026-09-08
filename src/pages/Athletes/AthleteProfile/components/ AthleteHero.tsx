import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import type { AthleteProfileData } from "../../../../mocks/athletes/profile.types";
import type { AthleteCategory } from "../../../../mocks/athletes/type";

import { Container } from "../../../../components/layout/container/Container";
import { ProfileImage } from "../../../../components/layout/ProfileImage/ProfileImage";

type AthleteHeroProps = {
  athlete: AthleteProfileData["athlete"];
};

const categoryColors: Record<AthleteCategory, string> = {
  female: "#2ab7ca",
  male: "#ffc857",
  "new-talent": "#ef4444",
};

export function AthleteHero({ athlete }: AthleteHeroProps) {
  const { t } = useTranslation();

  const color = categoryColors[athlete.category];

  return (
    <section className="w-full pt-24 lg:pt-28">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="flex flex-col gap-6">
            <div>
              <motion.span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {t("athletes.athlete-title")} |{" "}
                {t(`athletes.category.${athlete.category}`)}
              </motion.span>

              <motion.h1
                className="mt-2 text-4xl font-bold lg:text-6xl"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: "easeOut",
                }}
              >
                {t(athlete.name)}
              </motion.h1>
            </div>

            <motion.p
              className="max-w-xl text-base leading-7 text-gray-600 lg:text-lg"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              {t(athlete.description)}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            <ProfileImage
              image={athlete.image}
              altText={`Foto do atleta ${t(athlete.name)}`}
              accentColor={color}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
