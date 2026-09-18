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

  const sortedTitles = [...achievements.titles].sort((a, b) => b.year - a.year);
  const sortedAwards = [...achievements.awards].sort((a, b) => b.year - a.year);

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
            {t("athlete-achievements.label")}
          </span>

          <h2
            className="mt-4 text-3xl font-bold leading-tight sm:text-4xl 
            lg:text-5xl"
          >
            {t("athlete-achievements.headline")}
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
              {t("athlete-achievements.titles")}
            </span>
          </motion.div>

          <div className="mt-8 border-t border-gray-200">
            {sortedTitles.length > 0 ? (
              sortedTitles.map((achievement, index) => (
                <motion.div
                  key={`${achievement.championship.slug}-${achievement.year}`}
                  className="flex flex-col gap-4 border-b border-gray-200 
                  py-8 sm:flex-row sm:items-center sm:justify-between"
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
                    className="text-xs font-bold text-black text-center uppercase 
                    tracking-widest py-1 px-2 w-24 rounded-full"
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
        </div>

        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-sm font-bold uppercase tracking-widest">
              {t("athlete-achievements.awards")}
            </span>
          </motion.div>

          <div className="mt-8 border-t border-gray-200">
            {sortedAwards.length > 0 ? (
              sortedAwards.map((award, index) => (
                <motion.div
                  key={`${award.name}-${award.year}`}
                  className="flex flex-col items-start  gap-4 border-b 
                  border-gray-200 py-8 sm:flex-row sm:items-center"
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
              ))
            ) : (
              <div className="border-b border-gray-200 py-10">
                <p className="max-w-xl text-lg leading-7 text-gray-500">
                  {t("athlete-achievements.noAwards")}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
