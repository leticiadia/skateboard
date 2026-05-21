import { motion } from "motion/react";
import type { Athlete } from "./types";

type AthletesProps = {
  athletes: Athlete[];
};

export function AthleteCarousel({ athletes }: AthletesProps) {
  return (
    <motion.div
      layout
      className="flex items-center justify-between gap-2 lg:gap-6 mt-8 lg:justify-start"
    >
      {athletes.map((athlete) => (
        <motion.img
          key={athlete.id}
          src={athlete.image}
          alt={athlete.name}
          loading="lazy"
          className="h-28 w-28 object-cover opacity-70 rounded-lg sm:w-full lg:h-40 lg:w-48"
          layout
          transition={{ duration: 0.4 }}
        />
      ))}
    </motion.div>
  );
}
