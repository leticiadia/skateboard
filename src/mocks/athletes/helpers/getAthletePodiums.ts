import type { Athlete } from "../type";
import type { AthletePodium } from "../profile.types";
import type { Championships } from "../../championships/types";

const getMedal = (placement: number): AthletePodium["medal"] => {
  if (placement === 1) {
    return "gold";
  }

  if (placement === 2) {
    return "silver";
  }

  return "bronze";
};

export function getAthletePodiums(
  athlete: Athlete,
  championships: Championships[],
): AthletePodium[] {
  return athlete.championships
    .filter(
      ({ placement }) =>
        placement !== undefined && placement >= 1 && placement <= 3,
    )
    .map(({ championshipSlug, year, placement }) => {
      const championship = championships.find(
        ({ slug }) => slug === championshipSlug,
      );

      if (!championship || placement === undefined) {
        return null;
      }

      return {
        year,
        championship,
        medal: getMedal(placement),
      };
    })
    .filter((podium): podium is AthletePodium => podium !== null)
    .sort((a, b) => b.year - a.year);
}
