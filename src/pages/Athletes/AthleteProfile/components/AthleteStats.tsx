import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";

import type { AthleteProfileData } from "../../../../mocks/athletes/profile.types";

import { StatItem } from "../../../../components/layout/StatItem/StatItem";
import { PodiumItem } from "../../../../components/layout/PodiumItem/PodiumItem";
import { Container } from "../../../../components/layout/container/Container";
import { useTranslation } from "react-i18next";

type AthleteStatsProps = {
  stats: AthleteProfileData["stats"];
  athleteSlug: string;
  accentColor: string;
};

export function AthleteStats({
  stats,
  accentColor,
  athleteSlug,
}: AthleteStatsProps) {
  const { t } = useTranslation();

  const totalPodiums = stats.podiums.total;

  return (
    <section className="w-full my-10">
      <Container>
        <div
          className="flex flex-col items-center justify-between gap-8 
          lg:flex-row"
        >
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
              {t("athlete-stats.career")}
            </span>

            <h2
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl 
              lg:text-5xl"
            >
              {t("athlete-stats.headline")}
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <strong
              className="text-[12rem] font-black leading-none tracking-tight 
              lg:text-[16rem]"
              style={{ color: accentColor }}
            >
              {stats.totalTitles}
            </strong>

            <span className="text-base font-bold uppercase tracking-widest">
              {t("athlete-stats.titles")}
            </span>
          </motion.div>
        </div>

        <div className="mt-8 border-y border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <StatItem
              value={stats.totalChampionships}
              label={t("athlete-stats.championships")}
              accentColor={accentColor}
              delay={0.1}
            />

            <StatItem
              value={stats.totalAwards}
              label={t("athlete-stats.awards")}
              accentColor={accentColor}
              delay={0.2}
              bordered
            />

            <StatItem
              value={stats.podiums.total}
              label={t("athlete-stats.podiums")}
              accentColor={accentColor}
              delay={0.3}
              bordered
            />
          </div>
        </div>

        <motion.div
          className="relative mt-8 overflow-hidden rounded-2xl border   
          p-6 "
          style={{ borderColor: accentColor }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="pointer-events-none absolute -top-24 left-0 
            -translate-x-1/2 w-60 h-60 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: accentColor }}
          />

          <div
            className="relative z-10 flex items-center justify-between 
            border-b border-white/10 pb-4 mb-8"
          >
            <span
              className="text-xs sm:text-sm font-black uppercase 
              tracking-widest text-zinc-400 flex items-center gap-2"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
              {t("athlete-stats.podiumsWon")}
            </span>
            <span
              className="text-xs font-semibold text-zinc-400 uppercase 
              tracking-wider"
            >
              {t("athlete-stats.total")}: {stats.podiums.total}
            </span>
          </div>

          {totalPodiums > 0 ? (
            <>
              <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-6 items-end">
                <PodiumItem
                  value={stats.podiums.silver}
                  label={t("athlete-stats.silver")}
                  type="silver"
                />
                <PodiumItem
                  value={stats.podiums.gold}
                  label={t("athlete-stats.gold")}
                  type="gold"
                  isMain
                />
                <PodiumItem
                  value={stats.podiums.bronze}
                  label={t("athlete-stats.bronze")}
                  type="bronze"
                />
              </div>

              <div className="mt-8">
                <Link
                  to={`/atletas/${athleteSlug}/podio`}
                  className="group flex items-center gap-2 text-sm font-bold 
              text-zinc-700"
                >
                  <span>{t("athlete-stats.podiumHistory")}</span>

                  <ArrowRightIcon
                    size={14}
                    className="transition-transform duration-200 
                group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </>
          ) : (
            <div className="mt-8 border-y border-gray-200 py-4">
              <p
                className="w-full text-base text-center font-semibold leading-7 
              text-gray-500"
              >
                {t("athlete-stats.noMedals")}
              </p>
            </div>
          )}

          <div
            className="pointer-events-none absolute -bottom-12 -right-50 
            -translate-x-1/2 w-60 h-60 rounded-full opacity-5 blur-2xl"
            style={{ backgroundColor: accentColor }}
          />
        </motion.div>
      </Container>
    </section>
  );
}
