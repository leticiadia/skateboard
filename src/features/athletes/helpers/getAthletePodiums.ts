import type { Athlete } from "../types/athlete";
import type { AthletePodium } from "../types/athlete-profile";

import { championships } from "../../championships/data/championships";

export function getAthletePodiums(athlete: Athlete): AthletePodium[] {
  return athlete.results
    .filter((result) => result.placement <= 3)
    .flatMap((result): AthletePodium[] => {
      const championship = championships.find(
        (championship) => championship.slug === result.championshipSlug,
      );

      if (!championship) {
        return [];
      }

      const medal =
        result.placement === 1
          ? "gold"
          : result.placement === 2
            ? "silver"
            : "bronze";

      return [
        {
          year: result.season,
          stageId: result.stageId,
          championship,
          medal,
        },
      ];
    });
}
