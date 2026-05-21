import { useState } from "react";
import { CurrentAthlete } from "./SectionAthletes/CurrentAthlete";
import { AthleteContent } from "./SectionAthletes/AthleteContent";
import { AthleteCarousel } from "./SectionAthletes/AthleteCarousel";

import type { Athlete } from "./SectionAthletes/types";

type SectionAthletesProps = {
  athletes: Athlete[];
};

export function SectionAthletes({ athletes }: SectionAthletesProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const rotatedAthletes = [
    ...athletes.slice(currentIndex + 1),
    ...athletes.slice(0, currentIndex),
  ];

  if (!athletes.length) return null;

  const currentAthlete = athletes[currentIndex];

  function handleNextAthlete() {
    setCurrentIndex((prev) => (prev === athletes.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className="flex flex-col items-center justify-center gap-8 mt-10 px-4 lg:flex-row lg:items-start lg:justify-between lg:px-0">
      <CurrentAthlete athlete={currentAthlete} />

      <div className="flex flex-col">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-4xl font-bold">Atletas</h3>

          <p className="text-base font-semibold">
            Vem conhecer os atletas que têm feito história no skate.
          </p>
        </div>

        <AthleteCarousel athletes={rotatedAthletes} />
        <AthleteContent onNext={handleNextAthlete} />
      </div>
    </section>
  );
}
