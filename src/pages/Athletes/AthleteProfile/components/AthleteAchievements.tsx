import { motion } from "motion/react";
import type { AthleteProfileData } from "../../../../mocks/athletes/profile.types";
import { useTranslation } from "react-i18next";
import { Container } from "../../../../components/layout/container/Container";

type AthleteAchievementsProps = {
  achievements: AthleteProfileData["achievements"];
  accentColor: string;
};

export function AthleteAchievements({
  achievements,
  accentColor,
}: AthleteAchievementsProps) {
  const { t } = useTranslation();

  return (
    <section className="w-full my-10">
      <Container>
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: accentColor }}
          >
            Conquistas
          </span>

          <h2
            className="mt-4 text-3xl font-bold leading-tight sm:text-4xl 
            lg:text-5xl"
          >
            Mais do que números, uma carreira marcada por conquistas.
          </h2>
        </motion.div>

        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <span className="text-sm font-bold uppercase tracking-widest">
              Títulos
            </span>
          </motion.div>

          <div className="mt-8 border-t border-gray-200">
            {achievements.titles.map((achievement, index) => (
              <motion.div
                key={`${achievement.championship.slug}-${achievement.year}`}
                className="flex flex-col gap-4 border-b border-gray-200 py-8 
                sm:flex-row sm:items-center sm:justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-center gap-5">
                  <span
                    className="text-sm font-bold"
                    style={{ color: accentColor }}
                  >
                    {achievement.year}
                  </span>

                  <h3 className="text-xl font-bold sm:text-2xl">
                    {t(achievement.championship.title)}
                  </h3>
                </div>

                <span
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{ color: accentColor }}
                >
                  Campeã
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <span className="text-sm font-bold uppercase tracking-widest">
              Reconhecimentos
            </span>
          </motion.div>

          <div className="mt-8 border-t border-gray-200">
            {achievements.awards.map((award, index) => (
              <motion.div
                key={`${award.name}-${award.year}`}
                className="grid grid-cols-[80px_1fr] gap-4 border-b 
                border-gray-200 py-8 sm:grid-cols-[100px_1fr]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: accentColor }}
                >
                  {award.year}
                </span>

                <div>
                  <h3 className="text-xl font-bold sm:text-2xl">
                    {t(award.name)}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
