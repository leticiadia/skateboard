import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import type { Athlete } from "../../../../mocks/athletes/type";
import type { AthleteProfileData } from "../../../../mocks/athletes/profile.types";

import { Container } from "../../../../components/layout/Container";

import { formatEventDate } from "../../../../utils/formatEventDate";
import { getAthleteNextEvent } from "../../../../mocks/athletes/helpers/getAthleteNextEvent";
import { championships } from "../../../../mocks/championships/championships";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";

type AthleteCurrentProps = {
  athlete: Athlete;
  current: AthleteProfileData["current"];
  accentColor: string;
};

export function AthleteCurrent({
  athlete,
  current,
  accentColor,
}: AthleteCurrentProps) {
  const { t, i18n } = useTranslation();

  const nextEvent = getAthleteNextEvent(athlete);

  const nextEventChampionship = championships.find(
    (championship) => championship.slug === nextEvent?.championshipSlug,
  );

  return (
    <section className="w-full my-10">
      <Container>
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: accentColor }}
          >
            {t("athlete-current.label")}
          </span>

          <h2
            className="mt-4 text-3xl font-bold leading-tight sm:text-4xl 
            lg:text-5xl"
          >
            {t("athlete-current.headline")}
          </h2>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-widest">
              {t("athlete-current.currentRanking")}
            </span>

            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: accentColor }}
            >
              · {t("athlete-current.season")} {current.season}
            </span>
          </div>

          {current.rankings.length > 0 ? (
            <div className="mt-8 border-t border-gray-200">
              {current.rankings.map((ranking) => (
                <div
                  key={ranking.championship.slug}
                  className="grid grid-cols-[1fr_auto] items-center gap-6 
                  border-b border-gray-200 py-6"
                >
                  <div>
                    <h3 className="text-lg font-bold sm:text-xl">
                      {t(ranking.championship.title)}
                    </h3>

                    <span className="mt-1 block text-sm text-gray-500">
                      {ranking.points} {t("athlete-current.points")}
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
          ) : (
            <div className="mt-8 border-y border-gray-200 py-10">
              <p className="max-w-xl text-lg leading-7 text-gray-500">
                {t("athlete-current.noResults")}
              </p>
            </div>
          )}
        </motion.div>

        {nextEvent && nextEventChampionship && (
          <motion.div
            className="mt-8 overflow-hidden rounded-2xl border border-gray-200 
            bg-white"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col lg:flex-row">
              <div
                className="flex shrink-0 flex-col justify-center p-6 sm:p-8 
                lg:w-48"
                style={{ backgroundColor: accentColor }}
              >
                <span className="text-xs font-black uppercase tracking-widest">
                  {t("athlete-current.nextEvent")}
                </span>

                <strong
                  className="mt-2 text-5xl font-black leading-none 
                  sm:text-6xl"
                >
                  {new Date(`${nextEvent.date}T00:00:00`).getDate()}
                </strong>

                <span className="mt-1 text-sm font-black uppercase tracking-widest">
                  {new Date(`${nextEvent.date}T00:00:00`).toLocaleDateString(
                    i18n.language,
                    {
                      month: "short",
                    },
                  )}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div>
                  <span
                    className="text-xs font-black uppercase tracking-widest"
                    style={{ color: accentColor }}
                  >
                    {t(nextEventChampionship.title)}
                  </span>

                  <h3
                    className="mt-2 text-2xl font-black leading-tight 
                  text-black sm:text-3xl"
                  >
                    {t(nextEvent.title)}
                  </h3>
                </div>

                <div
                  className="mt-6 flex flex-col gap-3 border-t 
                border-gray-200 pt-5 sm:flex-row sm:flex-wrap sm:items-center 
                  sm:gap-x-6 sm:gap-y-3"
                >
                  <span className="text-sm font-bold text-gray-700">
                    {formatEventDate(nextEvent.date, i18n.language)}
                  </span>

                  <span className="text-sm text-gray-500">
                    {nextEvent.time}
                  </span>

                  <span className="text-sm text-gray-500">
                    {t(nextEvent.location)}
                  </span>
                </div>

                <div
                  className="mt-6 flex justify-start border-t border-gray-200 
                  pt-5 sm:justify-end"
                >
                  <Link
                    to={`/campeonatos/${nextEvent.championshipSlug}/eventos/${nextEvent.slug}`}
                    className="group flex items-center gap-2 text-sm font-bold 
                    hover:underline"
                    style={{ color: accentColor }}
                  >
                    <span>{t("athlete-current.viewEvent")}</span>

                    <ArrowRightIcon
                      size={16}
                      className="transition-transform duration-200 
                      group-hover:translate-x-1"
                      weight="bold"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
