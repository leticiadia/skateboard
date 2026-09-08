import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import type { AthletePodium } from "../../../../mocks/athletes/profile.types";

type AthletePodiumsTableProps = {
  podiums: AthletePodium[];
  accentColor: string;
};

const medalData = {
  gold: {
    number: "01",
    label: "Ouro",
  },
  silver: {
    number: "02",
    label: "Prata",
  },
  bronze: {
    number: "03",
    label: "Bronze",
  },
} as const;

export function AthletePodiumsTable({
  podiums,
  accentColor,
}: AthletePodiumsTableProps) {
  const { t } = useTranslation();

  if (podiums.length === 0) {
    return (
      <div className="mt-8 border-y border-gray-200 py-10">
        <p className="max-w-xl text-lg leading-7 text-gray-500">
          Ainda não há pódios registrados para este atleta.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="mt-8 w-full overflow-x-auto"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.15,
        ease: "easeOut",
      }}
    >
      <table className="w-full min-w-[500px] border-collapse text-left">
        <thead>
          <tr className="border-b border-gray-200">
            <th
              scope="col"
              className="pb-4 text-xs font-bold uppercase tracking-widest 
              text-gray-400 w-28"
            >
              Ano
            </th>
            <th
              scope="col"
              className="pb-4 text-xs font-bold uppercase tracking-widest 
              text-gray-400"
            >
              Campeonato
            </th>
            <th
              scope="col"
              className="pb-4 text-right text-xs font-bold uppercase 
              tracking-widest text-gray-400 w-40"
            >
              Resultado
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 border-b border-gray-200">
          {podiums.map((podium, index) => {
            const medal = medalData[podium.medal];

            return (
              <motion.tr
                key={`${podium.championship.slug}-${podium.year}-${index}`}
                className="group relative transition-colors duration-200 
                hover:bg-gray-50/50"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + index * 0.08,
                  ease: "easeOut",
                }}
              >
                <td className="relative px-2 py-6 align-middle">
                  <span
                    className="absolute left-0 top-0 h-full w-1 opacity-0 
                    transition-opacity duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: accentColor }}
                  />
                  <span
                    className="text-3xl font-black leading-none sm:text-4xl"
                    style={{ color: accentColor }}
                  >
                    {podium.year}
                  </span>
                </td>

                <td className="px-2 py-6 align-middle">
                  <div>
                    <span className="text-lg font-bold sm:text-xl block">
                      {t(podium.championship.title)}
                    </span>
                    <span
                      className="mt-1 block text-xs font-bold uppercase 
                      tracking-widest text-gray-400"
                    >
                      Campeonato
                    </span>
                  </div>
                </td>

                <td className="px-2 py-6 text-right align-middle">
                  <div className="flex items-center justify-end gap-3">
                    <span
                      className="text-3xl font-black leading-none"
                      style={{ color: accentColor }}
                    >
                      {medal.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {medal.label}
                    </span>
                  </div>
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </motion.div>
  );
}
