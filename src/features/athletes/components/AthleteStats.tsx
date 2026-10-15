import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import type { AthleteProfileData } from "../types/athlete-profile";

import { Container } from "../../../components/layout/Container";
import { PodiumItem } from "./PodiumItem";
import { StatItem } from "./StatItem";

type AthleteStatsProps = {
  stats: AthleteProfileData["stats"];
  athleteSlug: string;
  accentColor: string;
};

const HIDDEN_HEADING = { opacity: 0, y: 25 } as const;
const HIDDEN_CONTENT = { opacity: 0, y: 30 } as const;
const VISIBLE_STATE = { opacity: 1, y: 0 } as const;

const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.3,
} as const;

const DEFAULT_TRANSITION = {
  duration: 0.6,
  ease: "easeOut",
} as const;

export function AthleteStats({
  stats,
  accentColor,
  athleteSlug,
}: AthleteStatsProps) {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const totalPodiums = stats.podiums.total;
  const initialHeadingAnimation = shouldReduceMotion ? false : HIDDEN_HEADING;
  const initialContentAnimation = shouldReduceMotion ? false : HIDDEN_CONTENT;

  return (
    <section className="my-10 w-full">
      <Container>
        <div
          className="flex flex-col items-center justify-between gap-8 
          lg:flex-row"
        >
          <motion.div
            className="max-w-2xl"
            initial={initialHeadingAnimation}
            whileInView={VISIBLE_STATE}
            viewport={VIEWPORT_CONFIG}
            transition={DEFAULT_TRANSITION}
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
            initial={initialContentAnimation}
            whileInView={VISIBLE_STATE}
            viewport={VIEWPORT_CONFIG}
            transition={{ ...DEFAULT_TRANSITION, duration: 0.7, delay: 0.1 }}
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
              value={totalPodiums}
              label={t("athlete-stats.podiums")}
              accentColor={accentColor}
              delay={0.3}
              bordered
            />
          </div>
        </div>

        <motion.div
          className="relative mt-8 overflow-hidden rounded-2xl border p-6"
          style={{ borderColor: accentColor }}
          initial={initialContentAnimation}
          whileInView={VISIBLE_STATE}
          viewport={VIEWPORT_CONFIG}
          transition={DEFAULT_TRANSITION}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-0 h-60 w-60 
            -translate-x-1/2 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: accentColor }}
          />

          <div
            className="relative z-10 mb-8 flex items-center justify-between 
            border-b border-white/10 pb-4"
          >
            <span
              className="flex items-center gap-2 text-xs font-black 
              uppercase tracking-widest text-zinc-400 sm:text-sm"
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
              {t("athlete-stats.podiumsWon")}
            </span>

            <span
              className="text-xs font-semibold uppercase tracking-wider 
              text-zinc-400"
            >
              {t("athlete-stats.total")}: {totalPodiums}
            </span>
          </div>

          {totalPodiums > 0 ? (
            <>
              <div
                className="relative z-10 grid grid-cols-3 items-end gap-3 
                sm:gap-6"
              >
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

              <div className="relative z-10 mt-8">
                <Link
                  to={`/atletas/${athleteSlug}/podio`}
                  className="group inline-flex items-center gap-2 text-sm 
                  font-bold text-zinc-700 focus-visible:outline-2 
                  focus-visible:outline-offset-4"
                  style={{ outlineColor: accentColor }}
                >
                  <span>{t("athlete-stats.podiumHistory")}</span>

                  <ArrowRightIcon
                    aria-hidden="true"
                    size={16}
                    className="transition-transform duration-200 
                    group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </Link>
              </div>
            </>
          ) : (
            <div className="mt-8 border-y border-gray-200 py-4">
              <p
                className="w-full text-center text-base font-semibold leading-7 
                text-gray-500"
              >
                {t("athlete-stats.noMedals")}
              </p>
            </div>
          )}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-50 -bottom-12 h-60 
            w-60 -translate-x-1/2 rounded-full opacity-5 blur-2xl"
            style={{ backgroundColor: accentColor }}
          />
        </motion.div>
      </Container>
    </section>
  );
}
