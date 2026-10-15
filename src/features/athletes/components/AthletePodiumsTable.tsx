import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";

import type { AthletePodium } from "../types/athlete-profile";

type AthletePodiumsTableProps = {
  podiums: AthletePodium[];
  accentColor: string;
};

const MEDAL_CONFIG = {
  gold: {
    label: "athlete-podiums.medals.gold",
  },
  silver: {
    label: "athlete-podiums.medals.silver",
  },
  bronze: {
    label: "athlete-podiums.medals.bronze",
  },
} as const;

const HIDDEN_STATE = { opacity: 0, y: 15 };
const VISIBLE_STATE = { opacity: 1, y: 0 };

const TABLE_TRANSITION = {
  duration: 0.6,
  delay: 0.15,
  ease: "easeOut" as const,
};

const ROW_TRANSITION = {
  duration: 0.4,
  ease: "easeOut" as const,
};

function getPodiumStage(podium: AthletePodium) {
  const championshipSeason = podium.championship.seasons.find(
    (season) => season.year === podium.year,
  );

  return championshipSeason?.stages.find(
    (championshipStage) => championshipStage.id === podium.stageId,
  );
}

export function AthletePodiumsTable({
  podiums,
  accentColor,
}: AthletePodiumsTableProps) {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const initialAnimation = shouldReduceMotion ? false : HIDDEN_STATE;

  const tableTransition = shouldReduceMotion
    ? { duration: 0 }
    : TABLE_TRANSITION;

  if (podiums.length === 0) {
    return (
      <div className="mt-8 border-y border-gray-200 py-10">
        <p className="max-w-xl text-lg leading-7 text-gray-500">
          {t("athlete-podiums.table.noPodiums")}
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="mt-8 w-full overflow-x-auto"
      initial={initialAnimation}
      animate={VISIBLE_STATE}
      transition={tableTransition}
    >
      <table className="w-full min-w-[500px] border-collapse text-left">
        <thead>
          <tr className="border-b border-gray-200">
            <th
              scope="col"
              className="w-28 pb-4 text-xs font-bold uppercase tracking-widest 
              text-gray-400"
            >
              {t("athlete-podiums.table.year")}
            </th>

            <th
              scope="col"
              className="pb-4 text-xs font-bold uppercase tracking-widest 
              text-gray-400"
            >
              {t("athlete-podiums.table.championship")}
            </th>

            <th
              scope="col"
              className="w-40 pb-4 text-right text-xs font-bold uppercase 
              tracking-widest text-gray-400"
            >
              {t("athlete-podiums.table.result")}
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 border-b border-gray-200">
          {podiums.map((podiumEntry, index) => {
            const medal = MEDAL_CONFIG[podiumEntry.medal];
            const stage = getPodiumStage(podiumEntry);

            const rowTransition = shouldReduceMotion
              ? { duration: 0 }
              : {
                  ...ROW_TRANSITION,
                  delay: 0.2 + index * 0.08,
                };

            return (
              <motion.tr
                key={`${podiumEntry.championship.slug}-${podiumEntry.year}-${index}`}
                className="group relative transition-colors duration-200 
                hover:bg-gray-50/50"
                initial={initialAnimation}
                animate={VISIBLE_STATE}
                transition={rowTransition}
              >
                <td className="relative px-2 py-6 align-middle">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-1 opacity-0 
                    transition-opacity duration-300 group-hover:opacity-100 
                    motion-reduce:transition-none"
                    style={{ backgroundColor: accentColor }}
                  />

                  <span
                    className="text-3xl font-black leading-none sm:text-4xl"
                    style={{ color: accentColor }}
                  >
                    {podiumEntry.year}
                  </span>
                </td>

                <td className="px-2 py-6 align-middle">
                  <span className="block text-lg font-bold sm:text-xl">
                    {t(podiumEntry.championship.title)}
                  </span>

                  {stage && (
                    <span
                      className="mt-2 block text-xs font-bold uppercase 
                      tracking-widest text-gray-400"
                    >
                      {t("athlete-podiums.table.stage")} {stage.number} -{" "}
                      {stage.name}
                    </span>
                  )}
                </td>

                <td className="px-2 py-6 text-right align-middle">
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {t(medal.label)}
                  </span>
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </motion.div>
  );
}
