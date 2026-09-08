import { motion } from "motion/react";

import type { AthleteProfileData } from "../../../../mocks/athletes/profile.types";
import { useTranslation } from "react-i18next";
import { Container } from "../../../../components/layout/container/Container";

type AthleteCurrentProps = {
  current: AthleteProfileData["current"];
  accentColor: string;
};

export function AthleteCurrent({ current, accentColor }: AthleteCurrentProps) {
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
            Momento atual
          </span>

          <h2
            className="mt-4 text-3xl font-bold leading-tight sm:text-4xl 
            lg:text-5xl"
          >
            Onde ela está agora?
          </h2>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <span className="text-sm font-bold uppercase tracking-widest">
            Ranking atual
          </span>

          <div className="mt-8 border-t border-gray-200">
            {current.rankings.map((ranking) => (
              <div
                key={`${ranking.championship.slug}-${ranking.season}`}
                className="grid grid-cols-[1fr_auto] items-center gap-6 
                border-b border-gray-200 py-6"
              >
                <div>
                  <h3 className="text-lg font-bold sm:text-xl">
                    {t(ranking.championship.title)}
                  </h3>

                  <span className="mt-1 block text-sm text-gray-500">
                    {ranking.points} pontos
                  </span>
                </div>

                <strong
                  className="text-4xl font-black leading-none sm:text-5xl"
                  style={{ color: accentColor }}
                >
                  #{ranking.position}
                </strong>
              </div>
            ))}
          </div>
        </motion.div>

        {current.nextEvent && current.nextEventChampionship && (
          <motion.div
            className="mt-8 overflow-hidden rounded-sm border-2"
            style={{ borderColor: accentColor }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div className="p-6 sm:p-8 lg:p-12">
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: accentColor }}
              >
                Próximo desafio
              </span>

              <div
                className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end 
                lg:justify-between"
              >
                <div>
                  <h3 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                    {t(current.nextEventChampionship.title)}
                  </h3>

                  <p className="mt-3 text-lg text-gray-600">
                    {t(current.nextEvent.title)}
                  </p>
                </div>

                <div className="flex flex-col gap-2 lg:text-right">
                  <span className="text-sm font-bold uppercase tracking-widest">
                    {current.nextEvent.formattedDate}
                  </span>

                  <span className="text-sm text-gray-500">
                    {current.nextEvent.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
